<?php
require "/../../vendor/autoload.php";
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
$data = $_POST;
if (isset($data["do_but_enter"]))
{
	$file_name = $_FILES ['file_inp']['name'];
	$file_tmp_name = $_FILES ['file_inp']['tmp_name'];
	$new_temp = "../files/";
	$errors = array();
	if (($file_name) == "")
	{
		$errors[] = 'Файл не выбран';
	}
	if (empty($errors))
	{

			echo(" <div style='color: #0f0;'>да! </div>");
			move_uploaded_file($file_tmp_name, "../files/". $file_name);
	}
	else
	{
		echo '<div style="color: red;  font-size: 1.5vw;">' . array_shift($errors).'</div>' ;
	}

	$data_sets = file_get_contents("../settings.json");
	$data_sets = json_decode($data_sets, true);
	$data_sets = $data_sets['0'];
	$authtoken = ($data_sets['AuthorizationToken']);

	$client = new Arhitector\Yandex\Client\OAuth($authtoken);
	$disk = new Arhitector\Yandex\Disk($client);
	$resource = $disk->getResource('disk:/Загрузки/'.$file_name);
	$resource->upload("../files/". $file_name);
	$resource->public_url;
	echo("<pre>");
	var_dump($resource);
	echo("</pre>");
	$load_url = ($resource['file']);
	echo($load_url);
	unlink($new_temp. $file_name);
}
?>
