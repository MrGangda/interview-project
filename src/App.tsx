import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {CircularProgress, Container} from "@mui/material";
import CardItem from "./components/CardItem/CardItem";
import {ItemListWrapper} from "./styled";
import {AppDispatch, RootState} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./store/productSlice";
import {ICardItem} from "./components/CardItem/CardItemInterface";

function App() {
    const dispatch: AppDispatch = useDispatch();
    const products: ICardItem[] = useSelector((state: RootState) => state.products.products);

    const [filterType, setFilterType] = useState<'title' | 'category'>('title');
    const [searchText, setSearchText] = useState('');

    const filteredProducts = products.filter((product) => {
        return filterType === 'title'
            ? product.title.includes(searchText)
            : product.category.includes(searchText);
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const result = await response.json();
                dispatch(setProducts(result.products));
            } catch (error) {
                console.error('Error response: ', error);
            }
        })();
    }, [dispatch]);

  return (
    <div className="App">
        <Header
            setFilterType={setFilterType}
            setSearchText={setSearchText}
            filterType={filterType}
            searchText={searchText}
        />
        <Container style={{display: 'flex', justifyContent: 'center'}} maxWidth={'lg'} >
            <ItemListWrapper>
                {!!filteredProducts.length ? filteredProducts?.map((item) =>
                    <CardItem
                        key={item.id}
                        brand={item.brand}
                        category={item.category}
                        description={item.description}
                        discountPercentage={item.discountPercentage}
                        id={item.id}
                        images={item.images}
                        price={item.price}
                        rating={item.rating}
                        stock={item.stock}
                        thumbnail={item.thumbnail}
                        title={item.title} />
                ) : <CircularProgress />
                }
            </ItemListWrapper>
        </Container>
    </div>
  );
}

export default App;
