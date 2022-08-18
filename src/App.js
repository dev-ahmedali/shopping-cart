import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


function App() {
  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <Navbar />
      <Products />
      <Cart />
    </div>
  );
}

export default App;
