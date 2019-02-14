var remove = document.getElementsByClassName("remove");
  var i;
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
        console.log("task deleted");
        var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);
    }
}
var list = document.querySelector('li');
// if(list) {
//     list.addEventListener('click', function(ev) {
//         if (ev.target.tagName === 'LI') {
//           ev.target.classList.toggle('checked');
//           console.log("clicked");
//         }
//       }, false);
// }
list.onclick = function() {
    console.log("clicked");
}




function newElement() {

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    console.log("task added");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
      alert("Write something!");
    } else {
      document.getElementById("mylist").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    // creating and appending the done checkbox 
    // var checkBox = document.createElement('input');
    // checkBox.type = 'checkbox';
    // checkBox.className = "done"; 
    // checkBox.name = "checkbox";
    // li.appendChild(checkBox);
  
    /* creating and appending the delete button */
    var span = document.createElement("SPAN");
    var spantext = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(spantext);
    li.appendChild(span);

    /** removing and item on the list once delete button has been clicked */
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
            console.log("task deleted");
        var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);
        }
    }

  }
  
  