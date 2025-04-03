<?php
include 'connectiondb.php';
session_start();
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "info@magicalkenya.org";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent!";
    } else {
        echo "Error sending message.";
    }
}
?>