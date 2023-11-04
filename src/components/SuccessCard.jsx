const SuccessCard = ({ image, name, position, competition, location }) => {
  return (
    <div className="flex gap-4 w-full shadow-3xl rounded-xl p-5 xl:flex-row flex-col">
      <img
        src={image}
        alt="AIKYAM Athlete"
        loading="lazy"
        className="rounded-2xl w-full xl:w-2/5"
      />
      <div className="flex flex-col justify-center ">
        <h3 className="font-palanquin text-4xl ">{name}</h3>
        <h4 className="info-text">{position}</h4>
        <p className="info-text">{competition}</p>
        <p className="info-text">{location}</p>
      </div>
    </div>
  );
};

export default SuccessCard;
