let value = 1; //변수
console.log(value);
value = 2;
console.log(value);

const a = 1; //상수
console.log(a);

let good = null; // 아무것도 없는 상태
let something = undefined; //정해지지 않은 상태

let b = 1;
//실행 시점이 다르다
console.log(b++); //1
console.log(b); //2
console.log(++b); //3

// () -> ! -> && -> ||
const bool = !((true && false) || (true && false) || !false);
console.log(bool);

const a1 = 1;
if (a1 + 1 === 2) {
  const a1 = 2;
  console.log("value inside if: " + a1);
}
console.log("value outside if: " + a1);

const a2 = 10;
if (a2 <= 10) {
  console.log("a2 is less than or equal to 10");
} else if (50 > a2 > 10) {
  console.log("a2 is greater than 10 but less than 50");
} else {
  console.log("a2 is greater than 50");
}

const device = "iphone";

switch (device) {
  case "iphone":
    console.log("iphone");
    break;

  default:
    console.log("what is this");
}

function add(a3, b3) {
  return a3 + b3;
}
const sum = add(4, 5);
console.log(sum);

//template literal
function hello(name) {
  console.log(`Hello ${name}`);
}
hello("andrew");

const addition = (a, b) => {
  return a + b;
};
const sum2 = addition(50, 10);
console.log(sum2);

const hello2 = name2 => {
  console.log(`Hello ${name2}`);
};
hello2("irerin");

const dog = {
  name: "pups",
  sound: "woof",
  say: function() {
    console.log(this.sound);
  }
};

dog.say();

const cat = {
  name: "chonkster",
  sound: "what"
};

cat.say = dog.say;
cat.say();

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum function activated!");
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

const doggo = {
  _name: "pupper",
  get name() {
    console.log("yo name?");
    return this._name;
  },
  set name(value) {
    console.log("name change");
    this._name = value;
  }
};

console.log(doggo.name);
doggo.name = "gud boi";
console.log(doggo.name);

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
};

console.log(numbers2.sum);
numbers2.a = 5;
console.log(numbers2.sum);

const array = [1, 2, 3, 4, 5];
console.log(array);

const object = [{ name: "pooper" }, { name: "chonkster" }];
console.log(object);

object.push({ name: "doggo" });
console.log(object);

console.log(object.length);

for (let i = 0; i < object.length; i++) {
  console.log(object[i]);
}

let j = 0;
while (j < object.length) {
  console.log(object[j]);
  j++;
}

let isFun = false;
let num = 0;
while (isFun == false) {
  console.log("not fun");
  num++;
  if (num > 10) {
    isFun = true;
    console.log("is fun");
  }
}

const numbersArray = [1, 2, 3, 4, 5];
for (let numb of numbersArray) {
  console.log(numb);
}

const catto = {
  name: "miao",
  sound: "miaaaaao",
  age: 3
};
console.log(Object.entries(catto));
console.log(Object.keys(catto));
console.log(Object.values(catto));

for (let key in catto) {
  console.log(`${key} : ${catto[key]}`);
}

for (let k = 0; k < 15; k++) {
  if (k == 2) {
    continue;
  }
  console.log(k);
  if (k == 9) {
    break;
  }
}

const num1 = [1, 2, 3, 4, 5, 6, 7];
for (let nub of num1) {
  console.log(nub); //1,2,3,4,5,6,7
}

const num2 = [1, 2, 3, 4, 5, 6, 7];
for (let nub2 in num2) {
  console.log(nub2); //0,1,2,3,4,5,6
}

const fruits = ["apple", "orange", "melon", "pear", "banana", "strawberry"];

function print(fruit) {
  console.log(fruit);
}
fruits.forEach(print);

//더 깔끔하게 화살표 함수를 사용
fruits.forEach(fruit => {
  console.log(fruit);
});

const items = [
  {
    id: 1,
    text: "hi"
  },
  {
    id: 2,
    text: "hello"
  }
];

const before = [1, 2, 3, 4, 5, 6, 7, 8];
const square = before.map(n => n * n);
console.log(square);

const text = items.map(item => item.text);
console.log(text);

const index = fruits.indexOf("banana");
console.log(index);

const todos = [
  {
    id: 1,
    text: "javascript",
    done: true
  },
  {
    id: 2,
    text: "javascript function",
    done: true
  },
  {
    id: 3,
    text: "javascript objct",
    done: true
  },
  {
    id: 4,
    text: "javascript array function",
    done: false
  }
];

const todoIndex = todos.findIndex(todo => todo.id === 2);
console.log(todoIndex);

const todoFind = todos.find(todo => todo.id === 3); //객체를 반환
console.log(todoFind);

const todoFind2 = todos.find(todo => todo.text === "javascript");
console.log(todoFind2);

const tasksNotFinished = todos.filter(todo => !todo.done);
console.log(tasksNotFinished);

//splice는 기존의 배열을 수정한다.
const spliceArray = [1, 2, 3, 4, 5, 6, 7];
const indexSplice = spliceArray.indexOf(5);
const spliced = spliceArray.splice(indexSplice);
console.log(indexSplice);
console.log(spliceArray);
console.log(`spliced ${spliced}`);

//slice는 기존의 배열을 건드리지 않는다.
const sliceArray = [1, 2, 3, 4, 5, 6, 7];
const sliced = sliceArray.slice(0, 2);
console.log(sliced);
console.log(sliceArray);

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const value1 = newNumbers.shift(); //맨 앞의 원소를 밖으로 꺼낸다.
console.log(value1);
console.log(newNumbers);

const value2 = newNumbers.pop(); // 맨 뒤의 원소를 밖으로 꺼낸다.
console.log(value2);
console.log(newNumbers);

newNumbers.unshift(12); // 맨 앞부분에 원소를 추가한다
console.log(newNumbers);

newNumbers.push(25); // 맨 뒷부분에 원소를 추가한다.
console.log(newNumbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2); //기존 배열을 수정하지 않고 배열을 합친다.
console.log(arr3);
console.log(arr1);
console.log(arr2);

const arr = [1, 2, 3, 4, 5];
console.log(arr.join()); //parameter는 separator를 지정할 수 있다.

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum3 = numbers3.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
});
//0은 초기 accumulator값, accumulator는 누적된 값, current는 각 원소를 가리키는 값
// 각 원소가 몇번째인지 알려주는 index, array는 함수를 실행하고 있는 자신을 가리키는 array
console.log(sum3);

const alphabets = ["a", "a", "a", "e", "b", "d", "a", "b"];
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});
console.log(counts);

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  // 새로운 객체가 만들어질때마다 같은 내용의  say함수가 계속 만들어진다.
  // this.say = function() {
  //   console.log(this.sound);
  // };
}

//객체 생성자로 생성한 객체들간 공동으로 공유하는 함수 혹은 값을 설정할 수 있다.
Animal.prototype.say = function() {
  console.log(this.sound);
};

const dogg = new Animal("dog", "pooper", "woof");
dogg.say();
const catt = new Animal("cat", "catto", "what");
catt.say();

function Dog(name, sound) {
  //this 해당 객체 생성자에서의 this를 넣어준다.
  Animal.call(this, "dog", name, sound);
}

function Cat(name, sound) {
  Animal.call(this, "dog", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const newDog = new Dog("shibe", "wow");
const newCat = new Cat("chonkster", "whattt");

newDog.say();
newCat.say();

class AnimalClass {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  //자동으로 prototype으로 설정이 된다.
  say() {
    console.log(this.sound);
  }
}

const dogClass = new Animal("dog", "woot", "woooot");
const catClass = new Animal("cat", "caat", "caaaaaaaat");

dogClass.say();
catClass.say();

class DogDog extends Animal {
  constructor(name, sound) {
    super("dog", name, sound);
  }
}

class CatCat extends Animal {
  constructor(name, sound) {
    super("cat", name, sound);
  }
}

const doog = new DogDog("doggy", "woooof");
const caat = new CatCat("catto", "waaaaaaaa");

doog.say();
caat.say();
