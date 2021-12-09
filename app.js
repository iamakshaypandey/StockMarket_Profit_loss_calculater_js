const initialPrice = document.querySelector("#Intial-Price")
const stockQuantity = document.querySelector("#Quantity-stocks")
const currentPrice = document.querySelector("#Current-Price")
const checkBtn =document.querySelector("#submit-btn")
const outputE1 = document.querySelector("#output")


function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value)
    var curr = Number(currentPrice.value)
    calculatProfitAndLoss(ip,qty,curr)
}

function calculatProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity
        var losspercentage =(loss/initial)*100
        showOutput(`The loss is ${loss} and The percent is ${losspercentage}%`);
    }else if(current > initial){
        var profit = (current-initial)*quantity
        var profitpercentage =(profit-initial)*100
        showOutput(`The profit is ${profit} and The percent is ${profitpercentage}%`);
    }else{
        showOutput(`Stock Market is The lack of money Just Try Your Luck, no pain no gain `);
    }
}
function showOutput(message){
    outputE1.innerHTML=message
}


checkBtn.addEventListener("click",submitHandler)

