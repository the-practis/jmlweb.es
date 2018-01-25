import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background: ${props => props.theme.colors.dark};
  display: flex;
  justify-content: space-between;
  mix-blend-mode: multiply;
  padding: ${props => `${props.theme.spacing.u1} ${props.theme.spacing.u2}`};
  @media (min-width: 480px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
  }
`;

const StyledLinksGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 480px) {
    width: 50%;
  }
`;

const StyledLink = styled.a.attrs({
  rel: 'nofollow noopener noreferrer',
  target: '_blank',
})`
  color: #fff;
  font-family: ${props => props.theme.font.familyAlt};
  text-decoration: none;
  text-transform: uppercase;
  @media (min-width: 480px) {
    margin-left: ${props => props.theme.spacing.u2};
  }
`;

const SocialLinks = () => (
  <StyledWrapper>
    <StyledLinksGroup>
      <StyledLink href="https://github.com/jmlweb">Github</StyledLink>
      <StyledLink href="https://www.linkedin.com/in/josemanuellucas/">Linkedin</StyledLink>
      <StyledLink href="https://twitter.com/jmlweb/">Twitter</StyledLink>
      <StyledLink href="https://dribbble.com/jmlweb">DRIBBBLE</StyledLink>
    </StyledLinksGroup>
  </StyledWrapper>
);

export default SocialLinks;
