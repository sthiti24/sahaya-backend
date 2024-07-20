# Sahaya - Local Food Redistribution Platform (Backend)

This is the backend server for Sahaya, a location-based social platform for redistributing excess food from restaurants and organizations to users.

## Project Overview

Sahaya aims to reduce food waste and help those in need by connecting food donors with recipients. The backend provides the necessary APIs and database operations to support the platform's core functionalities.

## Features

- RESTful APIs for user management, food listings, and delivery requests
- Real-time status updates for accepted deliveries
- Location-based post filtering
- User authentication and authorization

## Tech Stack

- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- MongoDB

### Installation

1. Clone the repository:-
   git clone https://github.com/sthiti24/sahaya-backend.git
   cd sahaya-backend

2. Install dependencies:-
   npm install

3. Create a `.env` file in the root directory and add the following variables:-
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. Start the server:-
   npm start
   The server should now be running on `http://localhost:3000`.
