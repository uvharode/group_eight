
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

                       var img1 = x[i].img;
                       var drawimg = "<img src='"+img1+ "'/>";
                       //$("#div1").append(drawimg);

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


    // search functionality

    $('#searchbutton').click(function(){
      console.log("hii");
      event.preventDefault();
      $('#rightarea').empty();
      //var catname= $(this).attr("id");
      var cname=document.getElementById("searchbox").value;
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
                if(cname==x[i].catname || cname==x[i].title || x[i].content.includes(cname))  
                  {

                      var iDiv = document.createElement('div');
                      iDiv.id = 'div1';
                      iDiv.className = 'div1';

                      var img1 = x[i].img;
                     var drawimg = "<img src='"+img1+ "'/>";
                     //$("#div1").append(drawimg);

                  //iDiv.innerHTML = x[i].catname +"<br>"+ x[i].title + "<br>"+ x[i].content + "<br>"+drawimg;
                  
                    var content=x[i].content;
                     var sliced = content.slice(0, 5);
                     console.log(x[i]);
                    
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



  // code for hiding the nav elements



   // for login
   $('#login').click(function(){
    
    $("#loginModal").modal("show");
   

    $("#btnLogin").click(function() {

        //collect userName and password entered by users
        console.log("hereee");
        let email = $("#email1").val();
        if ($("#email1").val() == "") {
            $("#email1").css("border", "1px solid red");
            return false;
        }

        let password = $("#password1").val();
        if ($("#password1").val() == "") {
            $("#password1").css("border", "1px solid red");
            return false;
        }

        //call the authenticate function
        authenticate(email, password);
    });
});

function authenticate(email, password) {
    $.ajax({
        type: "GET",
        //the url where you want to sent the userName and password to
        url: "http://localhost:3000/users",
        dataType: "json",
        async: false,
        //json object to sent to the authentication url
        // data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
        success: function(data) {
            //do any process for successful authentication here
            console.log(data);
            var flag = 0;
            for (var i = 0; i < data.length && flag == 0; i++) {
                if (data[i].email == email && data[i].password == password) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 1) {
                $("#answer").html("Login Successful");
                // window.location.replace("http://127.0.0.1:5500/home.html");
                sessionStorage.setItem(email, password);

                // show and hide the nav bar elements

                $(".login").hide();
                $(".signup").hide();
                $(".hideblog").show();
                $(".hidelogout").show();

            } else {
                $("#answer").html("Invalid Username or Password");
            }
        },
    });
  }

  $("#check").click(function() {
    if (document.getElementById("check").checked) {
        $("#password1").get(0).type = "text";
    } else {
        $("#password1").get(0).type = "password";
    }
});
 
//});
 
// code for sign up

$('#signup').click(function(){
  $("#signupModal").modal("show");
  $("#cpassword1").keyup(checkPasswordMatch);

  // EMAIL VALIDATION
  function validateEmail(emailch) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(emailch);
  }
  
  function checkValidEmail(emailInputID) {
      $(emailInputID).blur(function() {
          var emailch = $(emailInputID).val();
          if (validateEmail(emailch)) {
              $(this).css("border", "1px solid green");
              return true;
          } else {
              $(this).css("border", "1px solid red");
              return false;
          }
      });
  }
  
  
  
  $("#signup-form").submit((e) => {
      e.preventDefault();
      // let fname = $("#fname1").val();
      if ($("#fname1").val() == "") {
          $("#fname1").css("border", "1px solid red");
          
          return false;
      }
      // let lname = $("#fname1").val();
      if ($("#lname1").val() == "") {
          $("#lname1").css("border", "1px solid red");
          return false;
      }
      let email2 = $("#email").val();
      console.log("helpppppp1");
      if ($("#email").val() == "" || checkValidEmail("#email1")) {
          console.log("helpppppp2");
          $("#email").css("border", "1px solid red");
          return false;
      }
  
  
      let pass2 = $("#p1").val();
      if ($("#p1").val() == "" /*|| checkValidPassword("#passcheck")*/ ) {
          $("#p1").css("border", "1px solid red");
          return false;
      }
  
  
  
  
      let cpass2 = $("#cpassword1").val();
      if ($("#p1").val() == "") {
          $("#cpassword1").css("border", "1px solid red");
          return false;
      }
  
  
  
  
  
      var name = $("#fname1").val() + " " + $("#lname1").val();
      var email = $("#email").val();
      var password = $("#p1").val();
      var data = { name, email, password };
      // $("#cpassword1").keyup(checkPasswordMatch);
      $.ajax({
          type: "POST",
          url: "http://localhost:3000/users",
          data: data,
          success: function() {
              // alert(data.name + " " + "is registered");
             
             
              window.location.href = "projectfinal.html";

              

          },
          dataType: "json",
      });
  });

});

$("#check1").click(function() {
  if (document.getElementById("check1").checked) {
      $("#p1").get(0).type = "text";
  } else {
      $("#p1").get(0).type = "password";
  }
});



function checkPasswordMatch() {
  var password = $("#p1").val();
  var confirmPassword = $("#cpassword1").val();
  if (password != confirmPassword)
      $("#CheckPasswordMatch").html("Passwords does not match!");
  else $("#CheckPasswordMatch").html("Passwords match.");
}



// nav bar responsiveness

// $(window).on('resize', function(e) {
//     var windowWidth = $(window).width();
  
//     if (windowWidth < 600) {
//       // initialize small viewport functionality
//     } else {
//       // initialized large viewport functionality
//     }
//   });

});