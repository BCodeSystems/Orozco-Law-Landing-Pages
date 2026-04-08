# Law Firm Lead Platform

A modular Next.js application designed for building high-conversion, SEO-optimized law firm landing pages. This project focuses on scalability across multiple domains, bilingual support, and streamlined lead intake.

## Overview

This platform was built to support multiple law firm websites using a shared, reusable architecture. It allows for consistent design, fast deployment, and efficient lead handling across different locations and campaigns.

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS  
- **Backend:** Next.js API Routes  
- **Language:** JavaScript / TypeScript  
- **Integration:** Google Apps Script (for lead processing and storage)  

## Features

- Modular, reusable page components for multi-site deployment  
- SEO-optimized structure for improved search visibility  
- Bilingual support (English / Spanish)  
- Lead capture forms with validation and error handling  
- Server-side API route for processing and forwarding lead data  
- Integration with external systems via webhook (Google Apps Script)  

## API Functionality

The application includes a server-side API endpoint that:

- Accepts lead form submissions (POST requests)  
- Validates required fields (name, email, message, etc.)  
- Handles error responses and status codes  
- Forwards data to an external processing service  

## Architecture

- Built using Next.js App Router for modern routing and server capabilities  
- Separation of concerns between UI components and API logic  
- Designed for scalability across multiple domains and campaigns  
- Lightweight and performance-focused for fast load times  

## Challenges & Solutions

**Challenge:** Creating a reusable system that works across multiple law firm websites without duplicating code  
**Solution:** Implemented a modular component structure and centralized logic for easy reuse  

**Challenge:** Handling lead submissions reliably without a traditional database  
**Solution:** Integrated with Google Apps Script as a lightweight backend solution for storing and managing leads  

## Status

Actively used and deployed across multiple client projects.

## Future Improvements

- Transition to a relational database (PostgreSQL) for structured data management  
- Expand API functionality for more advanced lead tracking and analytics  
- Enhance validation and error handling for edge cases  

## Author

Developed by BCode Systems
