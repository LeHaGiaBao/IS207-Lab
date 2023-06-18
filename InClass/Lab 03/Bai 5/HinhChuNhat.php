<?php
class HinhChuNhat
{
    private $dai, $rong;
    public function __construct($d, $r)
    {
        $this->dai = $d;
        $this->rong = $r;
    }
    public function DienTich()
    {
        return $this->dai * $this->rong;
    }
    public function ChuVi()
    {
        return ($this->dai + $this->rong) * 2;
    }
}
