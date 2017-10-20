
<?php
function complete_mail1() {
  $leadData = $_POST['DATA'];
  // Получаем данные из форм и сохраняем в массив
  $postData = array(
    'Заголовок:' => $leadData['TITLE'],
    'Имя:' => $leadData['NAME'],
    'Телефон' => $leadData['PHONE_WORK'],
    'Почта:' => $leadData['EMAIL_WORK'],
    'Комментарий:' => $leadData['COMMENTS'],
    );
  $strPostData = '';
  foreach ($postData as $key => $value){
    $strPostData .= ($strPostData == '' ? '' : ' ').$key.' '.($value)."<br>";
  }
  $name = trim($_POST['NAME']);
  $str .= "<p><strong>Здравствуйте, вы разместили задание на дизайн логотипа в студии Енот — enotio.ru/logo Вот копия вашего задания:</strong> <br/> ".($strPostData).", мы скоро с вами свяжемся, чтобы обсудить это задание. Хорошего дня!</p>\r\n";
  require 'class.phpmailer.php'; //Дополнительный скрипт для отправки файла, можете не открывать, просто положите рядом с index.html и этим файлом.
  $mail = new PHPMailer();
  $address = $_POST["DATA"];
  $mailto = $address['EMAIL_WORK'];
  $mail->From = 'mail@lp.enotio.ru';      // от кого
  $mail->FromName = 'Заявка на сайте';   // от кого Имя
  $mail->AddAddress($mailto, $name = "тывф"); // кому Ваша почта, Имя
  $mail->IsHTML(true);        // формат письма HTML
  $mail->Subject = $leadData['TITLE'];  // тема письма
  $mail->Body = $str;
  // отправляем наше письмо
  if (!$mail->Send()){
    die ('Mailer Error: '.$mail->ErrorInfo);
  }else{
    echo 'success';
  };
};
// if (!empty($_POST['DATA'])){
complete_mail1();


// };
?>