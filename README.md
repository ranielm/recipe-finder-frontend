# Recipe Finder Frontend

This project is the frontend for the Recipe Finder application, a React-based web application that allows users to search for recipes based on the ingredients they have.

## Features

- Search for recipes by ingredients.
- Responsive design for desktop and mobile devices.
- Internationalization with support for multiple languages.
- Dark and light mode toggling.

## Prerequisites

Before running the project, make sure you have the following installed:
- Node.js (Preferably the latest LTS version)
- npm or Yarn (for managing dependencies)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/recipe-finder-frontend.git
cd recipe-finder-frontend
```

## Install the dependencies:

```bash
npm install
# or
yarn
```

## Set up the environment variables:

Copy the .env.sample file to a new file named .env and update the variables to match your local setup.

```bash
cp .env.sample .env
```

Edit the .env file with the appropriate values for the environment variables.

## Start the development server:

```bash
npm run start
# or
yarn start
```

The application should now be running on [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run start` - Start the development server.
- `npm run build` - Build the application for production.
- `npm run lint` - Run ESLint to check for linting errors.
- `npm run preview` - Preview the production build.
- `npm run lint:fix` - Automatically fix linting issues.
- `npm run format` - Format your code using Prettier.

## Building for Production

To build the application for production, run:
    
```bash
npm run build
```

The build artifacts will be stored in the dist/ directory.

