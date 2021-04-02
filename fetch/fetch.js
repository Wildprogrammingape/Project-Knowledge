// 要点:
// fetch("URL") 返回的是promise, 所以需要.then处理resolve和.catch处理reject
// .then()的参数response是Object, .catch()的参数error也是Object,是fetch API 帮我们创建并返回的
// response.json() 返回的是Promise, 所以需要.then()进一步获取数据，不同于JSON.parse()返回的是Object
// 进一步的.then() 获取的data即为对象Object，如需要可以用JSON.stringify()将对象转为JSON string格式

fetch("json-sample/sample.json")
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
});

// response对象如下, 里面的__proto__的.json() method保存着数据的内容：
//Response {type: "basic", url: "http://127.0.0.1:5500/json-sample/sample.json",redirected: false, status: 200, ok: true, …}



// async & await要点：
// 所有的async function最终都返回Promise，因此需要在调用 async funcion时候用.then()来获取数据
// 这样经过.then resolve的promise是Object， 而在async函数内部则不再需要.then来获取数据
// await 用来 wait until the promise resolve, 然后再assign the value to variable
// 这种写法便于chain promise together, 便于依次获取很多数据，而且是non-blocking 的不会阻碍其他代码运行

const getData = async() => {

    const response = await fetch("json-sample/sample.json"); // fetch返回的是promise
    const data = await response.json();          // response.json()返回的是promise

    //console.log(data); // 这里的data就是我们需要的Object，但是async函数返回只能是promise
    return data;
};

// 由于async函数return的是promise，所以需要.then来获取该数据Object
getData()
    .then((data) => console.log(data))
    .catch((err) => console.log("ERROR"));