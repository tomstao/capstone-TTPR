# Capstone E‑commerce Site – Requirements

> **Stack**: PostgreSQL · Express · React (Vite) · Node.js · Sequelize

 **Purpose**: Milestone checklist structured as user stories with frontend and backend implementation breakdowns.

 **Legend**: `[ ]` = to be implemented by students

---

## User Story 1: As a visitor, I want to browse all available products so I can shop the catalog.

**Frontend**

- [ ] Create `/products` route to display a grid of product cards (`name`, `image`, `price`, `rating`).
- [ ] Build product slice/context for state management.
- [ ] Implement responsive layout for product grid.

**Backend**

- [ ] `GET /api/products` returns all products.
- [ ] Product model with required fields (`name`, `description`, `price`, `imageUrl`, `inventoryQty`).
- [ ] Seed script includes 10 demo products.

---

## User Story 2: As a visitor, I want to register and log in, so I can securely access my cart and order history.

**Frontend**

- [ ] Create login and registration forms.
- [ ] Handle form validation and inline error messaging.
- [ ] Store token in `localStorage` on successful login.
- [ ] Update Navbar with links to login/register and logout when logged in.

**Backend**

- [ ] `POST /auth/register` and `POST /auth/login` endpoints.
- [ ] User model with `email` (unique, valid), `passwordHash` fields.

---

## User Story 3: As a shopper, I want to view detailed product info, so I can decide if I want to buy it.

**Frontend**

- [ ] `/products/:productId` shows name, full description, price, stock badge, and Add-to-Cart button.

**Backend**

- [ ] `GET /api/products/:id` fetches product by ID with all necessary fields.

---

## User Story 4: As a shopper, I want to manage my cart, so I can adjust items before checkout.

**Frontend**

- [ ] Create `/cart` route to show added products.
- [ ] Implement increment, decrement, and remove buttons.
- [ ] Display total price and cart summary.
- [ ] Show empty state when no items are in the cart.

**Backend**

- [ ] `POST /api/cart` to add/update cart items.
- [ ] `GET /api/cart` to return current cart for user.
- [ ] Implement data model for associating cart with user or anonymous session.

---

## User Story 5: As a logged-in user, I want my cart to persist, so I don’t lose items after refreshing or re-logging in.

**Frontend**

- [ ] Store cart locally (anonymous state).
- [ ] Sync local cart to server-side cart upon login.
- [ ] Update cart state in real-time after sync.

**Backend**

- [ ] Persist cart server-side and merge with local cart after login.
- [ ] Update user model or session to store persisted cart data.

---

## User Story 6: As a user, I want to place an order, so I can complete my purchase.

**Frontend**

- [ ] Add "Place Order" button on the cart page.
- [ ] Create order confirmation page at `/orders/:orderId`.
- [ ] Show all purchased items, subtotal, tax, and total.

**Backend**

- [ ] `POST /api/orders` converts current cart to an order.
- [ ] `GET /api/orders/:id` fetches order details for the logged-in user.
- [ ] Order model with fields like `status ('created' | 'paid' | 'cancelled')`, `total`, `lineItems`.

---

## User Story 7: As an admin, I want to manage products, users, and orders, so I can keep the store running.

**Frontend**

- [ ] Create `/admin` dashboard.
- [ ] Build tables for products, users, and orders.
- [ ] Add UI for creating, updating, and deleting products.
- [ ] Include dropdowns or toggles to change order status.

**Backend**

- [ ] `POST /api/products` to create products.
- [ ] `PUT /api/products/:id` to update products.
- [ ] `DELETE /api/products/:id` to delete products.
- [ ] `GET /api/users` returns all users.
- [ ] `GET /api/orders` returns all orders.

---

## User Story 8: As a user, I want to see feedback when something is loading or broken, so I have a smooth experience.

**Frontend**

- [ ] Create and use global `Loading` component.
- [ ] Create `NotFound` and `ErrorBoundary` components.
- [ ] Add client-side validation with user-friendly error messages.
- [ ] Build mobile-first responsive UI.

**Backend**

- [ ] Implement graceful error handling and clear responses.

---

## Extra Credit

- [ ] Frontend pagination for `/products` page.
- [ ] Backend `GET /api/products?page=1&limit=12` with pagination support.
- [ ] Use JWT for auth, issuing access and refresh tokens.
- [ ] Protect routes using JWT middleware.
- [ ] Integrate Stripe Checkout for real payments.
- [ ] Create Stripe webhook for payment verification.
- [ ] Decrement inventory and mark order as 'paid' after payment.
- [ ] Add role-based UI logic to restrict access to `/admin`.
- [ ] Protect admin routes on the backend using `role: 'admin'` checks.
- [ ] Add dark-mode toggle with theme switcher.
