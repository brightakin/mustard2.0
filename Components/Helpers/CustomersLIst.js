const CustomersList = () => {
  return (
    <div className="flex gap-[8rem] ml-4 mt-8">
      <p className=" text-xs lg:text-sm w-52 h-5 text-[#3a3a3a]">
        Samuel Ogunrem
      </p>
      <p className="text-xs lg:text-sm w-32 h-5 ml-[-5rem] lg:ml-[-8rem] text-[#3a3a3a]">
        samuelogunremi255@gmail.com
      </p>
      <p className="ml-[-2rem] lg:ml-5 text-xs lg:text-sm w-28 bg-[#cbcbd4] rounded-2xl text-center p-2 h-8 font-bold text-[#3a3a3a]">
        Individual
      </p>
      <p className="ml-[-3rem] lg:ml-0 text-sm w-16 h-5 font-bold text-[#3a3a3a]">
        0
      </p>
      <p className="text-xs lg:text-sm w-40 lg:w-24 h-5 text-[#3a3a3a]">
        Nov 16, 2022 <br />{" "}
        <span className=" text-xs text-[#a6a6aa]">06:38 PM</span>
      </p>
    </div>
  );
};

export default CustomersList;
