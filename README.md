# How to Automate Customer Group Assignment in Medusa

This repository is the codebase of tutorial [How to Add Newsletter Subscriptions in Medusa with Mailchimp](https://medusajs.com/blog/customer-group-automation/).

[Medusa Documentation](https://docs.medusajs.com/) | [Medusa Website](https://medusajs.com/) | [Medusa Repository](https://github.com/medusajs/medusa)

## Medusa Version

This tutorial uses Medusa v1.10.0. It is not guaranteed that it will work with future releases.

## Prerequisites

- [Node.js at least v16](https://docs.medusajs.com/tutorial/set-up-your-development-environment#nodejs)
- [Git](https://docs.medusajs.com/tutorial/set-up-your-development-environment/#git)
- [Medusa CLI](https://docs.medusajs.com/tutorial/set-up-your-development-environment#medusa-cli)

## How to Install

_You may change these steps per your article._

1. Clone this repository:

   ```bash
   git clone https://github.com/ashutoshkrris/medusa-newsletter-mailchimp medusa-newsletter-mailchimp
   ```

2. Navigate to the `medusa-newsletter-mailchimp` directory:

   ```bash
   cd medusa-newsletter-mailchimp
   ```

3. Navigate to the `my-medusa-store` directory and install all the dependencies:

   ```bash
   cd my-medusa-store
   npm install
   ```

4. Run the following command to create a `.env` file:

   ```bash
   mv .env.template .env
   ```

5. Seed the data and run the server:

   ```bash
   medusa seed -f ./data/seed.json
   medusa develop
   ```

6. Navigate to the `my-medusa-storefront` directory and install all the dependencies:

   ```bash
   cd ../my-medusa-storefront
   npm install
   ```

7. Run the following command to create a `.env` file:

   ```bash
   mv .env.template .env.local
   ```

8. Run the storefront:
   ```bash
   npm run dev
   ```
