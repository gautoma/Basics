/*
You go to a coffee Shop and place your Order. The clerk checks in the DB, whether your order can be accepted or not.
Once that is done, the clerk processes your order and serves you the order.
Once that is done, he generates a bill and you pay for it.
*/


function placeOrder(order){
      return new Promise(function exec(resolve,reject){
            console.log("We are checking if your order of",order,"is present or not...");
            setTimeout(function callbackOne(){
                  console.log("Search Complete !");
                  if (order == "coffee"){
                        let response = "YES !!";
                        resolve(response);
                  }else{
                        let response = "NO";
                        resolve(response);
                  }
            },4000)
      })
}


function processOrder(placeOrderResponse){
      return new Promise(function exec(resolve,reject){
            if (placeOrderResponse == "NO"){
                  let response = "Cannot process your Order";
                  resolve(response);
            }else{
                  console.log("We are now preparing to process your order...");
                  setTimeout(function callbackTwo(){
                        console.log("We have now processed your order.");
                        let response = "Please take your order";
                        resolve(response);
                  },7000)
            }
      })
}


function orderBilling(processOrderResponse){
      return new Promise(function exec(resolve,reject){
            if (processOrderResponse == "Cannot process your Order"){
                  let response = 0;
                  resolve(response);
            }else{
                  console.log("We are printing your Bill...");
                  setTimeout(function callbackThree(){
                        console.log("We are done printing your bill.");
                        let response = "$"+"13.45";
                        resolve(response);
                  },2000)
            }
      })
}


placeOrder("coffee")
.then(function one(data){
      console.log("The Search Result response is",data);
      return processOrder(data);
})
.then(function two(data){
      console.log(data);
      return orderBilling(data);
})
.then(function three(data){
      if (data == 0){
            console.log("You do not have to pay anything");
      }else{
            console.log("Your Bill is",data);
      }
})

