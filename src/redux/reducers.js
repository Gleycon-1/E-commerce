// Initial States
const initialCartState = [];

const initialCheckoutState = {
    step: 0, // 0: Cart, 1: Address, 2: Payment, 3: Confirmation
    address: {
        name: '',
        zipcode: '',
        street: '',
        number: '',
        complement: '',
        city: '',
        state: ''
    },
    payment: {
        method: 'cartão', // 'cartão', 'boleto', 'pix'
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVV: ''
    }
};

// Reducers
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            ).filter(item => item.quantity > 0); // Remove if quantity is 0
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

const checkoutReducer = (state = initialCheckoutState, action) => {
    switch (action.type) {
        case 'SET_CHECKOUT_STEP':
            return { ...state, step: action.payload };
        case 'UPDATE_ADDRESS':
            return { ...state, address: { ...state.address, ...action.payload } };
        case 'UPDATE_PAYMENT':
            return { ...state, payment: { ...state.payment, ...action.payload } };
        case 'COMPLETE_ORDER':
            return { ...initialCheckoutState, step: 3 }; // Reset checkout state but set step to 3 for confirmation
        default:
            return state;
    }
};

// Combine Reducers
export { cartReducer, checkoutReducer };