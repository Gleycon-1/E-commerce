import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart, total, updateQuantity, removeFromCart, setCheckoutStep }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Seu Carrinho</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">Seu carrinho está vazio.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-gray-600">
                                            {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center"
                                    />
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-4 text-red-600 hover:text-red-800"
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                            <span className="text-gray-800">Total</span>
                            <span className="text-blue-800">
                                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </span>
                        </div>
                    </div>
                </>
            )}

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                    Continuar comprando
                </button>
                <button 
                    onClick={() => setCheckoutStep(1)}
                    className="btn-gradient-blue text-white px-4 py-2 rounded-md"
                >
                    Finalizar compra
                </button>
            </div>
        </div>
    );
};

const mapStateToCartProps = (state) => ({
    cart: state.cart,
    total: state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
});

const mapDispatchToCartProps = (dispatch) => ({
    updateQuantity: (id, quantity) => dispatch({ 
        type: 'UPDATE_QUANTITY', 
        payload: { id, quantity } 
    }),
    removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id }),
    setCheckoutStep: (step) => dispatch({ type: 'SET_CHECKOUT_STEP', payload: step })
});

export default connect(mapStateToCartProps, mapDispatchToCartProps)(Cart);