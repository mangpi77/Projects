


<!DOCTYPE html>
<html>
<head>
    <title>Triangle</title>
    <link rel="stylesheet" type="text/css" href="main.css"/>
</head>

<body>
<main>
    <h1>Triangle</h1>
    <?php if (!empty($error_message)) { ?>
        <p class="error"><?php echo $error_message; ?></p>
    <?php } // end if ?>
    <form action="triangle.php" method="POST">

        <div id="data">
            <label>Side A</label>
            <input type="text" name="length"><br>

            <label>Side B</label>
            <input type="text" name="width" ><br>

            <label>Side C</label>
            <input type="text" name="height"><br>
        </div>

        <div id="buttons">
            <label>&nbsp;</label>
            <input type="submit" value="Calculate"><br>
        </div>
		
    </form>

    

</main>
</body>
</html>