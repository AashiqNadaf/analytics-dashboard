# Dashboard Analytics

A modern, responsive dashboard application built with React, TypeScript, and Ant Design. This application provides comprehensive analytics and order management capabilities with a clean, theme-friendly interface.

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dashboard-analytics
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🚀 Features

### 📊 Dashboard

- **Micro Cards Section**: Key metrics including Customers, Orders, Revenue, and Growth
- **Interactive Charts**:
  - Stacked Bar Chart (Projections vs Actuals)
  - Line Chart (Revenue comparison - Current vs Previous week)
  - Donut Chart (Total Sales breakdown)
  - Location-based Revenue visualization
- **Data Tables**: Top Selling Products and comprehensive analytics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📋 Orders Management

- **Order Table**: Comprehensive order listing with pagination
- **Advanced Filtering**: Date range filtering and sorting capabilities
- **Order Creation**: Add new orders with validation
- **Status Management**: Track order status (Pending, Approved, In Progress, Complete, Rejected)
- **User Profiles**: Avatar support with fallback icons
- **Search Functionality**: Real-time order search

### 🎨 UI/UX Features

- **Theme Support**: Light and Dark theme switching
- **Responsive Sidebars**:
  - Desktop: Fixed sidebars with layout integration
  - Mobile: Overlay sidebars with backdrop and close functionality
- **Loading States**: Skeleton loaders and smooth transitions
- **Error Handling**: Comprehensive error boundaries
- **Performance Optimized**: Lazy loading, memoization, and code splitting

### 🔧 Technical Features

- **TypeScript**: Full type safety throughout the application
- **State Management**: Zustand for global state management
- **Routing**: React Router with lazy loading
- **Charts**: Recharts for data visualization
- **Date Handling**: Day.js for date manipulation
- **Icons**: Custom SVG icons with theme support

## 📁 Project Structure

```
src/
├── Components/
│   ├── Common/
│   │   ├── ErrorBoundary/
│   │   ├── Icon/
│   │   ├── Input/
│   │   ├── Loader/
│   │   ├── NavBarItem/
│   │   ├── NavListItem/
│   │   ├── NavListItemSkeleton/
│   │   ├── RouteLoader/
│   │   ├── UserAvatar/
│   │   └── WorkInProgress/
│   └── Navbar/
│       ├── LeftSideBar/
│       │   ├── DashboardsSection/
│       │   ├── PagesSection/
│       │   ├── ProfileSection/
│       │   └── QuickAccessSection/
│       ├── RightSideBar/
│       │   ├── Activities/
│       │   ├── Contacts/
│       │   └── Notification/
│       └── TopBar/
│           └── Components/
│               ├── TopBarBreadcrumb/
│               ├── TopBarDesktop/
│               ├── TopBarLeftContent/
│               ├── TopBarMobile/
│               ├── TopBarMobileSkeleton/
│               ├── TopBarRightContent/
│               └── TopBarSkeleton/
├── Pages/
│   ├── Dashboard/
│   │   └── DashboardContainer/
│   │       ├── BarChart/
│   │       ├── LineChart/
│   │       ├── LocationChart/
│   │       ├── MicroCardsSection/
│   │       ├── TopSellingProducts/
│   │       └── TotalSalesChart/
│   └── Orders/
│       ├── orderTable/
│       │   ├── AddOrderModal/
│       │   ├── FilterSortModal/
│       │   ├── StatusComponent/
│       │   └── TableSkeleton/
│       ├── constant.ts
│       ├── interface.ts
│       ├── utils.ts
│       └── useOrdersData.ts
├── Store/
│   ├── cssVariables.ts
│   ├── interface.ts
│   ├── quickAccessStore.ts
│   ├── themeStore.ts
│   └── userStore.ts
├── Routes/
│   ├── constant.tsx
│   └── type.ts
├── Icons/
│   ├── Dark*.svg
│   └── Light*.svg
├── hooks/
│   └── useUser.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **UI Library**: Ant Design
- **State Management**: Zustand
- **Routing**: React Router v6
- **Charts**: Recharts
- **Date Handling**: Day.js
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + SCSS
- **Icons**: Custom SVG Icons

## 🚀 Getting Started

The application is now ready to use! Follow the installation steps above to get started.

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full sidebar layout with integrated navigation
- **Tablet**: Adaptive layout with collapsible sidebars
- **Mobile**: Overlay sidebars with backdrop and touch-friendly interactions

## 🎨 Theme System

- **Light Theme**: Clean, modern light interface
- **Dark Theme**: Eye-friendly dark mode
- **Automatic Switching**: Toggle between themes with persistent storage
- **Custom Properties**: CSS variables for consistent theming

## 📊 Data Visualization

- **Bar Charts**: Stacked bar charts for comparative analysis
- **Line Charts**: Trend analysis with multiple data series
- **Pie/Donut Charts**: Proportional data representation
- **Progress Bars**: Location-based revenue visualization
- **Interactive Elements**: Hover effects and responsive interactions

## 🔧 Development

### Code Organization

- **Component Structure**: Each component has its own folder with `index.tsx`, `interface.ts`, and `constants.ts`
- **Type Safety**: Comprehensive TypeScript interfaces throughout
- **Performance**: Memoization, lazy loading, and code splitting
- **Clean Code**: ESLint configuration and consistent formatting

### Key Features

- **Lazy Loading**: Routes and modals are lazy-loaded for better performance
- **Error Boundaries**: Comprehensive error handling
- **Loading States**: Skeleton loaders and smooth transitions
- **State Management**: Centralized state with Zustand
- **Theme Integration**: Seamless theme switching across all components

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Ant Design for the comprehensive UI component library
- Recharts for the powerful charting capabilities
- React team for the amazing framework
- Vite for the fast build tooling
