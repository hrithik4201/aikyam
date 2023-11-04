import { chooseUs } from "../constants";

const Choose = () => {
  return (
    // flex items-center justify-between py-8
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 gap-4 md:gap-8">
      <h3 className="font-palanquin text-2xl text-white text-center font-bold">
        <span>Why</span>
        <br />
        <span className="text-4xl font-bold whitespace-nowrap">AIKYAM ?</span>
      </h3>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {chooseUs.map((choose) => (
          <div key={choose.label} className="flex gap-4 w-full">
            <img src={choose.image} alt={choose.label} width={60} />
            <p className="text-white font-montserrat text-md font-bold flex items-center">
              {choose.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
