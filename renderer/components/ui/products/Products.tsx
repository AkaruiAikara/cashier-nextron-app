import Image from "next/image";

const products = [
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
  {
    name: "Smart TV",
    image: "/images/product-1.jpg",
    price: 4290000,
  },
];

const separateDigits = (number: Number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Products = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="flex flex-col bg-white rounded-lg p-6">
          <div className="relative h-48 w-full mb-6">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="text-xl">{product.name}</div>
          <div className="text-2xl text-teal-500 font-semibold">
            Rp. {separateDigits(product.price)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
