import { Section, Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";


function PageAccount () {
  return (
    <Section size="2" pr="5">
      <Callout.Root size="3" variant="surface">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Imagine aqui uma linda página de configuração de conta!
        </Callout.Text>
      </Callout.Root>
    </Section>
  );
}

export default PageAccount;