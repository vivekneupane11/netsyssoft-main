
export default function CTA() {
  return (
    <section className="flex justify-center items-center flex-col absolute left-[50%] top-[50%] w-full" style={{transform:'translate(-50%,-50%)'}}>
         <h3 className=" font-roboto font-light text-4xl text-center capitalize mb-4 text-white">
       A Great Place For
      </h3>
           <h2 className="text-6xl font-bold  mb-4 font-sans text-center text-white">Computer Training</h2>
     
      <button className=" bg-[#002C5F] text-md w-[300px] text-white mt-4 py-4 px-10 rounded-[10px] hover:bg-blue-800 hover:text-white-600 transition duration-300">
        Register Now
      </button>
    </section>
  )
}
