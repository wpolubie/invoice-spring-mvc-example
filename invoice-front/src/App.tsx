import React from 'react';
import './App.css';
import InvoiceList from "./InvoiceList";

function App() {
    return (
        <div>
            <div className="ShowInvoices">
                <InvoiceList/>
            </div>
        </div>
    );
}

export default App;
