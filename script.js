const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_INPUT: 'todo-input'
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const inputField = document.getElementById('todo-input')

function newTodo() {
  addTodo()
  // alert('' + list)
  // alert('' + itemCountSpan.innerText)
}

function addTodo() {
  increaseItemCount()
  increaseUncheckedCount()
  
  let new_todo = document.createElement('li')
  
  let todo_text_node = document.createTextNode(inputField.value + '')
  
  let todo_checkbox = document.createElement('INPUT')
  todo_checkbox.setAttribute('type', 'checkbox')
  todo_checkbox.setAttribute('onclick',"onclickCheckBox()")
  
  let todo_button = document.createElement('button')
  
  new_todo.appendChild(todo_checkbox)
  new_todo.appendChild(todo_text_node)
  new_todo.appendChild(todo_button)
  
  list.appendChild(new_todo)
  
}

function onclickCheckBox() {
  // this.id use this to identify
  // if checked === false then counter+1
  // later if you delete this and checked is false you also need to counter - 1
  // if checked === true then counter -1
  alert(event.srcElement.id + '')
  // alert(_id + '')
}

function onClickButton() {
  // this.id use this to identify
  // if checked === true then counter+1
  // todo counter -1
  // this.parent() delete the parent
}

function resetInput() {
  inputField.value = ''  
}

function increaseItemCount() {
  itemCountSpan.innerText = Number( itemCountSpan.innerText) + 1  
}

function increaseUncheckedCount() {
  uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1
}

function decreaseItemCount() {
  itemCountSpan.innerText = Number( itemCountSpan.innerText) - 1  
}

function decreaseUncheckedCount() {
  uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1
}
