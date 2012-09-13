<?php
if($_POST){

  require_once("connect.php");   

 if(isset($_SESSION["user_id"])){
  if($_POST["action"] == "updaterequest"){
	$data = htmlentities($_POST['v'],ENT_QUOTES);
	
	$query =  "SELECT * FROM `register_table` WHERE `fb_id` = '".$_SESSION["user_id"]."'";
	
	$result = mysql_query($query) or die(mysql_error());
 
        if($field = mysql_fetch_assoc($result)){
          $new_data = $field["registered_events"].",".$data;
        echo	  $query1 = "UPDATE `register_table` SET `registered_events` = '".$new_data."' WHERE `fb_id` = '".$_SESSION["user_id"]."'";
	  $result1 = mysql_query($query1) or die(mysql_error());
	
          if($result1){
	         echo $new_data;
	  } else {
	         echo 0;
	  }
        }
  }else if($_POST["action"] == "updateuser"){       
    $email = htmlentities($_POST["q"]["email"],ENT_QUOTES);
    $phone = htmlentities($_POST["q"]["phone"],ENT_QUOTES);
    $college = htmlentities($_POST["q"]["college"],ENT_QUOTES);
    if($_POST["q"]["spot"] == 0)
      $accomodation = 0;
    else
      $accomodation = htmlentities($_POST["q"]["accomodation"],ENT_QUOTES);
    $query = "INSERT INTO `register_table` (`fb_id` ,`fb_name` ,`email_id` ,`college` ,`phone` ,`registered_events` ,`accomodation`) VALUES ('".$_SESSION["user_id"]."',  '".$_SESSION["name"]."',  '".$email."',  '".$college."',  '".$phone."',  '',  '".$accomodation."')";

    $result = mysql_query($query) or die(mysql_error());
    
    if($result){
      echo 1;
    }else{
      echo 0;
    }
  } 
      /*
	$fql = 'SELECT * from user where uid = ' . $uid;
	$ret_obj = $facebook-(array(
	   'method' => 'fql.query',
	      'query' => $fql,
	       ));

	       
	       echo '<pre>Name: ' . print_r($user_profile) . '</pre>';
      */  
    //}
}
}
?>