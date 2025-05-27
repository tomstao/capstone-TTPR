# E‑commerce Starter – PERN • Vite/React

> **Project Title**: _(replace with your store’s brand name)_

> **Description**: Full‑stack e‑commerce boilerplate built with PostgreSQL, Express, React (Vite) & Node.js, pre‑wired with JWT auth, seed data, and a modular file structure so students can focus on feature development instead of setup.

![Screenshot or Demo GIF](public/gameMap.gif)

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Getting Started](#getting-started)
5. [Scripts](#scripts)
6. [Contributing](#contributing)
7. [License](#license)
8. [Authors](#authors)

---

## Features

- 🛒 **Product Catalogue** – browse all products and view detailed pages.
- ➕ **Cart Management** – add, increment, decrement, and remove items.
- 🔐 **JWT Auth** – register / login with secure password hashing.
- 💾 **Persisted Cart** – cart survives page refresh and syncs after login.
- 📦 **Seed Data** – 10 demo products, 2 demo users seeded automatically.
- ⚙️ **Admin CRUD** – create, update & delete products, manage users & orders (Tier 4 task).

> See `REQUIREMENTS.md` for the full milestone checklist.

---

## Tech Stack

| Layer     | Tech                                                         |
| --------- | ------------------------------------------------------------ |
| Frontend  | React 18 (Vite), React Router 6, Redux Toolkit / Context API |
| Styling   | CSS Modules (Tailwind optional), ESLint + Prettier           |
| Backend   | Express 5, Sequelize 7, PostgreSQL 15, JWT (jsonwebtoken)    |
| Dev Tools | Vite, Nodemon, dotenv                                        |

---

## Folder Structure

```
.
├── BREAKDOWN.md
├── CHANGELOG.md
├── client
│   ├── app            # React root
│   ├── features       # Redux slices / contexts
│   └── index.js       # hydrateRoot
├── public             # static assets served by Vite
├── script
│   ├── seed.js        # sync & seed wrapper
│   └── seed.spec.js   # seed integrity test
├── server
│   ├── api            # route handlers
│   ├── app.js         # Express app
│   ├── auth           # JWT helpers & middleware
│   ├── db             # Sequelize init & models
│   └── index.js       # start server
└── TODO.md            # project task board
```

---

## Getting Started

### Prerequisites

- **Node.js ≥ 18** – [download](https://nodejs.org/)
- **PostgreSQL ≥ 14** – [installation guide](https://www.postgresql.org/download/)

### Installation

```bash
# 1. Clone
$ git clone <repo‑url>
$ cd <project‑dir>

# 2. Install root, client & server deps (npm workspaces)
$ npm install

# 3. Configure environment vars
$ cp .env.example .env   # then edit DB creds & JWT_SECRET

# 4. Seed database
$ npm run seed           # runs script/seed.js

# 5. Start dev servers (concurrently)
$ npm run dev            # Vite on 5173, API on 3000
```

### Scripts

| Command        | Description                 |
| -------------- | --------------------------- |
| `npm run dev`  | Vite + Nodemon concurrently |
| `npm run seed` | Sync & populate database    |

---

## Contributing

1. Fork the repo & create a feature branch.
2. Commit using Conventional Commits.
3. Push and open a PR against `main`.

---

## License

Distributed under the **MIT** License. See `LICENSE` for more information.

---

## Authors

| Name                 | LinkedIn                                                   | GitHub                                    |
| -------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| **Lan Hikari**       | [https://linkedin.com/in/...](https://linkedin.com/in/...) | [https://github.com/](https://github.com) |
| _Add your teammates_ |                                                            |                                           |
