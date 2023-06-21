import Form from "./Form";
import Logo from "./LogoFooter";

const Contact = () => {
  return (
    <section className="bg-black" id="contacto">
      <div className="container max-w-7xl m-auto px-8 pb-20 pt-32 md:grid grid-contact">
        <div className="text-center md:text-left md:pr-6">
          <h2 className="font-bold text-2xl mb-2">Contamos historias</h2>
          <p className="mb-8">Somos una comunidad que crea y comunica contenidos de interés general a través de medios tradicionales y digitales de gran alcance.</p>
          <div className="flex justify-center mb-12 hover:rotate-6 cursor-pointer transition-all">
            <Logo />
          </div>
        </div>
        <div className="bg-white rounded-xl text-black p-8 mb-8">
          <Form />
        </div>
        <div className="md:pl-6">
          <img src="http://saltaok.com/backend/images/banner6.jpg" alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
