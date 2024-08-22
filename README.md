# Calculator App

A simple and responsive calculator built using Vue.js with TypeScript. This application provides basic arithmetic operations and features a clean, modular architecture with separated logic and styles for easy maintainability.

## Features

- **Basic Operations:** Supports addition, subtraction, multiplication, and division.
- **Responsive Design:** Adapts to various screen sizes.
- **Error Handling:** Handles common errors such as division by zero.
- **Modular Structure:** The project is structured with separation of concerns, dividing logic and styles into separate files.

## Project Structure

```
/src
  App.vue     # Main component with template and input handling
  App.css     # Styles specific to the calculator component
```

## Setup and Installation

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/calculator.git
   cd calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the app in action.

## Usage

- **Numeric Buttons:** Click on the numbers to enter digits into the calculator.
- **Operator Buttons:** Use `+`, `-`, `*`, and `/` for basic arithmetic operations.
- **Equals (`=`) Button:** Press to evaluate the current expression.
- **Clear (`C`) Button:** Clears the current input.

## Testing

This project uses Vitest for unit testing. To run the tests:

```bash
npm run test
```

## Customization

### Modifying Styles

The styles for the calculator are located in `App.css`. You can customize the appearance by modifying the CSS variables or adding new styles.

## Contributing

If you would like to contribute, feel free to fork the repository and submit a pull request. We welcome all improvements and bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
