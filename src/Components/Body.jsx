import Chart from "./Chart"
import TrendingCoins from "./TrendingCoins"
import GetStarted from "./GetStarted"
import Sections from "./Sections"
import Performance from "./Performance"
import Sentiment from "./Sentiment"

const Body = () => {
    return (
        <div className="w-9/12 h-auto flex gap-5 mb-10" >
            <div className="flex flex-col">
               <div className="flex font-normal my-4">
                <p>Cryptocurrencies</p>
                <p>&gt;&gt;</p>
                <p className="font-medium">Bitcoin</p>
                </div>
                <Chart></Chart>
                <Sections></Sections>
                <Performance></Performance>
                <Sentiment></Sentiment>
            </div>
                <div className="flex flex-col gap-8">
                    <GetStarted></GetStarted>
                    <TrendingCoins></TrendingCoins>
                </div>
        </div>
    )
}

export default Body