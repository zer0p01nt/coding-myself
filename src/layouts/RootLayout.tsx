import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className='w-full ml-auto mr-auto py-0 px-4'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
