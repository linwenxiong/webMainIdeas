class Student {
    public fullName: string; // 公有属性，继承类可以访问
    private pfullname: string; // 私有属性，只有本类可以访问
    constructor(public firstName: string, public middleInitial: string,) { // 这些公有属性继承类都可以访问
        this.fullName = firstName + " " + middleInitial;
    }
    setData() {
        this.fullName = 'fullname'
    }
    getData() {
        console.log(this.fullName, 'sdfsdfdsfsfsd')
    }
}

class Stu2 extends Student{
    myData() {
        console.log(this.firstName)
    }
}

let user = new Student("Jane", "M.");

console.log(user)
// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = new Student("Jane", "M.", "User");

// document.body.innerHTML = greeter(user);



// function identity(arg: number): number {
//     return arg;
// }

function identity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

const a = identity<string>(['3'])
