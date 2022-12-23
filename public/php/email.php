<?php
switch (@$_GET['do'])
 {

 case "send":

      $name = $_POST['name'];
      $email = $_POST['email'];
      $fphone1 = $_POST['number'];


      $message = $_POST['message'];
      $secretinfo = $_POST['info'];

    if (!preg_match("/\S+/",$name))
    {
      unset($_GET['do']);
      $message = "First Name required. Please try again.";
      break;
    }
    if (!preg_match("/^\S+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,6}$/",$email))
    {
      unset($_GET['do']);
      $message = "Primary Email Address is incorrect. Please try again.";
      break;
    }
    if (!preg_match("/^[0-9 #\-\*\.\(\)]+$/",$fphone1))
    {
      unset($_GET['do']);
      $message = "Phone Number 1 required. No letters, please.";
      break;
    }
 
    if ($secretinfo == "")
    {
       $myemail = "medstreeremoval@gmail.com";
       $emess = "Name: ".$name."\n";
       $emess.= "Email 1: ".$email."\n";
       $emess.= "Phone number 1: ".$fphone1."\n";
       $emess.= "Comments: ".$fsendmail;
       $ehead = "From: ".$email."\r\n";
       $subj = "An Email from ".$fname." ".$mname." ".$lname."!";
       $mailsend=mail("$myemail","$subj","$emess","$ehead");
       $message = "Email was sent.";
    }
 
       unset($_GET['do']);
       header("Location: index.html");
     break;
 
 default: break;
 }
?>