<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bai 5</title>
</head>

<body>
    <form method="get" action="#">
        Chiều dài: <input type="input" name="chieudai"><br><br>
        Chiều rộng: <input type="input" name="chieurong"><br><br>
        Chiều cao: <input type="input" name="chieucao"><br><br>
        <input type="Submit" value="Tính" name="Submit">
        <?php
        include "HinhChuNhat.php";
        class HinhLapPhuong extends HinhChuNhat
        {
            private $cao;
            public function __construct($d, $r, $c)
            {
                parent::__construct($d, $r);
                $this->cao = $c;
            }
            public function DienTich()
            {
                return parent::DienTich() * 2 + $this->cao * parent::ChuVi();
            }
            public function TheTich()
            {
                return parent::DienTich() * $this->cao;
            }
        }
        if (isset($_GET['Submit']) && ($_GET['Submit'] == "Tính")) {
            $dai = (float)$_GET['chieudai'];
            $rong = (float)$_GET['chieurong'];
            $cao = (float)$_GET['chieucao'];
            include "HinhLapPhuong.php";
            $h1 = new HinhLapPhuong($dai, $rong, $cao);
            $dientich = $h1->DienTich();
            $thetich = $h1->TheTich();
            echo "Diện tích:" . $dientich . "<br>";
            echo "Thể tích:" . $thetich;
        }
        ?>
    </form>
</body>

</html>