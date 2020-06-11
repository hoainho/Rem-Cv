
<?php

	if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) != ''){
		$name = $_POST['name']; // HINT: use preg_replace() to filter the data
		$email = $_POST['email'];
		$message = nl2br($_POST['message']);
		$to = "remalw2019@gmail.com";	
		$from = $email;
		$subject = 'Contact Form Message';
		
		mail($to,$name,$from,$message,$subject);



	}

?>


