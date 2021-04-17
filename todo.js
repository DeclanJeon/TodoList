const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // forEach와 같됨 item 하나하나가 function의 인자로 넘어가서 실행됨
  // toDos array의 item 하나하나를 filter에 넘겨주고
  // true인 toDo만 return 됨
  const cleanToDos = toDos.filter(function(toDo){
    // 모든 toDos가 li의 id와 같지 않을 때 true를 리턴한다.
    // 선택한 li의 id라면 false 리턴.
    return toDo.id !== parseInt(li.id);
  });
  // toDo 삭제 시 전역변수 toDos 업데이트
  toDos = cleanToDos;
  // 로컬스토리지 업데이트
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length +1;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    // forEach()는 array에 담겨있는 것들 각각에 한번씩 함수를 실행
    // parsedToDos에 있는 각각의 객체 toDo에 대해 function 실행
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();