import React from "react";

import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Profile/Filter";

function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <h1>Main</h1>
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
