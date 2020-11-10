window.addEventListener('load', function(){
  document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
  //document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');
});

function format(command, value) {
  document.execCommand(command, false, value);
}

function chooseColor(){
  var mycolor = document.getElementById("myColor").value;
  document.execCommand('foreColor', false, mycolor);
}

function changeSize(){
  var mysize = document.getElementById("fontSize").value;
  document.execCommand('fontSize', false, mysize);
}

function changeFont(){
  var myFont = document.getElementById("input-font").value;
  document.execCommand('fontName', false, myFont);
}

window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.querySelector('img');  // $('img')[0]
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
          img.onload = imageIsLoaded;
      }
  });
});

function imageIsLoaded() { 
  alert(this.src);  // blob url
  // update width and height ...
}

$(document).ready(function(){
  //get data
  $('.btn').click(function(){
      var data = {};
      //data.userid = $('#firstname').val();
      data.catname = $('#categoryid').val();
      data.title = $('#title').val();
      console.log(data.title);
     // var text=$('#sampleeditor').val();
      //console.log(text);

      data.content = $('#sampleeditor').html();
      console.log(data.content);
      //var $divdata=$('#sampleeditor').val();

     
      
       $.ajax({
          // type: 'GET',
         
          
          url:"http://localhost:3000/category",
          method:"POST",
          data:data,
          // {
              
              
          //     "userid":"2",
          //    "catname":"nature",
          //     "title":"its working",
          //     "content":"5posted",
          //     "img":"../images/lit1.jpg"

          // }
          
          success:function(res){
                 
              console.log(res);    
          },
          error:(res)=>{
              alert("Error"+res);
          }
          
      });

  });

});


