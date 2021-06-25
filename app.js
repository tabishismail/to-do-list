// Time for to do work in To-Do-list
// var now = new Date();
// var curHr= now.getHours();
// var curMin= now.getMinutes();
// var curSec= now.getSeconds();
// var morn = "A.M"
// var curTime=document.getElementById("curTime");
// curTime.setAttribute('disabled','disabled');
//  if(curHr> 12){
//      curHr=curHr - 12;
//      morn = "P.M"
//  }
// curTime.value= curHr+":"+curMin+":"+curSec +" "+ morn;
// console.log(curTime);


// Add Task in the list
var task = document.getElementById("textBox");
task.setAttribute('Placeholder', 'Enter task to add in the list');

function taskAdd() {

    if (task.value == "  " || task.value == "" || task.value == " ") {
        task.setAttribute('Placeholder', 'You dont have anything to add in the list');
    }
    else {
        var list = document.createElement("li");
        // var timeAdd=document.createElement("span");
        // timeAdd.innerHTML=curTime.value;
        var listText = document.createElement("input");

        listText.setAttribute('disabled', 'disabled');
        listText.setAttribute('class','inputBox')
        listText.value = task.value;

        var editBtn = document.createElement('button')
        var edittext = document.createTextNode('Edit')
        editBtn.setAttribute('class','btn btn-success')
        editBtn.appendChild(edittext)
        editBtn.setAttribute('onclick', 'edit(this.previousSibling)')
        var delBtn = document.createElement('button')
        var deltext = document.createTextNode('Delete')
        delBtn.setAttribute('class','btn btn-danger')
        delBtn.appendChild(deltext);
        delBtn.setAttribute('onclick', 'del(this)')
        delBtn.setAttribute('id', 'delete')
        // list.appendChild(timeAdd);
        list.appendChild(listText);
        list.appendChild(editBtn);
        list.appendChild(delBtn);
        listMain.appendChild(list);
        task.setAttribute('Placeholder', 'Enter task to add in the list');
        task.value = "";
    }

}

// To Edit the list
function edit(listData) {
    var del = document.getElementById("delete");
    var check = listData.nextSibling.innerText;
    if (check === "Edit") {
        listData.disabled = false;
        listData.focus();
        listData.nextSibling.innerText = "Update";
        del.disabled = true;

    }
    else if (check === "Update") {
        listData.disabled = true;
        listData.nextSibling.innerText = "Edit";
        del.disabled = false;
    }
}

// To Delete the list item
function del(removeItem) {
    removeItem.parentNode.remove();

}