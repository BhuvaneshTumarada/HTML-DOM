// Add Task
function addTask(){

    let input = document.getElementById("task");

    let value = input.value.trim();

    if(value==""){
        alert("Enter Task");
        return;
    }

    // create li
    let li=document.createElement("li");

    // textContent
    li.textContent=value;

    // create button
    let btn=document.createElement("button");

    btn.textContent="Delete";

    btn.className="delete";

    // remove()
    btn.onclick=function(){

        li.remove();

        updateCount();

    };

    // append button
    li.appendChild(btn);

    // append li
    document.getElementById("list").appendChild(li);

    input.value="";

    updateCount();

}

// Change Heading
function changeTitle(){

    let heading=document.getElementById("title");

    heading.innerHTML="JavaScript DOM Project";

    heading.style.color="green";

    heading.style.fontSize="40px";

}

// Highlight All Tasks
function highlightTasks(){

    let tasks=document.querySelectorAll("#list li");

    tasks.forEach(function(item){

        item.style.backgroundColor="purple";

        item.style.color="red";

    });

}

// Update Count
function updateCount(){

    let total=document.querySelectorAll("#list li").length;

    document.getElementById("count").innerHTML=
    "Total Tasks : "+total;

}

// Clear All
function clearAll(){

    let list=document.getElementById("list");

    list.innerHTML="";

    updateCount();

}

// querySelector Example
let heading=document.querySelector("#title");

console.log(heading);