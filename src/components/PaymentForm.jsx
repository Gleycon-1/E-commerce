import React from 'react';
import { connect } from 'react-redux';

const PaymentForm = ({ payment, updatePayment, setCheckoutStep, completeOrder, total }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updatePayment({ [name]: value });
    };
     
    const handleSubmit = (e) => {
        e.preventDefault();
        completeOrder();
    };
     
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Forma de Pagamento</h2>
             
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Método de pagamento</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div 
                            className={`border rounded-md p-4 cursor-pointer ${payment.method === 'cartão' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onClick={() => updatePayment({ method: 'cartão' })}
                        >
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    name="method" 
                                    value="cartão" 
                                    checked={payment.method === 'cartão'} 
                                    onChange={handleChange} 
                                    className="h-4 w-4 text-blue-600" 
                                />
                                <label className="ml-2 text-gray-700">Cartão de Crédito</label>
                            </div>
                        </div>
                        <div 
                            className={`border rounded-md p-4 cursor-pointer ${payment.method === 'boleto' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onClick={() => updatePayment({ method: 'boleto' })}
                        >
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    name="method" 
                                    value="boleto" 
                                    checked={payment.method === 'boleto'} 
                                    onChange={handleChange} 
                                    className="h-4 w-4 text-blue-600" 
                                />
                                <label className="ml-2 text-gray-700">Boleto Bancário</label>
                            </div>
                        </div>
                        <div 
                            className={`border rounded-md p-4 cursor-pointer ${payment.method === 'pix' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onClick={() => updatePayment({ method: 'pix' })}
                        >
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    name="method" 
                                    value="pix" 
                                    checked={payment.method === 'pix'} 
                                    onChange={handleChange} 
                                    className="h-4 w-4 text-blue-600" 
                                />
                                <label className="ml-2 text-gray-700">PIX</label>
                            </div>
                        </div>
                    </div>
                </div>
                 
                {payment.method === 'cartão' && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="cardName">Nome no cartão</label>
                            <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={payment.cardName}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                         
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">Número do cartão</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={payment.cardNumber}
                                onChange={handleChange}
                                required
                                placeholder="0000 0000 0000 0000"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                         
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="cardExpiry">Data de validade</label>
                                <input
                                    type="text"
                                    id="cardExpiry"
                                    name="cardExpiry"
                                    value={payment.cardExpiry}
                                    onChange={handleChange}
                                    required
                                    placeholder="MM/AA"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="cardCVV">CVV</label>
                                <input
                                    type="text"
                                    id="cardCVV"
                                    name="cardCVV"
                                    value={payment.cardCVV}
                                    onChange={handleChange}
                                    required
                                    placeholder="123"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </>
                )}
                 
                {payment.method === 'boleto' && (
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="text-gray-700">O boleto será gerado após a confirmação do pedido.</p>
                    </div>
                )}
                 
                {payment.method === 'pix' && (
                    <div className="bg-gray-100 p-4 rounded-md mb-4 text-center">
                        <div className="bg-white p-4 inline-block rounded-md mb-3">
                            {/* Incomplete SVG for PIX QR Code. Replace with a proper QR code generated library or placeholder. */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
                                <rect width="120" height="120" fill="#f0f0f0"/>
                                <path d="M20,20 L100,20 L100,100 L20,100 Z" fill="#ffffff" stroke="#000000" strokeWidth="2"/>
                                {/* This path is a simplified placeholder for a QR code pattern */}
                                <path d="M30,30 L40,30 L40,40 L30,40 Z M50,30 L60,30 L60,40 L50,40 Z M70,30 L80,30 L80,40 L70,40 Z M90,30 L90,40 L80,40 M30,50 L40,50 L40,60 L30,60 Z M50,50 L60,50 L60,60 L50,60 Z M70,50 L80,50 L80,60 L70,60 Z M90,50 L90,60 L80,60 M30,70 L40,70 L40,80 L30,80 Z M50,70 L60,70 L60,80 L50,80 Z M70,70 L80,70 L80,80 L70,80 Z M90,70 L90,80 L80,80" stroke="#000000" strokeWidth="2" fill="none"/>
                            </svg>
                        </div>
                        <p className="text-gray-700">Escaneie o QR Code acima para pagar via PIX.</p>
                        <p className="text-gray-500 text-sm mt-2">O pedido será processado após a confirmação do pagamento.</p>
                    </div>
                )}
                 
                <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                        <span className="text-gray-800">Total</span>
                        <span className="text-blue-800">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </div>
                 
                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                    <button 
                        type="button"
                        onClick={() => setCheckoutStep(1)}
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                    >
                        Voltar para endereço
                    </button>
                    <button 
                        type="submit"
                        className="btn-gradient-blue text-white px-4 py-2 rounded-md"
                    >
                        Finalizar pedido
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToPaymentFormProps = (state) => ({
    payment: state.checkout.payment,
    total: state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
});
 
const mapDispatchToPaymentFormProps = (dispatch) => ({
    updatePayment: (paymentData) => dispatch({ type: 'UPDATE_PAYMENT', payload: paymentData }),
    setCheckoutStep: (step) => dispatch({ type: 'SET_CHECKOUT_STEP', payload: step }),
    completeOrder: () => dispatch({ type: 'COMPLETE_ORDER' })
});
 
export default connect(mapStateToPaymentFormProps, mapDispatchToPaymentFormProps)(PaymentForm);