//setTimeout - Delay execute function by few second

//setInterval - Repeat call func on specific interval

setTimeout(function()
{
    alert("helloe")
},3000);

var cont = 0;
setInterval(function(){
   alert(cont++)
},1000);

//after some inteval stop process

var cont = 0;
var interval = setInterval(function(){
   alert(cont++)
},1000);

setTimeout(function()
{
    clearInterval(interval);
},5000);


//After 2 second we need to return function
function fn()
{
    setTimeout(function()
    {
             return "hello";
    },2000);
    
}
//console.log(fn());

fu(function(){

});

//solition handle asynchronize method
function fn(callbackFN)
{
    setTimeout(function()
    {
        callbackFN ("hello");
    },2000);
    
}
console.log(fn());

fu(function(val){
console.log(val);
});

//Function using promise and another way implement  Asyncronice method using this one 
function fn2()
{
    var promise = new promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            resolve("hello0");
         },4000);

    });
    return promise;
}
var rep = fn2();

rep.then(function(data)
{
    console.log("Data =" +data);
},function(err){
    console.log("rttot =" +err);
});

// script tag not handle ADDevent listern when it is declare in head section because it is not loaded controller

document.getElementById('btn2').addEventListener('click',function(){
 alert("erorr");
});

//solution error once only time is loaded
window.onload = function()
{
    document.getElementById('btn2').addEventListener('click',function(){
        alert("erorr");
       });
}

// seconde method DOmContentLoaded method ?
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn2').addEventListener('click',function(){
        alert("erorr");
       });
});

//insertsertAdjecentHTML  
//befor begin
//afterbegin
//before end
//afterend

document.getElementById('btn2').addEventListener('click',function(){
    document.getElementById('divtagid').insertAdjacentHTML('afterend',<h1>hello</h1>);    
});

//json stringify(array) - This function help to store in string value
//json parse(stringobject)  - convert data string into array  

//Error after click
//One time error show not will display store 

//text move one text box to another text box using 1 second interval