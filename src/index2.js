//삼항연산자
const array = [1, 2, 3, 4];
// let text = "";
// if (array.length === 0) {
//   text = "empty array";
// } else {
//   text = "array is not empty";
// }
// console.log(text);
let text = array.length === 0 ? "empty array" : "array is not empty";
console.log(text);

const condition1 = false;
const condition2 = false;

const value = condition1 ? "wow" : condition2 ? "blabla" : "foo";
console.log(value);

//truthy, falsy
function print(person) {
  if (!person) {
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John"
};

print(person);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN);
console.log(!false);

console.log(![]);
console.log(!{});

//단축 평가 논리 계산법(short circuit evaluation)
const dog = {
  name: "woofer"
};

function getName(animal) {
  // if (animal) {
  //   return animal.name;
  // }
  // return undefined;
  return animal && animal.name;
}

const name = getName(dog);
console.log(name);

// %%는 앞에 오는것이 true라면 결과물은 오른쪽에 있는 것이다.
console.log("hello" && "bye"); //bye
console.log(false && true); // false
console.log(true && false); // false

const namelessDog = {
  name: ""
};

function getNameOr(animal) {
  const name = animal && animal.name;
  return name || "no name";
}
const name2 = getNameOr(namelessDog);
console.log(name2);

// ||는 앞에 오는것이 false라면 결과물은 오른쪽 값이 된다.
console.log(false || true);
console.log(false || null);
console.log(true || false);
console.log(true || "such wow");

//함수의 기본 파라미터
const calculateCircleArea = (r = 1) => {
  // const radius = r || 1;
  return Math.PI * r * r;
};

const area = calculateCircleArea();
console.log(area);

//조건문 조금 더 깔끔하게 사용하기
// function isAnimal(text) {
//   // return (
//   //   text === 'cat' || text === 'dog' || text === 'parrot'
//   // )
//   const animals = ['cat', 'dog', 'parrot'];
//   return animals.includes(text);
// }

const isAnimal = text => ["cat", "dog", "parrot"].includes(text);

console.log(isAnimal("parrot"));
console.log(isAnimal("laptop"));

function makeSound(animal) {
  // if (animal === "dog") return "woof";
  // if (animal === "cat") return "what";
  // if (animal === "chicken") return "chicken attack";
  // if (animal === "pigeon") return "9999999";
  // return "....?";

  // const sounds = {
  //   dog: "woof",
  //   cat: "what",
  //   chicken: "chicken attack",
  //   pigeon: "999999"
  // };
  // return sounds[animal] || "....?";

  const tasks = {
    dog: () => {
      console.log("woof");
    },
    cat: () => {
      console.log("what");
    },
    chicken: () => {
      console.log("chicken attack");
    },
    pigeon: () => {
      console.log("999999");
    }
  };

  const task = tasks[animal];

  if (!tasks[animal]) {
    console.log("...?");
    return;
  }
  task();
}

// console.log(getSound("dog"));
// console.log(getSound("hooman"));

makeSound("chicken");

//비구조화 할당
const object = { a: 1, b: 2, c: 3 };

const { a, b, c } = object;

console.log(a);

const fruit = {
  name: "apple"
};
const { name: nickname } = fruit;
console.log(nickname);

const array2 = [1, 2, 4, 5];
const [one, two, three = 3] = array;
console.log(one);
console.log(three);

const deepObject = {
  state: {
    info: {
      name: "andrew",
      languages: ["korean", "english"]
    }
  },
  value: 5
};

// const { name3, languages } = deepObject.state.info;
// const { value2 } = deepObject;

const {
  state: {
    info: {
      name3,
      languages: [first, second]
    }
  },
  value2
} = deepObject;

const extracted = {
  name, //특정 객체를 만들떄 특정 Key이름으로 선언 된 값이 있다면 value설정을 생략할 수 있다.
  first,
  second,
  value
};

console.log(extracted);

//spread, rest
const slime = {
  name: "slimey"
};

const mySlime = {
  // name: 'slimey',
  ...slime,
  attribute: "mine"
};

const myRedSlime = {
  // name:'slimey',
  // attribute: 'mine',
  ...mySlime,
  color: "red"
};
const myBlackSlime = {
  // name:'slimey',
  // attribute: 'mine',
  ...myRedSlime,
  color: "black"
};

console.log(slime);
console.log(mySlime);
console.log(myRedSlime);
console.log(myBlackSlime);

const wild = ["dog", "cat"];
const moreWild = [...wild, "koala", ...wild];
console.log(moreWild);

const { color, ...rest } = myBlackSlime; //color를 제외한 나머지를 rest에 저장
console.log(color);
console.log(rest);

const num = [1, 2, 3, 4, 5, 6, 7];
const [alpha, bravo, charlie, ...res] = num;
console.log(res);

//함수 파라미터의 rest
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));

//함수 인자에서의 spread
function subtract(x, y) {
  //x 와 y는 파라미터
  return x - y;
}
const subNums = [1, 2];
const result = subtract(...subNums);
console.log(result);
//12 와 13은 인자

//scope.
//scope - 변수 함수를 선언할 때 유효한 범위를 의미한다.
//global - 전역변수. 코드의 모든 범위에서 사용 가능
//function - 특정 함수 내부에서만 사용 가능
//block - if for와 같이 중괄호로 감싸진 block내부에서만 사용 가능

const value1 = "hello";

function myFunction() {
  console.log(value1); //전역변수 value1을 가리킨다.
}
function myAnotherFunction() {
  const value1 = "bye"; //이 함수 내부에서만 유효한 value1
  console.log(value1);
}

myFunction();
myAnotherFunction();
console.log(`global scope: ${value1}`);

function myNewFunction() {
  const value = "bye!";
  const anotherValue = "world";
  function functionInside() {
    console.log("functionInside: ");
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}

myNewFunction();
console.log("global scope: ");
console.log(value1);
// console.log(anotherValue); anothervalue는 함수 스코프 내부에 있기 때문에 함수 외부에서는 사용할 수 없다.

function myNewIfFunction() {
  const value1 = "bye!";
  if (true) {
    const value1 = "world";
    console.log("block scope: ");
    console.log(value1);
  }
  console.log("function scope: ");
  console.log(value1);
}

myNewIfFunction();
console.log("global scope: ");
console.log(value1);

//var를 사용하는 경우
function myVarFunction() {
  var value1 = "bye!";
  if (true) {
    var value1 = "world";
    console.log("block scope: ");
    console.log(value1);
  }
  console.log("function scope: ");
  console.log(value1);
}

myVarFunction();
console.log("global scope: ");
console.log(value1);

//hoisting - 아직 선언되지 안흔 함수, 변수를 끌어올려서 사용하는것

myHoistFunction();

function myHoistFunction() {
  console.log("myHoistFunction");
}
//let과 const가 호이스팅이 되지 않는게 아니라
//호이스팅은 되지만 변수생성과정이 달라서 일시적인 사각지대(TDZ)가 생성되어
//초기화전엔 액세스할수 없다
