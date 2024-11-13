import ProductCard from "@/app/components/ProductCard";

// import BeefOne from "/public/assets/Beef-Open.png";

const dummyProducts = [
  {
    id: "1",
    title: "Men's Casual T-Shirt",
    mrp: 29.99,
    salePrice: 19.99,
    percentOff: 33,
    thumbnail: "./assets/Beef-Open.png",
  },
  {
    id: "2",
    title: "Women's Running Shoes",
    mrp: 79.99,
    salePrice: 59.99,
    percentOff: 25,
    thumbnail: "/assets/Chicken-Open.png",
  },
  {
    id: "3",
    title: "Smartphone Case",
    mrp: 14.99,
    salePrice: 9.99,
    percentOff: 33,
    thumbnail: "/assets/Seafood-Open.png",
  },
  {
    id: "4",
    title: "Laptop Backpack",
    mrp: 49.99,
    salePrice: 39.99,
    percentOff: 20,
    thumbnail: "/assets/Curry-Open.png",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
