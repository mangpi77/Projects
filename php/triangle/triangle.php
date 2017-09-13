<?php
//
	$length = filter_input(INPUT_POST, 'length',
        FILTER_VALIDATE_FLOAT);
    $width = filter_input(INPUT_POST, 'width',
        FILTER_VALIDATE_FLOAT);
    $height = filter_input(INPUT_POST, 'height',
        FILTER_VALIDATE_INT);


if (!isset($height)) { $height = ''; } 
    if (!isset($length)) { $lenght = ''; } 
    if (!isset($width)) { $width = ''; } 



 if ($length === FALSE ) {
        $error_message = 'Length must be a valid number.'; 
    } else if ( $length <= 0 ) {
        $error_message = 'Length must be greater than zero.'; 
    // validate interest rate
    } else if ( $width === FALSE )  {
        $error_message = 'Width must be a valid number.'; 
    } else if ( $width <= 0 ) {
        $error_message = 'Width must be greater than zero.'; 
    // validate height
    } else if ( $height === FALSE ) {
        $error_message = 'height must be a valid whole number.';
    } else if ( $height <= 0 ) {
        $error_message = 'Height must be greater than zero.';
    } else if ( $height > 30 ) {
        $error_message = 'Height must be less than 31.';
    // set error message to empty string if no invalid entries
    } else {
        $error_message = ''; 
    }

    // if an error message exists, go to the index page
    if ($error_message != '') {
        include('index.php');
        exit(); 
    }


if (($length + $width > $height) && ($length + $height > $width) && ($height + $width > $length)) {
    
    $message = "Yes, this is a triangle!";
} else {
    
    $message = "No, this is not a triangle!";
}
?>



<!DOCTYPE html>
<html>

<head>
    <title>Product Discount Calculator</title>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>

<body>
    <main>
        <h1>Triangle</h1>

        
        <span><?php echo htmlspecialchars($message); ?></span>
        <br>

       
    </main>
</body>
</html>