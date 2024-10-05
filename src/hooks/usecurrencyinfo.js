import{useEffect, useState} from "react"

function usecurrencyinfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))//data ko hold kahan karu toh ham useState use karenge aur square brackets as well as dot use kae sakte hai
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}


export default usecurrencyinfo;