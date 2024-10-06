import { BlogPosts } from "app/components/posts";

import { Experience } from "./Experience";

export default function Page() {
  return (
    <section>
      <Experience />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter hidden">
        My Portfolio
      </h1>
      {/* <Scene/> */}
      <p className="mb-4">
        {`Hi there! I’m a passionate Front-End Developer with a knack for building interactive web applications. I work with tools like React and Three.js/R3f to create clean digital experiences.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
