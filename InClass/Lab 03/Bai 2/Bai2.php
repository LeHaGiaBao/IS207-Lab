<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bai 2</title>
</head>

<body>
    <form method="get" action="#">
        <table border="1" cellspacing="0">
            <tr>
                <td>Ngày </td>
                <td><input type="input" name="ngay"></td>
            </tr>
            <tr>
                <td>Tháng </td>
                <td><input type="input" name="thang"></td>
            </tr>
            <tr>
                <td>Năm </td>
                <td><input type="input" name="nam"></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="Submit" value="Tổng" name="Submit"></td>
            </tr>
        </table>

        <?php

        function KTNN($nam)
        {
            if ((($nam % 4 == 0) && ($nam % 100 != 0)) || ($nam % 400 == 0)) {
                return true;
            } else {
                return false;
            }
        }

        if (isset($_GET['Submit']) && ($_GET['Submit'] == "Tổng")) {
            $ngay = (int)$_GET['ngay'];
            $thang = (int)$_GET['thang'];
            $nam = (int)$_GET['nam'];
            $s = $ngay;
            for ($i = 1; $i < $thang; $i++) {
                switch ($i) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        $s = $s + 31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        $s = $s + 30;
                        break;
                    case 2:
                        if (KTNN($nam) == true) {
                            $s = $s + 29;
                        } else {
                            $s += $s + 28;
                        }
                }
            }
            echo "Tổng số ngày từ đầu năm:" . $s . "<br>";
        }
        ?>
    </form>
</body>

</html>