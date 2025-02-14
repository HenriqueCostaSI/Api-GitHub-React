import React from "react";

import { Container, Name, Description, Footer, Lang, Link } from "./styles";

function Repository() {
  return(
    <Container color="#f1e05a">
        <Name>Repository Name</Name>
        <Description>Repository Description</Description>    
        <Footer color="#f1e05a">
            <Lang>JavaScript</Lang>
            <Link href="https://github.com" target='_blank'>Ver</Link>

        </Footer>


    </Container>
  );
}

export default Repository;