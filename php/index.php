<?php

include "Snoopy.class.php";
$snoopy = new Snoopy;

$submit_url = "http://127.0.0.1:10086";

$key = "123456";

$post = array();
$post["mod"] = "ss.add";
$post["data"] = "data";
$post = json_encode($post);

$submit_vars["data"] = $post;
$submit_vars["key"] = md5($post.$key);

$snoopy->submit($submit_url, $submit_vars);
print $snoopy->results;
