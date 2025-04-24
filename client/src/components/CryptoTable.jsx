import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const CryptoTable = ({ data }) => {
  function formatNumber(amount) {
    if (amount >= 1e9) return (amount / 1e9).toFixed(2) + "B";
    if (amount >= 1e6) return (amount / 1e6).toFixed(2) + "M";
    if (amount >= 1e3) return (amount / 1e3).toFixed(2) + "K";
    return amount.toString();
  }

  return (
    <div className="p-6">
      <h1 className="text-center text-blue-500 text-3xl font-bold mb-4">
        Crypto Price Tracker
      </h1>
      <div className="bg-white  ">
        <div className="pt-4 pb-2 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-bold mb-2">Top Crypto</h1>
        </div>

        <div className="flex w-full overflow-x-auto">
          <div className="flex-shrink-0 ">
            <table className="table-auto border-collapse">
              <thead>
                <tr>
                  <th className="p-3 border-b">#</th>
                  <th className="p-3 border-b">Name</th>
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

          <div className="overflow-x-auto w-full scrollbar-hide ">
            <table className="table-auto border-collapse min-w-max">
              <thead className="text-center">
                <tr>
                  <th className="p-3 border-b">Price</th>
                  <th className="p-3 border-b">1h %</th>
                  <th className="p-3 border-b">24h %</th>
                  <th className="p-3 border-b">7d %</th>
                  <th className="p-3 border-b">Market Cap</th>
                  <th className="p-3 border-b">Volume(24h)</th>
                  <th className="p-3 border-b">Circulating Supply</th>
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
                    <td className="p-3 border-b w-[300px] h-[40px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={coin.sparkline_in_7d.price.map((p, i) => ({ p, i }))}
                        >
                          <Line
                            type="monotone"
                            dataKey="p"
                            stroke="#3b82f6"
                            dot={false}
                            strokeWidth={2}
                          />
                        </LineChart>
                      </ResponsiveContainer>
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
