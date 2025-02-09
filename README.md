# My Vite Project

This is a Vite project configured to use TypeScript.

```sh
 netsh interface portproxy add v4tov4 listenport=5173 listenaddress=0.0.0.0 connectport=5173 connectaddress=(wsl hostname -I)
```
## Project Structure

```
my-vite-project
├── src
│   ├── main.ts          # Entry point of the application
│   └── vite-env.d.ts    # TypeScript declarations for Vite's environment
├── public
│   └── index.html       # Main HTML file
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
├── vite.config.ts       # Vite configuration file
└── README.md            # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-vite-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Build

To build the project for production, run:
```
npm run build
```

## License

This project is licensed under the MIT License.