import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";


function MainPage() {
  const [login, setLogin] = useState("");
  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API GitHub</Title>
      <Form>
        <Input type="text" placeholder="Digite o nome do usuário" 
         value={login} onChange={(e) => setLogin(e.target.value)} />
        <Button to={`/users/${login}`}> 
          <MdSearch size={42} color="#fff" />
        </Button>
      </Form>
    </Container>
  );
}
export default MainPage;
