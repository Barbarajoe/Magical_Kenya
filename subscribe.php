<?php
require_once 'connectiondb.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];

    try {
        $stmt = $conn->prepare("INSERT INTO newsletter_subscribers (email) VALUES (?)");
        $stmt->execute([$email]);
        echo "Thank you for subscribing!";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>