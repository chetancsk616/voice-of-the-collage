# Project Blueprint

## Overview

This project is a React application integrated with Firebase. It features a dual-login system for administrators and regular users, each with their own dedicated dashboard. The application is styled using Material-UI to ensure a modern and responsive user interface.

## Implemented Features

*   **Firebase Integration:** The application is connected to a Firebase project for backend services.
*   **Authentication:**
    *   User signup with email and password.
    *   User and Admin login with email and password.
    *   Admin access is restricted to a predefined email address (`admin@test.com`).
*   **Routing:** `react-router-dom` is used for navigation between pages.
*   **User Dashboard:** Displays information about the "Logic Checker Compiler" and "Fingerprint Charger Box" products.
*   **Admin Dashboard:** A basic dashboard for administrative purposes.
*   **Styling:** Material-UI is used for UI components and styling.

## Current Plan

The immediate plan is to set up the foundational aspects of the application. This includes:

1.  **Firebase Project Creation:** A new Firebase project will be created and configured.
2.  **Dependency Installation:** All necessary packages (`firebase`, `react-router-dom`, `@mui/material`, `@emotion/react`, `@emotion/styled`) will be installed.
3.  **Firebase Initialization:** The Firebase SDK will be initialized within the React application.
4.  **Component and Page Structure:** The project will be organized into `pages` and `components` directories for better maintainability.
5.  **Routing Implementation:** The main application routing will be set up.
6.  **UI and Content:** The UI for the login, signup, and dashboard pages will be created and populated with the provided content.

