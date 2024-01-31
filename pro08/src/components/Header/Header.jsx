import logo from '../../assets/investment-calculator-logo.png';
import './Header.css';

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="React Investment Calculator logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
