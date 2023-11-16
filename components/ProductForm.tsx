import React, { useState } from 'react';
import Select from 'react-select';

interface Product {
  name: string;
  brand: string;
  country: string;
}

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({ name: '', brand: '', country: '' });
  const [alternativeProducts, setAlternativeProducts] = useState<Product[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAlternativeProductChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newAlternativeProducts = [...alternativeProducts];
    newAlternativeProducts[index] = { ...newAlternativeProducts[index], [e.target.name]: e.target.value };
    setAlternativeProducts(newAlternativeProducts);
  };

  const handleCountryChange = (selectedOption: any) => {
    setProduct({ ...product, country: selectedOption.value });
  };

  const addAlternativeProduct = () => {
    setAlternativeProducts([...alternativeProducts, { name: '', brand: '', country: '' }]);
  };

  const countryOptions = [
    { value: 'USA', label: 'USA' },
    { value: 'Canada', label: 'Canada' },
    { value: 'UK', label: 'UK' },
  ];

  return (
    <div className="w-full max-w-xs mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Brand
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            Country
          </label>
          <Select
            id="country"
            name="country"
            options={countryOptions}
            onChange={handleCountryChange}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Alternative Products
          </label>
          {alternativeProducts.map((altProduct, index) => (
            <div key={index} className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Product Name"
                value={altProduct.name}
                onChange={(e) => handleAlternativeProductChange(index, e)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="brand"
                placeholder="Brand"
                value={altProduct.brand}
                onChange={(e) => handleAlternativeProductChange(index, e)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="country"
                placeholder="Country"
                value={altProduct.country}
                onChange={(e) => handleAlternativeProductChange(index, e)}
              />
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={addAlternativeProduct}
          >
            Add Alternative Product
          </button>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;