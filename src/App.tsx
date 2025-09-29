import { useEffect } from "react";
import MainSection from "./MainSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });

  return (
    <>
      <MainSection></MainSection>
      <Header></Header>
      <Hero></Hero>
    </>
  );
};

export default App;
