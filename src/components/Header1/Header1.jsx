import logo from "/home/megh/Documents/CLOVE/src/assets/investment-calculator-logo.png";
import "../Header1/Header1.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
