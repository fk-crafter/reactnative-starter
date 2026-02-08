# 👋🏼 Expo NativeWind Starter

A modern, production-ready React Native boilerplate built with **Expo Router**, **NativeWind (Tailwind CSS)**, and **TypeScript**.

Designed to be the fastest way to start a new mobile project with a scalable architecture.

## ✨ Features

- **⚡️ Framework**: [Expo SDK 52+](https://expo.dev) (Latest)
- **Navigation**: [Expo Router v3](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Styling**: [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS for RN)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (Simple & Fast)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest) (Caching & Async state)
- **Icons**: [Lucide React Native](https://lucide.dev/guide/packages/lucide-react-native)
- **Typography**: Custom fonts configured
- **Architecture**: Clean separation of `(auth)` and `(app)` logic

---

## 🛠 Project Structure

```text
├── app/
│   ├── (app)/          # Protected routes (Dashboard, Profile...) - Only accessible if logged in
│   ├── (auth)/         # Public routes (Login, Register, Forgot Password)
│   ├── _layout.tsx     # Root layout (Providers: QueryClient, AuthContext...)
│   └── index.tsx       # Landing page (Entry point)
├── components/         # Reusable UI components (Buttons, Inputs...)
├── store/              # Global state (Zustand stores)
├── hooks/              # Custom React hooks
├── services/           # API calls and external services
└── assets/             # Images and Fonts
```

## Quick Start

1. Clone the repository

```text
   git clone [https://github.com/fk-crafter/reactnative-starter.git](https://github.com/fk-crafter/reactnative-starter.git) my-new-app
   cd my-new-app
```

2. Install dependencies

```text
   npm install
# or
pnpm install

```

3. Run the project

```text
   npx expo start --clear
```

Note: The --clear flag is recommended to ensure NativeWind compiles styles correctly on the first run.
