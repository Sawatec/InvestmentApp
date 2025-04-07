# React Investment Calculator

This is a simple React-based investment calculator application. It allows users to input investment details such as the initial investment, annual investment, expected return, and duration, and calculates the investment growth over time. The results are displayed in a tabular format.

![grafik](https://github.com/user-attachments/assets/f3be86ca-8335-46ad-95f6-0e5b9c4242ca)


## Features

- **Dynamic Input Handling**: Users can input investment details, and the app dynamically updates the results.
- **Investment Growth Calculation**: Calculates yearly investment growth, including interest earned and total value.
- **Responsive Design**: Styled with CSS for a clean and responsive user interface.
- **Currency Formatting**: Uses the `Intl.NumberFormat` API to format numbers as currency.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Vite**: Development environment for fast builds and hot module replacement.
- **JavaScript**: Core programming language for logic and calculations.
- **CSS**: Styling for the application.

## Installation

1. Clone the repository:
   ```bash
   
   git clone https://github.com/Sawatec/InvestmentApp.git
   cd InvestmentApp

2. Install dependencies:
   ```bash
   
   npm install

3. Start the development server:
   ```bash
   
   npm run dev

4. Open the app in your browser at http://localhost:5173.

## File Structure

- **src/**: Contains the source code for the application.
  - **components/**: Reusable React components.
    - **Header.jsx**: Displays the app header.
    - **UserInput.jsx**: Handles user input for investment details.
    - **Results.jsx**: Displays the calculated investment results.
  - **util/**: Utility functions for calculations.
    - **investment.js**: Contains the investment calculation logic and currency formatter.
  - **App.jsx**: Main application component.
  - **index.jsx**: Entry point for the React app.
  - **index.css**: Global styles for the app.
- **vite.config.js**: Configuration file for Vite.
- **package.json**: Project metadata and dependencies.
- **index.html**: HTML template for the app.

## Usage

Enter the following details in the input fields:

- **Initial Investment**: The starting amount of money invested.
- **Annual Investment**: The amount added to the investment each year.
- **Expected Return**: The annual percentage return on the investment.
- **Duration**: The number of years the investment will grow.

The app will validate the input and display the results in a table if valid.

The results table includes:
- **Year**
- **Investment Value**
- **Interest Earned (Yearly)**
- **Total Interest Earned**
- **Total Invested Capital**

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.
