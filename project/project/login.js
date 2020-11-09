/*var mail = document.getElementById("email1");

mail.addEventListener("input", function(event) {
    console.log("mail");

    if (mail.validity.typeMismatch) {
        console.log("mail if");
        mail.setCustomValidity("Please enter the correct e-mail address!");
    } else {
        console.log("mail else");

        mail.setCustomValidity("");
    }
});

var pass = document.getElementById("password1");

pass.addEventListener("input", function(event) {
    if (pass.validity.tooShort) {
        pass.setCustomValidity("password is too short!");
    } else {
        pass.setCustomValidity("");
    }
});*/
// $(document).ready(function() {
//             $("#btnLogin").click(function() {
//                     // if ($("#email1").val() == "") {
//                     //     $("#email1").css("border", "1px solid red");
//                     //     return false;
//                     // }

//                     // if ($("#password1").val() == "") {
//                     //     $("#password1").css("border", "1px solid red");
//                     //     return false;

//                     var email = $("#email").val();
//                     var password = $("#password").val();

//                     authenticate(email, password);
//                 } )

//                 function authenticate(email, password) {
//                     $.ajax({
//                         type: "GET",
//                         //the url where you want to sent the userName and password to
//                         url: "http://localhost:3333/users",
//                         dataType: "json",
//                         async: false,
//                         //json object to sent to the authentication url
//                         // data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
//                         success: function(data) {
//                             //do any process for successful authentication here
//                             console.log(data);
//                             var flag = 0;
//                             for (var i = 0; i < data.length && flag == 0; i++) {
//                                 if (data[i].email == email && data[i].password == password) {
//                                     flag = 1;
//                                     break;
//                                 }
//                             }
//                             if (flag == 1) {
//                                 document.getElementById("answer").innerHTML("Successful");
//                                 // $("#answer").html("Login Successful");
//                                 // window.location.replace("http://127.0.0.1:5500/home.html");
//                                 sessionStorage.setItem(email, password);
//                             } else {
//                                 $("#answer").html("Invalid Username or Password");
//                             }
//                         },
//                     });
//                 }

//             \

/**88888888888EMAIL VALIDATION 88888888888*

function validateEmail(emailcheck) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailcheck);

function checkValidEmail(emailInputID) {
    $(emailInputID).blur(function() {
        var emailcheck = $(emailInputID).val();
        if (validateEmail(email)) {
            $(this).css("border", "1px solid green");
        } else {
            $(this).css("border", "1px solid red");
        }
    });
}
checkValidEmail("#emailcheck");
*/
$(document).ready(function() {
    //On Login form submit validation
    $("#btnLogin").click(function() {
        // $("form[name='loginform']").validate();
        //collect userName and password entered by users
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
                showblog()
                // to show the blog after login
                


            } else {
                $("#answer").html("Invalid Username or Password");
            }
        },
    });
}

function showblog()
{
    $('#rightarea').empty();

       
    // var url_string = "http://127.0.0.1:5500/project/login.html?cname"; //window.location.href
    // var url = new URL(url_string);
    // var catname = url.searchParams.get("cname").val;


    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const catname = urlParams.get('cname')

    console.log(catname);

   
    //var catname= $(this).attr("id");
    //console.log(catname);
    
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
              if(catname==x[i].catname)  
                {

                    var iDiv = document.createElement('div');
                    iDiv.id = 'div1';
                    iDiv.className = 'div1';

                   // var img1 = x[i].img;
                   // var drawimg = "<img src='"+img1+ "'/>";
                   // $("#div1").append(drawimg);

                iDiv.innerHTML = x[i].catname +"<br>"+ x[i].title + "<br>"+ x[i].content;
                
                 
                  // iDiv.innerHTML = x[i].catname +"<br>"+ x[i].title + "<br>"+sliced + "</hr>" + "<button onclick='readmore("+JSON.stringify(x[i])+")' type='button'>Read More</button>";
                 // iDiv.innerHTML = x[i].catname +"<br>"+ x[i].title + "<br>"+sliced + "</hr>" + "<button onclick='checkforlogin("+JSON.stringify(x[i])+")' type='button'>Read More</button>";

                   document.getElementById("rightarea").appendChild(iDiv);

                  
                }
            }
           
           
        },
        error:(e)=>{
            alert("Error:"+e)
        }
    })

}