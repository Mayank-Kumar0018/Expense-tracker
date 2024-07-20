import { useState } from "react"
const currencyInfo = (currency = usd) => {
    const [data , setData] = useState({})
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res) => res.json())
        .then((res) => setData(res[currency]))
    
    
    return data;

}
export default currencyInfo;
