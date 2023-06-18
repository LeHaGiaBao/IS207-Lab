<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bai 1</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
        }

        .all {
            padding-top: 80px;
        }

        form {
            width: 70%;
            margin: 0 auto;
        }

        .input {
            border: 1px solid #333;
            padding: 8px;
            height: 40px;
        }

        input {
            width: 50%;
        }

        .submit-input {
            width: 30%;
            margin-left: 30%;
        }

        .result {
            text-align: center;
            padding-top: 20px;
        }
    </style>
</head>

<body>
    <div class="all">
        <h3 class="title">
            Tính diện tích và chu vi của hình chữ nhật
        </h3>
        <form method="get" action="#">
            <div class="input">
                <label for="">Chiều dài</label>
                <input type="input" name="chieudai"><br><br>
            </div>

            <div class="input">
                <label for="">Chiều rộng</label>
                <input type="input" name="chieurong"><br><br>
            </div>

            <div class="input">
                <input type="Submit" value="Tính" name="Submit" class="submit-input">

            </div>
            <?php
            if (isset($_GET['Submit']) && ($_GET['Submit'] == "Tính")) {
                $dai = $_GET['chieudai'];
                $rong = $_GET['chieurong'];
                $dientich = (float)$dai * (float)$rong;
                $chuvi = ((float)$dai + (float)$rong) * 2;
                echo "Diện tích:" . $dientich . "<br>";
                echo "Chu vi:" . $chuvi;
            }
            ?>
        </form>
    </div>
</body>

</html>