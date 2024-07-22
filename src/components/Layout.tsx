import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

export default function Layout (props: {
    children : React.ReactNode
}) {
  return  <>
      <Header />
      <main>
  {props.children}
      </main>
      <Footer />
    </>;
}
