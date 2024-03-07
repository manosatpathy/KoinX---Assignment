const Fundamentals = () => {
    return (
        <div>
            <div className="flex gap-3 items-center">
                <h3 className="font-semibold text-xl my-7">Fundamentals</h3>
                <div className="w-5 h-5 rounded-full text-white bg-gray-400 flex justify-center items-center">i</div>
            </div>
            <div className="flex justify-between">
                <div className="w-5/12 flex flex-col gap-3">
                    <div className="flex justify-between items-center"><p className="text-[#768396]">Bitcoin Price</p> <p className="font-semibold">$16,815.46</p> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">24h Low / 24h High</p> <p className="font-semibold">$16,382.07/$16,874.12</p> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">7d Low / 7d High</p> <p className="font-semibold">$16,382.07 / $16,874.12</p> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">Trading Volume</p> <p className="font-semibold">$23,249,202,782</p> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">Market Cap Rank</p> <p className="font-semibold">#1</p> </div>
                </div>
                <div className="w-5/12 flex flex-col gap-3">
                    <div className="flex justify-between items-center"><p className="text-[#768396]">Market Cap</p> <p className="font-semibold">$323,507,290,047</p> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">Market Cap Dominance</p> <p className="font-semibold">38.343%</p> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">Volume / Market Cap</p> <p className="font-semibold">0.0718</p> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">All-Time High</p> <div className="flex flex-col "><div className="flex gap-3 justify-center font-semibold text-sm"><p>$69,044.77</p> <p className="text-red-500">-75%</p></div> <p className="font-semibold text-xs">Nov 10, 2021 (about 1 year)</p></div> </div>
                    <hr />
                    <div className="flex justify-between items-center"><p className="text-[#768396]">All-Time Low</p>  <div className="flex flex-col "><div className="flex gap-3 font-semibold text-sm"><p>$67.81</p> <p className="text-green-500">24729.1%</p></div> <p className="font-semibold text-xs">jul 06, 2013 (over 9 years)</p></div> </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Fundamentals