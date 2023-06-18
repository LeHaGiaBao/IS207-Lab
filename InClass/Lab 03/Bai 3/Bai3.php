<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bai 3</title>
</head>

<body>
    <form method="get" acction="#">
        Nhập tên cần tìm <input type="text" name="tencantim"><br><br>
        <input type="Submit" name="Tim" value="Tìm">

        <?php
        function InMang($array)
        {
            foreach ($array as $ten => $tuoi) {
                echo $ten . "\t" . $tuoi . "<br>";
            }
        }
        function TimTen($array, $str)
        {
            foreach ($array as $ten => $tuoi) {
                if ($ten == $str) {
                    return true;
                }
            }
            return false;
        }

        $ban = array("Tuấn" => 21, "Tú" => 19, "Tâm" => 22, "Tùng" => 20);
        if (isset($_GET['Tim']) && ($_GET['Tim'] == "Tìm")) {
            $ten = $_GET['tencantim'];
            if (TimTen($ban, $ten) == true) {
                echo "Tìm thấy " . $ten . " trong mảng<br>";
            } else {
                echo "Tìm không thấy <br>";
            }
            echo "<h3>Xuất mảng</h3>";
            InMang($ban);
        }
        ?>
    </form>
</body>

</html>