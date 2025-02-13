import React from "react";

import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile/index";

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Main>
        <h1>Main</h1>
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
