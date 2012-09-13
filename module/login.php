<?php
if($_POST){
  
require_once("connect.php");
require_once("facebook.php");

$config = array();
$config[‘appId’] = '114659931896670';
$config[‘secret’] = '63d10d4a72bff3fb44d710034dfeaa6a';

$facebook = new Facebook($config);

$facebook->setAccessToken($_POST['q']);

$uid = $facebook->getUser();

if($uid){
  $_SESSION["user_id"] = $uid;
  $user_profile = $facebook->api('/me','GET');
  $_SESSION["name"] = $user_profile["name"];
 
  if($_POST["action"] == "loginrequest"){
    
    $query =  "SELECT * FROM `register_table` WHERE `fb_id` = '".$uid."'";
    
    $result = mysql_query($query) or die(mysql_error());
    
     if($field=mysql_fetch_assoc($result)){
	echo $field["registered_events"];  
     }else{
        echo include("form.php");
       // echo $uid;
     }
  }
}

}
?>