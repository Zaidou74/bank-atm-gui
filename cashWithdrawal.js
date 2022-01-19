$(document).ready(function () {
    $("input").on('input', function () {
        let balance = $("#balance").text();
        let amount100 = $("#note100").val() * 100;
        let amount500 = $("#note500").val() * 500;
        let amount1000 = $("#note1000").val() * 1000;
        let amount5000 = $("#note5000").val() * 5000;
        let totalVal = amount100 + amount500 + amount1000 + amount5000;
        if (totalVal <= balance) {
            $("#totalAmount").text(totalVal);
        }
    });
});