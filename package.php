<?php
header('Content-Type: application/json');
require_once 'connectiondb.php';

try {
    $stmt = $conn->query("SELECT * FROM tour_packages");
    $packages = $stmt->fetch_all(MYSQLI_ASSOC);
    echo json_encode($packages);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>