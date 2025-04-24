var h1_elements = document.getElementsByTagName("h1");
console.log(h1_elements[0]);
console.log(h1_elements[0].innerText); //get element inner text

h1_elements[0].innerText="Hello ijse 01";//change inner text
h1_elements[1].innerHTML="Hello ijse 01";

h1_elements[0].innerText="<h2>Hello</h2>";//it re-present it as a text
h1_elements[0].innerHTML="<h2>Hello</h2>";//it re-present it as a html

let myname = document.getElementsByName("my-name");
console.log(myname[0]);
console.log(myname[0].innerText);
console.log(myname[0].innerHTML);
myname[0].innerText="TypeScript";