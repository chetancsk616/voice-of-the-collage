
# **Blueprint: Voice of the College**

## **Overview**

This document outlines the architecture, design, and features of the "Voice of the College" application. The application is a web-based platform designed to help students by providing solutions. It provides a secure login system and a dynamic, single-page landing page to present information to users.

## **Project Outline**

### **Styling and Design**

*   **Component Library:** Material-UI (MUI) is used for a consistent and modern design.
*   **Layout:** The main landing page is a single-page layout with vertical scrolling sections.
*   **Navigation:** A fixed navigation bar allows for smooth scrolling between sections.
*   **Visuals:** The design incorporates a blue and white color scheme, with a gradient background in the hero section.
*   **Typography:** Clear and readable fonts are used, with a hierarchy of headings and body text.

### **Features Implemented**

*   **User Authentication:**
    *   Login and Signup pages with Firebase authentication.
    *   Secure routing to protect the main content.
*   **Landing Page Sections:**
    *   **Hero Section:** A full-screen welcome message with a call-to-action button.
    *   **Our Products:** A section to showcase the innovative products, each with a description, image carousel, and key highlights.
    *   **Key Achievements:** A section to display key milestones and successes.
    *   **About Us & Contact:** Placeholder sections for future content.
*   **Navigation:**
    *   A persistent navigation bar at the top of the page.
    *   Smooth scrolling to different sections of the landing page.
    *   A logout button for authenticated users.

## **Current Request: Landing Page Refactoring**

### **Plan and Steps**

The following steps were taken to refactor the application and create the new landing page:

1.  **Component Creation:** The existing `UserPage.jsx` was broken down into smaller, reusable components:
    *   `HeroSection.jsx`
    *   `OurProducts.jsx`
    *   `KeyAchievements.jsx`
    *   `AboutUs.jsx`
    *   `Contact.jsx`
2.  **Navigation:** A `Navbar.jsx` component was created to provide navigation between the new sections using `react-scroll` for a smooth scrolling effect.
3.  **Main Page Assembly:** A new `MainPage.jsx` component was created to assemble all the section components in the correct order.
4.  **Routing Update:** The main `App.jsx` was updated to use the new `MainPage.jsx` for the `/home` route. The `Navbar` is conditionally rendered so it doesn't appear on the login and signup pages.
5.  **Cleanup:** The old `UserPage.jsx` file was deleted as it is no longer needed.
6.  **Verification:** The code was linted to ensure it adheres to coding standards, and the `package.json` file was checked to confirm all dependencies are in order.
