function showForm() { 
    document.querySelector(".popUp").style.display="flex"; 
}


//Drag & Drop
const dropArea = document.querySelector(".dragDropArea"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file;

button.onclick = ()=>{
    input.click();
}

input.addEventListener("change", function(){
    file = thi.files[0];
    showFile();
});

//drags file over area
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault();
    dropArea.classList.add("active");
});

//removes dragged file from the area
dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
});

//drops file into area
dropArea.addEventListener("drop", (event)=>{
    event.preventDefault();
    file = event.dataTransfer.files[0]; //select only 1 file
    showFile();
});

function showFile(){
    let fileType = file.type;
    let validExtentions = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if(validExtentions.includes(fileType)){//only allows common document types (DOCX, DOC, PDF)
        let fileReader = new FileReader();

        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            let oldText = document.querySelector(".oldText");
            oldText.innerHTML = file.name;
        }
        fileReader.readAsDataURL(file);
    }else{
        alert("This is the wrong file type!");
        dropArea.classList.remove("active");
    }
}


//sending from data to a google spreadsheet!

var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
            window.open('thank.html', '_blank');
          });
        });
