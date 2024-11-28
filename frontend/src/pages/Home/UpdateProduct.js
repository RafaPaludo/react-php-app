import React, { useEffect, useState } from 'react';
import * as Form from "@radix-ui/react-form";
import './style.css';
import { Dialog, Button, Flex, Skeleton } from "@radix-ui/themes";
import axios from 'axios';
import { Pencil2Icon } from "@radix-ui/react-icons";

function AddProduct ({ id, name, onAdd }) {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = useState(null);
  const qty = Array(6).fill(0);
  
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost/php-server/api.php?table=products&id=${id}`);
      setTimeout(() => {
        setProduct(data);
      }, 400);
      console.log("Produto carregado:", data);
    } catch (error) {
      console.error("Erro ao carregar produto:", error);
    }
  };

  // Executa a função fetchProduct somente quando o modal for aberto
  useEffect(() => {
    if (open) {
      fetchProduct();
    }
  }, [open]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target); // Obtém os dados do formulário
    const data = Object.fromEntries(formData.entries()); // Transforma em objeto

    if (data.price) data.price = parseFloat(data.price);
    if (data.stock_qty) data.stock_qty = parseInt(data.stock_qty, 10);
    data.id = id;

    try {
      await axios.put(
        'http://localhost/php-server/api.php?table=products',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setOpen(false);
      onAdd();
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  const skeletonForm = qty.map((_, index) => <Skeleton key={index} width="100%" height="45px" mb="2"></Skeleton>);
  
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button><Pencil2Icon /></Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="700px">
        <Dialog.Title>Atualizar produto: {name}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Altera as informações do produto
        </Dialog.Description>

        {
          product &&
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
                <input className="Input" type="text" required defaultValue={product.name || ''} />
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
                <input className="Input" type="text" defaultValue={product.description || ''} />
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
                <input className="Input" type="number" required defaultValue={product.price || ''} />
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
                <input className="Input" type="number" required defaultValue={product.stock_qty || ''} />
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
                <input className="Input" type="text" required defaultValue={product.category || ''} />
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
          || skeletonForm
        }
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default AddProduct;