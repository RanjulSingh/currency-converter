import { useState } from 'react'
import {Input} from './components'
import usecurrencyinfo from './hooks/usecurrencyinfo'


function App() {
  const[amount,setAmount]=useState(0)
  const [from,setfrom]=useState("usd")
  const [to,setto]=useState("inr")
  const [convertedamount,setconvertedamount]=useState(0)
    
  const currencyinfo=usecurrencyinfo(from) //aur hamne data pass kara tha jo object hai
  const options=currencyinfo?Object.keys(currencyinfo):[]

  //swap

  const swap=()=>
  {
    
        const temp=from;
    setfrom(to)
  setto(temp)
  const tempAmount=amount;
  setAmount(convertedamount)
 setconvertedamount(tempAmount)
 
  
  
  }

  const convert=()=>{
    setconvertedamount(amount*currencyinfo[to])//saari value currencyinfo pe hai aur jismien bhi covert karna hai wo "to" se mi jayega

  }


  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&w=600')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1">
                    <Input
                        label="from"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setfrom(currency)}
                        selectCurrency={from}
                        onAmountChange={(amount)=>setAmount(amount)}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <Input
                        label="to"
                      
                        amount={convertedamount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>setto(currency)}
                        selectCurrency={to}
                        amountDisable
                        
                        
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  );
}

export default App
