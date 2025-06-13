import React from 'react';
import { connect } from 'react-redux';

const AddressForm = ({ address, updateAddress, setCheckoutStep }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateAddress({ [name]: value });
    };
     
    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckoutStep(2);
    };
     
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Endereço de Entrega</h2>
             
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nome completo</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={address.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                 
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="zipcode">CEP</label>
                    <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={address.zipcode}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="street">Rua</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={address.street}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="number">Número</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={address.number}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                 
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="complement">Complemento (opcional)</label>
                    <input
                        type="text"
                        id="complement"
                        name="complement"
                        value={address.complement}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="city">Cidade</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={address.city}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="state">Estado</label>
                        <select
                            id="state"
                            name="state"
                            value={address.state}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Selecione</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                </div>
                 
                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                    <button 
                        type="button"
                        onClick={() => setCheckoutStep(0)}
                        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                    >
                        Voltar para o carrinho
                    </button>
                    <button 
                        type="submit"
                        className="btn-gradient-blue text-white px-4 py-2 rounded-md"
                    >
                        Continuar para pagamento
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToAddressFormProps = (state) => ({
    address: state.checkout.address
});
 
const mapDispatchToAddressFormProps = (dispatch) => ({
    updateAddress: (addressData) => dispatch({ type: 'UPDATE_ADDRESS', payload: addressData }),
    setCheckoutStep: (step) => dispatch({ type: 'SET_CHECKOUT_STEP', payload: step })
});
 
export default connect(mapStateToAddressFormProps, mapDispatchToAddressFormProps)(AddressForm);