<?php

if (isset($_POST["sub"])); {
    $conn = mysqli_connect("localhost", "root", "", "food");
    $email = $_POST["e1"];
    $pass = $_POST["p1"];
    $sql = "select * from user where uemail='$email' and upassword='$pass'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_row($result);

    if ($row > 0) {
        session_start();
        $_SESSION["uname"] = $row[1];
        echo '<script>alert("login successfull");window.location.href="index.html"</script>';
        // header("location:Home.php");
    } else {
        echo "Wrong User Name Or Password...";
    }
}
?>
<!--
<html>
<form action="login.php" method="post">
    UserId<input type="text" name="e1">
    Password<input type="password" name="p1">
    <input type="submit" name="sub" value="Enter">
</form>

</html>-->