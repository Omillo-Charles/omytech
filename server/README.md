# Omytech Contact Form Backend

This is a simple Express backend for handling contact form submissions and sending emails via Gmail using Nodemailer.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file in the `server` directory with the following content:**
   ```env
   GMAIL_USER=yourgmail@gmail.com
   GMAIL_PASS=your_gmail_app_password
   PORT=5000
   ```
   - `GMAIL_USER`: Your Gmail address (must have 2FA enabled and use an App Password).
   - `GMAIL_PASS`: Your Gmail App Password ([How to get one?](https://support.google.com/accounts/answer/185833?hl=en)).

3. **Run the server:**
   ```bash
   node index.js
   ```

The server will listen on `http://localhost:5000` by default.

## Endpoint

- `POST /api/contact`
  - Expects JSON body with: `name`, `email`, `company`, `service`, `budget`, `message`, `timeline`
  - Sends an email to your configured Gmail address. 