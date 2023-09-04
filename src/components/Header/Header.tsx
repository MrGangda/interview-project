import React from 'react';
import {Button, Container, Select, TextField} from "@mui/material";
import {HeaderWrapper, SearchFieldWrapper} from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container style={{ display: 'flex', alignItems: 'flex-end'}} maxWidth={'lg'}>
        <Button style={{ padding: '0 6px'}} title={'About us'}>About us</Button>
        <Button style={{ padding: '0 6px'}} title={'Products'}>Products</Button>
        <Button style={{ padding: '0 6px'}} title={'Contact us'}>Contact us</Button>
        <SearchFieldWrapper>
          <form noValidate autoComplete="off">
            <TextField style={{width: '600px'}} variant={'standard'} id="standard-basic" label="Standard" fullWidth={true} />
          </form>
        </SearchFieldWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;