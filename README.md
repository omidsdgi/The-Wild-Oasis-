# 🏨 The Wild Oasis - Hotel Management System

> A modern, full-featured hotel management application built with React and Supabase

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://the-wild-oasis-sigma-livid.vercel.app/dashboard)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-purple)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green)](https://supabase.com/)

## 📋 Overview

The Wild Oasis is a comprehensive internal hotel management system designed exclusively for hotel employees. This application streamlines daily hotel operations by providing staff with powerful tools to manage cabins, bookings, guests, check-ins/check-outs, and business analytics in real-time.

Built as an internal tool, it ensures secure access control where only authorized hotel staff can create accounts and perform operational tasks.

**[🚀 View Live Demo](https://the-wild-oasis-sigma-livid.vercel.app/dashboard)**

---

## ✨ Key Features

### 🏠 Cabin Management
- **CRUD Operations**: Create, read, update, and delete cabin information
- **Image Upload**: Manage cabin photos with Supabase Storage
- **Capacity Control**: Track and manage cabin occupancy and pricing
- **Discount Management**: Apply seasonal or promotional discounts

### 📅 Booking System
- **Booking Dashboard**: Comprehensive view of all reservations
- **Check-in/Check-out**: Streamlined guest arrival and departure processes
- **Payment Processing**: Track payments and outstanding balances
- **Booking Status**: Real-time status updates (unconfirmed, checked-in, checked-out)
- **Guest Management**: Store and manage guest information

### 📊 Analytics & Reporting
- **Sales Dashboard**: Visual representation of revenue and bookings
- **Occupancy Rates**: Track cabin utilization over time
- **Duration Statistics**: Analyze booking length patterns
- **Revenue Charts**: Interactive charts powered by Recharts

### 👤 User Authentication
- **Secure Login**: Supabase authentication
- **User Management**: Create and manage staff accounts
- **Profile Management**: Update user information and avatars
- **Protected Routes**: Role-based access control

### ⚙️ Application Settings
- **Configurable Parameters**: Breakfast pricing, booking limits
- **Dark Mode Support**: User-preferred theme system
- **Responsive Design**: Optimized for all device sizes

---

## 🛠 Tech Stack

### Frontend
- **React 18.2** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **React Router v6** - Client-side routing
- **Styled Components** - CSS-in-JS styling solution
- **React Query (TanStack Query)** - Powerful data fetching and caching
- **React Hook Form** - Performant form validation
- **Recharts** - Composable charting library

### Backend & Database
- **Supabase** - Backend-as-a-Service
  - PostgreSQL Database
  - Row Level Security (RLS)
  - Real-time subscriptions
  - Authentication & Authorization
  - Storage for images

### Additional Libraries
- **date-fns** - Modern date utility library
- **react-hot-toast** - Beautiful toast notifications
- **react-icons** - Popular icon library
- **react-error-boundary** - Error handling

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/omidsdgi/The-Wild-Oasis-.git
cd The-Wild-Oasis-
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**

Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

---

## 📁 Project Structure

```
the-wild-oasis/
├── src/
│   ├── features/         # Feature-based modules
│   │   ├── authentication/
│   │   ├── bookings/
│   │   ├── cabins/
│   │   ├── dashboard/
│   │   └── settings/
│   ├── services/         # API services (Supabase)
│   ├── ui/              # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── styles/          # Global styles
│   └── App.jsx          # Main application component
├── public/              # Static assets
└── package.json
```

---

## 🎯 Core Functionality

### Data Flow Architecture
- **Server State Management**: React Query handles all server-side data with automatic caching, background refetching, and optimistic updates
- **Remote State Sync**: Supabase provides real-time database synchronization
- **Form State**: React Hook Form manages complex form validation
- **UI State**: React Context API for global UI state (dark mode, modals)

### Performance Optimizations
- **Code Splitting**: Lazy loading for route-based components
- **Query Caching**: Intelligent data caching with React Query
- **Image Optimization**: Lazy loading and optimized image delivery
- **Bundle Size**: Tree-shaking and minification via Vite

---

## 🔐 Security Features

- Row Level Security (RLS) policies in Supabase
- Protected routes with authentication guards
- Secure file upload to Supabase Storage
- Environment variable protection
- HTTPS encryption for all data transmission

---

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- 💻 Desktop (1920px and above)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (320px - 767px)

---

## 🎨 Design Patterns

- **Component Composition**: Reusable, composable components
- **Custom Hooks**: Abstracted logic for reusability
- **Compound Component Pattern**: Complex component APIs
- **Render Props**: Flexible component rendering
- **Higher-Order Components**: Cross-cutting concerns

---

## 📈 Future Enhancements

- [ ] Multi-language support (i18n)
- [ ] Email notifications for bookings
- [ ] Advanced reporting and analytics
- [ ] Calendar view for bookings
- [ ] Mobile application (React Native)
- [ ] Integration with payment gateways
- [ ] Guest portal for self-service bookings

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Omid Sadeghi**

- GitHub: [@omidsdgi](https://github.com/omidsdgi)
- Portfolio: [Your Portfolio Link]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

---

## 📝 License

This project is [MIT](LICENSE) licensed.

---

## 🙏 Acknowledgments

- Design inspiration from modern hotel management systems
- React Query documentation and community
- Supabase team for excellent documentation
- React community for amazing libraries and tools

---

## 📸 Screenshots

### Dashboard
*[Add screenshot of main dashboard]*

### Cabin Management
<img width="3520" height="1080" alt="image" src="https://github.com/user-attachments/assets/13f08a7e-905e-4486-8c81-854c10d0a35b" />


### Booking Details
*[Add screenshot of booking details page]*

### Analytics
*[Add screenshot of analytics charts]*

---

## 🔗 Links

- **Live Application**: [https://the-wild-oasis-sigma-livid.vercel.app](https://the-wild-oasis-sigma-livid.vercel.app/dashboard)
- **Repository**: [https://github.com/omidsdgi/The-Wild-Oasis-](https://github.com/omidsdgi/The-Wild-Oasis-)
- **Issues**: [Report Bug](https://github.com/omidsdgi/The-Wild-Oasis-/issues)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ and React

</div>
