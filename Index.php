<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
require "/../vendor/autoload.php";
?>
<html>
<title>Главная</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
	<link rel="stylesheet" type="text/css" href="css\index.css">
	<script type="text/javascript" src="javas.js"> </script>
</head>
<body>
	<div>

<?
$data_sets = file_get_contents("settings.json");
$data_sets = json_decode($data_sets, true);
$authtoken = ($data_sets['AuthorizationToken']);
If ($authtoken == "")
{
	$client_id = 'e9488fe43c0243ce9d39f9140ab4f6ee';
	$client_secret = '5f52527a22334838af4f62d543ef817e';

	if (isset($_GET['code']))
	  {
	    $query = array(
	      'grant_type' => 'authorization_code',
	      'code' => $_GET['code'],
	      'client_id' => $client_id,
	      'client_secret' => $client_secret
	    );
	    $query = http_build_query($query);

	    $header = "Content-type: application/x-www-form-urlencoded";

	    $opts = array('http' =>
	      array(
	      'method'  => 'POST',
	      'header'  => $header,
	      'content' => $query
	      )
	    );
	    $context = stream_context_create($opts);
	    $result = file_get_contents('https://oauth.yandex.ru/token', false, $context);
	    $result = json_decode($result);

	    $token = ($result->access_token);

			$data_sets = file_get_contents("settings.json");
			$data_sets = json_decode($data_sets, true);
			$data_sets['AuthorizationToken'] = $token;

			file_put_contents('settings.json',json_encode($data_sets));
		?>
		<script>location.reload()</script>
		<?
		}
	  else
	  {
			echo '<a href="https://oauth.yandex.ru/authorize?response_type=code&client_id='.$client_id.'">Страница запроса доступа</a>';
	  }
}
else
{
	function formatBytes($size, $precision = 2)
	{
			$base = log($size, 1024);
			$suffixes = array('', 'Kb', 'Mb', 'Gb', 'Tb');

			return round(pow(1024, $base - floor($base)), $precision) .' '. $suffixes[floor($base)];
	}

	$client = new Arhitector\Yandex\Client\OAuth($authtoken);
	$disk = new Arhitector\Yandex\Disk($client);

	$disk->toArray();
	$max_file_size = $disk['max_file_size'];
	if($max_file_size==0)
	{
		echo("РМаксимальный размер файла = 0<br>");
	}
	else
	{
		echo("Максимальный размер файла = ".formatBytes($max_file_size)."<br>");
	};

	$trash_size = $disk['trash_size'];
	if($trash_size==0)
	{
		echo("Размер корзины = 0<br>");
	}
	else
	{
		echo("Размер корзины = ".formatBytes($trash_size)."<br>");
	};


	$total_space = $disk['total_space'];
	if($total_space==0)
	{
		echo("Всего места на диске = 0<br>");
	}
	else
	{
		echo("Всего места на диске = ".formatBytes($total_space)."<br>");

	};

	$used_space = $disk['used_space'];
	if($used_space==0)
	{
		echo("Использовано места на диске = 0<br>");
	}
	else
	{
		echo("Использовано места на диске = ".formatBytes($used_space)."<br>");

	};

	$free_space = $disk['free_space'];
	if($free_space==0)
	{
		echo("Свободно места на диске = 0<br>");
	}
	else
	{
		echo("Свободно места на диске = ".formatBytes($free_space)."<br>");
	};


	$user = $disk['user'];

	$country = $user['country'];
	echo("Страна пользователя233 = ".$country."<br>");

	$login = $user['login'];
	echo("Логин пользователя = ".$login."<br>");

	$display_name = $user['display_name'];
	echo("Имя пользователя = ".$display_name."<br>");

?>


	</div>
	<div>
		<form action="/pages/do_load.php" enctype="multipart/form-data" method="post">
			<div class="img_input_text"> Выберите файл
				<input type="file" name="file_inp">
			</div>
			<button type="submit" name="do_but_enter">Загрузить</button>
		</form>
	</div>
</body>
</html>
<?
}
?>
