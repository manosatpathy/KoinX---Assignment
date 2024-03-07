const API_BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchBitcoinPrice = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.bitcoin;
  } catch (error) {
    console.error("Error fetching Bitcoin price:", error);
    throw error;
  }
};

export const trendingCoins = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/trending`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.coins;
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    throw error;
  }
};
