var showDate, movieName, showTime, price, room, roomValue;
var seatNumber = [];

$("#show-date").change(function () {
    showDate = $("#show-date").val();
    var temp = showDate.split("-");
    showDate = temp[2] + "/" + temp[1] + "/" + temp[0];
});

$("#movie-name").change(function () {
    movieName = $("#movie-name :selected").text();
});

$("#showtime").change(function () {
    showTime = $("#showtime :selected").text();
    price = $("#showtime").val();
});

$("#room").change(function () {
    room = $("#room :selected").text();
    roomValue = $("#room").val();
});

$("#seat-number").change(function () {
    $("#seat-number option:selected").each(function () {
        var temp = $(this).text();
        if (!seatNumber.includes(temp)) {
            seatNumber.push($(this).text());
        }
    });
});

$(".buy-tickets__table-btn").click(function () {
    localStorage.setItem("date", showDate);
    localStorage.setItem("movieName", movieName);
    localStorage.setItem("showTime", showTime);
    localStorage.setItem("room", room);
    var money = Number(price) * Number(roomValue),
    totalMoney = money * seatNumber.length,
    str;
    for (var seat of seatNumber) {
        htmlSeat = "<td>" + seat + "</td>";
        htmlMoney = "<td>" + money + " đ" + "</td>";
        str += "<tr>" + htmlSeat + htmlMoney + "</tr>";
    }
    localStorage.setItem("totalMoney", totalMoney);
    localStorage.setItem("seatNumber", str);
    window.location.href = "./ticket_infor.html";
});

$(".receipt__show-date").html(localStorage.getItem("date"));
$(".receipt__movie-name").html(localStorage.getItem("movieName"));
$(".receipt__showtime").html(localStorage.getItem("showTime"));
$(".receipt__room").html(localStorage.getItem("room"));
$(".receipt__table tr:last").before(localStorage.getItem("seatNumber"));
$(".receipt__total").html(localStorage.getItem("totalMoney") + " đ");