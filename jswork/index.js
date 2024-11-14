// console.log("Hello world")
// let a=12;
// console.log("a="+a);
// if(a>10){
//      let b=30;
//     console.log("Hi",a);
// }
// let a="12";
// let b=12;
// let sin=Symbol("123");
// let today=Date();
// console.log(typeof today)
// if(a===b){
//     console.log("hello");
// }
// else{
//     console.log("java");
// }
// let d=function hi(str="hello"){
//     console.log("hi function calling "+str);
// }
// d();
// function sum(a,b,c=10)
// {
//     return a+b+c;
// }
// let total=sum(23,45);
// console.log(total);

// function selectLanguage(lang)
// {
//     let data;
//     if(lang=='c'){
//     function cCompiler(){
//         return "c compiler selected";
//         }
//         data=cCompiler();
//     }
//     else if(lang=='java'){
//         function javaCompiler(){
//              return "java compiler selected";
//         }
//         data=javaCompiler();
//     }
//    return data;
// }
// let s=selectLanguage('c');
// console.log(s)


console.dir(document)
let div =document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerText="Abes";
// div[0].innerHTML="<h1 style=color:red>Abes</h1>";
// const h1=document.createElement("hi");
// h1.innerText="Element is created by dom";
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// div[0].appendChild(h1);
// console.log(h1);

// const img=document.createElement('img');
// img.src='amazon.png';
// img.setAttribute("height","400px");
// console.log(img);
// div[0].appendChild(img);
// div[0].removeChild(img);

// const button=document.getElementById("btn");
// console.log(button);
// const display=document.getElementById("disp");
// console.log(display);
// function getData(){
//     console.log("calling getdata");
//     display.innerHTML="<h3 style=color:red>Welcome to cse department</h3>"
// }

// button.addEventListener("click",getData);


// const promise1=new Promise(
//     (resolve,reject)=>{
//         let a=Math.random()*1000;
//         console.log(a)
//         if(a>100 && a<200){
//           resolve("value of a is resolved ");
//         }
//         else{
//           reject("a is rejected");
//         }
//     }
// );
// promise1.then((msg)=>{console.log(msg)}).catch(error=>{console.log(error)})
// .finally(msg=>console.log("All resource have being executed"))


// const promise2=new Promise(
//     (resolve,reject)=>{
//         resolve({name:"ADARSH",branch:"CSE"});
//     }
// );
// promise2.then((data)=>{console.log(data)}).catch(error=>{console.log(error)});

const response=fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        for(let i=0;i<30;i++){
        console.log(res.products[i].id+" "+res.products[i].title)
        const h2=document.createElement("h2")
        h2.innerText=res.products[i].id+" "+res.products[i].title
        div[0].append(h2)
        }
    })
})
