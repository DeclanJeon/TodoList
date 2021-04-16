const form = document.querySelector('.forms')
const input = document.querySelector('.inputs')
const ul = document.querySelector('.js-ul')


 const USER ='jmean'

let TODOS =[];

//DELBTN 버튼에 삭제 기능구현
function deletTodo(e) {
console.log(e.target.parentNode)
const btn = e.target       
const li = btn.parentNode    

 ul.removeChild(li)        

const cleanTodo =  TODOS.filter((todo)=>{
    return todo.id !== parseInt(li.id)      
});

 TODOS = cleanTodo
 saveTODOS()     
}

// LIST , DELBTN 버튼 추가
function newList(text){
    const li = document.createElement('li');
    const delBtn = document.createElement('button'); 
    const span = document.createElement('span')
    const newId = TODOS.length + 1

    delBtn.innerText = 'X'
delBtn.addEventListener('click', deletTodo)
    span.innerText = text
    li.appendChild(span)
    li.appendChild(delBtn)
    ul.appendChild(li)
    li.id = newId 

    const TODOobj = {
        text: text,
        id: newId
    }
    TODOS.push(TODOobj)
    saveTODOS()
}

// localStorage SET
function saveTODOS() {
    localStorage.setItem(USER, JSON.stringify(TODOS))
}

// INPUT
function submitHandle(e) {
    e.preventDefault();
    const inputvalue = input.value
    console.log(inputvalue)
    newList(inputvalue)
    input.value = ''
 }

// localStorage GET
function loadTODOS() {
    const LoadTODO = localStorage.getItem(USER); 
if (LoadTODO !== null) {
 const parseTODOS = JSON.parse(LoadTODO)
parseTODOS.forEach(todo => {
    newList(todo.text)
})
    }
     
}

function init() {
    loadTODOS()
form.addEventListener('submit', submitHandle)
}

init()