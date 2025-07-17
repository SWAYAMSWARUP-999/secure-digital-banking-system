import React, { useState } from 'react';
import { createAccount, deposit, withdraw, getBalance, getTransactions } from './api/bankApi';

export default function BankDashboard() {
  const [ownerName, setOwnerName] = useState('');
  const [account, setAccount] = useState(null);
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  const handleCreate = async () => {
    try {
      const acc = await createAccount(ownerName);
      setAccount(acc);
      setBalance(acc.balance);
      setTransactions([]);
      setError('');
    } catch (e) {
      setError('Failed to create account');
    }
  };

  const handleDeposit = async () => {
    try {
      const acc = await deposit(account.id, amount);
      setAccount(acc);
      setBalance(acc.balance);
      setError('');
    } catch (e) {
      setError('Deposit failed');
    }
  };

  const handleWithdraw = async () => {
    try {
      const acc = await withdraw(account.id, amount);
      setAccount(acc);
      setBalance(acc.balance);
      setError('');
    } catch (e) {
      setError('Withdrawal failed');
    }
  };

  const handleGetBalance = async () => {
    try {
      const bal = await getBalance(account.id);
      setBalance(bal);
      setError('');
    } catch (e) {
      setError('Failed to fetch balance');
    }
  };

  const handleGetTransactions = async () => {
    try {
      const txs = await getTransactions(account.id);
      setTransactions(txs);
      setError('');
    } catch (e) {
      setError('Failed to fetch transactions');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Bank Management Dashboard</h2>
      {!account ? (
        <div>
          <input value={ownerName} onChange={e => setOwnerName(e.target.value)} placeholder="Owner Name" />
          <button onClick={handleCreate}>Create Account</button>
        </div>
      ) : (
        <div>
          <div>Account ID: {account.id}</div>
          <div>Owner: {account.ownerName}</div>
          <div>Balance: {balance}</div>
          <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" type="number" />
          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={handleWithdraw}>Withdraw</button>
          <button onClick={handleGetBalance}>Refresh Balance</button>
          <button onClick={handleGetTransactions}>Show Transactions</button>
          <div style={{ color: 'red' }}>{error}</div>
          <h4>Transactions</h4>
          <ul>
            {transactions.map(tx => (
              <li key={tx.id}>{tx.type} {tx.amount} on {tx.timestamp}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
