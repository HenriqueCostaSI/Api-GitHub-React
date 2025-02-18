import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Loading, Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Profile/Filter";
import Repositories from "./Repositories";
import { getLangsFrom, getUser, getRepos } from "../../services/api";

function RepositoriesPage() {
  const { login } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login), 
        getRepos(login)
      ]);
      
      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };
    loadData();
  }, []);



  // eslint-disable-next-line no-unused-vars
  

  

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }
  
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} /> 
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
