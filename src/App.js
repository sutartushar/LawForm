import styles from "./App.module.css";
import HeroSection from "./components/HeroSection/HeroSection";
// import NavBar from "./components/Navbar/NavBar";
import Introduction from "./components/Introduction/Introduction";
import ChooseSection from "./components/ChooseSection/ChooseSection";
import PracticeSection from "./components/PracticeSection/PracticeSection";
import ClientSection from "./components/ClientSection/ClientSection";
import Team from "./components/Team/Team";
import Faq from "./components/Faq/Faq";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <HeroSection />
      <div className={styles.SectionWrapper}>
        <Introduction />
        <ChooseSection />
        <PracticeSection />
        <ClientSection />
        <Team />
        <Faq />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
