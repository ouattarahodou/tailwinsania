import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main className="bg-indigo-100" style={{minHeight: '80vh'}}>{children}</main>
      <Footer />
       <Toaster />
    </div>
  );
};

export default Layout;
