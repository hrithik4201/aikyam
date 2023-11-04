import React from "react";
import { Helmet } from "react-helmet";
import SuccessCard from "../components/SuccessCard";
import { successStories } from "../constants";

const Stories = () => {
  return (
    <section>
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Our Athletes
      </h3>
      <div className="flex md:flex-row flex-col gap-10 mt-10">
        {successStories.map((story) => (
          <SuccessCard
            key={story.name}
            name={story.name}
            position={story.position}
            competition={story.competition}
            location={story.location}
            image={story.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Stories;
