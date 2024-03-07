import { trendingCoins } from "../utils/api";
import { useState, useEffect } from "react";

const TrendingCoins = () => {
    const [coinsDetails, setCoinsDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await trendingCoins();
                setCoinsDetails(data);
            } catch (error) {
                console.error("Error fetching coins details:", error);
            }
        };
        fetchData();
    }, []);
    const top3Coins = coinsDetails?.slice(0, 3);

    return (
        <div className="bg-white rounded-md h-56 flex gap-6 flex-col px-8 py-5 justify-center">
            <h2 className="text-black text-2xl font-semibold">
                Trending Coins (24h)
            </h2>
            <div className="text-gray-900 flex gap-4 flex-col font-medium">
                {top3Coins &&
                    top3Coins.map((coin) => (
                        <div className="flex justify-between" key={coin.item.coin_id}>
                            <div>{`${coin.item.name} (${coin.item.symbol})`}</div>
                            <div className={`h-8 w-20 ${coin.item.data.price_change_percentage_24h.aed > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} flex items-center justify-center rounded-md`}>
                                {`${coin.item.data.price_change_percentage_24h.aed > 0 ? '▲' : '▼'} ${coin.item.data.price_change_percentage_24h.aed.toFixed(2)}%`}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TrendingCoins;
