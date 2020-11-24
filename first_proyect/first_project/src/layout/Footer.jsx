import React from 'react';
import styled from 'styled-components';
//css-in-js

const FooterS = styled.footer`
  background-color: #34f;
  color: white;
  padding: 15px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #f34;
  color: white;
  padding: 15px;
  border:none;
  border-radius: 15px;
`;
function Footer() {
  return<FooterS>
    <p>copyright © 2020</p>
    <Button>Unirse al NewsLetter</Button>
    </FooterS>;
}
export default Footer;