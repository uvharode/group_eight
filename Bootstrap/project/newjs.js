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


//   function hidepage() {
//         console.log("inside hide page function");
//        var login=document.getElementById("login");
//        login.style.display="none";
    
//        var createblog=document.getElementById("hideblog");
//        console.log(createblog.style.display);
//        createblog.style.display="block";

//         console.log(createblog.style.display);
//        var logout=document.getElementById("hidelogout");
//        logout.style.display ="block";



//       }
    //  function hidepage()
     
    //  {
    //     var x = document.getElementById("login");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
        
    //     var y = document.getElementById("hideblog");
    //     if (y.style.display === "none") {
    //       y.style.display = "block";
    //     } else {
    //       y.style.display = "none";
    //     }

        


    //  }
        
      function readmore(r)
      {
        console.log("hii");
        console.log(r.catname);
        event.preventDefault();
        $('#rightarea').empty();
        //var cname= $(this).attr("id");
       // console.log(cname);
    
          console.log("inside read more function");
        // var myJSON = JSON.stringify(r);
          console.log(r);
          console.log(r.content);
          var div=document.getElementById("div1");
          //div.innerHTML=r.title;

          var img1 = r.img;
          var drawimg = "<img src='"+img1+ "'/>";
          rightarea.innerHTML = r.catname +"<br>"+ r.title + "<br>"+r.content + "<br>" + drawimg;
      }
    