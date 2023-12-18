import React, { useState } from 'react';

const PayNow = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', { cardNumber, expiryDate, cvv });
  };

  return (
    <div className=" bg-slate-200 p-8 rounded-md shadow-md max-w-md mx-auto my-20 mt-20">
      <h2 className="text-3xl font-semibold mb-4 text-center">Enter Card Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="**** **** **** ****"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryDate">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="***"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-700 text-white font-bold py-2 px-4 rounded"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PayNow;
