import Logo from '../assets/logo.svg'
import { Container, Flex, Button } from "@radix-ui/themes";
import { NavLink } from "react-router";
import { ChatBubbleIcon, HomeIcon, MixerHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";

function AppHeader () {
  return (
    <Container size="1" radius="small" p="4">
      <Flex justify="center" direction="column" align="center">
        <img src={Logo} width="100px" />

        <nav 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "24px",
            width: "100%"
          }}
        >
          
          <NavLink to="/" end>
            <Button style={{ width:"100%"}} color="blue" variant="soft" className='Button-NavLink'>
              <HomeIcon />
              Home
            </Button>
          </NavLink>
          <NavLink to="/contato" end>
            <Button style={{ width:"100%"}} color="blue" variant="soft" className='Button-NavLink'>
              <ChatBubbleIcon />
              Contato
            </Button>
          </NavLink>
          <NavLink to="/configuracoes">
            <Button style={{ width:"100%"}} color="blue" variant="soft" className='Button-NavLink'>
              <MixerHorizontalIcon />
              Configuracoes
            </Button>
          </NavLink>
          <NavLink to="/conta">
            <Button style={{ width:"100%"}} color="blue" variant="soft" className='Button-NavLink'>
              <PersonIcon />
              Conta
            </Button>
          </NavLink>
        </nav>
      </Flex>
    </Container>
  );
}

export default AppHeader;