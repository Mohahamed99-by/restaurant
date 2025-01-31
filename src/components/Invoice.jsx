import React, { useState } from 'react';
import { FaSearch, FaFileDownload, FaPrint } from 'react-icons/fa';
import './Invoice.css';

const Invoice = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  };

  const calculateFinalTotal = (subtotal, tax = 0.2, discount = 0) => {
    const taxAmount = subtotal * tax;
    const discountAmount = subtotal * discount;
    return subtotal + taxAmount - discountAmount;
  };

  // Sample invoice data with tax and discounts
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
      tax: 0.2,
      discount: 0.1,
      get subtotal() {
        return calculateTotal(this.items);
      },
      get total() {
        return calculateFinalTotal(this.subtotal, this.tax, this.discount);
      }
    },
    {
      id: 'INV-2025-002',
      date: '2025-01-30',
      items: [
        { name: 'Beef Tenderloin', quantity: 1, price: 29.99 },
        { name: 'Calamari', quantity: 1, price: 12.99 }
      ],
      status: 'Pending',
      tax: 0.2,
      discount: 0,
      get subtotal() {
        return calculateTotal(this.items);
      },
      get total() {
        return calculateFinalTotal(this.subtotal, this.tax, this.discount);
      }
    }
  ];

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    if (!selectedInvoice) return;
    
    // Create invoice content
    const invoiceContent = {
      id: selectedInvoice.id,
      date: selectedInvoice.date,
      items: selectedInvoice.items,
      subtotal: selectedInvoice.subtotal,
      tax: selectedInvoice.tax * selectedInvoice.subtotal,
      discount: selectedInvoice.discount * selectedInvoice.subtotal,
      total: selectedInvoice.total
    };

    // Create a Blob with the invoice data
    const blob = new Blob([JSON.stringify(invoiceContent, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create download link and trigger click
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedInvoice.id}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
                <h2>Invoice {selectedInvoice.id}</h2>
                <div className="actions">
                  <button className="action-button-invoice" onClick={handlePrint}>
                    <FaPrint /> Print
                  </button>
                  <button className="action-button-invoice" onClick={handleDownload}>
                    <FaFileDownload /> Download
                  </button>
                </div>
              </div>

              <div className="details-section">
                <h3>Invoice Details</h3>
                <p className="date">Date: {selectedInvoice.date}</p>
                <p className={`status ${selectedInvoice.status.toLowerCase()}`}>
                  Status: {selectedInvoice.status}
                </p>
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
                  <span>Subtotal</span>
                  <span></span>
                  <span></span>
                  <span>${selectedInvoice.subtotal.toFixed(2)}</span>
                </div>
                <div className="table-footer">
                  <span>Tax ({(selectedInvoice.tax * 100)}%)</span>
                  <span></span>
                  <span></span>
                  <span>${(selectedInvoice.tax * selectedInvoice.subtotal).toFixed(2)}</span>
                </div>
                {selectedInvoice.discount > 0 && (
                  <div className="table-footer">
                    <span>Discount ({(selectedInvoice.discount * 100)}%)</span>
                    <span></span>
                    <span></span>
                    <span>-${(selectedInvoice.discount * selectedInvoice.subtotal).toFixed(2)}</span>
                  </div>
                )}
                <div className="table-footer">
                  <span>Total</span>
                  <span></span>
                  <span></span>
                  <span>${selectedInvoice.total.toFixed(2)}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="no-invoice-selected">
              <h2>Select an Invoice</h2>
              <p>Choose an invoice from the list to view its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
