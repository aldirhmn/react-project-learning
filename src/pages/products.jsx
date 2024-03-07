import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Nike",
    price: "Rp.1.000.000",
    image: "/images/shoes_1.jpg",
    decscription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Libero accusamus necessitatibus nemo commodi eligendi. 
        Accusamus, a. Magnam at maiores eligendi 
        pariatur doloribus nobis voluptate nisi commodi, neque voluptatibus sit enim.`,
  },
  {
    id: 2,
    name: "Sepatu Adidas",
    price: "Rp.2.000.000",
    image: "/images/shoes_1.jpg",
    decscription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Libero accusamus necessitatibus nemo commodi eligendi`,
  },
  {
    id: 3,
    name: "Sepatu Adidas",
    price: "Rp.2.000.000",
    image: "/images/shoes_1.jpg",
    decscription: `Nino Anjing`,
  },
];

const email = localStorage.getItem("email");
const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.title}>
              {product.decscription}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
