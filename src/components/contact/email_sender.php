<?php
$fio = $_POST['adress'];
$email = $_POST['email'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);

$fio = urldecode($fio);
$email = urldecode($email);

$fio = trim($fio);
$email = trim($email);

mail("Ilyushonok2005@gmail.com", "Email с портфолио", "ФИО:".$fio.". E-mail: ".$email ,"From: ".$fio." \r\n");

if (mail("Ilyushonok2005@gmail.com", "Email с портфолио", "ФИО:".$fio.". E-mail: ".$email ,"From: ".$fio." \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}


?>