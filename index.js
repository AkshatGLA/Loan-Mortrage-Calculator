function computeLoan(){
    var amnt=document.getElementById("amount").value;
    var interest_rate=document.getElementById("interest").value;
    var month=document.getElementById("months").value;
    var intrst=(amnt*(interest_rate*0.01))/month;
    var payment=((amnt/month)+intrst).toFixed(2);
    document.getElementById("payment").innerHTML=+payment;
    }