//Jonatan-Andersson/bootstrap5_presets
function showAlertBox(boxId=null){
    let box = null;
    if (boxId == null){
        let boxes = document.getElementsByClassName("alert-box");
        for (let i = 0; i < boxes.length; i++){
            box = document.getElementsByClassName("alert-box")[i];
            box.style.display = "block";
        }
        
    }else {
        box = document.getElementById(boxId);
        box.style.display = "block";
    }
}
function hideAlertBox(boxId){
    let box = null;
    if (boxId == null){
        let boxes = document.getElementsByClassName("alert-box");
        for (let i = 0; i < boxes.length; i++){
             box = document.getElementsByClassName("alert-box")[i];
            box.style.display = "none";
        }
        
    }else {
        box = document.getElementById(boxId);
        box.style.display = "none";
    }
}

function createAlertBox(alertId=null, title="Alert", msg="Are you sure?", appendTo="body"){
    if (alertId == null){
        alert("alert box does not contain a valid id");
    }

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
    alertBox.id = alertId;
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
    cancel.onclick = hideAlertBox(alertId);
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
