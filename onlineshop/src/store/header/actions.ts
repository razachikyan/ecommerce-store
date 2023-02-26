import { categoriesState } from "./categories/actions";
import { SearchState } from "./search/actions";

export type headerState = {
    categories: categoriesState,
    search: SearchState
}