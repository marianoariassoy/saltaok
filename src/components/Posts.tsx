import Article from "./Article";

const Posts = () => {
  return (
    <section className="bg-black p-2 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-2" id="actualidad">
      <Article
        id="1"
        section="actualidad"
        title="Se viene el II Concurso de Locro 
¿Dónde y cuándo?"
        date="25/05/2023"
        image="https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <Article id="2" section="entrevista" title="Lorem ipsum dolor sit amet consectetur adipisicing elit" date="25/05/2023" image="https://images.pexels.com/photos/1714354/pexels-photo-1714354.jpeg?auto=compress&cs=tinysrgb&w=1600" />

      <Article
        id="3"
        section="actualidad"
        title="Se viene el II Concurso de Locro 
¿Dónde y cuándo?"
        date="25/05/2023"
        image="https://images.pexels.com/photos/4406759/pexels-photo-4406759.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <div className="hidden 2xl:block">
        <Article id="4" section="entrevista" title="Lorem ipsum dolor sit amet consectetur adipisicing elit" date="25/05/2023" image="https://images.pexels.com/photos/2249227/pexels-photo-2249227.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      </div>
    </section>
  );
};

export default Posts;
