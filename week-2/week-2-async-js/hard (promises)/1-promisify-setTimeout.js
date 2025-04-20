/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration)

//     });
// }
// function callback() {
//     console.log("Timeout");
// }


// we have to return the promise 
function wait(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    })
}

module.exports = wait;
