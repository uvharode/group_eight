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



$(document).ready(function(){
  //get data
 
  $('.btn').click(function(){
  
      var key1=sessionStorage.key(1);
      var name=sessionStorage.getItem(key1);
      var data = {};
      //data.userid = $('#firstname').val();
      data.catname = $('#categoryid').val();
      data.title = $('#title').val();
      data.UserName=name;
      console.log(data.title);
      
      
      // var imgfile=$('#imgfile').val();
      // console.log(imgfile);


      data.content = $('#sampleeditor').html();
      console.log(data.content);
      //var $divdata=$('#sampleeditor').val();

      
      data.img=$('#image').val();
      

     
      
       $.ajax({
          // type: 'GET',
         
          
          url:"http://localhost:3000/posts",
          method:"POST",
          data:data,
        
          success:function(res){
                 
              console.log(res);    
          },
          error:(res)=>{
              alert("Error"+res);
          }
          
      });

  });

});


