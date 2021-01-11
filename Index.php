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

		function formatBytes($size, $precision = 2)
		{
		    $base = log($size, 1024);
		    $suffixes = array('', 'Kb', 'Mb', 'Gb', 'Tb');   

		    return round(pow(1024, $base - floor($base)), $precision) .' '. $suffixes[floor($base)];
		}


		$data_sets = file_get_contents("settings.json");
		$data_sets = json_decode($data_sets, true);
		$data_sets = $data_sets['0'];
		$authtoken = ($data_sets['AuthorizationToken']);

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
		echo("Страна пользователя = ".$country."<br>");

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