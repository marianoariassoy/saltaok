import BannerContact from "./BannerContact";
import Form from "./Form";
import Logo from "./LogoFooter";

const Contact = () => {
  return (
    <section className="bg-black" id="contacto">
      <div className="container max-w-6xl m-auto md:flex px-8 pb-20 items-start">
        <div className="flex-grow flex-1 text-center md:text-left md:pr-12">
          <h2 className="font-bold text-2xl mb-2">Contamos historias</h2>
          <p className="mb-8">Somos una comunidad que crea y comunica contenidos de interés general a través de medios tradicionales y digitales de gran alcance.</p>
          <div className="flex justify-center mb-12 hover:rotate-6 cursor-pointer transition-all">
            <Logo />
          </div>
        </div>
        <div className="p-8 w-full max-w-md bg-white rounded-xl text-black mb-12">
          <Form />
        </div>
        <div className="flex-grow flex-1 md:pl-12">
          <BannerContact />
        </div>
      </div>
    </section>
  );
};

export default Contact;
