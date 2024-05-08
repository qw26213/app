const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}

console.log(getArray<string>('123', 5).map(item => item.length));

const getArr = <T, U>(value: T, val: U, times: number): [T, U][] => {
  return new Array(times).fill([value, val])
}

console.log(getArr<string, number>('123', 123, 5).map(item => item.length));

type getArr1 = <T>(arg: T, times: number) => T[]
let getArray1: getArr1 = (arg: any, times: number) => {
  return new Array(times).fill(arg)
}


// public 可以被读取，继承和修改
// private 子类不可以继承，
// protected 子类可以继承该修饰符定义的方法，不可继承该修饰符定义的属性
// readonly 只读属性，子类可以访问

// static 子类不能继承的静态方法

// set get 存取器

// abstract 定义抽象类

class UserInfo {
  public readonly name: string //定义只读属性
  public age?: number // 可选属性
  constructor(name: string) {
    this.name = name
  }
}

const userInfo = new UserInfo('lison')

userInfo.name = '111' //报错

// 声明合并
// 装饰器