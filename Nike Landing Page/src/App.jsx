import "./App.css";
import HeaderComponent from "./components/header";
import Hero from "./components/hero";
//***


const MyAppComponent = () => {
  return (
    <div className="productPage">
      <HeaderComponent />
      <Hero/>
    </div>
  );
};

export default MyAppComponent;
