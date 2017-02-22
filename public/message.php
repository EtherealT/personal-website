<?php
    $name = "";
    $email = "";
    $message = "";

    function sanitize_string($msg){
        $msg = stripslashes($msg);
        $msg = htmlentities($msg);
        $msg = strip_tags($msg);
        return $msg;
    }

    if(isset($_POST['name']))
        $name = sanitize_string($_POST['name']);

    if(isset($_POST['email']))
        $email = sanitize_string($_POST['email']);

    if(isset($_POST['message']))
        $message = sanitize_string($_POST['message']);

    $to = 'tobi@tobiadeyinka.com';
    $subject = "Website message from " . $name;
    $headers = "From: " . $email;
    $message = $message;

    if(mail($to, $subject, $message, $headers)){
        return "mail sent";
    }else{
        return "mail not sent";
    };
?>
