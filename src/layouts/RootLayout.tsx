import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className='page w-full ml-auto mr-auto py-0 px-4 min-[320px]:max-w-full sm:max-w-160 md:max-w-3xl lg:max-w-5xl'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
