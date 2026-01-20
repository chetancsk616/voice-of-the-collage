# Project Blueprint

## Overview

This is a React application featuring a user authentication system powered by Firebase. It provides distinct dashboard experiences for general users and administrators. The user interface is crafted with a modern glassmorphism design, emphasizing a clean and visually appealing aesthetic with smooth transitions and hover effects.

## Project Outline

*   **Framework:** React (Vite)
*   **Styling:** Material-UI with custom CSS for a glassmorphism look and feel.
*   **Authentication:** Firebase Authentication using Email/Password.
*   **Routing:** `react-router-dom` for navigation between pages.
*   **Core Components:**
    *   `LoginPage`: Secure user login.
    *   `SignupPage`: User self-registration.
    *   `UserPage`: A dashboard for authenticated users to explore detailed product information.
    *   `AdminPage`: A restricted panel for administrative tasks.
*   **Design Principles:**
    *   **Theme:** A light, energetic theme with a linear gradient background (`#83a4d4` to `#b6fbff`).
    *   **UI:** "Glass" cards and inputs characterized by `backdrop-filter`, subtle borders, and shadows to create a sense of depth.
    *   **Interactivity:** Smooth `transform` transitions on interactive elements like buttons and cards to provide feedback.
    *   **Layout:** Responsive and mobile-first design using Material-UI's grid system.

## Current Request: Enhance User Page Content

### Goal

To enrich the `UserPage` with comprehensive, website-ready descriptions and visuals for the "Logic Checker Compiler" and "Fingerprint Charger Box" products.

### Plan

1.  **Install Carousel Dependency:** Add the `react-material-ui-carousel` package to the project to create an interactive image gallery for each product.
2.  **Restructure User Page:** Transition from a simple two-column layout to a more detailed, single-column narrative format. Each product will be presented in its own dedicated section to accommodate the richer content.
3.  **Implement Product Sections:** For each product, a Material-UI `Card` will be used to encapsulate:
    *   A prominent title and a value-focused subtitle.
    *   An image carousel combining a primary illustration with the provided product photographs.
    *   Clearly demarcated sections for "How It Works," "Key Highlights," and "Why It Matters" using `Typography`, `List`, and `ListItem` components for a clean and readable structure.
4.  **Refine Typography and Style:** Ensure the new content adheres to a professional typographic hierarchy and the established glassmorphism design language.
5.  **Update Blueprint:** Reflect these enhancements in this `blueprint.md` file upon completion.
