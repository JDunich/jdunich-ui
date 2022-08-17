import { useEffect, useState } from "react";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import GithubProjects from "../githuprojects/GithubProjects";
import Introduction from "../Introduction/Introduction";
import Skills from "../skills/Skills";
import SplashScreen from "../splashScreen/SplashScreen";
import { splashScreen } from "../../profile";
import "./LandingPage.scss" 

export default function LandingPage() {

  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      splashScreen.duration
    );
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);


  return (
    <div className={"background"}>
    {isShowingSplashAnimation ? (
      <SplashScreen />
    ) : (
    <>
      <Appbar />
      <Introduction />
      <About /> 
      <Experience />  
      <Education /> 
      <Skills />
      <GithubProjects /> 
      <Contact /> 
      <Footer />
    </>
    )}
    </div>
  )
}