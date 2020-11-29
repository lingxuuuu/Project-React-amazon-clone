// reducer is how we push and full data from the data layer

// create initial state:
export const initialState = {
    basket: [],
    user: null, //assuming there is no logged in user in the begining
};

//selector: calculate the total price of the subtotal
export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET': //Everytime when we press the Aaa to basket button, case'ADD_TO_BASKET' will be executed
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) { //meaning we have found the item that want to remove
                newBasket.splice(index, 1); // go into the basket and delete the index
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }

              return {...state, 
                      basket: newBasket
                     }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }

}

export default reducer;