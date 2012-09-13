<?php

$user = "root"; $pass = "FtP501";
@mysql_connect('10.0.0.126',$user,$pass)
or die("Connection with UserName and Password Error".mysql_errno().mysql_error()."<br>");
$db = "festember12";
@mysql_select_db($db)
or die("Error in connection with Database!!!".mysql_errno().mysql_error()."<br>");

session_start();
?>
