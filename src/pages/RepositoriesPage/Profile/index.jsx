import React from "react";
import { Container, Header, Avatar, Login, Name } from "./style";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Avatar" />
        <Login>lucasmoura</Login>
        <Name>Lucas Moura</Name>
      </Header>
    </Container>
  )
}

export default Profile;