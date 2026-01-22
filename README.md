# Vayuved – Static React Website

This repository contains the source code for the **Vayuved** official website.  
It is a **static, SEO-friendly React application** built using **Vite + React + Tailwind CSS**, designed for fast performance, clean architecture, and easy content updates.

---

## Tech Stack

- **Framework:** React 18
- **Bundler:** Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS v4
- **SEO:** react-helmet-async
- **Icons:** react-icons
- **Backend (Email):** PHP (mail.php + PHPMailer via Composer)

---

## Project Architecture Overview

This project follows a **page-driven + section-based architecture**.

- **Pages (`/src/pages`)**  
  Represent full website routes (Home, About, Contact, JTA-01, SAMPATHI-1, 404).

- **Components (`/src/components`)**  
  Each page has its own folder containing **section-level components**.  
  This keeps code modular, readable, and easy to maintain.

- **Assets (`/src/assets`)**  
  Centralized location for all images, banners, icons, and product media.

- **Static Build Output (`/dist`)**  
  Generated production-ready files uploaded directly to the server.

- **PHP Mail Layer (`mail.php`)**  
  Handles enquiry form submissions using server-side PHP.

---

## Folder Structure

| Folder / File | Description |
| :--- | :--- |
| **public/** | Static files that are not processed by the build tool (Vite/Webpack). |
| **src/assets/** | Dynamic assets (images/SVGs) that are imported directly into components. |
| **src/components/** | Reusable UI building blocks organized by feature or section. |
| **src/pages/** | Top-level route components representing different views of the app. |
| **vendor/** | Backend dependencies managed by PHP Composer. |
| **mail.php** | Logic for handling server-side email submissions via PHPMailer. |

---

## Routing Structure

Routing is defined in **`src/App.jsx`** using React Router.

Example routes:
- `/` → Home
- `/about` → About
- `/contact` → Contact
- `/products/jta-01`
- `/products/sampathi-1`
- `*` → 404 Page

---

## How to Edit Static Content

### 1. Text Content
- **Page-level content:**  
  Edit files inside `/src/pages`

- **Section-level content:**  
  Edit components inside `/src/components/<page-name>/`

Example:

- `/src/components/home/Hero.jsx`
- `/src/components/about/AboutIntro.jsx`

---

### 2. Images / Banners / Icons
- Add or replace images in: `/src/assets/`

 Import them into components like:
 
```js
import BannerImage from "../../assets/banners/banner3.png";
```

### 3. Product Data (Home Page)
- Reusable product-related data is stored in: `/src/data/product.js`

This allows centralized updates without touching UI components.

### 4. SEO Meta Data

 SEO tags are managed using react-helmet-async inside page components.
 
 Example: `/src/pages/Home.jsx`

 ```html
<Helmet>
 <title> Vayuved Aerospace | Engineering UAV & Drone Flight Controller Systems</title>

<meta
    name="title"
    content="Vayuved Aerospace | Engineering UAV & Drone Flight Controller Systems"
/>
<meta
    name="description"
    content="Vayuved Aerospace designs and manufactures deterministic flight control units, real-time embedded systems, and aerospace-grade electronics for UAV and advanced aerial platforms."
/>
</Helmet>

 ```

---

## Local Development


```bash 
# Install Dependencies
npm install  

#Run Development Server
npm run dev
```
---

## Build for Production
```bash 
npm run build
```
This will create a `/dist` folder containing:
- HTML
- CSS
- JS
- Asset files

---

## Deployment (Hostinger)

Upload contents of dist folder to hostinger `public_html` directory using FileZilla.

---

## Notes for Future Maintenance

- This is a **static SPA** — no database required
- All content changes require a rebuild + re-upload
- PHP is used only for emails, not for page rendering
- Architecture is optimized for:
    - SEO
    - Performance
    - Easy content updates
    - Product scalability