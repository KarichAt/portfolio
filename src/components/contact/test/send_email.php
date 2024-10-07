<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$message = $data->message;

$to = "Ilyusshonok2005@gmail.com";
$subject = "Your Subject Here";
$headers = "From: .$email.";

if(mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>
