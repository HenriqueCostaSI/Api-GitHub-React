import React from "react";
import PropTypes from "prop-types";
import { MdGroup, MdLocationCity, MdLink, MdWork } from "react-icons/md";
import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <Avatar
          src={user.avatar_url}
          alt="Avatar"
        />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20}/>{user.followers}&nbsp;<i>seguidores</i>&nbsp; •&nbsp; {user.following}&nbsp; <i>seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20}/>{user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20}/>{user.location}
          </Data>
        )}
        {user.url && (
          <Data>
            <MdLink size={20}/>
            <a href={`\\${user.url}`}>{user.url}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
    url: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
