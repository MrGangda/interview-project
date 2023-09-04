import React, {FC} from 'react';
import {Button, Container, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {HeaderWrapper, SearchFieldWrapper} from "./styled";


type HeaderProps = {
  setFilterType: React.Dispatch<React.SetStateAction<'title' | 'category'>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  filterType?: 'title' | 'category';
  searchText?: string;
};

const Header: FC<HeaderProps> = ({ setFilterType, setSearchText, filterType, searchText }) => {

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setSearchText(text);
  };

  const handleFilterTypeChange = (event: SelectChangeEvent<'title' | 'category'>): void => {
    const type = event.target.value as 'title' | 'category';
    setFilterType(type);
  };

  return (
    <HeaderWrapper>
      <Container style={{ display: 'flex', alignItems: 'flex-end'}} maxWidth={'lg'}>
        <Button style={{ padding: '0 6px'}} title={'About us'}>About us</Button>
        <Button style={{ padding: '0 6px'}} title={'Products'}>Products</Button>
        <Button style={{ padding: '0 6px'}} title={'Contact us'}>Contact us</Button>
        <SearchFieldWrapper>
          <form noValidate autoComplete="off">
            <TextField
                style={{width: '400px'}}
                variant={'standard'}
                id="standard-basic"
                label="Search product"
                value={searchText}
                onChange={handleSearchTextChange}
            />
            <Select
                value={filterType}
                onChange={handleFilterTypeChange}
                style={{ marginLeft: '20px' }}
            >
              <MenuItem value={'title'}>Title</MenuItem>
              <MenuItem value={'category'}>Category</MenuItem>
            </Select>
          </form>
        </SearchFieldWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;