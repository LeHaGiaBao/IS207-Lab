function updateMoney() {
    var totalMoney = 0;
    $(".money").each(function () {
        totalMoney += Number($(this).text());
    });
    $(".total-money").html(totalMoney);
}

$("input[type=number]").change(function () {
    var quantity = $(this).val(),
        price = $(this).parents("tr").find("input[type=text]").val();
    $(this)
        .parents("tr")
        .find(".money")
        .html(quantity * price);
    updateMoney();
});

$("input[type=text]").change(function () {
    var quantity = $(this).parents("tr").find("input[type=number]").val(),
        price = $(this).val();
    $(this)
        .parents("tr")
        .find(".money")
        .html(quantity * price);
    updateMoney();
});

$(".btn-del").click(function () {
    $(this).parents("tr").remove();
    updateMoney();
});