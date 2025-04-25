import React from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {sorting} from "../features/cryptoSlicer.js";

const CryptoTable = ({ }) => {
  const { data, sortOrder } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  function formatNumber(amount) {
    if (amount >= 1e9) return (amount / 1e9).toFixed(2) + "B";
    if (amount >= 1e6) return (amount / 1e6).toFixed(2) + "M";
    if (amount >= 1e3) return (amount / 1e3).toFixed(2) + "K";
    return amount.toString();
  }

  return (
    <div className="py-4 px-2">
      <div className="bg-white ">
        <div className="pb-2 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold mb-2">Top Crypto</h1>
        </div>

        <div className="flex w-full overflow-x-auto">
          <div className="flex-shrink-0 ">
            <table className="table-auto border-collapse">
              <thead>
                <tr>
                  <th className="p-3 border-b">#</th>
                  <th className="p-3 border-b" onClick={() => dispatch(sorting({column:"name"}))}>
                    <div className="flex items-center group cursor-pointer">
                      {sortOrder.current_price === "asc" ? (
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      ) : (
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      )}
                      <span>name</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((coin, index) => (
                  <tr key={coin.id} className="hover:bg-gray-50">
                    <td className="p-6 border-b">{index + 1}</td>
                    <td className="p-6 border-b">
                      <div className="flex items-center gap-2">
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-6 h-6"
                        />
                        {coin.name} ({coin.symbol.toUpperCase()})
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto w-full scrollbar-hide">
            <table className="table-auto border-collapse min-w-max">
              <thead className="text-center">
                <tr>
                  <th className="p-3 border-b" onClick={() => dispatch(sorting({column:"price"}))}>
                    <div className="flex items-center justify-end group cursor-pointer">
                      {sortOrder.current_price === "asc" ? (
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      ) : (
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      )}
                      <span>Price</span>
                    </div>
                  </th>

                  <th className="p-3 border-b">
                    <div className="flex items-center justify-end group cursor-pointer" onClick={() => dispatch(sorting({column:"change_1h"}))}>
                      {sortOrder.price_change_percentage_1h_in_currency === "asc" ?
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      :
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      }
                      <span>1h %</span>
                    </div>
                  </th>
                  <th className="p-3 border-b">
                    <div className="flex items-center justify-end group cursor-pointer" onClick={() => dispatch(sorting({column:"change_24h"}))}>
                      {sortOrder.price_change_percentage_24h === "asc" ?
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      :
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      }
                      <span>24h %</span>
                    </div>
                  </th>
                  <th className="p-3 border-b">
                    <div className="flex items-center justify-end group cursor-pointer" onClick={() => dispatch(sorting({column:"change_7d"}))}>
                      {sortOrder.price_change_percentage_7d_in_currency === "asc" ?
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      :
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      }
                      <span>7d %</span>
                    </div>
                  </th>
                  <th className="p-3 border-b">
                    <div className="flex items-center justify-end group cursor-pointer" onClick={() => dispatch(sorting({column:"market_cap"}))}>
                      {sortOrder.market_cap === "asc" ?
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      : 
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      }
                      <span>Market Cap</span>
                    </div>
                  </th>
                  <th className="p-3 border-b">
                    <div className="flex items-center justify-end group cursor-pointer" onClick={() => dispatch(sorting({column:"volume24h"}))}>
                      {sortOrder.volume24h === "asc" ?
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" /> 
                      :
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      }
                      <span>Volume</span>
                      </div>
                  </th>
                  <th className="p-3 border-b">
                    <div className="flex items-center justify-end group cursor-pointer" onClick={() => dispatch(sorting({column:"circulating_supply"}))}>
                      {sortOrder.circulating_supply === "asc" ?
                        <IoCaretDownOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      :
                        <IoCaretUpOutline className="text-gray-500 mr-2 invisible group-hover:visible" />
                      }
                      <span>Circulating Supply</span>
                    </div>
                  </th>
                  <th className="p-3 border-b">Trend (7d)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((coin) => (
                  <tr key={coin.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b text-right">
                      ${coin.current_price.toLocaleString()}
                    </td>
                    <td
                      className={`p-3 border-b text-right ${
                        coin.price_change_percentage_1h_in_currency > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <div className="flex items-center justify-end">
                        {coin.price_change_percentage_1h_in_currency > 0 ? (
                          <IoCaretUpOutline />
                        ) : (
                          <IoCaretDownOutline />
                        )}
                        {coin.price_change_percentage_1h_in_currency?.toFixed(2)}%
                      </div>
                    </td>
                    <td
                      className={`p-3 border-b text-right ${
                        coin.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <div className="flex items-center justify-end">
                        {coin.price_change_percentage_24h > 0 ? (
                          <IoCaretUpOutline />
                        ) : (
                          <IoCaretDownOutline />
                        )}
                        {coin.price_change_percentage_24h?.toFixed(2)}%
                      </div>
                    </td>
                    <td
                      className={`p-3 border-b text-right ${
                        coin.price_change_percentage_7d_in_currency > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      <div className="flex items-center justify-end">
                        {coin.price_change_percentage_7d_in_currency > 0 ? (
                          <IoCaretUpOutline />
                        ) : (
                          <IoCaretDownOutline />
                        )}
                        {coin.price_change_percentage_7d_in_currency?.toFixed(2)}%
                      </div>
                    </td>
                    <td className="p-3 border-b text-right">
                      ${coin.market_cap.toLocaleString()}
                    </td>
                    <td className="p-3 border-b text-right">
                      ${coin.volume24h.toLocaleString()} <br />
                      <span className="text-gray-500">
                        {formatNumber(coin.volume24h / coin.current_price)}
                      </span>
                    </td>
                    <td className="p-3 border-b text-right">
                      ${formatNumber(coin.circulating_supply)}
                    </td>
                    <td className="p-2 border-b w-[200px] h-[35px]">
                      <img src={`https://www.coingecko.com/coins/${coin.id}/sparkline.svg`} alt={`${coin.name+" last 7d trend"}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTable;
