function colorChange(){
    let a = document.getElementById("colorSelect").value;
    if(a=="Red"){
        document.getElementById("text").style.color = "Red";
    }else if(a=="Green"){
        document.getElementById("text").style.color = "Green";
    }else if(a=="White"){
        document.getElementById("text").style.color = "White";
    }else if(a=="Black"){
        document.getElementById("text").style.color = "Black";
    }
}