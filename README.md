# @aragaoi/me - Personal Portfolio

A professional portfolio website showcasing my experience as a Senior Full Stack Engineer. Built with Next.js, TypeScript, and Tailwind CSS, featuring internationalization support for English and Portuguese.

## Features

- 🌍 **Internationalization**: Full support for English and Portuguese languages
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Performance**: Built with Next.js for optimal performance
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- 🔗 **Social Links**: Direct links to LinkedIn and contact information
- 📄 **Professional Sections**: Hero, About, Experience, Skills, and Contact

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd me
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
me/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       ├── experience.ts
│       ├── skills.ts
│       └── projects.ts
├── messages/
│   ├── en.json
│   └── pt.json
├── i18n.ts
├── middleware.ts
└── next.config.js
```

## Internationalization

The website supports two languages:
- **English** (default): `/en`
- **Portuguese**: `/pt`

Language switching is available through the navigation menu.

## Customization

### Adding New Languages

1. Create a new translation file in `messages/[locale].json`
2. Add the locale to the `locales` array in `i18n.ts`
3. Update the middleware configuration

### Updating Content

- **Experience**: Edit `src/data/experience.ts`
- **Skills**: Edit `src/data/skills.ts`
- **Translations**: Edit files in `messages/` directory
- **Styling**: Modify Tailwind classes in components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any static hosting platform:

```bash
npm run build
```

The built files will be in the `.next` directory.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: irenio.limaj@gmail.com
- **LinkedIn**: [linkedin.com/in/irenio-de-aragao](https://linkedin.com/in/irenio-de-aragao)
- **Location**: Florianópolis, SC, Brazil
