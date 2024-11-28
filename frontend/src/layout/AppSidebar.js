import { Box, Container, Flex, Text, Button } from "@radix-ui/themes";

function AppSidebar () {
  return (
    <Box style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}>
      <Container size="1">
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default AppSidebar;