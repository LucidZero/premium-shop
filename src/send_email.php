<?php

// Allow cross-origin requests
header('Access-Control-Allow-Origin: *');

// Retrieve the email and product data from the request
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$product = $data['product'];

// Validate the email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo 'Please enter a valid email address.';
  exit;
}

// Set up the email parameters
$to = $email;
$from = 'aleksandarjovanpavlovic@gmail.com'; // Set the "from" email address
$subject = "You are on the waiting list!";
$message = "Thank you for joining the waiting list for {$product['name']} (ID: {$product['id']}). We will reach out to you when your turn comes to proceed with the initial deposit and save the item for you.";
$headers = "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send the email
if (mail($to, $subject, $message, $headers)) {
  http_response_code(200);
  echo 'Email sent successfully.';
} else {
  http_response_code(500);
  echo 'An error occurred while sending the email. Please try again later.';
}