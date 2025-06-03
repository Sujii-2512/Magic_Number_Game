// Event listner that triggers every time something changes inside
//     the input element withour pressing the enter button.

/*
example
*/

const inputElement = document.getElementById("name")
inputElement.addEventListener("input",function(event){
    console.log(event.target.value);
})