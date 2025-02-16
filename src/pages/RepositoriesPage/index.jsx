import React from "react";

import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Profile/Filter";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

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

  const repositories = [
    {
      name: "Repo 1",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "JavaScript",
    },
    {
      name: "Repo 2",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "TypeScript",
    },
    {
      name: "Repo 3",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "JavaScript",
    },
    {
      name: "Repo 3",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "C",
    },
  ];

  const languages = getLangsFrom(repositories);

  
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
}
export default RepositoriesPage;
