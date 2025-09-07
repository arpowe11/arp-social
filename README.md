# Social Media Login Page (MERN + OAuth2.0)

A simple **MERN stack** app that demonstrates authentication with **Google** and **GitHub** using OAuth 2.0.  
Users can log in via their social accounts, get a session handled with **express-sessions**, and view a basic dashboard.

---

## 🚀 Getting Started

### 1. Clone the Repository
Make sure you have [Git](https://git-scm.com/) installed, then run:
```bash
git clone https://github.com/arpowe11/arp-social.git
```
This will give you both the **client** and **server** folders.

---

## 🖥️ Client Setup

1. Navigate into the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   > ⚠️ You’ll need [Node.js + npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

3. Start the client dev server:
   ```bash
   npm run dev
   ```
   Copy the localhost URL (something like `http://localhost:5173/`) for later.

4. Create a `.env` file in the **client** root and add:
   ```ini
   REACT_APP_URL=<replace with your local host>
   ```
   ✅ **Important:**  
   - The `.env` file must be in the **client folder**, not a subfolder.  
   - Client `.env` variables are **publicly visible**. Do not store secrets or database credentials here.  

---

## ⚙️ Server Setup

1. Navigate into the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the example:
   - Copy the contents of `example-env.txt` into a new file called `.env`.
   - Fill in the required values (see below).

---

## 🔑 Environment Variables

Here’s what you’ll need to configure in `server/.env`:

### Session Secret
Generate a secure key for express-sessions:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Paste it into your `.env`:
```ini
SESSION_SECRET=your_generated_key
```

### Google OAuth
1. Follow [Google OAuth Guide](https://www.youtube.com/watch?v=TjMhPr59qn4).  
Use these in your set up for the:
   - **Home URL** → `http://localhost:3001`  
   - **Authorized Redirect URI** → `http://localhost:3001/api/auth/google/redirect`
2. Add credentials to `.env`:
   ```ini
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

### GitHub OAuth
1. Follow [Github OAuth Guide](https://www.youtube.com/watch?v=o_lFy43q8uw).  
Use these in your set up for the:
   - **Homepage URL** → `http://localhost:3001`  
   - **Callback URL** → `http://localhost:3001/api/auth/github/redirect`  
   - Generate a new client secret from the "Generate secret" button.
2. Add credentials to `.env`:
   ```ini
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

### MongoDB
1. Create a MongoDB cluster ([video guide](https://www.youtube.com/watch?v=SMXbGrKe5gM)).  
2. Copy the connection string into `.env`:
   ```ini
   MONGO_URL=your_mongodb_connection_string
   ```

---

## ▶️ Running the App

1. Start the server:
   ```bash
   npm run dev
   ```
   You should see:
   ```
   [INFO] Connected to MongoDB successfully
   [INFO] Dev server running on port 3001
   ```

2. In another terminal, start the client:
   ```bash
   cd client
   npm run dev
   ```

3. Open the client URL (e.g. `http://localhost:5173/`) in your browser.  

4. Log in using **Google** or **GitHub**. You’ll be redirected to a mock dashboard showing your **name, email, and a logout button**.

---

## 📝 Notes

- The client `.env` is **not secure** → only store public config (e.g., app URL).  
- All secrets (session key, OAuth credentials, DB URL) belong in the **server `.env`**.  

---

✨ That’s it — I hope you enjoy my mini project!  
