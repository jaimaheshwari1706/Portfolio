# Jai Maheshwari - Personal Portfolio

A modern, responsive portfolio website built with Angular 20, Node.js, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with smooth animations and gradients
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Angular 20 and optimized for speed
- **Contact Form**: Working contact form with email integration
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- Angular 20
- TypeScript
- Tailwind CSS
- SCSS

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS

## 📁 Project Structure

```
jai-portfolio/
├── frontend/portfolio/          # Angular application
│   ├── src/app/components/      # Portfolio components
│   ├── src/app/data/           # JSON data files
│   └── src/styles.scss         # Global styles
├── backend/                    # Node.js API server
│   ├── server.js              # Express server
│   └── .env.example           # Environment variables template
└── README.md                  # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd jai-portfolio
   ```

2. **Setup Frontend**
   ```bash
   cd frontend/portfolio
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd ../../backend
   npm install
   cp .env.example .env
   ```

4. **Configure Email (Backend)**
   Edit `backend/.env`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=3000
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server runs on: http://localhost:3000

2. **Start Frontend (New Terminal)**
   ```bash
   cd frontend/portfolio
   ng serve
   ```
   App runs on: http://localhost:4200

## 📧 Email Setup

To enable the contact form:

1. Create a Gmail App Password:
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"

2. Update `backend/.env`:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-digit-app-password
   ```

## 🎨 Customization

### Update Personal Information
Edit `frontend/portfolio/src/app/data/portfolio.json`:
- Personal details
- Skills and technologies
- Work experience
- Projects
- Education

### Styling
- Global styles: `frontend/portfolio/src/styles.scss`
- Tailwind config: `frontend/portfolio/tailwind.config.js`
- Component styles: Individual component files

## 📱 Sections

- **Hero**: Name, title, and introduction
- **About**: Detailed bio and quick facts
- **Skills**: Technical skills organized by category
- **Experience**: Work history with achievements
- **Projects**: Featured projects with links
- **Contact**: Contact form and information

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend/portfolio
ng build --prod
```
Deploy the `dist/` folder

### Backend (Heroku/Railway)
```bash
cd backend
# Deploy server.js with environment variables
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Jai Maheshwari**
- Email: jaimaheshwari943@gmail.com
- LinkedIn: [linkedin.com/in/jaimaheshwari](https://linkedin.com/in/jaimaheshwari)
- GitHub: [github.com/jaimaheshwari](https://github.com/jaimaheshwari)

---

Built with ❤️ using Angular and Node.js