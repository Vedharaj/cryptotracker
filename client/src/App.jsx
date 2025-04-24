import CryptoTable from './components/CryptoTable.jsx'
import {fetchCryptoData} from './services/api.js'
import { useEffect, useState } from 'react'

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  const loadData = async () => {
    const data = await fetchCryptoData();
    setCryptoData(data);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000); // every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <CryptoTable data={cryptoData} />
    </div>
  )
}

export default App