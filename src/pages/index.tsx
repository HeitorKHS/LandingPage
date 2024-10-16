import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Descripton from "./Components/Description/Description";
import Plans from "./Components/Plans/Plans";
import Testimonial from "./Components/Testimonials/Testimonials";
import Download from "./Components/Download/Download";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-cover bg-center h-screen bg-[#262626] xl:bg-[url('/assets/background/background.png')]">
        <Nav/>
        <Main/>
      </div>
      <Descripton/>
      <Plans/>
      <Testimonial/>
      <Download/>
      <Faq/>
      <Footer/>
    </>
  );
}
