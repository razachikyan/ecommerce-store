import { ActionCreator } from "redux";

export type ProductState = {
    descriped: boolean;
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export const SET_DESCRIPED = "SET_DESCRIPED";
export type setdescripedAction = {
    type: typeof SET_DESCRIPED,
    descriped: boolean,
    id: string
}

export const setdescriped: ActionCreator<setdescripedAction> = (descriped, id) => {
    return {
        type: SET_DESCRIPED,
        descriped,
        id
    }
}