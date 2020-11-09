
function fun(){
var data=document.getElementById("txt").value;
console.log(data);

var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
document.getElementsByTagName('body')[0].appendChild(iDiv);
iDiv.innerHTML=data;

document.getElementById('outer').style.display = "none";

}