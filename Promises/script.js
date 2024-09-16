'use strict';

//promise has tow handelers
//resolve means successfully completed,reject means not completed

//step-1 (in the first moment promise will be showing pending before the process)
// let promise = new Promise((resolve, reject) => {
//     console.log("i'm a promise.");
//     // resolve("successfully promise done!");
//     // reject("no");
// });



//step-2 resolve(result) reject(error)
// function getData(dataId, NextCallBack) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data:" + dataId);
//             resolve("successfully done!");
//             if (NextCallBack) {
//                 NextCallBack();
//             }
//         }, 3000);
//     })
// }

// getData(123);


//promisse fullfilled
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         console.log("hello");
//         resolve("successfully done!");
//     });
// }

// let promise = getData();
// promise.then((res) => {
//     console.log("promise fullfilled:"+res);
// });


//promisse rejected
// const getData = () => {
//     return new Promise((resolve, reject) => {
//         console.log("hello");
//         reject("promise rejected!");
//     });
// }

// let promise = getData();
// promise.catch((error) => {
//     console.log("promise:" + error);
// });


//promise chain
function asyncData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success!");
            reject("error!"); //here not working reject after resolve. so the catch function will not work
        }, 3000);
    });
}

function asyncData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success!");
            reject("error!"); //here not working reject after resolve. so the catch function will not work
        }, 3000);
    });
}



// chain
asyncData1().then((res) => {
    return asyncData2();
}).then((res) => {
    return asyncData1();
}).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});