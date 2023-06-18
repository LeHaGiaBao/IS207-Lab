function GetDate() {
    var today=new Date()
    receipt_day = today.getDay() +1 !=1 ? "Thứ " + String(today.getDay()+1) :"Chủ Nhật";
    d = String(today.getDate()).padStart(2,"0");
    m = String(today.getMonth() +1).padStart(2,"0");
    y = today.getFullYear();
    h = today.getHours();
    minute = today.getMinutes()<10 ? "0" + today.getMinutes() : today.getMinutes();
    today = receipt_day + ", " + m + "/" + d + "/" + y + ", " + h + ":" + minute;
    return today;
}

$(".Register").click(function() {
    var  TourNumber = $("#TourName option:selected").val();
    var AdultNumber = $("#Adult").val(),
        ChildNumber = $("#Child").val();
    var AdultVal = AdultNumber * TourNumber;
    var ChildVal = ChildNumber * TourNumber/2;
    var TotalVal = AdultVal + ChildVal;
                        
    localStorage.setItem("Date",GetDate());
    localStorage.setItem("StaffName","Nguyễn Văn A");
    localStorage.setItem("ClientName", $("#ClientName").val());
    localStorage.setItem("Address",    $("#address").val());
    localStorage.setItem("TourName",   $("#TourName option:selected").text());
    localStorage.setItem("TourVal",    TourNumber);
    localStorage.setItem("Note",        $("#Note").val());
    localStorage.setItem("AdultNumber", AdultNumber);
    localStorage.setItem("AdultVal",    AdultVal);
    localStorage.setItem("ChildNumber", ChildNumber);
    localStorage.setItem("ChildVal", ChildVal);
    localStorage.setItem("TotalVal", TotalVal);
    window.location.href = 'receipt.html';
});

$(".receipt-day").html(localStorage.getItem("Date"));
$(".receipt-staff").html(localStorage.getItem("StaffName"));
$(".receipt-client").html(localStorage.getItem("ClientName"));
$(".receipt-address").html(localStorage.getItem("Address"));
$(".receipt-tour").html(localStorage.getItem("TourName"));
$(".receipt-note").html(localStorage.getItem("Note"));
$(".receipt-TourVal").html(localStorage.getItem("TourVal"));
$(".receipt-AdultNumber").html(localStorage.getItem("AdultNumber"));
$(".receipt-ChildNumber").html(localStorage.getItem("ChildNumber"));
$(".receipt-AdultVal").html(localStorage.getItem("AdultVal"));
$(".receipt-ChildVal").html(localStorage.getItem("ChildVal"));
$(".receipt-TotalVal").html(localStorage.getItem("TotalVal") + " đ");