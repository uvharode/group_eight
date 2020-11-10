

window.onload=function(){
    document.getElementById('post-button').addEventListener('click', function () {
        var post = document.createElement('p');


        var name = document.getElementById('name').value;
        post.append(name);
     var linebreak=document.createElement('br');
        // post.append(linebreak);
        
        var date = document.getElementById('date').value;
        post.append(date);
        post.append(linebreak);
      

        var postText = document.getElementById('textarea').value;
        post.append(postText);
       
      


        var reply = document.createElement('div');
        reply.append(post);
        
        var cardStack = document.getElementById('comment');
        comment.append(reply);
        document.getElementById('name').value = "";
        document.getElementById('date').value = "";
        document.getElementById('textarea').value = "";
      });
  }
$(document).ready(function() {


    $.ajax({

        type:"GET",
        url:"http://localhost:3000/comments",
        datatype:"json",
        success:function(data)
       
        {
            for(let i =0;i<data.length;i++){
                console.log("For started");
                
                
          $("#comment").append('<div id="cmt'+i+'"></div>');
          $("<h4>"+data[i].name+"</h4>").appendTo("#cmt"+i);
          $("<p>"+data[i].date+"</p>").appendTo("#cmt"+i);
          $("<p>"+data[i].body+"</p>").appendTo("#cmt"+i);
          
            console.log(data);
            }
        } 
 })


 $("#post-button").click(()=>{
      
    var name = $("#name").val();
    var date = $("#date").val();
    var body = $("#textarea").val();
    var data = ({ name, date, body });
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/comments",
        data: data,
        success: function () {
            alert(data.name+" "+"commented");
        },
        dataType: "json"
    })

})

})

function validateForm(){

    var x = document.forms["form"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
   }

