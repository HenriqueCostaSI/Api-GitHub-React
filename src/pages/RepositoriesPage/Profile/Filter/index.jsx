import React from 'react';
import PropTypes from 'prop-types';
import { Container, Selector, Clear } from './styles';

function Filter({ languages }) {
    
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

Filter.propTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
};

export default Filter;