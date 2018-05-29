<?php
header('content-type:text/html;charset=utf-8');
//echo phpinfo();
$username = $_GET['user'];

$users = array('隔壁老王','刘伟','妙味','ni真胖');

//echo $users[0];

//sleep(5);

// echo $username;


if( in_array( $username , $users ) ){
	
	echo $username . '(用户名已经被注册了)';

}else{

	echo $username . '(用户名可以注册)';

}


?>