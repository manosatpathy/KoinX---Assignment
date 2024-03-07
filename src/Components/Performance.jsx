import Fundamentals from "./Fundamentals"
const Performance = () => {
    return (
        <div className="px-8 bg-white my-8 pb-16">
            <h2 className="my-8 text-3xl font-semibold">Performance</h2>
            <div className="flex flex-col gap-9">
                <div className="flex justify-between items-center gap-16">
                    <div>
                        <p>Today's Low</p>
                        <p>46,930.22</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#ff4949] via-[#ff4e11] via-[#fc870a] via-[#ffaf11] to-[#1ad002] w-[582.8px] h-[4.63px] rounded-sm"></div>
                    <div>
                        <p>Today's High</p>
                        <p>49,343.83</p>
                    </div>

                </div>
                <div className="flex justify-between items-center gap-16">
                    <div>
                        <p>52W Low</p>
                        <p>16,930.22</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#ff4949] via-[#ff4e11] via-[#fc870a] via-[#ffaf11] to-[#1ad002] w-[582.8px] h-[4.63px] rounded-sm"></div>
                    <div>
                        <p>52W High</p>
                        <p>49,743.83</p>
                    </div>
                </div>
            </div>
            <Fundamentals></Fundamentals>
        </div>
    )
}

export default Performance