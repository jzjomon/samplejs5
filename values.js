function getFormvalue(){
    let a = document.getElementsByClassName("input")[0].value;
    let b = document.getElementsByClassName("input")[1].value;
    let newspan = document.createElement("span");
    document.getElementById("form1").appendChild(newspan)
    newspan.innerHTML = a+b;
    newspan.style.flex="display-block";
}