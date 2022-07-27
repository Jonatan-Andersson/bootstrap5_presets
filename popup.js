Jonatan-Andersson/bootstrap5_presets

function showAlertBox(){
let box = document.getElementsByClassName("alert-box")[1];
    box.style.display = "block";

}
function hideAlertBox(){
let box = document.getElementsByClassName("alert-box")[1];
    box.style.display = "none";
}

function createAlertBox(alertName=null, title="Alert", msg="Are you sure?", appendTo="body"){


let alertBox = document.createElement("div");
let card = document.createElement("div");
let cardHeader = document.createElement("div");
let cardBody = document.createElement("div");
let cardFooter = document.createElement("div");
let cardFooterRow = document.createElement("div");
let cardFooterCol_no = document.createElement("div");
let cardFooterCol_yes = document.createElement("div");

//appending classes to elements//

// alertbox rapper
alertBox.className = "alert-box";
alertBox.style.display = "none";
document.getElementById(appendTo).appendChild(alertBox);

//card            
let cardClasses = ["card shadow position-absolute top-50 start-50 translate-middle"];
card.className = cardClasses;
card.style.width = "26rem";
alertBox.appendChild(card);

//card header
let cardHeaderClasses = "card-header";
cardHeader.className = cardHeaderClasses;
card.appendChild(cardHeader);

// title
let titleBox = document.createElement("h4");
titleBox.innerHTML = title;
cardHeader.appendChild(titleBox);


//card body
let cardBodyClasses = "card-body";
cardBody.className = cardBodyClasses;
card.appendChild(cardBody);  
// message
msgBoxClasses = ["card-text"]
let msgBox = document.createElement("p");
msgBox.className = "card-text mb-3"
msgBox.innerHTML = msg;
cardBody.appendChild(msgBox);

//card footer
let cardFooterClasses = "card-header";
cardFooter.className = cardFooterClasses;
card.appendChild(cardFooter);
//card footer row
let cardFooterRowClasses = "row m-2";
cardFooterRow.className = cardFooterRowClasses;
cardFooter.appendChild(cardFooterRow);
//card footer col no
let cardFooterCol_no_Classes = "col-9"; 
cardFooterCol_no.className = cardFooterCol_no_Classes;
cardFooterRow.appendChild(cardFooterCol_no);
//cancel button
let cancel = document.createElement("input"); 
cancel.type = "button";
cancel.value = "Cancel";
let cancelBtnClasses = "btn btn-secondary";
cancel.className = cancelBtnClasses;
cardFooterCol_no.appendChild(cancel);

// card footer col yes
let cardFooterCol_yes_Classes = "col-3";
cardFooterCol_yes.className = cardFooterCol_yes_Classes;
cardFooterRow.appendChild(cardFooterCol_yes);
//subimit button
let submit = document.createElement("input"); 
submit.type = "submit";
let submitBtnClasses = "btn btn-primary";
submit.className = submitBtnClasses;
cardFooterCol_yes.appendChild(submit);
}