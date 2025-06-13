import React from 'react';
import { connect } from 'react-redux';

const OrderConfirmation = ({ setCheckoutStep }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Pedido Confirmado!</h2>
            <p className="text-gray-600 mt-2">Seu pedido foi recebido e está sendo processado.</p>
            <p className="text-gray-600">Você receberá um e-mail com os detalhes do seu pedido em breve.</p>
             
            <div className="mt-8 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-medium text-gray-800">Número do pedido</h3>
                <p className="text-blue-800 font-bold text-xl mt-1">#{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</p>
            </div>
             
            <button 
                onClick={() => setCheckoutStep(0)}
                className="mt-8 btn-gradient-blue text-white px-6 py-3 rounded-md"
            >
                Continuar comprando
            </button>
        </div>
    );
};

const mapDispatchToOrderConfirmationProps = (dispatch) => ({
    setCheckoutStep: (step) => dispatch({ type: 'SET_CHECKOUT_STEP', payload: step })
});
 
export default connect(null, mapDispatchToOrderConfirmationProps)(OrderConfirmation);