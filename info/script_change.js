let btnText = document.querySelector('#java');
let btnHtml = document.querySelector('#btnHtml');
let content = document.querySelector('#content');
let para1 = document.querySelector('#code_javaScript');
let para2 = document.getElementById('code_java');

// btnText.addEventListener('click',() => {
//   para1.innerText="hell34";

// });

// document.getElementById("#para1").style.display = "none";

// btnHtml.addEventListener('click',() => {
//     para1.innerHTML=para2;

// });

// document.getElementById("code_java").style.display = "none";
document.getElementById("code_javaScript").style.display = "none";
document.getElementById("code_python").style.display = "none";
document.getElementById("code_c++").style.display = "none";

document.getElementById('java').style.background="linear-gradient(0deg, rgb(124, 137, 248), rgb(84, 102, 255))"


document.getElementById('java').onclick = function() {
    document.getElementById("code_javaScript").style.display = "none";
    document.getElementById("code_python").style.display = "none";
    document.getElementById("code_c++").style.display = "none";
    document.getElementById("code_java").style.display = "block";

    document.getElementById('java').style.background="linear-gradient(0deg, rgb(124, 137, 248), rgb(84, 102, 255))";
    document.getElementById('python').style.background=" rgb(165, 187, 201)";
    document.getElementById('javaScript').style.background=" rgb(165, 187, 201)";
    document.getElementById('c++').style.background=" rgb(165, 187, 201)";
}

document.getElementById('javaScript').onclick = function() {
 document.getElementById("code_javaScript").style.display = "block";
document.getElementById("code_python").style.display = "none";
document.getElementById("code_java").style.display = "none";
document.getElementById("code_c++").style.display = "none";

document.getElementById('java').style.background="l rgb(165, 187, 201)";
    document.getElementById('python').style.background=" rgb(165, 187, 201)";
    document.getElementById('javaScript').style.background=" linear-gradient(0deg, rgb(124, 137, 248), rgb(84, 102, 255))";
    document.getElementById('c++').style.background=" rgb(165, 187, 201)";
}

document.getElementById('python').onclick = function() {
    document.getElementById("code_javaScript").style.display = "none";
    document.getElementById("code_python").style.display = "block";
    document.getElementById("code_c++").style.display = "none";
    document.getElementById("code_java").style.display = "none";

    document.getElementById('java').style.background=" rgb(165, 187, 201)";
    document.getElementById('python').style.background="linear-gradient(0deg, rgb(124, 137, 248), rgb(84, 102, 255))";
    document.getElementById('javaScript').style.background=" rgb(165, 187, 201)";
    document.getElementById('c++').style.background=" rgb(165, 187, 201)";
}

document.getElementById('c++').onclick = function() {
    document.getElementById("code_javaScript").style.display = "none";
    document.getElementById("code_python").style.display = "none";
    document.getElementById("code_c++").style.display = "block";
    document.getElementById("code_java").style.display = "none";

    document.getElementById('java').style.background=" rgb(165, 187, 201)";
    document.getElementById('python').style.background=" rgb(165, 187, 201)";
    document.getElementById('javaScript').style.background=" rgb(165, 187, 201)";
    document.getElementById('c++').style.background=" linear-gradient(0deg, rgb(124, 137, 248), rgb(84, 102, 255))";
}

// document.getElementById('btnHtml').onclick = function() {
//     document.getElementById("para1").style.display = "block";
// }

