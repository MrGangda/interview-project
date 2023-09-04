import React, { FC } from 'react';
import { ICardItem } from "./CardItemInterface";
import {
    CardItemWrapper,
    CardImage,
    CardTitle,
    CardPrice,
    CardDiscount,
    CardDescription,
    DeleteButtonWrapper
} from "./styled";
import {useDispatch} from "react-redux";
import {removeProduct} from "../../store/productSlice";
import {Button} from "@mui/material";

const CardItem: FC<ICardItem> = ({
    title,
    category,
    description,
    id,
    images,
    price,
    rating,
    brand,
    discountPercentage,
    thumbnail,
    stock,
 }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeProduct(id));
    };
    const discountedPrice = price - (price * discountPercentage / 100);

    return (
        <CardItemWrapper>
            <CardImage src={images[0]} alt={title} />
            <CardTitle>{title}</CardTitle>
            <CardPrice>Price: ${discountedPrice.toFixed(2)}</CardPrice>
            {discountPercentage > 0 && <CardDiscount>Discount: {discountPercentage}%</CardDiscount>}
            <CardDescription>{description}</CardDescription>
            <DeleteButtonWrapper>
                <Button color={'error'} onClick={handleRemove}>Delete</Button>
            </DeleteButtonWrapper>
        </CardItemWrapper>
    );
};

export default CardItem;
