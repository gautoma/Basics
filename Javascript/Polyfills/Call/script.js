function getDetails(){
    console.log(`I bought ${this.name} car at ${this.price}`);
}

let obj1 = {
    name:"Mercedes",
    price:1000000
}

// getDetails.call(obj1) // We are setting the context of "this" inside getDetails to obj1


// * Custom Polyfill of Call

Function.prototype.customCall = function(object){
    // "this" is pointing to Function
    // "Object" is pointing to obj1

    // * I want "this" to point at obj1

    obj1.fxn = this;

    // By doing line 21, out obj1 looks like :-
    // {name:"Mercedes", price:1000000, fxn:Function}

    obj1.fxn(); // By doing a Method invocation our "this" inside fxn will always point to obj1
}

getDetails.customCall(obj1);