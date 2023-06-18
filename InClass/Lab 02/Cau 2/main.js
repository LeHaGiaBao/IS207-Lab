$(".btn-calc").click(function () {
    var day = $("input[name = day]:checked").val();
    var food = $("#food option:selected"),
        dirk = $("#drink option:selected"),
        table = $("#table-hoahon");

    food.each(function (index) {
        var str = "<tr><td>" + $(this).text() + "</td>";
        str += "<td>" + $(this).val() + "</td></tr>";
        table.append(str);
    });

    dirk.each(function () {
        var str = "<tr><td>" + $(this).text() + "</td>";
        str += "<td>" + $(this).val() + "</td></tr>";
        table.append(str);
    });

    var totalMoney = 0;
    table.find("tr").each(function (index) {
        if (index >= 1) {
            totalMoney += Number($(this).find("td").eq(1).html());
        }
    });

    if (day == 2) {
        totalMoney = totalMoney + totalMoney * 0.1;
    }
    table.append("<tr><td>Tổng tiền</td>" + "<td>" + totalMoney + " đ</td></tr>");
    table.show();
});