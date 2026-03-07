# Never Forgotten

Minimal starter with:

- `Frontend/`: Next.js app router + Tailwind CSS
- `Backend/`: Express API

## Run locally

1. Install dependencies from the project root:

```bash
npm install
```

2. Start both apps:

```bash
npm run dev
```

3. Open `http://localhost:3000`

The frontend proxies `/api/*` requests to the backend on `http://localhost:4000` by default.

## Environment files

- `Frontend/.env.local`
- `Backend/.env`

Use the included `.env.example` files as the starting point.
