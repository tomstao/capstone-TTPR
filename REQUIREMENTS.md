# Capstone E‑commerce Site – Requirements

> **Stack**: PostgreSQL · Express · React (Vite) · Node.js · Sequelize · JWT  
> **Purpose**: Provide students a milestone checklist they can tick off as they build the starter into a production‑ready store.  
> **Legend**: `[✔]` = included in starter boilerplate • `[ ]` = to be implemented by students

---

## Tier 1 – Browsing & Basic Auth (**26 pts**)

_Scope: anonymous catalogue browsing, account creation & login_

<details>

### Frontend

#### Products

<details>

- [ ] Display a grid of **all products** (`name`, `image`, `price`, `rating`) on `/products`.
- [ ] Build a **products slice / context** to manage product state.
- [ ] Clicking a product navigates to `/products/:productId` (see Tier 2).

</details>

#### Auth & Nav

<details>

- [✔] Global **Navbar** with links to Home, Products, Cart, Login/Register.
- [✔] **Register** form posts to `POST /auth/register`; on success store JWT in `localStorage` and redirect.
- [✔] **Login** form posts to `POST /auth/login`; show auth errors inline.

</details>

### Backend

#### Seed

<details>

- [✔] `script/seed.js` syncs & seeds: _10 sample products, 2 demo users_.

</details>

#### Models & Routes

<details>

- [✔] **Product** model: `name*`, `description`, `price*`, `imageUrl (default)`, `inventoryQty*`.
- [✔] `GET /api/products` returns all products (public).
- [✔] **User** model: `email*` (unique, valid), `passwordHash*`.
- [✔] `POST /auth/register` & `POST /auth/login` issue signed JWT (access 15 min, refresh 7 days).

</details>

</details>

---

## Tier 2 – Cart, Single Views & Persisted Carts (**10 pts**)

<details>

### Frontend

<details>

#### Single Product

- [ ] `/products/:productId` shows full description, price, stock badge, and **Add‑to‑Cart** button.

#### Cart Page

- [ ] `/cart` lists items with **increment, decrement, delete** controls.
- [ ] Cart total auto‑updates; empty state message when zero items.

</details>

### Backend

<details>

#### Cart API

- [ ] Anonymous carts stored client‑side; **persist server‑side after login**.
- [ ] `POST /api/cart` adds/updates product lines; `GET /api/cart` returns current cart for JWT user.

#### Product & User Details

- [ ] `GET /api/products/:id` (includes inventoryQty).
- [ ] `GET /api/users/:id` (protected, returns profile minus passwordHash).

</details>

</details>

---

## Tier 3 – Orders (No Payment Gateway) (**8 pts**)

<details>

### Frontend

<details>

- [ ] **Place Order** button on Cart page creates an order and redirects to `/orders/:orderId`.
- [ ] Order confirmation view lists line items, subtotal, tax, grand total.

</details>

### Backend

<details>

- [ ] **Order** model: `status ('created' | 'paid' | 'cancelled')`, `total`.
- [ ] `POST /api/orders` converts current cart to an order (`status: 'created'`).
- [ ] `GET /api/orders/:id` returns order details for owner.

</details>

</details>

---

## Tier 4 – Admin Dashboard & CRUD (**6 pts**)

<details>

### Frontend

<details>

- [ ] Route `/admin` shows tables for **Products**, **Users**, and **Orders**.
- [ ] UI to **create, update, delete** products; update order status.

</details>

### Backend

<details>

- [ ] `POST /api/products`, `PUT /api/products/:id`, `DELETE /api/products/:id` (no role enforcement).
- [ ] `GET /api/users` & `GET /api/orders`.

</details>

</details>

---

## Tier 5 – Polishing & UX Enhancements (**9 pts**)

<details>

### Frontend

<details>

- [ ] Client‑side **form validation** with helpful error messages.
- [ ] Global **Loading** and **Not Found** components.
- [ ] **Pagination** on Products page (page size 12 default).
- [ ] Mobile‑first responsive layout; dark‑mode toggle.

</details>

### Backend

<details>

- [ ] `GET /api/products` accepts `?page` & `?limit` for pagination.
- [ ] Unit tests for auth & cart routes with **Jest + Supertest** (≥ 80 % coverage).

</details>

</details>

---

## Bonus – Stretch Goals (**15 EC**)

- [ ] **Stripe Checkout & Webhooks** – secure payment flow, inventory decrement.
- [ ] **Role‑based Authorization** – restrict `/admin` and admin routes to users with `role: 'admin'`.
- TBD

---

## Evaluation

- **Requirements score** – 70 %
- **Rubric score** – 30 %
- **Extra Credit** – up to 15 %

Refer to `RUBRIC.md` for full grading details.
