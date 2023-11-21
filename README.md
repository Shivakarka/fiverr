# Fiverr Clone

## A full stack Fiverr clone built using MERN Stack

Live Link : [Click Here](https://fiverr-clone-sk.vercel.app/)

Backend Repo : https://github.com/Shivakarka/fiverr-backend

## Table of Contents

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies](#install-dependencies)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
- [Screenshots](#screenshots)

 * [License](#license)

## Features

- Login / Logout functionality
- Full fledged Landing Page
- Selling / Buying Gigs
- Image upload features for gigs and profile pic
- Adding Reviews
- Filtering based on search / category
- Sorting gigs based on price, popularity
- Payments using Stripe
- Viewing order details
- Adding/deleting gigs (for Sellers only)
- Messaging feature to have conversation between buyer and seller
- Mark message as Read

## Usage

- Create a cloudinary account and obtain your `cloud name and cloud Upload URL` - [Cloudinary](https://cloudinary.com/)

### Env Variables

- Create a .env in root directing and add:
  `VITE_UPLOAD_LINK=<YOUR_CLOUDINARY_UPLOAD_LINK>`

### Install Dependencies

```
npm install --force
```

### Run

```
# Run frontend (http://localhost:5173)
npm run dev
```

## Build & Deploy

```
# Create build
npm run build
```

## Screenshots:

![Macbook Pro-1700556091398](https://github.com/Shivakarka/fiverr/assets/64298475/4941ddff-36c7-43bf-a40c-d4f1fc6106c6)


## License

The MIT License
