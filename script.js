let test1 = document.querySelector('.test')
let submit = document.querySelector('.submit')
let mainbody = document.querySelector('.mainbody')
let myLibrary = [];

function Book() {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author1 = document.getElementById('author').value;
    let pages1 = document.getElementById('pages').value;
    let read1 = document.querySelector('input[name="read"]:checked').value;
    let obj = {
        name: title,
        author: author1,
        pages: pages1,
        read: read1,
    }
    myLibrary.unshift(obj);
}


function addBooktoLibrary() {
    Book();
    let newDiv = document.createElement("div");
    newDiv.classList.add("newDivw");
    newDiv.innerHTML = "Title: " + myLibrary[0].name + "<br>Author: " + myLibrary[0].author + "<br>Total pages: " + myLibrary[0].pages + "<br>Read status?";
    newDiv.style.width = "300px";
    newDiv.style.height = "300px";
    newDiv.style.margin = "10px";
    newDiv.style.borderRadius = "10px";
    newDiv.style.textAlign = "center";
    let newButton2 = document.createElement("button");
    newButton2.classList.add("cread");
    if (myLibrary[0].read == "yes") {
        newButton2.innerHTML = "Read";
    } else newButton2.innerHTML = "Unread";
    newButton2.addEventListener('click', function() {
        if (newButton2.innerHTML == "Read") {
            newButton2.innerHTML = "Unread";
        } else if (newButton2.innerHTML == "Unread") {
            newButton2.innerHTML = "Read";
        }
    });
    newDiv.appendChild(newButton2);
    let newButton = document.createElement("button");
    newButton.innerHTML = "Delete";
    newDiv.appendChild(newButton);
    mainbody.appendChild(newDiv);
    newButton.addEventListener('click', () => (mainbody.removeChild(newDiv)));
    }

submit.addEventListener('click', () => addBooktoLibrary());

