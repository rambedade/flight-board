# Flight Status Board App

![Flight Status Board](https://github.com/user-attachments/assets/c6e698c4-f022-4061-b029-243901188498)

A responsive React application that displays a flight status board with flight information, similar to the classic airport departure screens. The app is built using Vite, React, and TypeScript, with full responsiveness for various devices, including phones and tablets.


## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo
You can check out a live demo of the app on Vercel: [Live Demo](https://flight-stats.vercel.app/)

## Features
- **Responsive design**: Works well on mobile devices, tablets, and desktops.
- **Flight status board**: Displays a list of flights with real-time status updates.
- **Flight details**: Shows detailed information about a selected flight.
- **Error handling**: Graceful handling of errors during data fetch and rendering.
- **Retry option**: Allows users to retry loading data in case of network failures.

## Tech Stack
- **Frontend**: React, TypeScript, Vite
- **Styling**: CSS3, Flexbox, Media Queries
- **Deployment**: Vercel

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **Git**: Install Git from [here](https://git-scm.com/).
- **Vercel CLI** (for deployment): Install using `npm install -g vercel`.

### Installation
1. **Clone the repository**
    ```bash
    git clone https://github.com/rambedade/flight-board.git
    ```
2. **Navigate to the project folder**
    ```bash
    cd flight-board
    ```
3. **Install dependencies**
    ```bash
    npm install
    ```

### Usage
1. **Run the development server**
    ```bash
    npm run dev
    ```
2. Open the browser and go to:
    ```
    http://localhost:5173
    ```
3. **Build for production**
    ```bash
    npm run build
    ```

### Deployment
To deploy the app to Vercel, follow these steps:

1. **Build the production version**
    ```bash
    npm run build
    ```
2. **Deploy using Vercel CLI**
    ```bash
    vercel
    ```
3. The app will be deployed, and you will get a URL to view the live version.

## Project Structure

```plaintext
flight-status-board/
├── public/                     # Public files for the app
│   └── index.html              # Main HTML file
├── src/                        # Source files for the app
│   ├── components/             # React components
│   │   ├── ErrorBoundary.tsx   # Error boundary component for error handling
│   │   ├── FlightDetail.tsx    # Component for flight details page
│   │   ├── FlightTable.tsx     # Component for displaying flight table
│   │   └── FlightDetail.css
│   │   └── FlightTable.css
│   ├── contexts/               # Contexts for managing global states
│   │   └── ErrorContext.tsx    # Context for error handling
│   ├── api.ts                  # API utility file for data fetching
│   ├── App.tsx                 # Main app component
│   ├── index.tsx               # Entry point of the React app
│   ├── mockData.ts             # Mock data for local testing
│   └── vite-env.d.ts           # TypeScript declarations for Vite
├── .gitignore                  # Files and directories to ignore in Git
├── package.json                # NPM dependencies and scripts
├── README.md                   # Documentation file for the project
├── tsconfig.json               # TypeScript configuration file
└── vite.config.ts              # Vite configuration file
