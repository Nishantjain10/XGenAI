# XGenAI - AI-Powered X/Twitter Reply Generator

XGenAI is an AI-powered tool designed to generate thoughtful, personalized replies to X (formerly Twitter) comments using Google's Gemini API. This application is built with SvelteKit and uses Appwrite for authentication and database management.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Tech Stack

- **Frontend**: SvelteKit
- **Styling**: Tailwind CSS
- **Database**: Appwrite
- **Authentication**: Appwrite Auth
- **AI Integration**: Google Gemini API
- **Social Integration**: Twitter API

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd xgenai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```
   PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   PUBLIC_TWITTER_API_KEY=your_twitter_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## Project Structure

```
xgenai/
├── src/                        # Source directory
│   ├── lib/                   # Library files
│   │   ├── appwrite/         # Appwrite configuration
│   │   │   └── database.ts
│   │   ├── components/       # Reusable components
│   │   │   ├── landing/     # Landing page components
│   │   │   │   ├── Cta.svelte
│   │   │   │   ├── Features.svelte
│   │   │   │   ├── Feedback.svelte
│   │   │   │   ├── Footer.svelte
│   │   │   │   ├── Header.svelte
│   │   │   │   ├── Hero.svelte
│   │   │   │   ├── HowItWorks.svelte
│   │   │   │   ├── Pricing.svelte
│   │   │   │   └── Testimonials.svelte
│   │   │   ├── shared/      # Shared components
│   │   │   │   ├── Button.svelte
│   │   │   │   ├── Header.svelte
│   │   │   │   ├── Logo.svelte
│   │   │   │   ├── Hero.svelte
│   │   │   │   └── MentionsList.svelte
│   │   │   └── icons/       # Icon components
│   │   │       └── index.ts
│   │   ├── server/         # Server-side code
│   │   ├── stores/         # Svelte stores
│   │   │   ├── auth.ts
│   │   │   ├── rateLimit.ts
│   │   │   └── twitter.ts
│   │   └── utils/          # Utility functions
│   │       ├── gemini.ts
│   │       ├── mockData.ts
│   │       ├── mockUserData.ts
│   │       ├── rateLimitHandler.ts
│   │       ├── rateLimitManager.ts
│   │       ├── appwrite.ts
│   │       ├── mentionTypes.ts
│   │       ├── twitter.ts
│   │       └── types.ts
│   ├── routes/             # SvelteKit routes
│   │   ├── api/           # API routes
│   │   │   └── twitter/   # Twitter API endpoints
│   │   │       └── mentions/
│   │   ├── auth/          # Authentication routes
│   │   │   └── callback/
│   │   └── dashboard/     # Dashboard routes
│   ├── app.html           # App template
│   ├── ambient.d.ts       # TypeScript ambient declarations
│   └── app.css           # Global styles
├── static/               # Static assets
│   └── x-logo.svg
├── .env                 # Environment variables
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Features

- User authentication with Appwrite
- AI-powered reply generation using Google Gemini
- Real-time X/Twitter integration
- Rate limiting protection
- User dashboard for managing replies
- Response history tracking
- Mention list management
- Landing page with features showcase
- Responsive design with Tailwind CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.