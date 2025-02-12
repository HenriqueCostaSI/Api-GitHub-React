import React from "react";
import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API GitHub</Title>
      <Form>
        <Input type="text" placeholder="Digite o nome do usuário" />
        <Button> 
          <MdSearch size={42} color="#fff" />
        </Button>
      </Form>
    </Container>
  );
}
export default MainPage;
