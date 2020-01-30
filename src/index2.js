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
