let test1 = document.querySelector('.test')
let submit = document.querySelector('.submit')
let mainbody = document.querySelector('.mainbody')
let Library = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    addDisplay() {
      let diva = document.createElement('div');
      diva.classList.add('diva');
      diva.innerHTML = "Title: " + this.title + "<br>Author: " + this.author + "<br>Pages: " + this.pages;
      mainbody.appendChild(diva);
      let rbutton = document.createElement('button');
      rbutton.classList.add('read');
      rbutton.innerText = "Read? " + this.read;
      diva.appendChild(rbutton);
      if (this.read == "yes") {
        rbutton.style.backgroundColor = "lightgreen";
      } else rbutton.style.backgroundColor = "pink";
      rbutton.addEventListener('click', (e) => this.readSwap(e));
      let delete1 = document.createElement('button');
      delete1.classList.add('delete');
      delete1.innerText = "Delete";
      diva.appendChild(delete1);
      delete1.addEventListener('click', (a) => this.deleteThis(a));
      let obj = {
        title: this.title, 
        author: this.author,
        pages: this.pages,
        read: this.read,
        div: diva,
        rbutton: rbutton,
        delete1: delete1
      }
      Library.push(obj)
    }

    readSwap(e) {
      let button = e.target;
      let index = Library.findIndex(obj => obj.rbutton === button);
      if (this.read == "yes") {
        this.read = "no";
        button.style.backgroundColor = "pink";
        Library[index].read = "no";
        button.innerText = "Read? " + this.read;
      } else if (this.read == "no") {
        this.read = "yes";
        button.style.backgroundColor = "lightgreen";
        Library[index].read = "yes";
        button.innerText = "Read? " + this.read;
      }
    }

    deleteThis(a) {
      let button = a.target;
      let index = Library.findIndex(obj => obj.delete1 === button);
      mainbody.removeChild(Library[index].div);
      Library.splice(index, 1);
    }

}

submit.addEventListener('click', function() {
  event.preventDefault();
  let title = document.getElementById('title').value;
  let author1 = document.getElementById('author').value;
  let pages1 = document.getElementById('pages').value;
  let read1 = document.querySelector('input[name="read"]:checked').value;
  let book1 = new Book(title, author1, pages1, read1);
  book1.addDisplay();
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('pages').value = "";
}
);

