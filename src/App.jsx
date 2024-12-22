import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes.jsx";
import CartProvider from "./context/cartProvider.jsx";

function App() {
  return (
    <>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
