import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns:auto;
    gap: 0.2rem;
    padding-right: 2rem;
    
    


    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: auto auto;
        gap: 0.8rem;
        padding: 0 1rem;
    }

`;

export const Selector = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 2rem;
    padding: 0 1rem;
    border:none;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background: ${(props) => props.theme.colors.container};
    color: ${(props) => props.color || props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.small};
    
    transition: background 0.8s, transform 0.5s;

    &:hover,
    .selected {
        background: ${(props) =>props.color || props.theme.colors.gray500};
        color: ${(props) => props.color ? props.theme.colors.text : props.theme.colors.black};
        transform: translateX(5px) scale(1.02);
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        border-radius: 20px;
        &:hover,
        .selected {
            transform: translateX(0) scale(1.02);
        }
    }
`;

export const Clear = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  text-align: left ;
  padding: 1rem;
  
  &:hover {
    color:rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    text-align: center;
    padding: 0 1rem;
  }
  
`;