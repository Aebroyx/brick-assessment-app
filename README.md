# Brick Assessment Application
Developed by: Sangalabror Pujianto
github: https://github.com/Aebroyx/brick-assessment-app
Build a Github Search, Filter and Pagination Application

1. There will be two input fields, a search field for the user to type the text and a
dropdown where the user can either pick "Users" or "Repository" to define the
entities that they want to search.
2. When the user starts typing into the input, make an API call to fetch the
results and display them in the grid above. The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.
3. For each repository display the repository user details returned from API and the repository name, author, stars and other statistics below it.
4. For the users, show the profile picture, name, location, any other data you have and link to their profile.
5. The user can see more results (Pagination) until the results are done.
6. Consider all the states: initial,loading,error,...and inform the user about it.

This App is developed in idx.google.com code editor that can code and run the application in the web. Packages include only: redux, redux persist, and axios. All styles are vanilla css and inline styling for ease of read.

Simply:
~ npm install
~ npm run dev

to run the application

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
