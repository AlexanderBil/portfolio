<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('project.dr.bil@gmail.com', 'Its work!!!');
//Кому отправить
$mail->addAddress('deos.ninja@gmail.com');
//Тема письма
$mail->Subject = 'Hi! This is Iron man';

//Тело письма
$body = '<h2>Встречайте письмо!</h2>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
}


$mail->Body = $body;

//Отправляем
if(!$mail->send()){
    $message = 'Error';
}else{
    $message = 'Email sent '
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>