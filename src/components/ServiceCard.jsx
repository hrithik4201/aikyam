const ServiceCard = ({ image, label, subtext }) => {
  return (
    <div className='flex-1 lg:w-[350px] lg:min-w-[350px] w-full rounded-[20px] shadow-xl px-10 py-16 bg-white'>
      <div className='w-14 h-14 flex justify-center items-center bg-primary rounded-full'>
        <img src={image} alt={label} width={26} height={26} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
