function insertNumber(num) {
    $(".calc-display").val($(".calc-display").val() + num);
}

function equal() {
    $(".results-display").val(eval($(".calc-display").val()));
}

function clearDisplay() {
    $(".calc-display").val("");
    $(".results-display").val("");
}

function delDisplay() {
    var value = $(".calc-display").val();
    $(".calc-display").val(value.substring(0, value.length - 1));
}