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

### 3. Payment Methods

- **Debit Card Management**
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

## Technology Stack

- **Frontend (React + Vite)**
  - React for UI components
  - Real-time state management
  - Form validation
  - Responsive design
  - API integration with Fetch

- **Backend (Spring Boot)**
  - RESTful API endpoints
  - JPA for database operations
  - Transaction management
  - Security implementations
  - MySQL integration

- **Database (MySQL)**
  - Account information storage
  - Transaction records
  - Relationship management
  - Data integrity

## Running the Project

### Prerequisites

- Install Node.js (v14 or higher)
- Install Java JDK 17 or higher
- Install MySQL Server
- Install Maven

### Database Setup

Create MySQL database:

```sql
CREATE DATABASE bankdb;
```

### How to Run the Complete Application

1. **Backend Setup**
   - Navigate to the backend directory:
     ```
     cd backend/backend
     ```
   - Build the backend using Maven:
     ```
     ./mvnw clean install
     ```
   - Run the Spring Boot application:
     ```
     ./mvnw spring-boot:run
     ```
   - Ensure the backend is running on `http://localhost:8080`.

2. **Frontend Setup**
   - Navigate to the frontend directory (root project directory):
     ```
     cd ../../
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend development server:
     ```
     npm run dev
     ```
   - The frontend will be available at `http://localhost:3000` (or as indicated in the terminal).

3. **Access the Application**
   - Open your browser and go to the frontend URL.
   - Use the application to register, manage accounts, perform transactions, and explore features.

4. **Database Configuration**
   - Ensure MySQL service is running.
   - Update database credentials in `backend/backend/src/main/resources/application.properties` if necessary.

5. **Stopping the Application**
   - Stop the frontend server with `Ctrl+C` in the terminal.
   - Stop the backend server with `Ctrl+C` in the terminal.

This setup allows you to run the full-stack bank management system locally for development and testing.

## Working Flow

1. **User Registration and Authentication**
   - Users register by providing personal details.
   - Secure authentication is handled via encrypted passwords.

2. **Frontend to Backend Communication**
   - The React frontend sends API requests to the Spring Boot backend.
   - Requests include user actions such as login, account management, and transactions.
   - Backend processes requests, interacts with the database, and returns responses.

3. **Account Management**
   - Users can view account details including balance and status.
   - Account information is updated in real-time.

4. **Transactions**
   - Users can perform deposits and withdrawals.
   - Transactions are validated and recorded with receipts.
   - Transaction history is accessible with filtering options.

5. **Payment Methods**
   - Users manage debit and credit cards.
   - UPI features allow for digital payments and transfers.

6. **Backend Processing**
   - Spring Boot backend handles API requests.
   - Database operations ensure data integrity and security.

## Project Structure

```
/backend
  /src/main/java/com/example/demo
    /controller       # REST API controllers
    /service          # Business logic services
    /repository       # JPA repositories for database access
    /model            # Entity classes for database tables
  /src/main/resources
    application.properties  # Spring Boot configuration
/frontend (src)
  /api               # API call definitions
  /assets            # Static assets like images
  /components        # React components
  /styles            # CSS and styling files
  App.jsx            # Main React app component
  main.jsx           # React app entry point
README.md            # Project documentation
package.json         # Node.js project manifest
pom.xml              # Maven project file for backend
```

## API Endpoints Overview

The project currently exposes the following main API endpoints related to account management:

- `POST /api/accounts` - Create a new account with owner name.
- `POST /api/accounts/{id}/deposit` - Deposit an amount to the account.
- `POST /api/accounts/{id}/withdraw` - Withdraw an amount from the account.
- `GET /api/accounts/{id}/balance` - Get the current balance of the account.
- `GET /api/accounts/{id}/transactions` - Get the transaction history of the account.

Currently, there are no separate API endpoints implemented for Credit Card, Debit Card, or UPI features. These features may be planned for future implementation or handled internally within other modules.

## Security Implementation

- Password encryption using BCrypt
- Input validation and sanitization
- SQL injection prevention
- CORS configuration
- Rate limiting
- Transaction atomicity

## Error Handling

- Custom error responses
- Transaction rollback
- Input validation errors
- Duplicate entry prevention
- Network error handling

## Future Enhancements

- Two-factor authentication
- Account statements generation
- Multiple account types
- Inter-account transfers
- Mobile responsive design
- Email notifications

## Testing

- Unit tests for backend services
- Integration tests for API endpoints
- Frontend component testing
- End-to-end testing

## Troubleshooting

### Common Issues

- Database connection errors
  - Check MySQL service is running
  - Verify credentials in application.properties

- Frontend API connection issues
  - Ensure backend is running
  - Check CORS configuration
  - Verify API endpoint URLs

- Build errors
  - Clear npm cache
  - Update dependencies
  - Check Java version

## Support

For issues and feature requests, i will do it later.

## License

MIT License

## Author

SWAYAMSWARUP-999

