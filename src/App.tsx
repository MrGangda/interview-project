import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {CircularProgress, Container} from "@mui/material";
import CardItem from "./components/CardItem/CardItem";
import {ItemListWrapper} from "./styled";
import {AppDispatch, RootState} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "./store/productSlice";

function App() {
    const dispatch: AppDispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);

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
      <Header />
        <Container style={{display: 'flex', justifyContent: 'center'}} maxWidth={'lg'} >
            <ItemListWrapper>
                {!!products.length ? products?.map((item) =>
                    <CardItem
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
