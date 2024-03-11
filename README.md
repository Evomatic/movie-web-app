[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
<div align="center">
  <h3 align="center">Movie web app</h3>

  <p align="center">
    A movie web app for keeping track of all your favorite movies.
  </p>
</div>

## About the Project
<p align="center">

<img  src="https://github.com/Evomatic/movie-web-app/assets/27636896/6b13a671-7d3c-48e0-8c56-d06b8c83f432" width=350px height=800px>
<img  src="https://github.com/Evomatic/movie-web-app/assets/27636896/7f8412c7-3b8d-4a71-8e3c-247cc4f8f51a" width=350px height=500px>
</p>

### Features:
* User authentication.
* View a list of movies.

## Built with
* ![NestJS]([https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white](https://nestjs.com/))
* ![Vite]([https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB](https://vitejs.dev/guide/))
* ![Mantine UI]([https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white](https://ui.mantine.dev/)) 
* ![Redux]([https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white](https://redux.js.org/)) 



# Setup up using Docker

**Setup .env file in root of repo**
```
NODE_ENV=development
FRONTEND_PORT=5173
BACKEND_PORT=3000

DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_PORT=5432
```
**Setup .env file in root of backend package**
```
DATABASE_URL="postgres://postgres:postgres@postgres:5432/postgres?schema=public"
```

**Run Make file**
```
Make local
```

**Migrate tables**
```
packages/backend/docker:migration
```

**Seed the database**
```
packages/backend/docker:seed
```

Open http://localhost:5173/login with your browser to see the application.

### View API documentation at:
http://localhost:3000/api/#

![image](https://github.com/Evomatic/movie-web-app/assets/27636896/9e82eecd-46d5-408e-a15a-f67c14a2590e)


## Authors
* [Evan Trujillo](https://github.com/evomatic)
