# validatedId - marvel 
Small app as a technical test for validatedId.
It makes requests to the Marvel API: https://developer.marvel.com/, to show characters based on filters with pagination.
How to use: run "npm run dev" in the root folder, then open http://localhost:3000/ in your chosen explorer.

// Technologies used:
- React: Base UI framework.
- Redux: in order to save the info from the API request and make it accessible everywhere in the app with cleaner reducers and code.
- Vite: instead of CRA, because of its lightning speed and small package size.
- Typescript: in order to get a robust code with better (thus cheaper) legibility and maintenance.  
- Sass: to create indented css with added funcionalities like variables.

// To improve
- Protected routes if user auth is needed.
- Global imports setup with vite.