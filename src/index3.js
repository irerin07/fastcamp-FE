//비동기처리
//여러개의 작업들을 동시에 처리할 수 있다.
//다른 작업들이 끝나기를 기다릴 필요가 없다.

function work() {
  const start = Date.now();
  for (let i = 0; i < 100000000; i++) {}
  const end = Date.now();
  console.log(end - start + "ms");
}

work();
console.log("다음작업");
