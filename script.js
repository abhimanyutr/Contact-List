console.log("hakmmclkkdkj ");

function getDetails() {
    let name = document.getElementById("recipient-name").value;
    let phone = document.getElementById("recipient-number").value;
    //let address = document.getElementById("recipient-address").value;
    let mailId = document.getElementById("recipient-email").value;

    console.log(name, phone, mailId);

    if (name === "") {
        alert("Please fill the Name");
    } else if (phone === "") {
        alert("Please fill the Phone Number");
    } else {
         popup.innerHTML = "Contact Added Successfully";
        setTimeout(() => {
            
            let modalElement = document.getElementById("exampleModal");
            let modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
            popup.innerHTML = " "; 
        }, 1000);

        let row = document.createElement("ul");
row.classList.add("d-flex", "justify-content-between", "mt-3", "fw-bold", "align-items-center", "list-unstyled");

let listname = document.createElement("li");
let listNumber = document.createElement("li");
//let listAdd = document.createElement("li");
let listMail = document.createElement("li");
let listEdit = document.createElement("li");
let listdelete = document.createElement("li");

listname.innerHTML = `<div style="width: 160px">${name}</div>`;
listNumber.innerHTML = `<div class="mx-0">${phone}</div>`;
//listAdd.innerHTML = `<div>${address}</div>`;
listMail.innerHTML = `<div class="mx-4">${mailId}</div>`;
listEdit.innerHTML = `<button class="bg-transparent border-0" onclick="editList(this)"><i class="fa-solid fa-pen"></i></button>`;
listdelete.innerHTML=`<button class="bg-transparent border-0" onclick="deleteList(this)"><i class="text-danger px-5 fa-solid fa-trash-can"></i></button>`;

// append all li inside ul (row)
row.appendChild(listname);
row.appendChild(listNumber);
//row.appendChild(listAdd);
row.appendChild(listMail);
row.appendChild(listEdit);
row.appendChild(listdelete);

// then append ul into contactList
contactList.appendChild(row);

 // Clear input fields
    document.getElementById("recipient-name").value = "";
    document.getElementById("recipient-number").value = "";
    document.getElementById("recipient-email").value = "";
    

}

    
}
function editList(btn)
{
    ul = btn.closest("ul");
    lists = ul.childNodes;
    console.log(lists);
    currentName = lists[0].textContent;
    currentPhone = lists[1].textContent;
    currentMail = lists[2].textContent;
    console.log(currentName);
    console.log(currentPhone);
    console.log(currentMail);

    newname = prompt("Enter Name",currentName);
    newPhone = prompt("Enter new Phone Number",currentPhone);
    newMail = prompt("Enter new mail id:",currentMail)
    
    if(newname || newPhone || newMail)
    {
      lists[0].textContent=newname
      lists[1].textContent=newPhone
      lists[2].textContent=newMail
    }
    
    
}
function deleteList(btn)
    {
        lists = btn.closest("ul");
         let name = lists.querySelector("li").innerText; // first li → Nam
         if (confirm(`Are you sure you want to remove ${name}?`))
         {
            lists.remove();
         }
        
    }


