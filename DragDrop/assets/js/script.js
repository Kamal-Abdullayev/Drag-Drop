const form = document.querySelector("form");
const todoListBox = document.querySelector(".todo-list-box");
const input = document.querySelector(".form-control");
let num = 0

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim().length === 0) {
        alert("Empity or white space!!!");
    }
    else {
        const todoListItems = Array.from(document.querySelectorAll(".todo-list-item span"));
        if (!todoListItems.find(x => x.textContent === input.value)) {
            todoListBox.innerHTML += `
            <div class="todo-list-item" draggable="true" id="${num += 1}">
                <span>${input.value}</span>
                <button class="btn remove-btn">
                <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            `;
            input.value = "";
        } else {
            alert("This input has been added!!!");
        }

        const removeBtn = document.querySelectorAll(".remove-btn");

        removeBtn.forEach(btn => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
            })
        })
    }

    let doneElements = document.querySelector(".done-list-wrapper");
    let lists = Array.from(document.querySelectorAll(".todo-list-item"));

    lists.forEach((item) => {
        item.ondragstart = function (e) {
            e.dataTransfer.setData("id", this.id);
        }
    })

    doneElements.ondragover = function (e) {
        e.preventDefault();
    }

    doneElements.ondrop = function (e) {
        let id=e.dataTransfer.getData("id");
        let element = document.getElementById(id);
        doneElements.appendChild(element)
    }

})




// listItem.forEach(item => {
//     item.ondragstart = function (e) {
//         e.dataTransfer.setData("id", this.id);
//         console.log(e.dataTransfer.setData("id", this.id));
//         console.log(id);
//     }
// })

// doneElements.ondragover = function (e) {
//     e.preventDefault();
// }

// doneElements.ondrop = function (e) {
//     let id = e.dataTransfer.getData("id");
//     let element = document.getElementById(id);
//     // console.log(element);
//     // doneListBox.appendChild(element);
// }