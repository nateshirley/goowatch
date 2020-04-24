<?php 
header('Access-Control-Allow-Origin: http://localhost:4200');
//header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
header('Access-Control-Max-Age: 1000');  
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
require('connectdb.php');
session_start();


//retrieve data from the request
$postdata = file_get_contents("php://input"); //assume param's name is str

//change json format to php array
$decoded = json_decode($postdata);
$name = $decoded[0];
$category = $decoded[1];
$description = $decoded[2];
$link = $decoded[3];


function submitGuru($name,$category, $description, $link){
    global $db;
    //insert into votes values($user, $name, $id, $vote)
    $query = "INSERT into submissions (name,category, description,link) VALUES (:name, :category, :description, :link)";
    $statement = $db->prepare($query);
    $statement->bindValue(':name', $name);
    $statement->bindValue(':category', $category);
    $statement->bindValue(':description', $description);
    $statement->bindValue(':link', $link);
    $result = $statement->execute();
    $statement->closeCursor();
    return $result;
}

$executed = submitGuru($name,$category, $description, $link);

echo json_encode($executed);

?>