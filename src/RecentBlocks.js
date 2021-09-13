// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";

// const RecentBlocks = () => {
//   const url = "https://mainnet.infura.io/v3/98444e7274b244e2a93abbee91210037";
//   const provider = new ethers.providers.JsonRpcProvider(url);
//   // const [latestBlock, setLatestBlock] = useState(0);
//   // const blockTable = [];

//   provider.on("block", (blockNumber) => {
//     console.log(blockNumber);
//   });
//   // useEffect(() => {
//   //   const setBlockNo = async () => {
//   //     try {
//   //       const blocknumber = await provider.getBlockNumber();
//   //       setLatestBlock(blocknumber);
//   //       console.log(blocknumber);
//   //       for (let i = 0; i < 10; i++) {
//   //         let Block = await provider.getBlock(parseInt(latestBlock) - i);
//   //         console.log(Block);
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   //   setBlockNo();
//   // }, []);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     const updateBlockTable = async () => {
//   //       setLatestBlock(parseInt(latestBlock) + 1);
//   //       let Block = await provider.getBlock(parseInt(latestBlock));
//   //       console.log(Block);
//   //     };
//   //     updateBlockTable();
//   //     console.log("This will run every 15 second!");
//   //   }, 15000);
//   //   return () => clearInterval(interval);
//   // });

//   return (
//     <div>
//       <div>RecentBlocks</div>
//     </div>
//   );
// };

// export default RecentBlocks;
