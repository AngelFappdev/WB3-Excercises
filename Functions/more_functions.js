 function displayMailinglabel(name, address, city, state, zip)
     {
         console.log(`
         ${name}
         ${address}
         ${ city }, ${state} ${zip}
        `);
    }
 displayMailinglabel("Angel", "400 Cherry Street", "Freeport", "New York", "11520")
function displayaddNumbers(num1, num2){
     let somenumber = (num1 + num2);
      console.log(somenumber)

 }
 displayaddNumbers(200,400);


function displayReceipt(totaldue , amountpaid){
    console.log("Total Due:", totaldue ,"Amount Paid:", amountpaid)
    if(
        amountpaid < totaldue)
        console.log("Pay the difference")

}
displayReceipt(500,500)