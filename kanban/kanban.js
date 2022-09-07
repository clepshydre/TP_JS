class Note{
    constructor(title, content, id){
        this.title = title;
        this.content = content;
        this.id = id;
        this.container = "toDoContainer";
        this.date = getDate();
    }
}

var kanbanStorage = localStorage;
var body, button, titleInput, contentInput, toDoContainer,doneContainer, verifiedContainer, deleteContainer;
var notes = retrieveSavedNotes();
console.log(notes);
var idNotes = notes.length;
initialize(notes);
console.log(notes);


body = document.querySelector("body");
button = document.querySelector("#validationButton");
titleInput = document.querySelector("#title");
contentInput = document.querySelector("#content");
toDoContainer = document.querySelector(".toDoContainer");
doneContainer = document.querySelector(".doneContainer");
verifiedContainer = document.querySelector(".verifiedContainer");
deleteContainer = document.querySelector(".deleteContainer");

toDoContainer.addEventListener("drop",function(event){
    event.preventDefault();
    let currentNoteId = event.dataTransfer.getData("text/plain");
    event.currentTarget.appendChild(document.getElementById(currentNoteId));
});

toDoContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
});

doneContainer.addEventListener("drop",function(event){
    event.preventDefault();
    let currentNoteId = event.dataTransfer.getData("text/plain");
    event.currentTarget.appendChild(document.getElementById(currentNoteId));
});
doneContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
});

verifiedContainer.addEventListener("drop",function(event){
    event.preventDefault();
    let currentNoteId = event.dataTransfer.getData("text/plain");
    event.currentTarget.appendChild(document.getElementById(currentNoteId));
});

verifiedContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
});

deleteContainer.addEventListener("drop",function(event){
    event.preventDefault();
    let currentNoteId = event.dataTransfer.getData("text/plain");
    event.currentTarget.appendChild(document.getElementById(currentNoteId));
    deleteNote(currentNoteId);
});

deleteContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
})

button.addEventListener("click", function(){
    if(verifyInput(titleInput) && verifyInput(contentInput)){
        createNewNote();
        incrementId();
    }
});

function verifyInput(input){
    let value = input.value;
    if(value.trim() != ""){
        return true;
    }
    return false;
}

function createNewNote(){
    let title = titleInput.value;
    let content = contentInput.value;
    let note = new Note(title,content,idNotes);
    createNoteDom(note);
}

function deleteNote(id){
    let noteToDelete = document.querySelector("#"+id);
    console.log(noteToDelete);
    noteToDelete.remove();
}

function incrementId(){
    idNotes++;
}

function retrieveSavedNotes(){
    let notes = new Array(); 
    if(localStorage.length !== 0){
        for(let i = 0; i < localStorage.length;i++){
            notes.push(JSON.parse(localStorage.getItem(i)));
        }
    }
    return notes;
}

function initialize(){
    let idNote = 0;
    clearStorage();
    if(notes.length !== 0){
        notes.forEach(note => {
            note.id = idNote;
            assignNote(note);
            storageNote(note);
            idNote++;
        });
    }
}

function assignNote(note){
    createNoteDom(note);
}

function createNoteDom(note){
    let divNoteDOM = document.createElement("div");
    let titleDOM = document.createElement("h1");
    let contentDOM = document.createElement("p");
    let dateDOM = document.createElement("p");
    let appendContainer = document.querySelector("."+note.container);
    titleDOM.textContent = note.title;
    contentDOM.textContent = note.content;
    dateDOM.textContent = note.date;
    divNoteDOM.appendChild(titleDOM);
    divNoteDOM.appendChild(contentDOM);
    divNoteDOM.appendChild(dateDOM);
    divNoteDOM.setAttribute('draggable', true);
    divNoteDOM.setAttribute("id", "noteContainer"+idNotes);
    divNoteDOM.setAttribute("class", "noteContainer");
    divNoteDOM.addEventListener("dragstart", function(event){
        event.dataTransfer.effectAllowed ="move";
        event.dataTransfer.setData("text/plain",event.target.getAttribute("id"));
    });
    appendContainer.appendChild(divNoteDOM);
}

function getDate(){
    return new Date().toLocaleDateString(navigator.language, {
        day: "numeric",
        year: "numeric",
        month: "long",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
}

function storageNote(note){
    let stringNote = JSON.stringify(note);
    localStorage.setItem(idNotes.toString(), stringNote);
}

function clearStorage(){
    localStorage.clear();
}