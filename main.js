let count = 0;

function addTask() {
    count++;

    let container = document.getElementById("tasks");
    let inputValue = document.getElementById("inputvalue").value;
    let divElement = document.createElement("div");
    let spanElement = document.createElement("span");
    let deleteButton = document.createElement("button");

    divElement.setAttribute("id", "item" + count);

    spanElement.innerText = inputValue;

    deleteButton.innerText = "x";

    deleteButton.style.marginLeft = "50px";

    deleteButton.setAttribute("onclick", "deleteTask('item"+count+"')");

    container.appendChild(divElement);

    divElement.appendChild(spanElement);

    divElement.appendChild(deleteButton);
}


function deleteTask(element){
   let deletingDiv = document.getElementById(element);

   deletingDiv.parentNode.removeChild(deletingDiv);
}
