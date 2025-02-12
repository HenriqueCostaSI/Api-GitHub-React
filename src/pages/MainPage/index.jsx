import React from "react";

import { Container } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  return (
    <Container>
      <img src={githubLogo} alt="API Github" />
    </Container>
  );
}
export default MainPage;
