import React from "react";
import { MdGroup, MdLocationCity, MdLink, MdWork } from "react-icons/md";
import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar
          src="https://avatars.githubusercontent.com/u/2254731?v=4"
          alt="Avatar"
        />
        <Login>lucasmoura</Login>
        <Name>Lucas Moura</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>30&nbsp;<i>seguidores</i>&nbsp; •&nbsp; 10&nbsp; <i>seguindo</i>
        </Data>
        <Data>
           <MdWork size={20}/>Dev TE
        </Data>
        <Data>
          <MdLocationCity size={20}/> Uberlandia - MG
        </Data>
        <Data>
          <MdLink size={20}/>
          <a href="https://github.com/lucasmoura">https://github.com/lucasmoura</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
