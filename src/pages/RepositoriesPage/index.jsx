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
      language: "JavaScript",
    },
    {
      name: "Repo 3",
      description: "API do GitHub com React",
      html_url: "https://github.com/HenriqueCostaSI/api-github-react",
      language: "JavaScript",
    },
  ];

  const stats = repositories
    .map((repo) => repo.language)
    .reduce((data, language) => ({
      ...data,
      [language]: (data[language] || 0) + 1,
    }), []
  );            

console.log(stats);

  // calculo dos filtros
  const languages = [
    { name: "JavaScript", count: 3, color: "#f1e05a" },
    { name: "TypeScript", count: 3, color: "#1d4e5c" },
    { name: "HTML", count: 3, color: "#e34c26" },
    { name: "CSS", count: 3, color: "#61389f" },
    { name: "Python", count: 3, color: "#3572A5" },
  ];
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
