//Login get
$('document').ready(function(){
    //get data
    $('.ul li button').click(function(){
        console.log("hii");
        event.preventDefault();
        $('#rightarea').empty();
        var cname= $(this).attr("id");
        console.log(cname);
        
        $.ajax({
            // type: 'GET',
            type: 'GET',
            dataType: 'json',
            url: 'http://localhost:3000/category',
            success: function(x){
                console.log("Data=>"+x);
                //var cname=document.getElementById("techbtn").innerHTML;
               // console.log(cname);
               
                
                for(i=0;i<x.length;i++)
                {
                  if(cname==x[i].catname)  
                    {

                        var iDiv = document.createElement('div');
                        iDiv.id = 'div1';
                        iDiv.className = 'div1';

                       // var img1 = x[i].img;
                       // var drawimg = "<img src='"+img1+ "'/>";
                       // $("#div1").append(drawimg);

                    //iDiv.innerHTML = x[i].catname +"<br>"+ x[i].title + "<br>"+ x[i].content + "<br>"+drawimg;
                    
                      var content=x[i].content;
                       var sliced = content.slice(0, 5);
                       console.log(x[i]);
                      // iDiv.innerHTML = x[i].catname +"<br>"+ x[i].title + "<br>"+sliced + "</hr>" + "<button onclick='readmore("+JSON.stringify(x[i])+")' type='button'>Read More</button>";
                      iDiv.innerHTML = x[i].catname +"<br>"+ x[i].title + "<br>"+sliced + "</hr>" + "<button onclick='checkforlogin("+JSON.stringify(x[i])+")' type='button'>Read More</button>";

                       document.getElementById("rightarea").appendChild(iDiv);

                      
                    }
                }
               
               
            },
            error:(e)=>{
                alert("Error:"+e)
            }
        })
    })
});

function hidepage() {
    console.log("inside hide page function");
   var login=document.getElementById("login");
   login.style.display="none";

   var createblog=document.getElementById("hideblog");
   console.log(createblog.style.display);
   createblog.style.display="block";
    console.log(createblog.style.display);
   var logout=document.getElementById("hidelogout");
   logout.style.display ="block";
  }
    
    
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
      rightarea.innerHTML = r.catname +"<br>"+ r.title + "<br>"+r.content;
  }


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
          readmore(r);
          //login="false";
      }else{
          console.log(r.catname);
       // rightarea.innerHTML='<a id="atag" href="./login.html?cname=r.catname">Login</a>';
  
       rightarea.innerHTML='<a id="atag" href="./login.html?cname='+r.catname+'">Login</a>';
      
       //rightarea.innerHTML='<a id="atag">Login</a>';
       //$('#atag').attr('href','login.html='+r.catname);

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
 

