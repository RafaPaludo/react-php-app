import React from 'react';
import { Table, Badge } from "@radix-ui/themes";
import TableActions from "./TableActions";

function TableProducts ({ products, onAdd }) {
  const columnHeaders = ['Nome', 'Descrição', 'Preço', 'Estoque', 'Categoria', 'Ações'];
  const tableColumnHeaders = columnHeaders
    .map(tableColumnHeader => <Table.ColumnHeaderCell key={tableColumnHeader}>{tableColumnHeader}</Table.ColumnHeaderCell>);

  const tableBodyRows = products.map(product => {
    return (
      <Table.Row key={product.id}>
        <Table.RowHeaderCell>
          {product.name}
          {
            isProductNew(product.created_at) &&
            <Badge color="orange" ml="3">Novo</Badge>
          }
        </Table.RowHeaderCell>
        <Table.Cell>{product.description}</Table.Cell>
        <Table.Cell>{Number(product.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Table.Cell>
        <Table.Cell>{product.stock_qty}</Table.Cell>
        <Table.Cell>{product.category}</Table.Cell>
        <Table.Cell><TableActions id={product.id} name={product.name} onAdd={onAdd} /></Table.Cell>
      </Table.Row>
    );
  });

  function isProductNew(createdDate) {
    // Converte a data de criação para um objeto Date
    const created = new Date(createdDate);
  
    // Obtém a data atual
    const today = new Date();
  
    // Calcula a diferença em milissegundos
    const differenceInMilliseconds = today - created;
  
    // Converte a diferença para dias
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  
    // Retorna true se a diferença for menor ou igual a 30 dias
    return differenceInDays <= 30;
  }

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          { tableColumnHeaders }
        </Table.Row>
      </Table.Header>

      <Table.Body>
        { tableBodyRows }
      </Table.Body>
    </Table.Root>
  );
}

export default TableProducts;