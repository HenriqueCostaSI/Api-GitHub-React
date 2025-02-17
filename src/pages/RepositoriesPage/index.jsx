import React, { useState } from "react";

import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Profile/Filter";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

function RepositoriesPage() {

  const [currentLanguage, setCurrentLanguage] = useState();

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
      id: "1",
      name: "Repo 1",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "JavaScript",
    },
    {
      id: "2",
      name: "Repo 2",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "TypeScript",
    },
    {
      id: "3",
      name: "Repo 3",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "JavaScript",
    },
    {
      id: "4",
      name: "Repo 3",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "C",
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };
  
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages}  currentLanguage={currentLanguage} onClick={onFilterClick} /> 
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
}
export default RepositoriesPage;
