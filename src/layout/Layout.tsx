import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="fixed z-40 w-full bg-primary shadow-xl">
        <Header />
      </header>
      <main className="mt-40">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
