# E-commerce Application

## Checkout the demo here:
https://youtu.be/bJRqU4tQ8IY

This is an e-commerce application built using Next.js, Redux, Firebase and Tailwind

## Features

- **User Authentication**: Integrated with Firebase for user authentication, allowing users to sign up, log in, and manage their sessions.
- **Persistent State Management**: Utilizes Redux to manage the state across the application. The cart and other critical state values are persistently saved in local storage, ensuring that the user's data is retained even after refreshing the page.
- **Discount Coupons Logic**: Implemented a discount system where users can apply coupon codes for fixed or percentage-based discounts on their orders.
- **UI Components**: Utilized `@headlessui/react` and `@heroicons/react` for building accessible and visually appealing UI components.
- **Clear Cart on Checkout**: The cart is cleared from Firestore when the user completes the checkout process.

## Libraries Used

1. **Redux**: State management for the entire application.
2. **Firebase**: Authentication, Firestore database for saving cart and user data.
3. **@headlessui/react**: Unstyled, fully accessible UI components.
4. **@heroicons/react**: Beautiful hand-crafted SVG icons.

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Configure Firebase by adding your Firebase config to the `.env.local` file.
4. Run the application: `npm run dev` or `yarn dev`.

## How to Use

1. Sign up or log in using your email.
2. Add products to your cart.
3. Apply discount coupons at checkout.
4. The application will calculate the discounts and persist your cart data even after refreshing the page.

## Clearing the Cart on Checkout

When the user clicks the checkout button, the cart will be cleared from Firestore to ensure that the cart is empty after the checkout process.
