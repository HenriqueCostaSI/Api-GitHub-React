import React from 'react';
import { Container, Selector, Clear } from './styles';

function Filter() {
    const languages = [
        { name: 'JavaScript', count: 3 ,color: '#f1e05a' },
        { name: 'TypeScript', count: 3 ,color: '#2b7489' },
        { name: 'HTML', count: 3 ,color: '#e34c26' },
        { name: 'CSS', count: 3 ,color: '#563d7c' },
        { name: 'Python', count: 3 ,color: '#3572A5' },
        

    ]
    const selectors = languages.map((lang) => (
        <Selector key={lang.name.toLocaleLowerCase()} 
                color={lang.color}>
            <span>{lang.name}</span>
            <span>{lang.count}</span>
        </Selector>
    ));
  return (
    <Container>
        {selectors}
        <Clear>Limpar</Clear>
    </Container>
  );
}

export default Filter;