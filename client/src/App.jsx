import CryptoTable from './components/CryptoTable.jsx'
import { use, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";  
import { setCryptoData } from "./features/cryptoSlicer.js";

const BASE_URL = "ws://localhost:8080";

const App = () => {
  const {data} = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(BASE_URL);
    ws.current.onopen = () => {
      console.log("WebSocket connection established");
    };
    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Received data:", data);
      dispatch(setCryptoData(data));
    };
    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };
    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    return () => {
      ws.current.close();
    };
  }
  , []);

  return (
    <div className="App mt-4">
      <h1 className="text-center text-blue-500 text-3xl font-bold mb-4">
        CRYPTO TRACKER
      </h1>
      <CryptoTable data={data} />
    </div>
  )
}

export default App