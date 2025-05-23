import logo from '../assets/investment-calculator-logo.png';
//로고와 제목 출력
export default function Header(){
  return (
  <header id="header"> 
    <img src={logo} alt="Logo showing a money bag"/>
    <h1>Investment Calculator</h1>
  </header>
  );
} 