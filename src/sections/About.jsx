import { aboutContent } from "../constants";

const About = () => {
  return (
    <section id="about-us" className="py-20">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        About Us
      </h3>
      <p className="font-montserrat text-lg leading-8 mt-6 mb-10  text-center ">
        At Aikyam Sports Science, we are passionate about advancing the world of
        sports science and technology to empower athletes to reach their full
        potential. With a mission deeply rooted in enhancing athlete
        performance, recovery, muscle strength, sports nutrition, and sports
        psychology, we are a cutting-edge sports technology company that leaves
        no stone unturned in achieving these goals.
      </p>
      <p className="font-montserrat text-3xl leading-8 mt-6 mb-10 text-center font-bold mx-auto">
        Meet Our Team
      </p>
      <div className="flex gap-10 mt-10 flex-wrap justify-center items-center">
        {aboutContent.map((about) => (
          <div key={about.name} className="mb-4 ">
            <img
              src={about.image}
              alt={about.name}
              width={200}
              className="rounded-lg"
            />
            <p className="mt-2 text-2xl font-bold">{about.name}</p>
            <p className="text-lg leading-8 text-green-500">{about.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
