# OMATSOLA_EYITEMI

# Omatsola Eyitemi - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, Shadcn UI, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Shadcn UI** - Beautiful, accessible components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📋 Features

- ✅ Responsive design for all devices
- ✅ Smooth scrolling navigation
- ✅ Modern, professional UI
- ✅ CV download functionality
- ✅ Image gallery for projects and achievements
- ✅ Sections: Home, About, Experience, Projects, Education, Achievement, Contact, Stats

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── navbar.tsx       # Navigation component
│   ├── sections/        # Section components
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── education.tsx
│   │   ├── achievement.tsx
│   │   ├── contact.tsx
│   │   └── stats.tsx
│   └── ui/              # Shadcn UI components
├── public/              # Static assets (images)
└── lib/                 # Utility functions
```

## 🎨 Customization

### Adding Content

1. **Experience**: Edit `components/sections/experience.tsx`
2. **Education**: Edit `components/sections/education.tsx`
3. **Contact**: Edit `components/sections/contact.tsx`
4. **Stats**: Edit `components/sections/stats.tsx`
5. **About**: Edit `components/sections/about.tsx`

### CV Download Link

The CV download link is configured in:
- `components/navbar.tsx` (navbar button)
- `components/sections/hero.tsx` (hero section button)

Update the Google Drive link ID in both files if needed.

### Images

- Profile picture: `public/TEMI-PICTURE.jpg`
- Project/Achievement images: All other JPG files in `public/`

## 📧 Contact Form Setup

The contact form uses Resend to send emails. To enable it:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Create a `.env.local` file in the root directory:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. For production (Vercel), add the `RESEND_API_KEY` environment variable in your Vercel project settings

**Note:** Without the API key, the form will still work but won't send emails. You can also use alternative services like SendGrid, Nodemailer, or EmailJS.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add the `RESEND_API_KEY` environment variable in Vercel project settings
4. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📝 License

This project is private and proprietary.

## 👤 Author

**Omatsola Eyitemi**
- Media & Communications Specialist
- Broadcast Production
- Social Media Strategist
- Content Development & Audience Engagement
