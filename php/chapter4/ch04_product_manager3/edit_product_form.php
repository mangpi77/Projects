<?php
require('database.php');
$query = 'SELECT * FROM products
WHERE productID = :product_id' ;
    
$product_id = filter_input(INPUT_POST, 'product_id', FILTER_VALIDATE_INT);
    

$statement = $db->prepare($query);
$statement->execute();
$categories = $statement->fetchAll();
$statement->closeCursor();
$statement-> (':product_id', $product_id);

?>
<!DOCTYPE html>
<html
<!-- the head section -->
<head>
    <title>My Guitar Shop</title>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>

<!-- the body section -->
<body>
    <header><h1>Product Manager</h1></header>

    <main>
        <h1>Edit Product</h1>
        <form action="edit_products.php" method="post"
              id="add_product_form">

            

            <label>Code:</label>
            <input type="text" name="code"><br>
            <td><?php echo $query['product_id']; ?></td>

            <label>Name:</label>
            <input type="text" name="name"><br>

            <label>List Price:</label>
            <input type="text" name="price"><br>

            <label>&nbsp;</label>
            <input type="submit" value="Save Changes"><br>
        </form>
        <p><a href="index.php">View Product List</a></p>
    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> My Guitar Shop, Inc.</p>
    </footer>
</body>
</html>