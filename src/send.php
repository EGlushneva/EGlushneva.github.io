<?php
require 'php/PHPMailer.php';
require 'php/SMTP.php';
require 'php/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['user_name'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$check = $_POST['check'];
$radio = $_POST['radios'];

// Формирование самого письма
$title = "Новая заявка!";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b><br>$phone<br>
<b>Был на сайте?:</b>$radio<br>
<b>ПС:</b>$check<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'eva.glushneva@mail.ru'; // Логин на почте
    $mail->Password   = 'NQGEN0E9HUdw5Gw5dyiy'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('eva.glushneva@mail.ru', 'Евгения'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('eva.glushneva@mail.ru');  
    

   
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);