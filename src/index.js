document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      handleToDo(e.target["new-task-description"].value)
      e.target["new-task-description"].value = ""
    })}
  });


function handleToDo(todo){
  let li = document.createElement("li")
  li.textContent = todo
  const ul = document.querySelector('ul')
  ul.appendChild(li)
}