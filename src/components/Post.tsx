import ViralesPost from "./ViralesPost";
import ImageItem from "./ImageItem";
import ReactPlayer from "react-player";
import PostOthers from "./PostOthers";

const Post = () => {
  return (
    <section>
      <div className="container max-w-6xl m-auto px-8 pt-12 gap-8 text-black md:flex">
        <div className="md:w-3/4">
          <div className="bg-primary py-1 px-4 font-bold rounded-md text-sm mb-8 w-1/2">actualidad</div>

          <ImageItem src="https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />

          <h1 className="mt-8 mb-4 font-bold text-3xl text-primary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>

          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <br />
            <br />
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
            iriure dolor in hendrerit in vulputate velit esse
          </p>

          <ReactPlayer url="https://youtu.be/0OwvGM1117M" controls={true} width="100%" height="auto" className="w-screen aspect-video mb-8" />

          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismoenim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
            dolor in hendrerit in vulputate velit esse
          </p>

          <PostOthers />
        </div>
        <aside className="md:w-3/12">
          <ViralesPost />
        </aside>
      </div>
    </section>
  );
};

export default Post;
