import TradingViewWidget from "./TradingViewWidget"
import { fetchBitcoinPrice } from "../utils/api"
import { useEffect, useState } from "react"

const Chart = () => {

    const [bitcoinData, setBitcoinData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBitcoinPrice();
                setBitcoinData(data);
            } catch (error) {
                console.error("Error fetching Bitcoin price:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="bg-white w-[52vw] h-[85vh] gap-2 flex flex-col rounded-sm p-8">
            <div className="flex gap-4 mb-4">
                <div className="flex gap-2 items-center">
                    <img src="/images/bitcoin.png" alt="coin icon" />
                    <h2 className="font-semibold text-2xl">Bitcoin</h2>
                    <p className="text-sm">BTC</p>
                </div>
                <div className=" flex justify-center w-[80px] h-[40px] text-base font-normal bg-[#808A9D] text-white rounded-md items-center">
                    <p>Rank #1</p>
                </div>
            </div>
            {bitcoinData !== null && (
                <div className="flex gap-3">
                    <div className="mr-2" >
                        <h3 className="font-semibold text-2xl">{`$${bitcoinData.usd.toLocaleString()}.00`}</h3>
                        <p className="font-medium">{`₹${bitcoinData.inr.toLocaleString()}`}</p>
                    </div>
                    <div className={`h-8 w-20 font-semibold flex items-center justify-center rounded-md ${bitcoinData.usd_24h_change > 2 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {bitcoinData.usd_24h_change > 2 ? '▲' : '▼'}{bitcoinData.usd_24h_change.toFixed(2)}%
                    </div>
                    <span className="text-[#768396] font-medium">(24H)</span>
                </div>
            )}
            <hr />
            <h3 className="ml-5 my-4 font-semibold">Bitcoin Price Chart (USD)</h3>
            <TradingViewWidget></TradingViewWidget>
        </div>
    )
}

export default Chart