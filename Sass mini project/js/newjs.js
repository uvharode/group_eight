function checkforlogin(r)
{
   // event.preventDefault();
    // check the user name and password in session storage
    console.log("inside cleck for login function"+r.catname);
    //sessionStorage.removeItem(0);
    for(var i=1;i<sessionStorage.length;i++)
    {
    
        var key1=sessionStorage.key(i);
        var val1=sessionStorage.getItem(key1);
    }
      
      if(key1 && val1)
      {
        console.log("inside if of check for login");
          readmore(r);
          //login="false";
      }
      else{
          console.log(r.catname);
      console.log("inside else of check for login");
  
       //rightarea.innerHTML='<a id="atag" href="./login.html?cname='+r.catname+'">Login</a>';
      
       //rightarea.innerHTML='<a id="atag" href="./login.html" "onclick="someFunction("+r+"); return false;">Login</a>';
       //$("#loginModal").modal("show");
       //rightarea.innerHTML='<div >Please Login To Read The Blog</div>';
       

       for(var i=1;i<sessionStorage.length;i++)
      {
    
        var key1=sessionStorage.key(i);
        var val1=sessionStorage.getItem(key1);
      }
      if(key1 && val1)
      {
          readmore(r);
          //login="false";
      }
      else{
        //rightarea.innerHTML='<div >Please Login</div>';
        alert("please login");
      }
       
    }
}

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  
        
      function readmore(r)
      {
        console.log("hii");
        console.log(r.catname);
        event.preventDefault();
        $('#rightarea').empty();
        //var cname= $(this).attr("id");
       // console.log(cname);
    
       console.log(r.postComment);
          console.log("inside read more function");
        // var myJSON = JSON.stringify(r);

        // start of main content
          console.log(r);
          console.log(r.content);

          var iDiv = document.createElement('div');
          iDiv.id = 'div1';
          iDiv.className = 'card';
         
         
          

          var img1 = r.img;
          var drawimg = "<img src='"+img1+ "' id='image'/>";
         
         // rightarea.innerHTML ="Category: "+ r.catname +"<br>"+"Title: "+ r.title + "<br>"+"Content: "+r.content + "<br>" +drawimg;
         iDiv.innerHTML ="Category: "+ r.catname +"<br>"+"Title: "+ r.title + "<br>"+"Content: "+r.content + "<br>" +drawimg;
         
         document.getElementById("rightarea").appendChild(iDiv);

        //  main div for comment section
         var mainDiv2 = document.createElement('div');
         mainDiv2.id = 'mainDiv2';
         mainDiv2.className = 'mainDiv2';



        //  div for comment area
         var commentDiv = document.createElement('div');

         commentDiv.innerHTML="Comments";
         commentDiv.style.backgroundColor='white';
         //document.getElementById("rightarea").appendChild(commentDiv);
         //document.getElementById("mainDiv2").appendChild(commentDiv);
        
          
        // div to write the comments
          var commentarea = document.createElement('div');
          commentarea.id = 'Comment';
          commentarea.className = 'Comment';
          commentarea.style.backgroundColor='lightgrey';
          commentarea.innerHTML="write your comment";
          commentarea.setAttribute("contenteditable", true);
           //document.getElementById("rightarea").appendChild(commentarea);
          // document.getElementById("mainDiv2").appendChild(commentarea);
          // button to post comment
          var buttonDiv = document.createElement('div');
          buttonDiv.id = 'Comment';
          //buttonDiv.style.backgroundColor='yellow';
          buttonDiv.className = 'Comment';
          buttonDiv.innerHTML= "<button  class='btn btn-info btn-lg' data-toggle='modal' data-target='#mymodel'onclick='postComment("+r.id+")'>Comment</button><br>";
          //document.getElementById("rightarea").appendChild(buttonDiv);
          //document.getElementById("mainDiv2").appendChild(buttonDiv);

          
          // button to show comment
          var showComment = document.createElement('div');
          showComment.id = 'ShowComment';
          showComment.className = 'ShowComment';
          showComment.style.float = 'right';

          //buttonDiv.style.backgroundColor='green';
          // comment button working
          // var button1 = document.createElement('button');
          // button1.id = 'button';
          // button1.className = 'button';
          // button1.innerText = 'Comment';

         // button1.onclick='postComment';
         //buttonDiv.innerHTML= "<button  class='btn btn-info btn-lg' data-toggle='modal' data-target='#mymodel'onclick='postComment("+r.postId+")'>Comment</button>";
         
         showComment.innerHTML= "<button  class='btn btn-info btn-lg' data-toggle='modal' data-target='#mymodel'onclick='showComment("+r.id+")'>Show Comment</button><br>";
         //document.getElementById("rightarea").appendChild(showComment);

        // working code for comment section
         //document.getElementById("rightarea").appendChild(commentDiv);
          document.getElementById("rightarea").appendChild(commentarea);
          document.getElementById("rightarea").appendChild(buttonDiv);
          document.getElementById("rightarea").appendChild(showComment);


          // trial
          //  document.getElementById("mainDiv2").appendChild(commentDiv);
          // document.getElementById("mainDiv2").appendChild(commentarea);
          // document.getElementById("mainDiv2").appendChild(buttonDiv);
          // document.getElementById("mainDiv2").appendChild(showComment);

          //document.getElementById("mainDiv2").appendChild(showComment);
          //document.getElementById("rightarea").appendChild(mainDiv2);
         
          console.log("before comments");


          

         
         
      

      }
    
    
              
     
    function postComment(id)
    {
        console.log("inside post comment");
        //console.log(postId);
        var postId=id;
        var name=sessionStorage.key(0);
       // var name=sessionStorage.getItem(key1);
       var comment = $("#Comment").html();
      
       
         var data = ({ postId,name,comment });
        $.ajax({
                  type: "POST",
                  url: "http://localhost:3000/comments",
                  data: data,
                  success: function () {
                      //alert(data.name+" "+"commented");
                  },
                  dataType: "json"
             })
    }
  
    function showComment(id)
    {
      //var title1=title;
      $.ajax({
        // type: 'GET',
        type: 'GET',
        dataType: 'json',
        url: 'http://localhost:3000/comments',
        success: function(x){
            console.log("Data=>"+x);
            //var cname=document.getElementById("techbtn").innerHTML;
           // console.log(cname);
           
            
            for(i=0;i<x.length;i++)
            {
              if(id==x[i].postId)  
                {

                    var iDiv = document.createElement('div');
                    iDiv.id = 'div1';
                    iDiv.className = 'div1';
                    iDiv.style.border='1px solid black';
                    iDiv.style.whiteSpace='pre-wrap';
                    iDiv.style.padding='20px';
                    iDiv.style.margin='10px 10px 10px';
                    iDiv.innerHTML ="UserName: "+x[i].name +"<br>"+"comment: "+ x[i].comment+"<br>";

                   document.getElementById("rightarea").appendChild(iDiv);

                  
                }
            }
           
           
        },
        error:(e)=>{
            alert("Error:"+e)
        }
    })
    }