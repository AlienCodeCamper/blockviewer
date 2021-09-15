import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

const App = () => {
  const [lastBlockFetched, setLastBlockFetched] = useState({});
  const url = "https://mainnet.infura.io/v3/98444e7274b244e2a93abbee91210037";
  const provider = new ethers.providers.JsonRpcProvider(url);
  useEffect(() => {
    try {
      provider.on("block", (blockNumber) => {
        if (Object.keys(lastBlockFetched)[0] !== blockNumber)
          getBlock(blockNumber);
      });
      const getBlock = async (blockNumber) => {
        const block = await provider.getBlockWithTransactions(blockNumber);
        setLastBlockFetched(block);
        console.log(block);
      };
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <div>Hello</div>;
};

export default App;
