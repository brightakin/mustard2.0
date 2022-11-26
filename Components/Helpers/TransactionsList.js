const TransactionsList = () => {
  return (
    <div className="flex justify-around mt-8">
      <p className=" text-sm w-52 h-5 text-[#3a3a3a]">486c6286-0c88-44d22...</p>
      <p className=" text-sm w-32 h-5 text-[#3a3a3a]">NGN 10,000.00</p>
      <p className=" text-sm w-16 h-5 font-bold text-[#3a3a3a]">Funding</p>
      <p className=" text-sm w-28 bg-[#30d6b0] rounded-2xl text-center p-2 h-8 font-bold text-[#3a3a3a]">
        Successful
      </p>
      <p className=" text-sm w-24 h-5 text-[#3a3a3a]">
        Nov 16, 2022 <br />{" "}
        <span className=" text-xs text-[#a6a6aa]">06:38 PM</span>
      </p>
    </div>
  );
};

export default TransactionsList;
