'use strict';
//step-1
// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000); // aftr 2 seconds it  will be execute

//step-2
// setTimeout(() => {
//     console.log("another hello");
// }, 3000);



//step-3
//asynchronously work this setTimeout
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log("another hello");
// }, 3000);
// console.log(3);
// console.log(4);



//learing callback(one function when call another function it's called callback)
// function sum(a, b) {
//     console.log(a + b);
// }

// function minus(a, b) {
//     console.log(a - b);
// }

// function calculator(a, b, sumCallBack) {
//     sumCallBack(a, b);
// }


// //function pass suppose to be a parameter
// calculator(1, 2, sum);
// calculator(2, 1, minus);

// //direct function pass
// calculator(2, 3, (a, b) => {
//     console.log(a * b);
// });


//step-3
// const hello = () => {
//     console.log("hello");
// }


// setTimeout(hello, 2000);



// step-3 callback hell
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data:" + dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}



//callback hell
getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});
