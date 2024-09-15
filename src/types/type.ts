export interface IIngredient {
    strIngredient1: string
}

export interface ICocktails {
    idDrink: string
    strDrink: string
    strDrinkThumb: string
}

export interface ICocktail {
    idDrink: string
    strDrink: string
    strInstructions: string
    strDrinkThumb: string
    [key: `strIngredient${number}`]: string | null
    [key: `strMeasure${number}`]: string | null
}


export interface IIngredientByCocktail {
    id?: string
    name: string | null | undefined
    measure?: string | null | undefined
}



