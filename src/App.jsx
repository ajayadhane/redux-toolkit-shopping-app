import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
