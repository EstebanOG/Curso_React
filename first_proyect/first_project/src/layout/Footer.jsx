import React from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';
//css-in-js

const FooterS = styled.footer`
  background-color: #34f;
  color: white;
  padding: 15px;
  text-align: center;
`;

function Footer() {
  return<FooterS>
    <p>copyright © 2020</p>
    <Button>Unirse al NewsLetter</Button>
    </FooterS>;
}
export default Footer;