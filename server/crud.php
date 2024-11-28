<?php
function handleGet($pdo, $table) {
  // Verifica se foi passado um parâmetro `id`
  $id = $_GET['id'] ?? null;

  if ($id) {
    // Consulta um único registro pelo ID
    $sql = "SELECT * FROM $table WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $id]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
      echo json_encode($result); // Retorna o produto
    } else {
      http_response_code(404); // Produto não encontrado
      echo json_encode(['message' => 'Record not found']);
    }
  } else {
    // Consulta todos os registros
    $sql = "SELECT * FROM $table";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
  }
}

function handlePost($pdo, $table, $input) {
    $columns = implode(', ', array_keys($input));
    $placeholders = ':' . implode(', :', array_keys($input));
    $sql = "INSERT INTO $table ($columns) VALUES ($placeholders)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($input);
    echo json_encode(['message' => 'Record created successfully']);
}

function handlePut($pdo, $table, $input) {
    if (!isset($input['id'])) {
        echo json_encode(['message' => 'ID is required for updating']);
        return;
    }

    $id = $input['id'];
    unset($input['id']);
    $setClause = implode(', ', array_map(fn($key) => "$key = :$key", array_keys($input)));
    $sql = "UPDATE $table SET $setClause WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array_merge($input, ['id' => $id]));
    echo json_encode(['message' => 'Record updated successfully']);
}

function handleDelete($pdo, $table, $input) {
    if (!isset($input['id'])) {
        echo json_encode(['message' => 'ID is required for deleting']);
        return;
    }

    $sql = "DELETE FROM $table WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['id' => $input['id']]);
    echo json_encode(['message' => 'Record deleted successfully']);
}
?>
