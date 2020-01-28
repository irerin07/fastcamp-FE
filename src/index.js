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
