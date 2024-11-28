import { Flex } from "@radix-ui/themes";
import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

function TableActions ({ id, name, onAdd }) {
  return (
    <Flex justify={"between"} align={"center"} gap={"1"}>
      <DeleteProduct name={name} id={id} onAdd={onAdd} />
      <UpdateProduct name={name} id={id} onAdd={onAdd} />
    </Flex>
  );
}

export default TableActions;