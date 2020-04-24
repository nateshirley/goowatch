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
$user = $decoded[0];
$new_comment = $decoded[1];
$target_id = $decoded[2];


function submitComment($user,$comment, $id){
    global $db;
    //insert into votes values($user, $name, $id, $vote)
    $query = "INSERT into comments (user,comment, guruID) VALUES (:user, :comment, :id)";
    $statement = $db->prepare($query);
    $statement->bindValue(':user', $user);
    $statement->bindValue(':comment', $comment);
    $statement->bindValue(':id', $id);
    $result = $statement->execute();
    $statement->closeCursor();
    return $result;
}

$executed = submitComment($user, $new_comment, $target_id);

echo json_encode($executed);

?>