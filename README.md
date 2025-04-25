# 📘 Assignment: Real-Time Crypto Price Tracker

## 🎯 Objective

Build a responsive **React + Redux Toolkit** application that tracks real-time crypto prices (similar to CoinMarketCap), simulates WebSocket updates, and manages all asset state exclusively via Redux.

---

## 🛠️ Tech Requirements

### ⚙️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, TailwindCSS
- **State Management**: Redux (createSlice, configureStore)
- **WebSocket Simulation**: setInterval + mock class
- **Charting**: Static 7D mini chart (SVG or image)
- **Development Tools**: Vite, VS Code, GitHub

---

## 📊 UI Table

- Displays **5 sample assets** (e.g., BTC, ETH, USDT) in a **responsive table** layout.
- Columns include:
![screenshot_1745583354337.png](<https://media-hosting.imagekit.io/c1e3581faa0d47f1/screenshot_1745583354337.png?Expires=1840191355&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JZkiRL8c-OnVo37mhxAEyzWWT5yU23ujII1uLJcR1mpopx5H3tZ5nKDWMRnc6rZwgNA75Qx08qEAPXlPwPiXZJ8tUbAY9MtEDwGzJS-pMiwkl79nmE5-URnWPxc8cDBZTRz3VAYXMcemBw7tqvdZ0UsvX6gwaRFYS-m0F4yMFcDww0QffeiAyt-iRbn3pJwi50BgcPjBdKls~VCLFE35K3ElWysedq~9WD34pwJMA5uojYRoDAhifyLJUGZgnaYns3Ey-gZc82eo4LBXexHrNEZdok0v4tlzciNCGDbA6MwJTal2rREz3znQxrUZQF4kw8oskeUKQ5pmVYbO4qzSkQ__>)
- 🔁 **7D Chart** is statically embedded.
- 📉 **Color-coded % changes**:
  - Green for positive
  - Red for negative

---

## 🔄 Real-Time Updates

- Simulated **WebSocket data stream** using `setInterval`.
- Every **1–2 seconds**, randomly updates:
  - Price
  - % Change (1h, 24h, 7d)
  - 24h Volume
- No use of local state—**Redux-only** state updates via actions.

---

## 🧠 Redux State Management

- Built using **Redux Toolkit**:
  - `createSlice`, `configureStore`, `createSelector`
- Centralized state holds all asset data.
- Efficient **selectors** used to optimize UI re-renders.

---


### 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vedharaj/cryptotracker.git
   cd cryptotracker
   ```

2. **Setup Frontend (React + Vite)**
   ```bash
   cd client
   npm install
   npm run dev
   ```

3. **Setup Backend (Node.js + Nodemon)**
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173/
   ```

---

## 🧱 Project Architecture

```
cryptotracker/
├── client/                          # Frontend client-side React application
│   ├── public/                      # Static public assets (e.g., index.html)
│   ├── src/                         # Source code for React app
│   │   ├── assets/                  # Logos, images, SVGs
│   │   │   └── react.svg
│   │   ├── components/             # Reusable UI components
│   │   │   └── CryptoTable.jsx     # Main component for displaying crypto data
│   │   ├── features/               # Redux slices and feature logic
│   │   │   └── cryptoSlicer.js     # Slice for handling crypto asset state
│   │   ├── App.jsx                 # Root component
│   │   ├── App.css                 # Main stylesheet
│   │   ├── index.css               # Base styles
│   │   ├── main.jsx                # React DOM render + Redux Provider
│   │   ├── store.js                # Redux store configuration
│   ├── .gitignore                  # Git ignored files for client
│   ├── index.html                  # HTML template
│   ├── package.json                # Client dependencies and scripts
│   ├── package-lock.json           # Package lock file
│   ├── vite.config.js              # Vite configuration for development
│   ├── README.md                   # Frontend README
│   └── .env                        # Environment variables
│
├── server/                         # Backend server (Node.js + Express)
│   ├── routes/                     # API routes
│   │   └── latestCrypto.js         # Endpoint for crypto data (simulated or real)
│   ├── node_modules/               # Server dependencies
│   ├── index.js                    # Server entry point
│   ├── .gitignore                  # Git ignored files for server
│   ├── package.json                # Server dependencies and scripts
│   ├── package-lock.json           # Package lock file
│   └── README.md                   # Backend README
```


## 📹 Demo Video/GIF

🎞️ [Click to Watch Demo on YouTube](https://screenapp.io/app/#/shared/6G8w8aSOEP)  
_(Replace with your actual video or gif link)_

---

## 📬 Contact

Created by [vedharaj](https://github.com/Vedharaj) – Open to feedback and collaboration!

---
