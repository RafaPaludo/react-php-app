import React from 'react';
import './style.css';
import { Button, Flex, AlertDialog } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";
import axios from 'axios';

function AddProduct ({ id, name, onAdd }) {
  const onDelete = async () => {
    try {
      const response = await axios.delete(
        'http://localhost/php-server/api.php?table=products',
        {
          data: { id },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response) console.log('Deletado com sucesso!')
      onAdd();
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red"><TrashIcon /></Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Deletar</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Você tem certeza que deseja deletar o produto <strong>{name}</strong>
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={onDelete}>
              Deletar
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default AddProduct;