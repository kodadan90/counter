
//let count = 0
//let saveEl = document.getElementById("save-el")
//let countEl = document.getElementById("count-el")

//function increment() {
    
   // count += 1
//}
//function increment() {
 // console.log("the button was clicked")
//}

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
   count += 1
   countEl.innerText =count
}

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save() {
 let countStr = count + " - "
 saveEl.textContent += countStr
 countEl.textContent = 0
 count = 0
}


