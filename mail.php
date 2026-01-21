<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader (created by composer, not included with PHPMailer)
require 'vendor/autoload.php';


/* ---------------- ERROR LOGGING ---------------- */
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/mail_error.log');

/* ---------------- HEADERS ---------------- */
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$response = [
  "status" => false,
  "message" => "Invalid request",
];

/* ---------------- METHOD CHECK ---------------- */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  echo json_encode($response);
  exit;
}

/* ---------------- READ JSON ---------------- */
$input = json_decode(file_get_contents("php://input"), true);

/* ---------------- HONEYPOT ---------------- */
$honeypot = trim($input["company"] ?? "");
if ($honeypot !== "") {
  echo json_encode([
    "status" => true,
    "message" => "Inquiry sent successfully.",
  ]);
  exit;
}

/* ---------------- SANITIZE ---------------- */
$name    = trim($input["name"] ?? "");
$email   = trim($input["email"] ?? "");
$mobile  = trim($input["mobile"] ?? "");
$product = trim($input["product"] ?? "");
$message = trim($input["message"] ?? "");
$purpose = trim($input["purpose"] ?? "");
$source  = trim($input["source"] ?? "product");

/* ---------------- VALIDATION ---------------- */
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

/* ---------------- SUBJECT ---------------- */
$to = "engineering@vayuved.com"; // add more if needed
if ($source === "contact") {
  $subject = "New Contact Inquiry – Vayuved Website";
} else {
  $subject = "New Product Inquiry – " . ($product ?: "Website");
}

/* ---------------- EMAIL BODY ---------------- */
$body = '
<table cellpadding="10" style="width:100%;max-width:600px;border:1px solid #e1e1e1;color:#5d5d5d;border-radius:15px">
  <tr>
    <td align="center">
      <img alt="Vayuved Aerospace" height="100" src="https://vayuved.com/logo.png">
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong style="font-size:20px;color:#464646">New Message Received!</strong>
      <p>You have received an inquiry from the website.</p>
    </td>
  </tr>
  <tr>
    <td>
      <table cellpadding="10" style="background:#f3f3f3;border-radius:10px;width:100%">
        <tr><td><b>Name:</b></td><td>' . htmlspecialchars($name) . '</td></tr>
        <tr><td><b>Email:</b></td><td>' . htmlspecialchars($email) . '</td></tr>
        <tr><td><b>Phone:</b></td><td>' . htmlspecialchars($mobile) . '</td></tr>' .

        ($source === "contact" && $purpose !== ""
          ? '<tr><td><b>Purpose:</b></td><td>' . htmlspecialchars($purpose) . '</td></tr>'
          : ($product !== ""
              ? '<tr><td><b>Product:</b></td><td>' . htmlspecialchars($product) . '</td></tr>'
              : '')
        ) . '

        <tr><td><b>Message:</b></td><td>' . nl2br(htmlspecialchars($message)) . '</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>This inquiry was submitted from the Vayuved website.</td>
  </tr>
</table>';

/* ---------------- SEND VIA GMAIL SMTP ---------------- */
$mail = new PHPMailer(true);

try {
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'vayuved.sender@gmail.com';
    $mail->Password   = 'khug qycy zvbv hjsc';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('vayuved.sender@gmail.com', 'Vayuved Website');
    $mail->addAddress($to);
    $mail->addBCC('kishangandhi9223@gmail.com', 'Kishan Gandhi');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();

    $response["status"] = true;
    $response["message"] = "Inquiry sent successfully.";

} catch (Exception $e) {
    error_log("PHPMailer Error: " . $mail->ErrorInfo);
    $response["message"] = "Failed to send inquiry. Please try again later.";
}

echo json_encode($response);
exit;
