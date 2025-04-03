<?php
session_start();
require_once 'connectiondb.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}


// Fetch bookings
$stmt = $conn->query("SELECT * FROM bookings");
$bookings = [];
while ($row = $stmt->fetch_assoc()) {
    $bookings[] = $row;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Admin Dashboard</title>
</head>
<body>
    <h1>Bookings</h1>
    <table>
        <?php foreach ($bookings as $booking): ?>
        <tr>
            <td><?= $booking['booking_id'] ?></td>
            <td><?= $booking['travel_date'] ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>