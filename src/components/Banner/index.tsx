import CTA from "../CTA";

const Banner = () => {
  return (
    <div
      className={` banner w-full h-[80vh] bg-cover bg-center  flex items-center justify-center relative `}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
      }}
    >

<CTA/>
     
    </div>
  );
};

export default Banner;
