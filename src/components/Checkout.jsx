import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart'; // Import connected components
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import OrderConfirmation from './OrderConfirmation';

const Checkout = ({ step }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <div className="flex items-center justify-center">
                    <div className={`flex items-center ${step >= 0 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                            1
                        </div>
                        <span className="ml-2 hidden sm:inline">Carrinho</span>
                    </div>
                    <div className={`w-12 sm:w-24 h-1 mx-2 ${step >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                            2
                        </div>
                        <span className="ml-2 hidden sm:inline">Endereço</span>
                    </div>
                    <div className={`w-12 sm:w-24 h-1 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                            3
                        </div>
                        <span className="ml-2 hidden sm:inline">Pagamento</span>
                    </div>
                    <div className={`w-12 sm:w-24 h-1 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                    <div className={`flex items-center ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                            4
                        </div>
                        <span className="ml-2 hidden sm:inline">Confirmação</span>
                    </div>
                </div>
            </div>
             
            {step === 0 && <Cart />}
            {step === 1 && <AddressForm />}
            {step === 2 && <PaymentForm />}
            {step === 3 && <OrderConfirmation />}
        </div>
    );
};

const mapStateToCheckoutProps = (state) => ({
    step: state.checkout.step
});
 
export default connect(mapStateToCheckoutProps)(Checkout);