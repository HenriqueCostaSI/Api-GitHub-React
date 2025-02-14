import React from "react";

import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Profile/Filter";
import Repositories from "./Repositories";

function RepositoriesPage() {
  const user = {
    login: "HenriqueCostaSI",
    
    avatar_url: "https://avatars.githubusercontent.com/u/51381410?v=4",

    url: "https://api.github.com/users/HenriqueCostaSI",

    name: "Henrique Matheus Da Costa",
    company: null,

    location: "Uberlândia, Minas Gerais",

    followers: 0,
    following: 1,
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
