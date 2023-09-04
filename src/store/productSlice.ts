import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ICardItem} from "../components/CardItem/CardItemInterface";

interface ProductState {
    products: ICardItem[];
}

const initialState: ProductState = {
    products: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ICardItem[]>) => {
            state.products = action.payload;
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    },
});

export const { setProducts, removeProduct } = productSlice.actions;

export default productSlice.reducer;