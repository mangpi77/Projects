<?php
    // get the data from the form
    $product_description = $_POST['product_description'];
    $list_price = $_POST['list_price'];
    $discount_percent = $_POST['discount_percent'];
    
    // calculate the discount
    
    
    // Product describtion == working hours
    // List Price == Wage
    // Discount Percent == Total earned
    $salary = 10;
    $overtimes = $salary * 1.5;
    $fulltime = 40;
    $overtimes_salary = $product_description - $fulltime;
    
    $discount = $product_description * $salary;
    

	 
     $list_price = filter_input(INPUT_POST, 'list_price',
       FILTER_VALIDATE_FLOAT);
     $discount = filter_input(INPUT_POST, 'discount',
       FILTER_VALIDATE_FLOAT);
     //
     /*
      $list_price = filter_input(INPUT_POST, 'product_description',
        FILTER_VALIDATE_FLOAT);
    	$interest_rate = filter_input(INPUT_POST, 'interest_rate',
        FILTER_VALIDATE_FLOAT);
    	$years = filter_input(INPUT_POST, 'years',
        FILTER_VALIDATE_INT);

*/
    // validate investment
    if ($product_description == NULL) {
        $error_message = '* Product description is a required field. *'; 
        }
	
	else if ($list_price == FALSE ){
		$error_message = '* There must be a Price List number *'; 
	}
	
	else if ($list_price <= 0 ){
		$error_message = '* List price must be a valid whole number *'; 
	}
	
    
    else if ($discount == NULL){
		$error_message = '* There must be a discount number *'; 
	}
    
    else if ($discount <= 0 ){
		$error_message = '* Discount price must be a valid whole number *'; 
	}
    
   /* 
     if ($product_description < 40) {
    	$product_description = $product_description * $list_price;
    	$list_price =  0;
    	$discount_price = $discount + $list_price;
    }
    
    else if ($product_description > 40) {
        $discount = $product_description * $list_price;
    	$list_price =  $overtimes *  $overtimes_salary;
    	$discount_price = $discount + $list_price;
    }
    else {
    	$product_description = $product_description * $list_price;
    	$list_price =  0;
    	$discount_price = $discount + $list_price;
    
    }
    
  */
    
   if ($error_message != '') {
        include('index.html');
        exit(); 
    }

   
   
   
     
    //$discount_price = $discount + $list_price;
    
    
    
    // apply currency formatting to the dollar and percent amounts\
    
    $discount_percent = $discount;
    $discount_amount = ($list_price)-($list_price * $discount_percent/100);
    $discount_price = $list_price - $discount_amount;
    $tax_rate =  "8%"; 
    $after_tax = $discount_amount * 0.08;
    
    $list_price_formatted = "$".number_format($list_price, 2);
    $discount_percent_formatted = $discount_percent."%";
    $discount_formatted = "$".number_format($discount, 2);
    $discount_price_formatted = "$".number_format($discount_price, 2); 
    $discount_amount_formatted = "$". number_format($discount_amount, 2);
    $after_tax_formatted = "$".number_format($after_tax, 2);           
    
    // escape the unformatted input
    $product_description_escaped = htmlspecialchars($product_description);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Employee Salary Calculatorssssss</title>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <main>
        <h1>Product Discount Calculator</h1>

        <label>Product Description: </label>
        <span><?php echo $product_description; ?></span><br>

        <label>List Price: </label>
        <span><?php echo $list_price_formatted; ?></span><br>

        <label>Standart Discount: </label>
        <span><?php echo $discount_percent_formatted; ?></span><br>
        
        <label>Discount Amount: </label>
        <span><?php echo $discount_price_formatted; ?></span><br>
        
        <label>Discount Price: </label>
        <span><?php echo $discount_amount_formatted; ?></span><br>
        <p></p>
        <label>Sales Tax Rate: </label>
        <span><?php echo $tax_rate; ?></span><br>
        
        <label>Sales Tax Amount: </label>
        <span><?php echo $after_tax_formatted; ?></span><br>

        
    </main>
</body>
</html>