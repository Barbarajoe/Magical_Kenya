<?php
// settings.php

// Start session
session_start();

// Include configuration file
require_once 'connectiondb.php';

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

// Fetch user settings from the database
$user_id = $_SESSION['user_id'];
$query = "SELECT * FROM user_settings WHERE user_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param('i', $user_id);
$stmt->execute();
$result = $stmt->get_result();
$settings = $result->fetch_assoc();

// Handle form submission to update settings
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email_notifications = isset($_POST['email_notifications']) ? 1 : 0;
    $dark_mode = isset($_POST['dark_mode']) ? 1 : 0;

    $update_query = "UPDATE user_settings SET email_notifications = ?, dark_mode = ? WHERE user_id = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param('iii', $email_notifications, $dark_mode, $user_id);
    $update_stmt->execute();

    // Redirect to avoid form resubmission
    header('Location: settings.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settings</title>
</head>
<body>
    <h1>User Settings</h1>
    <form method="POST" action="settings.php">
        <label>
            <input type="checkbox" name="email_notifications" <?php echo $settings['email_notifications'] ? 'checked' : ''; ?>>
            Enable Email Notifications
        </label>
        <br>
        <label>
            <input type="checkbox" name="dark_mode" <?php echo $settings['dark_mode'] ? 'checked' : ''; ?>>
            Enable Dark Mode
        </label>
        <br>
        <button type="submit">Save Settings</button>
    </form>
</body>
</html>