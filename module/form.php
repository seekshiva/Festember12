<?php 
if(isset($_SESSION["user_id"])){
?>
<form action="" name="myform" method="post" id="initialForm">
<table name="table" border="1"><tr>
<td>Name:</td>
<td><input type="text" name="name" id="name" class="name" value="" /></td>
</tr>
<tr>
    <td> Phone No.:</td>
<td><input type="text" name="phone" id="phone" class="phone" value="" /></td>
</tr>
<tr>
    <td>Email:</td>
<td><input type="text" name="email" id="email" class="email" value="" /></td>
</tr>
<td>College:</td>
<td><input type="text" name="college" id="email" class="email" value="" /></td>
</tr>
<tr>
    <td>Joining online event:</td>
<td><input type="radio" name="spot" id="btn" class="btn" value="0" /></td>
</tr>
<tr>
    <td>Joining Spot Event:</td>
<td><input type="radio" name="spot" id="btn1" class="btn" value="1"/></td>
</tr>
<tr><td colspan="2">
<div id="online_event_box" style="display:none;">
Want accomodation ?
Yes<input type="radio" name="accomodation" id="btn2" class="btn" value="1" />
No<input type="radio" name="accomodation" id="btn3" class="btn" value="0" />
</div>

</td></tr>
    <tr><td>&nbsp;</td>

<td><input type="submit" value="SUBMIT" /></td></tr>
</table>
</form>
<?php
		      }
else{
  echo "<div class='plregister'>Please Login to register</div>";
}
?>