function updateCounter() {
    let all = document.querySelectorAll("#taskList li").length
    let done = document.querySelectorAll("#taskList .completed").length
    document.getElementById("counter").textContent =
        `Total: ${all} | Done: ${done} | Remaining: ${all - done}`
}

function addTask(){
    let input = document.getElementById("taskInput")
    let task = input.value

    if(task === "") {
        alert("Please enter a task!")
        return
    }

    let li = document.createElement("li")

    let span = document.createElement("span")
    span.textContent = task

    span.onclick = function(){
        span.classList.toggle("completed")
        updateCounter()
    }

    let delBtn = document.createElement("button")
    delBtn.textContent = "Delete"

    delBtn.onclick = function(e){
        e.stopPropagation()
        li.remove()
        updateCounter()
    }

    li.appendChild(span)
    li.appendChild(delBtn)

    document.getElementById("taskList").appendChild(li)

    input.value = ""
    updateCounter()
}