import React from 'react';

const Footer = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = React.useState(false);
     
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
     
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
    };
     
    return (
        <footer className="bg-gradient-blue text-white mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Loja Virtual Brasil</h3>
                        <p className="text-blue-100 mb-4">Sua loja online de confiança para produtos eletrônicos e acessórios de alta qualidade.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-blue-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-200">
                                {/* Corrected and complete Instagram SVG path */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.8 2c-2.48 0-4.5 2.02-4.5 4.5v11c0 2.48 2.02 4.5 4.5 4.5h8.4c2.48 0 4.5-2.02 4.5-4.5V6.5c0-2.48-2.02-4.5-4.5-4.5H7.8zm0 1.5h8.4c1.66 0 3 1.34 3 3v11c0 1.66-1.34 3-3 3H7.8c-1.66 0-3-1.34-3-3V6.5c0-1.66 1.34-3 3-3z"/>
                                    <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/>
                                    <circle cx="17.25" cy="6.75" r="1.25"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Other sections of the footer */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-blue-100 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-blue-100 hover:text-white">Produtos</a></li>
                            <li><a href="#" className="text-blue-100 hover:text-white">Sobre Nós</a></li>
                            <li><a href="#" className="text-blue-100 hover:text-white">Contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Atendimento</h3>
                        <p className="text-blue-100">Segunda a Sexta: 9h - 18h</p>
                        <p className="text-blue-100 mt-2">Email: contato@lojavirtual.com</p>
                        <p className="text-blue-100">Telefone: (XX) XXXX-XXXX</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Fale Conosco</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Seu Nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    placeholder="Sua Mensagem"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded-md bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-white text-blue-800 px-4 py-2 rounded-md hover:bg-blue-100 transition-colors"
                            >
                                Enviar Mensagem
                            </button>
                            {formSubmitted && (
                                <p className="text-green-300 mt-2">Mensagem enviada com sucesso!</p>
                            )}
                        </form>
                    </div>
                </div>
                <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-200 text-sm">
                    © {new Date().getFullYear()} Loja Virtual Brasil. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;