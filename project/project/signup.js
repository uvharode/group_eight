// var fn = document.getElementById("fname1");

// fn.addEventListener("input", function(event) {
//     if (fn.validity.tooShort) {
//         fn.setCustomValidity("First Name is too short!");
//     } else {
//         fn.setCustomValidity("");
//     }
// });

// var ln = document.getElementById("lname1");

// ln.addEventListener("input", function(event) {
//     if (ln.validity.tooShort) {
//         ln.setCustomValidity("Last Name is too short!");
//     } else {
//         ln.setCustomValidity("");
//     }
// });

// var un = document.getElementById("uname1");

// un.addEventListener("input", function(event) {
//     if (un.validity.tooShort) {
//         un.setCustomValidity("User name is too short!");
//     } else {
//         un.setCustomValidity("");
//     }
// });

// var em = document.getElementById("email1");

// em.addEventListener("input", function(event) {
//     if (em.validity.typeMismatch) {
//         em.setCustomValidity("Email is incorrect!");
//     } else {
//         em.setCustomValidity("");
//     }
// });

// var pw = document.getElementById("password1");

// pw.addEventListener("input", function(event) {
//     if (pw.validity.typeMismatch) {
//         pw.setCustomValidity("password is too short!");
//     } else {
//         pw.setCustomValidity("");
//     }
// });

// $("#check1").click(function() {
//     if (document.getElementById("check1").checked) {
//         $("#password1").get(0).type = "text";
//     } else {
//         $("#password1").get(0).type = "password";
//     }
// });

// $("#check2").click(function() {
//     if (document.getElementById("check2").checked) {
//         $("#cpassword1").get(0).type = "text";
//     } else {
//         $("#cpassword1").get(0).type = "password";
//     }
// });

// function checkPasswordMatch() {
//     var password = $("#password1").val();
//     var confirmPassword = $("#cpassword1").val();
//     if (password != confirmPassword)
//         $("#CheckPasswordMatch").html("Passwords does not match!");
//     else $("#CheckPasswordMatch").html("Passwords match.");
// }
// });

//fname1 lname1 e1 p1  cpassword1

// $("#btnSignup").click(function() {
//     let fname = $("#fname").val();
//     if ($("#fname1").val() == "") {
//         $("#fname1").css("border", "1px solid red");
//         return false;
//     }

//     if ($("#lname1").val() == "") {
//         $("#lname1").css("border", "1px solid red");
//         return false;
//     }

//     if ($("#e1").val() == "") {
//         $("#e1").css("border", "1px solid red");
//         return false;
//     }

//     if ($("#p1").val() == "") {
//         $("#p1").css("border", "1px solid red");
//         return false;
//     }

//     if ($("#cpassword1").val() == "") {
//         $("#cpassword1").css("border", "1px solid red");
//         return false;
//     }
// });

/*$(document).ready(() => {
    $(".form-control").blur(function() {
        if ($(this).val() === "") {
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });*/

/*
$("#btnSignup").click(function() {
    let fname = $("#fname").val();
    if ($("#fname1").val() == "") {
        $("#fname1").css("border", "1px solid red");
        return false;
    }

    if ($("#lname1").val() == "") {
        $("#lname1").css("border", "1px solid red");
        return false;
    }

    if ($("#e1").val() == "") {
        $("#e1").css("border", "1px solid red");
        return false;
    }

    if ($("#p1").val() == "") {
        $("#p1").css("border", "1px solid red");
        return false;
    }

    if ($("#cpassword1").val() == "") {
        $("#cpassword1").css("border", "1px solid red");
        return false;
    }
});*/

$("#btnSignup").click(() => {
    let fname = $("#fname1").val();
    if ($("#fname1").val() == "") {
        $("#fname1").css("border", "1px solid red");
        return false;
    }
    let lname = $("#fname1").val();
    if ($("#lname1").val() == "") {
        $("#lname1").css("border", "1px solid red");
        return false;
    }
    let email2 = $("#e1").val();
    if ($("#e1").val() == "") {
        $("#e1").css("border", "1px solid red");
        return false;
    }
    let pass2 = $("#p1").val();
    if ($("#p1").val() == "") {
        $("#p1").css("border", "1px solid red");
        return false;
    }
    let cpass2 = $("#cpassword1").val();
    if ($("#cpassword1").val() == "") {
        $("#cpassword1").css("border", "1px solid red");
        return false;
    }

    var name = $("#fname1").val() + " " + $("#lname1").val();
    var email = $("#e1").val();
    var password = $("#p1").val();
    var data = { name, email, password };
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: data,
        success: function() {
            alert(data.name + " " + "is registered");
        },
        dataType: "json",
    });
});
