import React from "react";
import './InvoiceList.css';


export default class InvoiceList extends React.Component {
    state = {
        invoices: [],
    }

    componentDidMount() {
        fetch('http://localhost:8080/api')
            .then(res => res.json())
            .then((data) => {
                this.setState(
                    {invoices: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.invoices.map(invoice =>
                        <li> id: {invoice.id}<br/>
                            name: {invoice.name}<br/>
                            date: {invoice.date}<br/>
                            amount: {invoice.price}
                        </li>)}
                </ul>
            </div>
        );
    }
}