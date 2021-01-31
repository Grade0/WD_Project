<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8">
</head>
<body>
    <?php
    if (isset($_POST["submit"]))
        $to = "1184117494@qq.com"; // this is your Email address
        $from = $_POST["email"]; // this is the sender's Email address
        $name = $_POST["name"]; 
        $name = strtoupper($name);
        $num_people = $_POST["people"];
        $date = $_POST["date"]; 
        $subject = "Table Reservation - Form submission";
        $subject2 = "Table Reservation - Copy of your form submission";
        $message = "Hi there, My name is ". $name . ", I'd like to reserve a table for" . $num_people ."for the day: " . $date . ". My e-mail is " .$from. ". Thank you! \n\n Notes: " . $_POST["message"];
        $message2 = "Here is a copy of your message: " . "Hi there, My name is". $name . ", and I' like reserve a table for" . $num_people ."for the day: " . $date . ". My e-mail is " .$from. ". Thank you! \n\n Notes: " . $_POST["message"];

        $headers = "From:" . $from;
        $headers2 = "From:" . $to;
        mail($to,$subject,$message,$headers);
        mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
        echo "<h1> Mail Sent. Thank you " . $name . ", we will contact you shortly. </h1>";
    ?>
</body>
</html>