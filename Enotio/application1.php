<?php
function complete_mail() {
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
  $str .= "<p><strong>Заявка:</strong> <br/> ".($strPostData)."</p>\r\n";
  require 'class.phpmailer.php'; //Дополнительный скрипт для отправки файла, можете не открывать, просто положите рядом с index.html и этим файлом.
  $mail = new PHPMailer();
  $mail->From = 'mail@lp.enotio.ru';      // от кого
  $mail->FromName = 'Заявка на сайте';   // от кого Имя
  $mail->AddAddress('dionix117@yandex.ua', 'Александр'); // кому Ваша почта, Имя
  $mail->IsHTML(true);        // формат письма HTML
  $mail->Subject = $leadData['TITLE'];  // тема письма
  $mail->Body = $str;
  // $mailpost = trim($_POST["EMAIL_WORK"]);
  // $recepient =  $mailpost;
  // $sitename = "story";
  // $pagetitle = "Новая заявка с сайта \"$sitename\"";
  // $message = "<p><strong>Здравствуйте, вы разместили задание на дизайн логотипа в студии Енот — enotio.ru/logo Вот копия вашего задания:</strong> <br/> ".($strPostData).", мы скоро с вами свяжемся, чтобы обсудить это задание. Хорошего дня!</p>\r\n";
  // mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
  // отправляем наше письмо
  if (!$mail->Send()){
    die ('Mailer Error: '.$mail->ErrorInfo);
  }else{
    echo 'success';
  };
};
// if (!empty($_POST['DATA'])){
complete_mail();
// };


define('CRM_HOST', 'enotio.bitrix24.ru'); // Домен срм системы
define('CRM_PORT', '443');
define('CRM_PATH', '/crm/configs/import/lead.php');
define('CRM_LOGIN', 'bot@enotio.ru');  // логин
define('CRM_PASSWORD', 'bot12345'); // пароль

/********************************************************************************************/

// POST processing
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $leadData = $_POST['DATA'];

    $metka = "Новая заявка"; // Название лида, обязательное условие
    // получаем данные из полей и задаем название лида
    $postData = array(
      'TITLE' => $leadData['TITLE'],
      'NAME' => $leadData['NAME'],
      'PHONE_WORK' =>$leadData['PHONE_WORK'],
      'COMMENTS' => $leadData['COMMENTS'],
      'EMAIL_WORK' => $leadData['EMAIL_WORK']
      );

    // авторизация, проверка логина и пароля
    if (defined('CRM_AUTH'))
    {
      $postData['AUTH'] = CRM_AUTH;
    }
    else
    {
      $postData['LOGIN'] = CRM_LOGIN;
      $postData['PASSWORD'] = CRM_PASSWORD;
    }

    $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
    if ($fp)
    {
        // формируем и шифруем строку с данными из формы
      $strPostData = '';
      foreach ($postData as $key => $value)
        $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
      $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
      $str .= "Host: ".CRM_HOST."\r\n";
      $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
      $str .= "Content-Length: ".strlen($strPostData)."\r\n";
      $str .= "Connection: close\r\n\r\n";

      $str .= $strPostData;

        // отправляем запрос в срм систему
      fwrite($fp, $str );
      $result = '';
      while (!feof($fp))
      {
        $result .= fgets($fp, 128);
      }
      fclose($fp);

      $response = explode("\r\n\r\n", $result);
      $output = '<pre>'.print_r($response[1], 1).'</pre>';
    }
    else
    {
      echo 'Connection Failed! '.$errstr.' ('.$errno.')';
    }
  }
  else
  {
    $output = '';
  }

  ?>
