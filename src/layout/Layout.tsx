import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderMobile from "../components/HeaderMobile";
import NavMobile from "../components/NavMobile";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="fixed z-40 w-full bg-primary shadow-xl">
        <Header />
        <HeaderMobile />
        <NavMobile />
      </header>
      <main className="mt-40">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
