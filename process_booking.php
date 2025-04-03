<?php
require_once 'connectiondb.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $packageId = $_POST['package'];
    $travelDate = $_POST['date'];
    $guests = $_POST['guests'];
    $requests = $_POST['specialRequests'];

    try {
        $stmt = $conn->prepare("INSERT INTO bookings (user_id, package_id, travel_date, num_guests, special_requests) 
                               VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$userId, $packageId, $travelDate, $guests, $requests]);
        
        echo json_encode(["success" => true, "message" => "Booking confirmed!"]);
    } catch (PDOException $e) {
        echo json_encode(["success" => false, "message" => "Error: " . $e->getMessage()]);
    }
}
?>