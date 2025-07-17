// src/api/bankApi.js
const API_BASE = 'http://localhost:8080/api/accounts';

export async function createAccount(ownerName) {
  const res = await fetch(`${API_BASE}?ownerName=${encodeURIComponent(ownerName)}`, { method: 'POST' });
  return res.json();
}

export async function deposit(id, amount) {
  const res = await fetch(`${API_BASE}/${id}/deposit?amount=${amount}`, { method: 'POST' });
  return res.json();
}

export async function withdraw(id, amount) {
  const res = await fetch(`${API_BASE}/${id}/withdraw?amount=${amount}`, { method: 'POST' });
  return res.json();
}

export async function getBalance(id) {
  const res = await fetch(`${API_BASE}/${id}/balance`);
  return res.json();
}

export async function getTransactions(id) {
  const res = await fetch(`${API_BASE}/${id}/transactions`);
  return res.json();
}
