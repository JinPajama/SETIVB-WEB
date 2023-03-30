"use strict"

// Promise is a JavaScript object for a asynchronous operation.
//자바스크립트 비동기 실행 시 콜백함수 대신에 사용 가능한 것.
//1. state 2.producer , consumer
//state : pending -> fulfilled or rejected

//Producer vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (  network, read files  )
    console.log('doing something...');
    setTimeout(() => {
        resolve('Jin')                  
        //reject(new Error('no network'));
    }, 1000);
});

//2. Consumers: then, catch, finally
// 즉 then은 promise가 정상작동된 후 resolve 콜백함수를 통해 
// value의 파라미터로 전달된다.
promise
    .then(console.log)          //받아오는 값을 한 함수에만 넣을때는 생략가능
    // = then.(value => console.log(value));
    .catch(error => {
        console.log(error);
    })
    .finally(() => {            //finally 는 res, rej 후 무조건 실행
        console.log('finally');
    });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(2), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

//4. Error handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('A'), 1000);
    });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => B`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => C`, 1000));
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return 'A\''
    })
    .then(cook)
    .then(console.log)
