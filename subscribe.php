<?php 
    $userEmail = "";
    $err = "";
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        if (empty($_POST['email'])) {
            $err = "Email is required"
        } else {
            $userEmail = filter_input($_POST['email']);
        }
      if($userEmail){
        $subject = "Thanks for Subscribing!";
        $message = "Thanks for subscribing to #GoAWWF";
        $sender = "From: brendalavinski@gmail.com"  . "\r\n" .
        "CC: brendalavinski@gmail.com";
        //php function to send mail
        if(mail($userEmail, $subject, $message, $sender)){
          ?>
           <!-- show sucess message once email send successfully -->
          <div class="alert success-alert">
            <?php echo "Thanks for Subscribing!" ?>
          </div>
          <?php
          $userEmail = "";
        }else{
          ?>
          <!-- show error message if somehow mail can't be sent -->
          <div class="alert error-alert">
            <?php echo "Failed while sending your mail!" ?>
          </div>
          <?php
        }
      }else{
        ?>
        <!-- show error message if user entered email is not valid -->
        <div class="alert error-alert">
          <?php echo "$userEmail is not a valid email address!" ?>
        </div>
        <?php
      }
    }

    function filter_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>