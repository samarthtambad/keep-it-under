<!DOCTYPE html>
<html>
<head>
    <?php $base = "../../" ?>
    <base href="../../">
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/facebox.js"></script>
    <script src="js/gameSettings.js"></script>
    <link rel="stylesheet" type="text/css" href="css/facebox.css"/>
    <link rel="stylesheet" type="text/css" href="css/main.css"/>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $('a[rel*=facebox]').facebox()
        })
    </script>
</head>
<body>
<div class="container">
    <?php include $base."header.php"; ?>
    <nav>
        <ul>
        <li><a href="">Home</a></li>
        </ul>
        <?php include $base."leftMenuGame.php"; ?>
    </nav>
    <article>
        <h1 id="gameName">Keep It Under</h1>
        <h3 id="groupName">Team: Remember The Name</h3>
        <h3>Instruction:</h3>
        <div id="gameDesc" class="jumbotron">
            <strong>Overview:</strong> <br/>
            <p> Keep It Under is a two-player strategy card game that derives inspiration from Blackjack and Nim.</p>
            <strong>Rules:</strong> <br/>
            <ol>
                <li> Pick a goal number (G: between 21 and 120) and pick the number of cards (N: between G/5 and 26) to be dealt to each player. Then start the game.</li>
                <li> Each player is dealt (face up) N cards randomly picked from a deck of 52 cards.Each card has an associated value (2-10 have corresponding value, J/Q/K have value of 10 and ACE can have a value of 1 or 11). (Note: ACE will default to a value of 11 and will retroactively change its value to 1 if the total value exceeds G) </li>
                <li> The first player will make the first move. Players take turns and play a card from their hand by dragging it from their hand to the game arena. </li>
                <li> The total value of cards played cannot exceed G. The player who gets the total to exceed G loses and the other player wins. </li>
            </ol>
        </div>
        <h3>Play game in pop up window:<h3>
        <form id="gameSettings" class="well"></form>
        <iframe src="games/keep-it-under/index.html" class="game" width="900" height="1200"></iframe>
    </article>
    <?php include $base."footer.php"; ?>
</div>
<script type="text/javascript">
    newWindowBtn(2000,2000,"games/keep-it-under/index.html",[]);
</script>
</body>
</html>