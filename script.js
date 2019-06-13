var spansAdd = document.querySelectorAll("span[style='color: rgb(0, 180, 0);']");
var spansDel = document.querySelectorAll("span[style='color: rgb(255, 0, 0); text-decoration: line-through;']");

spansAdd.forEach((ele) => {
ele.setAttribute("style", "color: green; border-bottom: 2px solid green;");
});

spansDel.forEach((ele) => {
ele.setAttribute("style", "color: rgb(255, 0, 0); text-decoration: line-through; border-bottom: 2px solid red");
});