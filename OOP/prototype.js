// 每个object都有自身的prototype, 该prototype包含该类型的object的method
// 比如Array object有Array prototype， Date object有 Date prototype
// 而__proto__是对象的property,它只是个reference，指向该类型的对象的prototype

// class关键字是JS的语法糖，本质是用函数作为constructor, 再用prototype来添加method
// 下面的写法是JS没有class之间创建类的方法，class的引入是为了让其他编程语言的人方便使用

// JS中，所有的数据类型最终都继承 Object的prototype, 比如Array的__proto__中，最终都会继承Object的__proto__
function User(username, email){
    this.username = username;
    this.email = email;
}

// 用Object.prototype 将method直接写入该object的prototype中
User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
}
User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
}

const userOne = new User('mario', 'mario@gmail.com');

console.log(userOne);

userOne.login();
userOne.logout();



// // prototype inheritance 继承的写法
// function Admin (username, email, title){
//     User.call(this, username, email); // 等同于super,调用parent class的constructor
//     this.title = title;
// }
// // 继承母类prototype的写法
// Admin.prototype = Object.create(User.prototype);
// // 添加新method
// Admin.prototype.delete = function(){
//     console.log('delete something');
// }