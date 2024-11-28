import React from "react";
import * as Form from "@radix-ui/react-form";
import './style.css';
import { Dialog, Button, Flex } from "@radix-ui/themes";
import axios from 'axios';

function AddProduct ({ onAdd }) {
  const [open, setOpen] = React.useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Obtém os dados do formulário
    const data = Object.fromEntries(formData.entries()); // Transforma em objeto

    if (data.price) data.price = parseFloat(data.price);
    if (data.stock_qty) data.stock_qty = parseInt(data.stock_qty, 10);

    try {
      await axios.post(
        'http://localhost/php-server/api.php?table=products',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setOpen(false);
      onAdd(); // Atualiza a lista
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Cadastrar novo produto</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="700px">
        <Dialog.Title>Cadastrar novo produto</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Adicione abaixo as informações do novo produto
        </Dialog.Description>

        <Form.Root className="FormRoot" onSubmit={onSubmit}>
          <Form.Field className="FormField" name="name">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Nome</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Nome do produto
              </Form.Message>
              <Form.Message className="FormMessage" match="typeMismatch">
                Por favor, adicione um nome válido
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="text" required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="FormField" name="description">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Descrição</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Adicione uma descrição
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="text" />
            </Form.Control>
          </Form.Field>
          
          <Form.Field className="FormField" name="price">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Preço</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Adicione um preço
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="number" required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="FormField" name="stock_qty">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Quantidade</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Adicione uma quantidade
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="number" required />
            </Form.Control>
          </Form.Field>

          <Form.Field className="FormField" name="category">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Categoria</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Adicione uma categoria
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input className="Input" type="text" required />
            </Form.Control>
          </Form.Field>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>

            <Form.Submit asChild>
              <Button>
                Salvar
              </Button>
            </Form.Submit>
          </Flex>
        </Form.Root>
      </Dialog.Content>
      
    </Dialog.Root>
  );
}

export default AddProduct;