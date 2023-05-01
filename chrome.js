let myLeads = []
const inputBtn = document.getElementById("input-btn") 
const inputEl= document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
    
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringfy(myLeads))
    renderLeads()

})


function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems +=`<li>
        <a href='${myLeads[i]}' target=_'blank'>${myLeads[i]}</a>
        </li>`
        
    }

    ulEl.innerHTML = listItems 
}