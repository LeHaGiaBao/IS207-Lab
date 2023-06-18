$(document).ready(function () {
    $('input[type = "file"]').on("change", function () {
        if ($(this)[0].files && $(this)[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#imgshow").attr("src", e.target.result);
            };
            reader.readAsDataURL($(this)[0].files[0]);
        }

        $("#imgshow").show();
    });

    $(".add-skill").click(function () {
        var str = "<table class='tbl_skillCV'>";
        str += "<tr><td>Tên kỹ năng</td><td><input type='text' class='skill__name' placeholder='Node JS' required /></td></tr>";
        str += "<tr><td>Mức độ</td><td><input type='range' class='skill__range' min='0' max='100' step='10' /></td></tr></table>";
        $(this).before(str);
    });

    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    $(".btn-subscribe").click(function () {
        var arrSkillCV = [];
        var nameCV = $("#CV__name").val();
        var addressCV = $("#CV__address").val();
        var telCV = $("#CV__tel").val();
        var emailCV = $("#CV__email").val();
        var jobCV = $("#CV__job").val();

    $(".tbl_skillCV").each(function () {
        arrSkillCV.push({
            nameSkill: $(this).find(".skill__name").val(),
            rangeSkill: $(this).find(".skill__range").val(),
        });
    });

    var linkImage = $("#imgshow").get(0);
        imgData = getBase64Image(linkImage);

        localStorage.setItem("imgData", imgData);
        localStorage.setItem("name", nameCV);
        localStorage.setItem("address", addressCV);
        localStorage.setItem("telephone", telCV);
        localStorage.setItem("email", emailCV);
        localStorage.setItem("job", jobCV);
        localStorage.setItem("arrSkill", JSON.stringify(arrSkillCV));
        window.location.href = "./form.html";
    });
});

$(document).ready(function () {
    $(".name").html(localStorage.getItem("name"));
    $(".job").html(localStorage.getItem("job"));
    $(".address").html(localStorage.getItem("address"));
    $(".email").html(localStorage.getItem("email"));
    $(".tel").html(localStorage.getItem("telephone"));

    var linkImageCV = localStorage.getItem("imgData");
    ImageCV = $("#image__CV").get(0);
    ImageCV.src = "data:image/png;base64," + linkImageCV;

    var arrSkill = JSON.parse(localStorage.getItem("arrSkill") || "[]");
    var str = "";

    arrSkill.forEach(addSkill);

    function addSkill(item) {
        var nameSkill = item["nameSkill"];
        var widthRange = item["rangeSkill"];

        str += `<div><p>${nameSkill}</p>`;
        str += `<div class='gray-bar'><div class='green-bar' style = 'width: ${widthRange}%'><p>${widthRange}%</p></div></div></div>`;
    }

    $(".list__skill").append(str);
});