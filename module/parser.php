<?php
function objectsIntoArray($arrObjData, $arrSkipIndices = array())
{
    $arrData = array();
   
    // if input is object, convert into array
    if (is_object($arrObjData)) {
        $arrObjData = get_object_vars($arrObjData);
    }
   
    if (is_array($arrObjData)) {
        foreach ($arrObjData as $index => $value) {
            if (is_object($value) || is_array($value)) {
                $value = objectsIntoArray($value, $arrSkipIndices); // recursive call
            }
            if (in_array($index, $arrSkipIndices)) {
                continue;
            }
            $arrData[$index] = $value;
        }
    }
    return $arrData;
}
?>



<?php
$xmlUrl = "event.xml"; // XML feed file/URL
$xmlStr = file_get_contents($xmlUrl);
$xmlObj = simplexml_load_string($xmlStr);
$arr = objectsIntoArray($xmlObj);
$event=$arr['Event'];
$echo="";
$i=0;
foreach($event as $key=>$value){
	if($i==0){
		$echo.="<div class=\"{$key}\">\n";
		$i++;
	}	
	else
		$echo.="<div class=\"{$key} nothing\">\n";	
	
	foreach($value as $key1=>$value1){
		$setter=0;
		
		if(is_array($value1)){
			foreach($value1 as $key2=>$value2){
				if(is_array($value2)){
					$setter++;
				}
			}
		
			if($setter==0 && $value1!=Array()){
	//			print_r($value1);
				$echo.="\t<div>\n";
				$echo.="\t\t<div class=\"event_sub_title\">{$value1['title']}</div>\n";
				$echo.="\t\t<p>{$value1['description']}</p>\n";
				$echo.="\t</div>\n";
			
			}
			else if($value1!=Array() && $setter!=0){
				$echo.="\t<div class=\"{$key1}undefined\">\n";
				foreach($value1 as $key2=>$value2){
					if(is_array($value2)){
						$echo.="\t<div>\n";
						$echo.="\t\t<div class=\"event_sub_title\">{$value2['title']}</div>\n";
						$echo.="\t\t<p>{$value2['description']}</p>\n";
						$echo.="\t</div>\n";
					}
				}
				$echo.="\t</div>\n";
			}
		}
		else if($value1!=Array()){
				$echo.="\t<div>\n";
				$echo.="\t\t<div class=\"event_sub_title\">{$value['title']}</div>\n";
				$echo.="\t\t<p>{$value['description']}</p>\n";
				$echo.="\t</div>\n";
		}	
	}
		
	$echo.="</div>\n";
}
echo $echo;
?>
