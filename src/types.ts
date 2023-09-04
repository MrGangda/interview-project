import {ICardItem} from "./components/CardItem/CardItemInterface";

export interface IFetchProduct {
    limit: number;
    products: ICardItem[];
    skip: number;
    total: number;
}