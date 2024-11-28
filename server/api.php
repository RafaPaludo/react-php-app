<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include 'db.php';
include 'crud.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header('HTTP/1.1 200 OK');
  exit();
}

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

// Identifique a tabela pelo parâmetro "table" na URL
$table = $_GET['table'] ?? null;

if (!$table) {
  http_response_code(404); // Define o código de resposta HTTP primeiro
  echo json_encode(['message' => 'Table parameter is required']);
  exit();
}

switch ($method) {
  case 'GET':
    handleGet($pdo, $table);
    break;
  case 'POST':
    handlePost($pdo, $table, $input);
    break;
  case 'PUT':
    handlePut($pdo, $table, $input);
    break;
  case 'DELETE':
    handleDelete($pdo, $table, $input);
    break;
  default:
    echo json_encode(['message' => 'Invalid request method']);
    break;
}

?>
