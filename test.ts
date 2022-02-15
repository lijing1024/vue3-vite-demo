let course: string | number = 999;
course = 'true';


// 类型联合｜
type rate = '好' | '一般' | '差';
let score: rate = '一般';

// interface 对象类型限制
// 可选?、只读readonly
interface 极客时间课程 {
  name: string,
  price: number[],
  teacher?: string,
  readonly link: string
}

let abc: 极客时间课程 = {
  name: '测试课程名称',
  price: [999, 888, 666],
  link: 'http://baidu.com'
}


// 函数类型限制，可使用type或者interface来定义
type addFunction = (x: number, y: number) => number

interface getSum {
  (x: number, y: number): number
}

let add: addFunction = function (x: number, y: number): number {
  return x + y;
}
let sum: getSum = function (x: number, y: number): number {
  return x + y;
}

console.log('sum', sum(88, 99))



// 函数重载
// 支持多个类型的参数，且如果参数是数字，返回值也得是数字，如果参数是字符串，返回值也得是字符串
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
console.log('string', reverse('true'));
console.log('number', reverse(99778))


// 常用宿主环境变量
// let w: Window = window;
// console.log('window', w)
// let ele: HTMLElement = document.createElement('div');
// console.log('ele', ele)

// 泛型: 返回值类型与参数一致
function identity0(arg: any): any {
  return arg;
}
// T 自定义类型变量
function identity<T>(arg: T): T {
  return arg;
}
let a = identity<string>('ceshi');
console.log('identity-string', a)

let b = identity<number>(999);
console.log('identity-number', b)

// keyof 获取对象属性名称，返回值为联合类型
interface vueCourse {
  name: string,
  price: number
}
type courseProperty = keyof vueCourse;
let k: courseProperty = 'name';
let l: courseProperty = 'price';

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person;
let e: K1;
console.log('keyof', e)

// extends: 条件判断
type extendType<T> = T extends boolean ? "布尔类型" : 1
type extendType1 = extendType<string>
type extendType2 = extendType<boolean>
let aaa: extendType1 = 1
let bbb: extendType2 = "布尔类型"
console.log(aaa)
console.log(bbb)

// in 遍历枚举
type course = 'vue' | 'react' | 'angular';
type courseProps = {
  [k in course]: number
}
let test: courseProps = {
  vue: 77,
  react: 90,
  angular: 78
}


// K extends keyof T 限制K的类型必须是T的属性之一
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
console.log(getProperty(test, 'vue'))
console.log(getProperty(test, 'angular'))

// infer 返回传入函数的返回值类型
type Foo = () => courseProps;
type ReturnType<T> = T extends () => infer P ? P : never;
type Bar = ReturnType<Foo>



interface Todo {
  title: string
  desc: string
  done: boolean
}

type optionalTodo<T> = {
  [K in keyof T]?: T[K]
}

