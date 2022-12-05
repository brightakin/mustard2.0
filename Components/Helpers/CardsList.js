const CardsList = () => {
  return (
    <div className="flex gap-[7rem] xl:gap-[12rem] ml-4 mt-8">
      <p className=" text-sm w-52 h-5 text-[#3a3a3a]">Samuel Ogunrem</p>
      <p className=" text-sm w-32 h-5 text-[#3a3a3a]">NGN 10,000</p>
      <p className=" ml-5 text-sm w-28 bg-[#cbcbd4] rounded-2xl text-center p-2 h-8 font-bold text-[#3a3a3a]">
        NGN
      </p>
      <p className=" text-sm w-24 h-5 text-[#3a3a3a]">
        Nov 16, 2022 <br />{" "}
        <span className=" text-xs text-[#a6a6aa]">06:38 PM</span>
      </p>
    </div>
  );
};

export default CardsList;
