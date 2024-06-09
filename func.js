const sayHello = () => { console.log("Hello World") }
const add = (a, b) => {
 console.log(a + b)
}

const someTitle = () => { return 'Mój tytuł' }
if (typeof window !== 'undefined') { // Check if code is running in browser
    window.onload = function() {
        const example = () => {
            const fromInput = document.getElementById("example").value;
            document.getElementById("text").innerText = fromInput;
        }
        document.getElementById("action").addEventListener("click", example);
    }
}
module.exports = {
 sayHello,
 add,
 someTitle
}