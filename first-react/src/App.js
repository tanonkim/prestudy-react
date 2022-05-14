import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((resonse) => resonse.json())
      .then((json) => {
        setCoins(json); //coin의 state를 변경
        setLoading(false); //loading의 state를 변경
      });
  }, []);
  return (
    <div>
      <h1>The Coins {coins.length}</h1>
      {loading ? <strong>loading...</strong> : ""}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
