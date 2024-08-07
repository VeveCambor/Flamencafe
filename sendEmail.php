<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($message)) {
        // Zde můžete přidat logiku pro chybovou zprávu
        echo "Please fill in all fields correctly.";
        http_response_code(400);
        exit;
    }

    $recipient = "camborova.veronika@gmail.com"; // Nahraďte svou emailovou adresu
    $subject = "New contact from $name";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send your message.";
    }

} else {
    // Nebyl přijat POST request
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
