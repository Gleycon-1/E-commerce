import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import Checkout from './components/Checkout'; // Import the main Checkout component
import Header from './components/Header'; // Assuming you have a Header component from previous parts
import Footer from './components/Footer'; // Import the Footer

const App = () => {
    // You would typically have routes here for different pages (e.g., product listings)
    // For this checkout flow, we'll just render the Checkout component directly.

    return (
        <Provider store={store}>
            <div className="min-h-screen bg-gray-100">
                <Header /> {/* Assuming you have a Header component */}
                <main className="container mx-auto px-4 py-8">
                    <Checkout />
                </main>
                <Footer />
            </div>
        </Provider>
    );
};

export default App;