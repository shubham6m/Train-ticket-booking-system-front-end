<html>

<head>
    <title>Logical operator</title>
</head>

<body>


    <script language="javascript" value="text/javascript">
        var pwd, loginid;
        loginid = prompt("enter any login id", "write user id");
        pwd = prompt("enter a password", "enter..");
        var message = (loginid == "shubham6m" && pwd == "okay done") ? "welcome user" : "invalid user"
        alert(message);
        if (message == "welcome user") {
            document.write("your username is " + loginid + "</br> and password is " + pwd + "</br> please note this..");
        }

    </script>
</body>

</html>