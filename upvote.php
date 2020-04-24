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
$target_id = $decoded[1];
$target_name = $decoded[2];

 
function upvote($user, $name, $id)
{
    //UPDATE gurus SET score=4 WHERE id=2
    $tryVote = registerVote($user, $name, $id);
    if($tryVote){
        $oldscore = getScore($id);
        $newscore = incScore($id, $oldscore);
        return $newscore;
    }
    else return false;
  
}

function getScore($id){
    global $db;
    $query = "SELECT score from gurus where ID=".$id;
    $statement = $db->prepare($query);
    $statement->execute();
    $results = $statement->fetchAll();
    $oldscore = $results[0][0];
    $statement->closeCursor();
    return $oldscore;
}

function incScore($id, $score){
    global $db;
    $newscore = $score + 1;
    $query = "UPDATE gurus SET score =".$newscore." where ID=".$id;
    $statement = $db->prepare($query);
    $result = $statement->execute();
    $statement->closeCursor();
    return $result;
}

function registerVote($user,$name, $id){
    global $db;
    $vote = 1;
    //insert into votes values($user, $name, $id, $vote)
    $query = "INSERT into votes (user,guruName, guruID, vote) VALUES (:user, :name, :id, :vote)";
    $statement = $db->prepare($query);
    $statement->bindValue(':user', $user);
    $statement->bindValue(':name', $name);
    $statement->bindValue(':id', $id);
    $statement->bindValue(':vote', $vote);
    $result = $statement->execute();
    $statement->closeCursor();
    return $result;
}

$executed = upvote($user, $target_name, $target_id);

echo json_encode($executed);

?>