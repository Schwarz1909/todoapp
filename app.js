var count = 0;
var el = document.querySelectorAll("li");
if (el.length != 0) {
  count = parseInt(el[el.length-1].getAttribute("id")) + 1;
} 

function funSubmit() {
    let task = document.getElementById("ftask").value;
    document.getElementById("ftask").value = "";
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    li.setAttribute("id", count);
    count += 1;
    ul.appendChild(li);
    console.log(task, count);
};

document.getElementById("ftask").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    funSubmit();
  }
});

