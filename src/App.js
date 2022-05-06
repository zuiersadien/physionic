import { Header } from "./components/Header/Header";
import { LeadingMedicine } from "./components/LeadingMedicine/LeadingMedicine";
import GlobalStyle from "./globalStyles";
import Opinion from "./components/Opinion/Opinion";
import Faq from "./components/Faq/Faq";
import Price from "./components/Price/Price";
import {BarMail} from "./components/BarMail/BarMail";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
    <GlobalStyle/>
    <LeadingMedicine/>
    <Opinion/>
    <Faq/>
    <Price/>
    <BarMail/>
    <Footer/>
    </div>
  );
}

export default App;
