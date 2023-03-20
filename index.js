let newNumbers = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")

count = 0

function increment(){
    count = count + 1
    newNumbers.innerText = count
    
}

function save(){
      let saveDetail = count + " - "
      saveEL.textContent =  saveEL.textContent + saveDetail
      newNumbers.innerText = 0 
      count = 0
     
}




