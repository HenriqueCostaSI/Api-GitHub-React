import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
  border-left: 3px solid
    ${(props) => props.color || props.theme.colors.champagneDark};
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: normal;
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.color || props.theme.colors.champagneDark};
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;
