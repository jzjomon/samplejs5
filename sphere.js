function calculate(){
    let a = document.getElementById("radius").value;
    parseInt(a);
    let res =4/3*Math.PI*a**3;
    parseFloat(res);
    document.getElementById("value").value = res;
}