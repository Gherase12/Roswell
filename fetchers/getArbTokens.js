const production = "https://app.meadowlaunch.com/api/getNews"
const local = "http://localhost:3000/api/getTokens"



export const fetchCoins = async ()=>{
    const res = await fetch(production, { method: "GET" });

    const coinsData = await res.json();
    console.log(coinsData)
    return  coinsData
}