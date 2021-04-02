// inheritance指的是 子class继承parent class的property和method, 但也可以添加自己的property
// super() 用在child class中，用于调用parent class的constructor

class User{
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login(){ // 简写，这样this指的是该object
        console.log(`${this.username} just logged in`);
        return this; // 返回的是该object, 非简写情况指的是window object
    }
    logout(){ 
        console.log(`${this.username} just logged out`);
        return this;
    }
    increaseScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

// inheritance 继承
class Admin extends User{
    constructor(username, email, title){ // 不加constructor的话自动调用parent class的constructor
        super(username, email);   // 必须用super() 调用parent class的constructor
        this.title = title;
    }
    helloAdmin(){
        console.log('Hello Admin');
    }
}

const userOne = new User('mario', 'mario@gmail.com');
const userTwo = new User('chunli', 'chunli@gmail.com');

// method chaining 通过返回this该Object进行连接
userOne.login().increaseScore().increaseScore().logout();

// mario just logged in
// mario has a score of 1
// mario has a score of 2
// mario just logged out

// Inheritance
const userThree = new Admin('Long','chenlong0518@hotmail.com','This is the title');
userThree.helloAdmin();
console.log(userThree.username, userThree.email);

// Hello Admin
// Long chenlong0518@hotmail.com
