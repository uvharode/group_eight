$(document).ready(function () {
    $("#loginButton").click(() => {
        $('#loginModal').modal('show');
        //alert("login button is pressed");

        $("form[name='loginform']").validate({

            rules: {
                email: {

                    required: true,
                    email: true

                },

                password: {
                    required: true,
                    minlength: 5
                },
                messeages: {
                    email: {}


                },

                submitHandler: function (form) {
                    form.submit();
                }


            }
        })


    })

    $("#btnLogin").click(function () {
        $("form[name='loginform']").validate();
        //collect userName and password entered by users
        var email = $("#email").val();
        var password = $("#password").val();

        //call the authenticate function
        authenticate(email, password);
    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $("#signupButton").click(() => {

        // document.getElementById('email').value = "";
        // document.getElementById('password').value = "";
        $('#signupModal').modal('show');
        //alert("signup button is pressed");


        $("#loginButton1").click(() => {
            var name = ($("#fname1").val()) + " " + ($("#lname1").val());
            var email = $("#email1").val();
            var password = $("#password1").val();
            var data = ({ name, email, password });
            $.ajax({
                type: "POST",
                url: "http://localhost:3333/users",
                data: data,
                success: function () {
                    alert(data.name+" "+"is registered");
                },
                dataType: "json"
            })

            //alert("before");
            $("#signupModal").on('hidden.bs.modal', function () {
                //alert('The modal is now hidden.');
                $('#loginModal').modal('show');
                //alert("login button is pressed from signup page");

            });

        })

        $('#cpassword1').keyup(checkPasswordMatch);

        $("form[name='signupform']").validate({

            rules: {

                fname1: {
                    required: true,
                    minlength: 4
                },
                lname1: {
                    required: true,
                    minlength: 4
                },
                uname1: {

                    required: true,
                    minlength: 4
                },
                email1: {

                    required: true,
                    email: true

                },

                password1: {
                    required: true,
                    minlength: 5
                },

                cpassword1: {
                    required: true,
                    minlength: 5
                },

            },
            messeages: {

                fname1: {
                    required: "PLEASE ENTER NAME",
                    minlength: "it must be of more than 3 characters"
                },
                uname1: {

                    required: "PLEASE ENTER NAME",
                    minlength: "it must be of more than 3 characters"

                },
                email1: {}


            },

            submitHandler: function (form) {
                form.submit();
            }


        })
    });


    $('#check1').click(function () {
        if (document.getElementById('check1').checked) {
            $('#password1').get(0).type = 'text';
        } else {
            $('#password1').get(0).type = 'password';
        }
    });

    $('#check2').click(function () {
        if (document.getElementById('check2').checked) {
            $('#cpassword1').get(0).type = 'text';
        } else {
            $('#cpassword1').get(0).type = 'password';
        }
    });

    function checkPasswordMatch() {
        var password = $('#password1').val();
        var confirmPassword = $('#cpassword1').val();
        if (password != confirmPassword)
            $("#CheckPasswordMatch").html("Passwords does not match!");
        else
            $("#CheckPasswordMatch").html("Passwords match.");
    }
});


//authenticate function to make ajax call
function authenticate(email, password) {
    $.ajax
        ({
            type: "GET",
            //the url where you want to sent the userName and password to
            url: "http://localhost:3333/users",
            dataType: 'json',
            async: false,
            //json object to sent to the authentication url
            // data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
            success: function (data) {
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
                }
                else {
                    $("#answer").html("Invalid Username or Password");
                }
            }
        })
}

