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


