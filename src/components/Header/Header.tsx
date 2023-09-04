import React from 'react';
import {Button, Container, Select, TextField} from "@mui/material";
import {HeaderWrapper, SearchFieldWrapper} from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container style={{ display: 'flex'}} maxWidth={'lg'}>
        <Button title={'About us'}>About us</Button>
        <Button title={'Products'}>Products</Button>
        <Button title={'Contact us'}>Contact us</Button>
        <SearchFieldWrapper>
          <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" fullWidth={true} />
          </form>
        </SearchFieldWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;