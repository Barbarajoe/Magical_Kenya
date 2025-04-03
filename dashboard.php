<?php
// dashboard.php

// Start session
session_start();


// Include database connection
require_once 'connectiondb.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
       /* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
    line-height: 1.6;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2rem;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}

main {
    padding: 2rem;
}

section {
    margin-bottom: 2rem;
    background: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

section h2 {
    color: #007bff;
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin-bottom: 0.5rem;
}

ul li a {
    color: #007bff;
    text-decoration: none;
}

ul li a:hover {
    text-decoration: underline;
}

footer {
    text-align: center;
    padding: 1rem 0;
    background-color: #333;
    color: #fff;
    position: relative;
    bottom: 0;
    width: 100%;
}

footer p {
    margin: 0;
} 
        </style>
</head>
<body>
    <header>
        <h1>Welcome to the Dashboard</h1>
        <nav>
            <ul>
                <li><a href="profile.php">Profile</a></li>
                <li><a href="settings.php">Settings</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Overview</h2>
            <p>
Discover the Joy of Traveling

Traveling opens the door to new experiences, cultures, and unforgettable adventures. Whether you're exploring exotic destinations, embarking on a business trip, or taking a weekend getaway, every journey brings fresh perspectives and lasting memories.

<strong>Why Travel?</strong>
<ul>
    <li>🌍 <strong>Explore New Places</strong> – Discover breathtaking landscapes, historic landmarks, and vibrant cities.</li>
    <li>🤝 <strong>Meet New People</strong> – Connect with diverse cultures and build meaningful relationships.</li>
    <li>🧘‍♂️ <strong>Relax & Recharge</strong> – Escape daily routines and find peace in new environments.</li>
    <li>📖 <strong>Learn & Grow</strong> – Gain knowledge through firsthand experiences and cultural immersion.</li>
</ul>

<strong>Types of Travel</strong>
<ul>
    <li>✔️ <strong>Adventure Travel</strong> – Thrilling experiences like safaris, hiking, and extreme sports.</li>
    <li>✔️ <strong>Leisure Travel</strong> – Relaxation at beaches, resorts, and holiday destinations.</li>
    <li>✔️ <strong>Cultural Travel</strong> – Explore historical sites, museums, and traditional festivals.</li>
    <li>✔️ <strong>Business Travel</strong> – Work trips, conferences, and corporate events.</li>
    <li>✔️ <strong>Solo & Group Travel</strong> – Whether alone or with friends, every journey is unique!</li>
</ul>

<strong>Plan Your Perfect Trip</strong>
<ul>
    <li>✈️ <strong>Choose Your Destination</strong> – Pick a location that matches your interests.</li>
    <li>🏨 <strong>Book Accommodation</strong> – Find hotels, lodges, or homestays for a comfortable stay.</li>
    <li>🚗 <strong>Select Transport</strong> – Travel by plane, train, bus, or rental car for convenience.</li>
    <li>🗺️ <strong>Create an Itinerary</strong> – Plan activities to make the most of your trip.</li>
</ul>

No matter where you go, traveling is about creating memories, embracing new experiences, and stepping outside your comfort zone. Start your adventure today! 🚀✨
</p>
            <!-- Add dynamic content here -->
        </section>
        <section>
            <h2>Quick Actions</h2>
            <ul>
                <li><a href="create_post.php">Create a Post</a></li>
                <li><a href="view_reports.php">View Reports</a></li>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; <?php echo date('Y'); ?> Your Company. All rights reserved.</p>
    </footer>
</body>
</html>