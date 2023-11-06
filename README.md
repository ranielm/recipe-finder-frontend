# Recipe Finder Frontend

The Recipe Finder is a sophisticated React-based web application that offers a streamlined and interactive experience for culinary enthusiasts and home cooks alike. This user-friendly platform is expertly designed to help users effortlessly discover a plethora of recipes simply by entering the ingredients they have at hand.

## Core Functionalities

- **Ingredient-Based Recipe Search**: Enables users to input available ingredients and instantly find matching recipes.
- **Adaptive Design**: Crafted for optimal viewing across a range of devices, providing a seamless experience on both desktops and mobile screens.
- **Multilingual Support**: Accommodates a diverse user base with internationalization features, allowing users to navigate the platform in various languages.
- **Theme Flexibility**: Users can switch between a dark and a light interface, catering to individual preferences and enhancing visual comfort.
- **Secure User Authentication**: Employs JWT (JSON Web Tokens) to ensure secure user sessions and data interactions.
- **Access Control**: Implements route and feature restrictions, maintaining exclusive access for authenticated users.
- **Session Persistence**: Automatically redirects users to the login page when session tokens expire, ensuring uninterrupted service and security.
- **Error Handling**: Introduces a custom 404 page for non-existent routes, guiding users back to active sections of the site.
- **Detailed Recipe Insights**: Provides comprehensive recipe details, allowing users to explore cooking instructions, ingredient lists, and more.
- **Visual Engagement**: Displays vibrant images of recipes, elevating the user's browsing experience.
- **Personalized Favorites**: Offers functionality for users to add, remove, and review their favorite recipes, creating a tailored recipe collection.

With its robust feature set and intuitive interface, the Recipe Finder stands out as an indispensable tool for anyone looking to spice up their cooking routine with new and exciting recipes.

## Prerequisites

To run this project successfully, make sure you have the following installed:

- **Node.js**: The project is built with Node.js v20. This version provides the latest features and security updates. It's essential for running the server-side aspect of a React application.

- **npm or Yarn**: These are package managers that help you install and manage project dependencies. Either one is suitable, but make sure to use the same one consistently to avoid conflicts in dependency resolution.

## Core Technologies

- **React 18**: This is the version of React used in the project. React 18 introduces features like automatic batching, transitions, and more, which contribute to performance improvements and a better developer experience.

- **TypeScript 5**: The project utilizes TypeScript 5 for adding static type definitions. TypeScript ensures more robust code and enhances the development experience by catching errors early during the coding phase.

- **Axios**: Axios is used for making HTTP requests to external services and APIs. It's a promise-based HTTP client that offers an easy-to-use API and handles request and response transformations.

- **Material UI**: For the UI components, Material UI is utilized. It provides a set of components that follow the Material Design guidelines and helps in building a consistent and accessible user interface quickly.

- **styled-components**: This library is used for styling components in the project. It utilizes tagged template literals to style your components directly within your JavaScript or TypeScript code.

## Developer Tools

- **Prettier**: This is an opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

- **ESLint**: The project uses ESLint as a linting utility for JavaScript and TypeScript. It helps in identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

- **Vite**: This is the build tool used for the project. Vite serves code via native ES modules, which makes it extremely fast and efficient compared to older bundling tools.

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

