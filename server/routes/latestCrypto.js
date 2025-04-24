import express from 'express'
import axios from "axios";

const router = express.Router()

router.get("/crypto", async (req, res) => {
    try {
      const response = await axios.get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
          },
          params: {
            start: 1,
            limit: 10,
            convert: "USD",
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  });   

export default router;