import { Outlet } from "react-router-dom";
import { FooterWithSocialLinks } from "../components/Footer";
import Navbar from "../components/NavBar";
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Header />
      <Navbar />

      <Outlet />
      <FooterWithSocialLinks />
    </div>
     
    </>
  );
}
