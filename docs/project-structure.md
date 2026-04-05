# 📁 Project Structure

## Overview

This project follows a **modular architecture** designed to be scalable, maintainable, and easy to understand.

The goal is to organize the codebase in a way that allows the project to grow without becoming chaotic.

---

## Root Directory

The root should remain minimal and clean.

### Allowed files:

* `index.html` → Main entry point
* `README.md` → Project overview
* `architecture.md` → High-level decisions

### Not allowed:

* CSS files
* JavaScript files
* Images
* Reusable components

**Reason:**
The root is an entry point, not a storage area.

---

## /pages

Contains independent views of the application.

### Examples:

* `about.html`
* `contact.html`
* `example.html`

Each file represents a full page.

---

## /components

Reusable UI elements.

### Examples:

* `navbar.html`
* `footer.html`
* `card.html`

These components should be:

* Independent
* Reusable across multiple pages
* Focused on a single responsibility

---

## /layouts

Defines structural patterns of pages.

### Examples:

* `main-layout.html`
* `blog-layout.html`

Layouts organize components into full page structures.

---

## /assets

Contains all static resources.

### /css

* `tokens.css` → Design system variables (colors, spacing, typography)
* `main.css` → Global styles
* `/components/` → Component-specific styles

### /js

* `main.js` → Main JavaScript entry point
* Future:

  * modules
  * API logic
  * dynamic rendering

### /images

* All images and media assets

---

## /docs

Project documentation.

### Includes:

* `project-structure.md`
* Future technical documentation

---

## Architecture Principles

This project follows:

* **Separation of concerns** → Each part has a clear responsibility
* **Modularity** → Components are reusable
* **Scalability-first design** → Ready for growth

---

## Scalability Strategy

This structure supports future features such as:

* Blog system → `/pages/blog/`
* Authentication → `/assets/js/auth/`
* Admin dashboard → `/pages/admin/`
* API integration → `/assets/js/api/`

---

## Future Backend Integration

If a backend is added, it should be separated:

```
/backend
├── controllers
├── routes
├── models
└── services
```

Frontend and backend remain independent.

---

## Conclusion

A well-defined structure:

* Prevents chaos
* Improves maintainability
* Makes collaboration easier
* Reduces technical debt

---

## Final Thought

> This project does not grow in files.
> It grows in systems.
