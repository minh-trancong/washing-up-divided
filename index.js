const runEl = document.querySelector("#run-el")
const resultEl = document.querySelector("#results-el")
const nameEl = document.querySelector("#name-el")
const washEl =document.querySelector("#washing")
const prepEl =document.querySelector("#prep")
const rinseEl =document.querySelector("#rinse")


runEl.addEventListener("click", function solve(){
    resultEl.innerHTML += '<h2>Kết quả:</h2>'
    let a = nameEl.value.split(' ')
    let ran = Math.floor((Math.random()* a.length))
    for (let i = 0; i < washEl.value; i++){
        ran = Math.floor((Math.random()* a.length))
        resultEl.innerHTML += `${a[ran]} - Rửa bát<br>`
        a.splice(ran, 1)
    }
    for (let i = 0; i < rinseEl.value; i++){
        ran = Math.floor((Math.random()* a.length))
        resultEl.innerHTML += `${a[ran]} - Tráng bát<br>`
        a.splice(ran, 1)
    }
    for (let i = 0; i < prepEl.value; i++){
        ran = Math.floor((Math.random()* a.length))
        resultEl.innerHTML += `${a[ran]} - Dọn dẹp<br>`
        a.splice(ran, 1)
    }
})
