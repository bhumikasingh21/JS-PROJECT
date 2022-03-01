let btn = document.getElementById("btn")
    console.log(btn);

btn.addEventListener("click",()=>{
    let bill = document.getElementById("bill").value;
    console.log(bill);
    
    let perc = document.getElementById("perc").value;
    console.log(perc);
    
    let tip = bill * (perc / 100);

    let total = tip + Number(bill) ;
    
    document.getElementById("tip").value = tip;

    document.getElementById("total").value = total;
 
})