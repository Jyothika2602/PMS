import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './Payments.css';

const Payments = () => {
  const [selectedMethod, setSelectedMethod] = useState('upi');

  const renderUPIPayment = () => (
    <div className="payment-section">
      <h3>Scan & Pay via UPI</h3>
      <QRCode value="upi://pay?pa=your-upi-id@bank&pn=EliteEstate&am=2000" />
      <p>Scan this code using any UPI app</p>
    </div>
  );

  const renderCardPayment = () => (
    <div className="payment-section">
      <h3>Pay with Credit/Debit Card</h3>
      <form className="card-form">
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Cardholder Name" required />
        <input type="text" placeholder="Amount" required />
        <div className="card-row">
          <input type="text" placeholder="MM/YY" required />
          <input type="text" placeholder="CVV" required />
        </div>
        <button type="submit">Pay</button>
      </form>
    </div>
  );

  return (
    <div className="payments-page">
      <h2>Make a Payment</h2>
      <div className="payment-methods">
        <button onClick={() => setSelectedMethod('upi')}>UPI</button>
        <button onClick={() => setSelectedMethod('card')}>Credit/Debit Card</button>
      </div>

      {selectedMethod === 'upi' && renderUPIPayment()}
      {selectedMethod === 'card' && renderCardPayment()}
    </div>
  );
};

export default Payments;