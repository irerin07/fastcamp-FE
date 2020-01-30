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
