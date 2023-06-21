import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import NavMobile from "../components/NavMobile";
import Contact from "../components/Contact";

type Props = {
  children: React.ReactNode;
  home: boolean;
};

const Layout = ({ children, home }: Props) => {
  return (
    <>
      <header className="fixed z-40 w-full bg-primary shadow-xl">
        <Header home={home} />
        <HeaderMobile />
        <NavMobile home={home} />
      </header>
      <main className="mt-40">
        {children}
        <Contact />
      </main>
      <footer>
        <Footer home={home} />
      </footer>
    </>
  );
};

export default Layout;
