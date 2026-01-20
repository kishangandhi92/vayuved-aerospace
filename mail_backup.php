<?php
// mail.php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/mail_error.log');

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$response = [
  "status" => false,
  "message" => "Invalid request",
];

// Allow only POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  echo json_encode($response);
  exit;
}

// Read JSON body
$input = json_decode(file_get_contents("php://input"), true);

// Honeypot check
$honeypot = trim($input["company"] ?? "");
if ($honeypot !== "") {
  // Silent fail – pretend success to confuse bots
  echo json_encode([
    "status" => true,
    "message" => "Inquiry sent successfully.",
  ]);
  exit;
}

// Sanitize inputs
$name    = trim($input["name"] ?? "");
$email   = trim($input["email"] ?? "");
$mobile  = trim($input["mobile"] ?? "");
$product = trim($input["product"] ?? "");
$message = trim($input["message"] ?? "");
$purpose = trim($input["purpose"] ?? "");
$source = trim($input["source"] ?? "product"); // default = product

// Basic validation
if ($name === "" || $email === "" || $mobile === "" || $message === "") {
  $response["message"] = "All required fields must be filled.";
  echo json_encode($response);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $response["message"] = "Invalid email address.";
  echo json_encode($response);
  exit;
}

// Email setup
$to = "kishangandhi9223@gmail.com"; // add more if needed
if ($source === "contact") {
  $subject = "New Contact Inquiry – Vayuved Website";
} else {
  $subject = "New Product Inquiry – " . ($product ?: "Website");
}

$body = '
    <table cellpadding="10" style="width:100%;max-width:600px;border:1px solid #e1e1e1;color:#5d5d5d;border-radius:15px">
        <tr>
            <td align="center">
                <img alt="Vayuved Aerospace" height="100px" src="https://test.vayuved.com/logo.png">
            </td>
        </tr>
        <tr>
            <td align="center">
                <strong style="color:#464646; font-size:20px">New Message Received!</strong>
                <p>You have received a inquiry from the website. Please find the details below:</p>
            </td>
        </tr>
        <tr>
            <td>
                <table border="0" cellpadding="10" style="background-color:#f3f3f3;padding:5px;border-radius:10px;font-size:18px;width:100%">
                    <tr><td><b>Name:</b></td><td>' .  $name . '</td></tr>
                    <tr><td><b>Email ID:</b></td><td>' .  $email . '</td></tr>
                    <tr><td><b>Phone No:</b></td><td>' . $mobile . '</td></tr>
                    ' . (
  $source === "contact" && $purpose !== ""
    ? '<tr><td><b>Purpose:</b></td><td>' . htmlspecialchars($purpose) . '</td></tr>'
    : ($product !== ""
        ? '<tr><td><b>Product:</b></td><td>' . htmlspecialchars($product) . '</td></tr>'
        : '')
) . '
                    <tr><td><b>Message:</b></td><td>' . $message . '</td></tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                This inquiry was submitted from the Vayuved website.
            </td>
        </tr>
    </table>';

// Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
//$headers .= "From: Vayuved Aerospace <no-reply@vayuved.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Return-Path: no-reply@vayuved.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();


// Send mail
$result = mail($to, $subject, $body, $headers);

if (!$result) {
  error_log("mail() failed");
}

if ($result) {
  $response["status"] = true;
  $response["message"] = "Inquiry sent successfully.";
} else {
  $response["message"] = "Failed to send inquiry. Please try again later.";
}

echo json_encode($response);
exit;
