let course: string | number = 999;
course = 'true';

type rate = '好' | '一般' | '差';
let score: rate = '一般';

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



type addFunction = (x: number, y: number) => number

let add: addFunction = function (x: number, y: number): number {
  return x + y;
}


// 泛型
function identity<T>(arg: T): T {
  return arg;
}
let a = identity<string>('ceshi');
console.log(a)

let b = identity<number>(999);
console.log(b)


interface vueCourse {
  name: string,
  price: number
}
type courseProperty = keyof vueCourse;
let k: courseProperty = 'name';
let l: courseProperty = 'price';


type extendType<T> = T extends boolean ? "布尔类型" : 1
type extendType1 = extendType<string>
type extendType2 = extendType<boolean>
let aaa: extendType1 = 1
let bbb: extendType2 = "布尔类型"
console.log(aaa)
console.log(bbb)