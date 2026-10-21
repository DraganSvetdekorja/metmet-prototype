import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, ChevronRight, ChevronDown, Plus, Edit, Trash2, FolderPlus } from 'lucide-react';

const SortableCategory = ({ category, level = 0, onEdit, onDelete, onAddSubcategory, isExpanded, onToggle }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: category.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const hasChildren = category.children && category.children.length > 0;

  return (
    <div ref={setNodeRef} style={style} className="mb-1">
      <div
        className={`flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200 hover:border-brand-red transition-colors ${
          isDragging ? 'shadow-lg' : ''
        }`}
        style={{ marginLeft: `${level * 32}px` }}
      >
        {/* Drag Handle */}
        <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing">
          <GripVertical className="w-5 h-5 text-slate-400" />
        </div>

        {/* Expand/Collapse */}
        {hasChildren ? (
          <button
            onClick={() => onToggle(category.id)}
            className="p-1 hover:bg-slate-100 rounded"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        ) : (
          <div className="w-6" />
        )}

        {/* Category Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="font-medium">{category.name}</span>
            <span className="text-xs text-slate-500">
              ({category.productCount || 0} products)
            </span>
            {level > 0 && (
              <span className="text-xs bg-slate-100 px-2 py-1 rounded">
                Level {level}
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 mt-1">{category.slug}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onAddSubcategory(category)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            title="Add Subcategory"
          >
            <FolderPlus className="w-4 h-4 text-slate-600" />
          </button>
          <button
            onClick={() => onEdit(category)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            title="Edit"
          >
            <Edit className="w-4 h-4 text-slate-600" />
          </button>
          <button
            onClick={() => onDelete(category.id)}
            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="mt-1">
          {category.children.map((child) => (
            <SortableCategory
              key={child.id}
              category={child}
              level={level + 1}
              onEdit={onEdit}
              onDelete={onDelete}
              onAddSubcategory={onAddSubcategory}
              isExpanded={isExpanded}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    { id: '1', name: 'Personalizirana darila – Darila po meri', slug: 'personalizirana-darila', productCount: 45, children: [] },
    { id: '2', name: 'Vrečke in mošnjički', slug: 'vrecke-mosnicki', productCount: 32, children: [
      { id: '2-1', name: 'Bombažne vrečke', slug: 'bombazne-vrecke', productCount: 20, children: [] },
      { id: '2-2', name: 'Organske bombažne vrečke', slug: 'organske-vrecke', productCount: 12, children: [] },
    ]},
    { id: '3', name: 'Tekstil', slug: 'tekstil', productCount: 156, children: [
      { id: '3-1', name: 'T-shirt majice', slug: 't-shirt-majice', productCount: 78, children: [] },
      { id: '3-2', name: 'Polo majice', slug: 'polo-majice', productCount: 34, children: [] },
      { id: '3-3', name: 'Jope, puloverji', slug: 'jope-puloverji', productCount: 44, children: [] },
    ]},
    { id: '4', name: 'Svinčniki, kemični svinčniki in barvice', slug: 'pisala', productCount: 89, children: [
      { id: '4-1', name: 'Kemični svinčniki', slug: 'kemicni-svincniki', productCount: 56, children: [] },
      { id: '4-2', name: 'Grafitni svinčniki', slug: 'grafitni-svincniki', productCount: 33, children: [] },
    ]},
    { id: '5', name: 'USB in tehnologija', slug: 'tehnologija', productCount: 67, children: [] },
    { id: '6', name: 'Dom, hrana in pijača', slug: 'dom-hrana', productCount: 102, children: [] },
  ]);

  const [expandedIds, setExpandedIds] = useState(new Set(['2', '3', '4']));
  const [editingCategory, setEditingCategory] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [parentCategory, setParentCategory] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setCategories((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleToggle = (id) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
    }
  };

  const handleAddSubcategory = (category) => {
    setParentCategory(category);
    setShowAddModal(true);
  };

  const handleSaveEdit = (updatedCategory) => {
    setCategories((prev) =>
      prev.map((cat) => (cat.id === updatedCategory.id ? updatedCategory : cat))
    );
    setEditingCategory(null);
  };

  const categoryIds = categories.map((cat) => cat.id);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Category Management</h1>
          <p className="text-slate-600 mt-1">Drag and drop to reorder categories</p>
        </div>
        <button
          onClick={() => {
            setParentCategory(null);
            setShowAddModal(true);
          }}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Category
        </button>
      </div>

      <div className="bg-slate-50 rounded-xl p-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <GripVertical className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-blue-900">Drag & Drop Sorting</p>
              <p className="text-sm text-blue-700 mt-1">
                Use the grip handle to drag categories and reorder them. Changes are saved automatically.
              </p>
            </div>
          </div>
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={categoryIds}
            strategy={verticalListSortingStrategy}
          >
            {categories.map((category) => (
              <SortableCategory
                key={category.id}
                category={category}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAddSubcategory={handleAddSubcategory}
                isExpanded={expandedIds.has(category.id)}
                onToggle={handleToggle}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>

      {/* Edit Modal */}
      {editingCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Category</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category Name</label>
                <input
                  type="text"
                  defaultValue={editingCategory.name}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <input
                  type="text"
                  defaultValue={editingCategory.slug}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setEditingCategory(null)}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveEdit(editingCategory)}
                  className="flex-1 btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              {parentCategory ? `Add Subcategory to "${parentCategory.name}"` : 'Add New Category'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category Name</label>
                <input
                  type="text"
                  placeholder="Enter category name"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Slug</label>
                <input
                  type="text"
                  placeholder="category-slug"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setParentCategory(null);
                  }}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setParentCategory(null);
                  }}
                  className="flex-1 btn-primary"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
