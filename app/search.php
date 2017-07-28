<?php 

mysql_connect("localhost","root","") or die("could not connect");
mysql_select_db("holiday") or die("could not find db");
$output = '';


if (isset($_POST['searchVal'])) {
 $searchq = $_POST['searchVal'];
 $searchq = preg_replace("#[^0-9a-z]#i", "", $searchq);

 $query = mysql_query("select * from place where place_name LIKE '%$searchq%' OR place_location LIKE '%$searchq%'") or ("could not $search");

 $count = mysql_num_rows($query);

 if ($count == 0) {
   $output = '';
 }else{
  while ($row = mysql_fetch_array($query)) {
     $place_name = $row['place_name'];
     $place_location = $row['place_location'];
     $id = $row['id'];

     $output .= '<div >'. $place_name .' '. $place_location . '</div>'; 
  }
 }
}

echo $output;
?>