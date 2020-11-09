window.addEventListener('load', function(){
    document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
    //document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');
});

function format(command, value) {
    document.execCommand(command, false, value);
}

function setUrl() {
    var url = document.getElementById('txtFormatUrl').value;
    var sText = document.getSelection();
    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
    document.getElementById('txtFormatUrl').value = '';
}

//function for posting blog
function fun(){
    var data=document.getElementById("sampleeditor");
    console.log(data.innerHTML);
    
    var iDiv = document.createElement('div');
    iDiv.id = 'div1';
    iDiv.className = 'block';
    document.getElementsByTagName('body')[0].appendChild(iDiv);
    iDiv.innerHTML=data.innerHTML;

    console.log(data);
    
  document.getElementById('outerdiv').style.display = "none";

  document.getElementById("")


}