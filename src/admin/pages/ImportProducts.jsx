import { useState, useRef } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle, Download } from 'lucide-react';
import Papa from 'papaparse';

const ImportProducts = () => {
  const [file, setFile] = useState(null);
  const [importing, setImporting] = useState(false);
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      setResult(null);

      // Preview first 5 rows
      Papa.parse(selectedFile, {
        header: true,
        preview: 5,
        complete: (results) => {
          setPreview(results.data);
        }
      });
    } else {
      alert('Please select a valid CSV file');
    }
  };

  const handleImport = () => {
    if (!file) return;

    setImporting(true);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        // Simulate API call
        setTimeout(() => {
          const products = results.data.filter(row => row.Name); // Filter out empty rows

          setResult({
            success: true,
            total: products.length,
            imported: products.length - 5, // Simulate some failures
            failed: 5,
            products: products
          });

          setImporting(false);
        }, 2000);
      },
      error: (error) => {
        setResult({
          success: false,
          error: error.message
        });
        setImporting(false);
      }
    });
  };

  const downloadTemplate = () => {
    const template = `Name,Price,Link,SKU,Category,Image_URL,Description,Stock_Status
Sample Product,"1,50€+ DDV",https://example.com/product,SKU001,"Category1,Category2",https://example.com/image.jpg,"Product description here",In Stock`;

    const blob = new Blob([template], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-import-template.csv';
    a.click();
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Import Products</h1>
        <p className="text-slate-600 mt-1">Upload CSV file to import products in bulk</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Upload CSV File</h2>

            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 rounded-lg p-12 text-center hover:border-brand-red transition-colors cursor-pointer"
            >
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              {file ? (
                <div>
                  <p className="text-slate-900 font-medium mb-1">{file.name}</p>
                  <p className="text-sm text-slate-500">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
              ) : (
                <div>
                  <p className="text-slate-900 font-medium mb-1">Click to upload CSV file</p>
                  <p className="text-sm text-slate-500">or drag and drop</p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileSelect}
              className="hidden"
            />

            {file && !importing && !result && (
              <button
                onClick={handleImport}
                className="w-full mt-4 btn-primary"
              >
                Import Products
              </button>
            )}

            {importing && (
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-2 text-brand-red">
                  <div className="animate-spin w-5 h-5 border-2 border-brand-red border-t-transparent rounded-full"></div>
                  <span>Importing products...</span>
                </div>
              </div>
            )}

            {result && (
              <div className={`mt-4 p-4 rounded-lg ${result.success ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-start gap-3">
                  {result.success ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    {result.success ? (
                      <>
                        <p className="font-medium text-green-900">Import Completed!</p>
                        <p className="text-sm text-green-700 mt-1">
                          {result.imported} products imported successfully, {result.failed} failed
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="font-medium text-red-900">Import Failed</p>
                        <p className="text-sm text-red-700 mt-1">{result.error}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Preview */}
          {preview && (
            <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
              <h2 className="text-lg font-semibold mb-4">Preview (First 5 Rows)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 px-3 font-medium">Name</th>
                      <th className="text-left py-2 px-3 font-medium">Price</th>
                      <th className="text-left py-2 px-3 font-medium">SKU</th>
                      <th className="text-left py-2 px-3 font-medium">Category</th>
                      <th className="text-left py-2 px-3 font-medium">Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preview.map((row, index) => (
                      <tr key={index} className="border-b border-slate-100">
                        <td className="py-2 px-3">{row.Name}</td>
                        <td className="py-2 px-3">{row.Price}</td>
                        <td className="py-2 px-3">{row.SKU}</td>
                        <td className="py-2 px-3 text-xs">{row.Category}</td>
                        <td className="py-2 px-3">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs ${
                            row.Stock_Status === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {row.Stock_Status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold mb-3">Instructions</h3>
            <ol className="space-y-2 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="font-medium text-slate-900">1.</span>
                <span>Download the template CSV file</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-slate-900">2.</span>
                <span>Fill in your product data</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-slate-900">3.</span>
                <span>Upload the completed CSV file</span>
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-slate-900">4.</span>
                <span>Review the preview and click Import</span>
              </li>
            </ol>

            <button
              onClick={downloadTemplate}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Template
            </button>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">CSV Format</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• Name: Product name</li>
                  <li>• Price: Format "X,XX€+ DDV"</li>
                  <li>• SKU: Unique identifier</li>
                  <li>• Category: Comma-separated</li>
                  <li>• Image_URL: Full image URL</li>
                  <li>• Stock_Status: In Stock/Out of Stock</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Important</h3>
                <p className="text-sm text-yellow-800">
                  Make sure all required fields are filled. Empty rows will be skipped during import.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportProducts;
