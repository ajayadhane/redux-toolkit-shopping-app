import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
