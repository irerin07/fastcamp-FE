// //비동기처리
// //여러개의 작업들을 동시에 처리할 수 있다.
// //다른 작업들이 끝나기를 기다릴 필요가 없다.

// function work(callback) {
//   //비동기형태로 변환
//   setTimeout(() => {
//     const start = Date.now();
//     for (let i = 0; i < 10; i++) {}
//     const end = Date.now();
//     console.log(end - start + "ms");
//     callback(end - start);
//   }, 0);
// }
// console.log("작업시작");
// //console.log(end - start + "ms");가 실행 된 후
// //callback함수가 호출이 된다(callback(end - start);
// //callback(end - start);로 계산한 값이
// //work로 넘어가서 출력이 된다.
// work(ms => {
//   console.log("작업 끝");
//   console.log(ms + "ms 걸림");
// });
// console.log("다음작업");

// //promise
// //비동기작업을 좀 더 편리하게 사용하기 위해 ES6에 추가된 기능
// // function increaseAndPrint(n, callback) {
// //   setTimeout(() => {
// //     const increased = n + 1;
// //     console.log(increased);
// //     if (callback) {
// //       callback(increased);
// //     }
// //   }, 1000);
// // }

// //callback hell, 콜백 지옥
// // increaseAndPrint(0, n => {
// //   increaseAndPrint(n, n => {
// //     increaseAndPrint(n, n => {
// //       increaseAndPrint(n, n => {
// //         console.log("done!");
// //       });
// //     });
// //   });
// // });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("result");
//     reject(new Error());
//   }, 1000);
// });

// myPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// function increaseAndPrint(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const value = n + 1;
//       if (value === 5) {
//         const error = new Error();
//         error.name = "ValueisFive";
//         reject(error);
//         return;
//       }
//       console.log(value);
//       resolve(value);
//     }, 1000);
//   });
// }

// //코드의 깊이가 깊어지지 않는 장점이 있다.
// increaseAndPrint(0)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .then(increaseAndPrint)
//   .catch(e => {
//     console.error(e);
//   });

//async, await
function sleep(ms) {
  //ms이후에 resolve 함수가 호출되고 Promise가 끝나게 된다.
  return new Promise(resolve => setTimeout(resolve, ms));
}

// async function makeError() {
//   await sleep(1000);
//   const error = new Error();
//   throw error;
// }

const getDog = async () => {
  await sleep(1000);
  return "woof";
};

const getRabbit = async () => {
  await sleep(500);
  throw new Error();
};

const getTurtle = async () => {
  await sleep(3000);
  return "ninja";
};

//async함수의 결과물은 promise
async function process() {
  // try {
  //   await makeError();
  // } catch (e) {
  //   console.error(e);
  // }
  // const [dog, rabbit, turtle] = await Promise.all([
  //   getDog(),
  //   getRabbit(),
  //   getTurtle()
  // ]); //하나라도 에러가 발생하면 실행이 불가능하다
  try {
    const fastest = await Promise.race([getDog(), getRabbit(), getTurtle()]); // 가장 빠른 것이 에러가 발생할때만 에러로 간주한다.
  } catch (e) {
    console.error(e);
  }
  // console.log(dog);
  // console.log(rabbit);
  // console.log(turtle);
}
process();
