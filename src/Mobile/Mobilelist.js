import React from 'react';
import './Mobile.css'; // Make sure to import your CSS file for additional styles

const product = [
  {
    title: "Iphone 14 Plus",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70",
    originalPrice: "79,000",
    price: "55,000",
    discount: "29%"
  },
  {
    title: "Iphone 15 Plus",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/6/r/-original-imagtc6fn8fecysv.jpeg?q=70",
    originalPrice: "89,000",
    price: "65,000",
    discount: "27%"
  }
];

function MobileList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
      {product.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover object-center" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">Original Price: {item.originalPrice}</p>
            <p className="text-gray-700 mb-2">Discounted Price: {item.price}</p>
            <p className="text-gray-700 mb-2">Discount: {item.discount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobileList;
