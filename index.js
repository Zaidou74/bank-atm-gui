$(document).ready(function () {
    const _PIN = 1234;
    const input_value = $("#password");
    
    //disable input from typing
    $("#password").keypress(function () {
        return false;
    });

    //add password
    $(".calc").click(function () {
        input_value.removeClass("pin-login__text--error");
        let value = $(this).val();
        field(value);
    });

    function field(value) {
        input_value.val(input_value.val() + value);
    }

    $("#clear").click(function () {
        input_value.val("");
    });

    $("#enter").click(function () {
        if(input_value.val() == _PIN){
            window.location.href = 'accountType.html';
        }
        else {
            input_value.val("");
            input_value.addClass("pin-login__text--error");
        }
    });

});