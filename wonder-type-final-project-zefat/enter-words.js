var selectedRow = null;
// let wordInput = document.getElementById("word").value;
// let categoryInput = document.getElementById("category").value;
// let levelInput =  document.getElementById("level").value;
// let fileInput = document.getElementById("file").value;

const onFormSubmit = () => {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            addRow(formData);
        }
        else {
            updateRecord(formData);
        }
        resetForm();
    }
}

const readFormData = () =>{
    let formData = {};
    formData["word"] = document.getElementById("word").value;
    formData["category"] = document.getElementById("category").value;
    formData["level"] = document.getElementById("level").value;
    formData["file"] = document.getElementById("file").value;
    return formData;
}


const addRow = (data) => {
    let table = document.getElementById("wordList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.word;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.category;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.level;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.file;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<i onClick="onEdit(this)" class="far fa-edit"></i>
                        <i onClick="onDelete(this)" class="far fa-trash-alt"></i>`;

}
const resetForm = () => {
    document.getElementById("word").value = " ";
    document.getElementById("category").value = " ";
    document.getElementById("level").value = '';
    document.getElementById("file").value = '';
    selectedRow = null;
}

const onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("word").value = selectedRow.cells[0].innerHTML;
    document.getElementById("category").value = selectedRow.cells[1].innerHTML;
    document.getElementById("level").value = selectedRow.cells[2].innerHTML;
    //document.getElementById("file").value = selectedRow.cells[3].innerHTML;
}

const updateRecord = (formData) => {
    selectedRow.cells[0].innerHTML = formData.word;
    selectedRow.cells[1].innerHTML = formData.category;
    selectedRow.cells[2].innerHTML = formData.level;
    selectedRow.cells[3].innerHTML = formData.file;

}

const onDelete = (td) => {
    if (confirm('למחוק שורה?')) {
        row = td.parentElement.parentElement;
        document.getElementById("wordList").deleteRow(row.rowIndex);
        resetForm();
    }

}

// function validate() {
//     isValid = true;
//     if (document.getElementsByClassName('validation-error')) {
//         isValid = false;
//         document.getElementsByClassName("validation-error").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (! document.getElementsByClassName("validation-error").classList.contains("hide") )
//         document.getElementsByClassName("validation-error").classList.add("hide");
//             document.getElementById("categoryValidationError").classList.add("hide");
//             document.getElementById("levelValidationError").classList.add("hide");
//     }
//     return isValid;
// }

function validate() {
    isValid = true;
    if (document.getElementById("word").value == "" 
        || document.getElementById("category").value == "" 
        || document.getElementById("level").value == "") 
    {
        isValid = false;
        document.getElementById("wordValidationError").classList.remove("hide");
        document.getElementById("categoryValidationError").classList.remove("hide");
        document.getElementById("levelValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("wordValidationError").classList.contains("hide") 
            || !document.getElementById("categoryValidationError").classList.contains("hide") 
            || !document.getElementById("levelValidationError").classList.contains("hide")){
                document.getElementById("wordValidationError").classList.add("hide");
                document.getElementById("categoryValidationError").classList.add("hide");
                document.getElementById("levelValidationError").classList.add("hide");
            }
            
    }
    return isValid;
}



