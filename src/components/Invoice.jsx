import React, { useState } from 'react';
import { FaSearch, FaFileDownload, FaPrint } from 'react-icons/fa';
import './Invoice.css';

const Invoice = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample invoice data
  const invoices = [
    {
      id: 'INV-2025-001',
      date: '2025-01-31',
      items: [
        { name: 'Grilled Salmon', quantity: 2, price: 24.99 },
        { name: 'Tiramisu', quantity: 1, price: 8.99 },
        { name: 'Bruschetta', quantity: 1, price: 8.99 }
      ],
      status: 'Paid',
      total: 67.96
    },
    {
      id: 'INV-2025-002',
      date: '2025-01-30',
      items: [
        { name: 'Beef Tenderloin', quantity: 1, price: 29.99 },
        { name: 'Calamari', quantity: 1, price: 12.99 }
      ],
      status: 'Pending',
      total: 42.98
    }
  ];

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real application, this would generate a PDF
    alert('Downloading invoice...');
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredInvoices = invoices.filter(invoice => {
    const searchLower = searchQuery.toLowerCase();
    return (
      invoice.id.toLowerCase().includes(searchLower) ||
      invoice.date.includes(searchLower) ||
      invoice.status.toLowerCase().includes(searchLower) ||
      invoice.items.some(item => item.name.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>Your Invoices</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search invoices..." 
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="invoice-content">
        <div className="invoice-list">
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className={`invoice-item ${selectedInvoice?.id === invoice.id ? 'selected' : ''}`}
                onClick={() => handleInvoiceClick(invoice)}
              >
                <div className="invoice-item-header">
                  <h3>{invoice.id}</h3>
                  <span className={`status ${invoice.status.toLowerCase()}`}>
                    {invoice.status}
                  </span>
                </div>
                <div className="invoice-item-details">
                  <span className="date">{invoice.date}</span>
                  <span className="total">${invoice.total.toFixed(2)}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No invoices found matching "{searchQuery}"</p>
            </div>
          )}
        </div>

        <div className="invoice-details">
          {selectedInvoice ? (
            <>
              <div className="details-header">
                <h2>Invoice Details</h2>
                <div className="actions">
                  <button onClick={handlePrint} className="action-button-invoice">
                    <FaPrint /> Print
                  </button>
                  <button onClick={handleDownload} className="action-button-invoice">
                    <FaFileDownload /> Download
                  </button>
                </div>
              </div>

              <div className="details-content">
                <div className="details-section">
                  <h3>Invoice {selectedInvoice.id}</h3>
                  <p className="date">Date: {selectedInvoice.date}</p>
                </div>

                <div className="items-table">
                  <div className="table-header">
                    <span>Item</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                  </div>
                  {selectedInvoice.items.map((item, index) => (
                    <div key={index} className="table-row">
                      <span>{item.name}</span>
                      <span>{item.quantity}</span>
                      <span>${item.price.toFixed(2)}</span>
                      <span>${(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="table-footer">
                    <span>Total Amount:</span>
                    <span>${selectedInvoice.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="no-invoice-selected">
              <h2>Select an invoice to view details</h2>
              <p>Click on an invoice from the list to view its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
