import React, { useState } from "react";
import { PRODUCT_DATA } from "../../constants/ProductData";
import { Modal } from "../../components/ui";
import ProductForm from "./components/ProductForm";
import BrandForm from "./components/BrandForm";
import CategoryForm from "./components/CategoryForm";

interface Product {
  id: number;
  name: string;
  brandId: number;
  categoryId: number;
  price: number;
  description?: string;
}

interface Brand {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

const ProductManagement: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>(PRODUCT_DATA.brands);
  const [categories, setCategories] = useState<Category[]>(PRODUCT_DATA.categories);
  const [products, setProducts] = useState<Product[]>(PRODUCT_DATA.products);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [formType, setFormType] = useState<"product" | "category" | "brand">("product");
  const [selectedItem, setSelectedItem] = useState<Product | Brand | Category | null>(null);
  
  // Product handlers
  const handleCreateProduct = (data: Omit<Product, 'id'>) => {
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      ...data
    };
    setProducts([...products, newProduct]);
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleUpdateProduct = (data: Omit<Product, 'id'>) => {
    if (selectedItem && 'price' in selectedItem) {
      setProducts(products.map(p => 
        p.id === selectedItem.id ? { ...p, ...data } : p
      ));
      setModalOpen(false);
      setSelectedItem(null);
    }
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // Category handlers
  const handleCreateCategory = (data: Omit<Category, 'id'>) => {
    const newCategory = {
      id: categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1,
      ...data
    };
    setCategories([...categories, newCategory]);
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleUpdateCategory = (data: Omit<Category, 'id'>) => {
    if (selectedItem && 'name' in selectedItem && !('price' in selectedItem)) {
      setCategories(categories.map(c => 
        c.id === selectedItem.id ? { ...c, ...data } : c
      ));
      setModalOpen(false);
      setSelectedItem(null);
    }
  };

  // Brand handlers
  const handleCreateBrand = (data: Omit<Brand, 'id'>) => {
    const newBrand = {
      id: brands.length > 0 ? Math.max(...brands.map(b => b.id)) + 1 : 1,
      ...data
    };
    setBrands([...brands, newBrand]);
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleUpdateBrand = (data: Omit<Brand, 'id'>) => {
    if (selectedItem && 'name' in selectedItem && !('price' in selectedItem)) {
      setBrands(brands.map(b => 
        b.id === selectedItem.id ? { ...b, ...data } : b
      ));
      setModalOpen(false);
      setSelectedItem(null);
    }
  };

  // Modal handlers
  const openProductModal = (product?: Product) => {
    setFormType("product");
    setSelectedItem(product || null);
    setModalTitle(product ? "Cập nhật sản phẩm" : "Tạo sản phẩm mới");
    setModalOpen(true);
  };

  const openCategoryModal = (category?: Category) => {
    setFormType("category");
    setSelectedItem(category || null);
    setModalTitle(category ? "Cập nhật danh mục" : "Tạo danh mục mới");
    setModalOpen(true);
  };

  const openBrandModal = (brand?: Brand) => {
    setFormType("brand");
    setSelectedItem(brand || null);
    setModalTitle(brand ? "Cập nhật thương hiệu" : "Tạo thương hiệu mới");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Quản lý sản phẩm
          </h1>
          <p className="text-gray-600">Quản lý sản phẩm, danh mục và thương hiệu</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => openProductModal()}
            className="group relative px-6 py-3 bg-white/40 backdrop-blur-xl rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Sản phẩm mới
              </span>
            </div>
          </button>

          <button
            onClick={() => openCategoryModal()}
            className="group relative px-6 py-3 bg-white/40 backdrop-blur-xl rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                Danh mục mới
              </span>
            </div>
          </button>

          <button
            onClick={() => openBrandModal()}
            className="group relative px-6 py-3 bg-white/40 backdrop-blur-xl rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                Thương hiệu mới
              </span>
            </div>
          </button>
        </div>

        {/* Products Table */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Danh sách sản phẩm</h2>
              <span className="px-3 py-1 bg-blue-500/10 rounded-full text-sm font-medium text-blue-700 border border-blue-500/20">
                {products.length} sản phẩm
              </span>
            </div>
            
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Tên sản phẩm</th>
                      <th className="px-6 py-4 text-left font-semibold">Thương hiệu</th>
                      <th className="px-6 py-4 text-left font-semibold">Danh mục</th>
                      <th className="px-6 py-4 text-left font-semibold">Giá</th>
                      <th className="px-6 py-4 text-left font-semibold">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/30">
                    {products.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                              </svg>
                            </div>
                            <p className="text-gray-500 font-medium">Chưa có sản phẩm nào</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      products.map(p => (
                        <tr key={p.id} className="hover:bg-blue-50/50 transition-colors duration-200 group/row">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover/row:scale-110 transition-transform duration-200">
                                {p.name.charAt(0).toUpperCase()}
                              </div>
                              <span className="font-medium text-gray-900">{p.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100/70 text-indigo-800 border border-indigo-200/50">
                              {brands.find(b => b.id === p.brandId)?.name || 'N/A'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100/70 text-purple-800 border border-purple-200/50">
                              {categories.find(c => c.id === p.categoryId)?.name || 'N/A'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                              ${p.price.toFixed(2)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => openProductModal(p)}
                                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium hover:scale-105"
                              >
                                Sửa
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(p.id)}
                                className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium hover:scale-105"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Categories & Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories Table */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-rose-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">Danh mục</h2>
                <span className="px-3 py-1 bg-purple-500/10 rounded-full text-sm font-medium text-purple-700 border border-purple-500/20">
                  {categories.length}
                </span>
              </div>
              
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <th className="px-6 py-3 text-left font-semibold">ID</th>
                        <th className="px-6 py-3 text-left font-semibold">Tên danh mục</th>
                        <th className="px-6 py-3 text-left font-semibold">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200/30">
                      {categories.map(c => (
                        <tr key={c.id} className="hover:bg-purple-50/50 transition-colors duration-200">
                          <td className="px-6 py-3 text-gray-700 font-medium">{c.id}</td>
                          <td className="px-6 py-3 font-medium text-gray-900">{c.name}</td>
                          <td className="px-6 py-3">
                            <button
                              onClick={() => openCategoryModal(c)}
                              className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium hover:scale-105"
                            >
                              Sửa
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Brands Table */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">Thương hiệu</h2>
                <span className="px-3 py-1 bg-indigo-500/10 rounded-full text-sm font-medium text-indigo-700 border border-indigo-500/20">
                  {brands.length}
                </span>
              </div>
              
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                        <th className="px-6 py-3 text-left font-semibold">ID</th>
                        <th className="px-6 py-3 text-left font-semibold">Tên thương hiệu</th>
                        <th className="px-6 py-3 text-left font-semibold">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200/30">
                      {brands.map(b => (
                        <tr key={b.id} className="hover:bg-indigo-50/50 transition-colors duration-200">
                          <td className="px-6 py-3 text-gray-700 font-medium">{b.id}</td>
                          <td className="px-6 py-3 font-medium text-gray-900">{b.name}</td>
                          <td className="px-6 py-3">
                            <button
                              onClick={() => openBrandModal(b)}
                              className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium hover:scale-105"
                            >
                              Sửa
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={modalTitle}
      >
        {formType === "product" && (
          <ProductForm
            brands={brands}
            categories={categories}
            onSubmit={selectedItem && 'price' in selectedItem ? handleUpdateProduct : handleCreateProduct}
            defaultValues={selectedItem && 'price' in selectedItem ? selectedItem : undefined}
          />
        )}
        {formType === "category" && (
          <CategoryForm
            onSubmit={selectedItem && !('price' in selectedItem) && !brands.find(b => b.id === selectedItem.id) ? handleUpdateCategory : handleCreateCategory}
            defaultValues={selectedItem && !('price' in selectedItem) && !brands.find(b => b.id === selectedItem.id) ? selectedItem as Category : undefined}
          />
        )}
        {formType === "brand" && (
          <BrandForm
            onSubmit={selectedItem && !('price' in selectedItem) && brands.find(b => b.id === selectedItem.id) ? handleUpdateBrand : handleCreateBrand}
            defaultValues={selectedItem && !('price' in selectedItem) && brands.find(b => b.id === selectedItem.id) ? selectedItem as Brand : undefined}
          />
        )}
      </Modal>
    </div>
  );
};

export default ProductManagement;