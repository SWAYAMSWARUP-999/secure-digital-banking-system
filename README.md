# React + Vite

# Secure Digital Banking System

A full-stack banking management system built with React (frontend) and Spring Boot (backend) that provides secure banking operations.

## Features and Implementation

### 1. Account Management
- **User Registration**
  - Fields: Name, Email, Phone, Password
  - Input validation for all fields
  - Secure password storage using encryption
  - Unique email/phone validation

- **Account Details**
  - Real-time balance display
  - Account holder information
  - Account creation date
  - Account status

### 2. Transaction Management
- **Deposit**
  - Real-time balance update
  - Transaction receipt
  - Amount validation

- **Withdrawal**
  - Balance check before withdrawal
  - Insufficient funds protection
  - Transaction limits
  - Receipt generation

- **Transaction History**
  - Detailed transaction log
  - Filter by date/type
  - Downloadable statements

## Technology Stack

### Frontend (React + Vite)
- React for UI components
- Real-time state management
- Form validation
- Responsive design
- API integration with Fetch

### Backend (Spring Boot)
- RESTful API endpoints
- JPA for database operations
- Transaction management
- Security implementations
- MySQL integration

### Database (MySQL)
- Account information storage
- Transaction records
- Relationship management
- Data integrity

## Running the Project

### Prerequisites
1. Install Node.js (v14 or higher)
2. Install Java JDK 17 or higher
3. Install MySQL Server
4. Install Maven

### Database Setup
1. Create MySQL database:
```sql
CREATE DATABASE bankdb;
 Secure Digital Banking System

### 3. Payment Methods
- Debit Card Management
  - Virtual debit card generation
  - Card activation/deactivation
  - PIN management
  - Transaction limits setting
  - Card transaction history

- **Credit Card Services**
  - Credit card application
  - Credit limit management
  - Bill generation
  - Due date reminders
  - Reward points system
  - EMI conversion
  - Credit score tracking

- **UPI Features**
  - UPI ID generation
  - QR code generation/scanning
  - Direct bank transfer
  - Bill payments
  - Merchant payments
  - Payment request generation
  - UPI PIN management
  - Favorite beneficiaries
  - Transaction history

