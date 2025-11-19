# Enterprise Billing & Cost Allocation Management System - DEMO

A comprehensive web-based portal for automating monthly billing and cost allocation processes.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open http://localhost:3000 in your browser

## 📁 Project Structure

```
billing-portal-demo/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── UploadData/
│   │   ├── Reports/
│   │   ├── Configuration/
│   │   ├── Layout/
│   │   └── common/
│   ├── data/
│   │   └── mockData.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── helpers.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Features

### 1. Dashboard
- Real-time KPI cards
- Upload status tracking
- Process timeline visualization
- Alert notifications
- Advanced filtering

### 2. Upload Data
- Drag-and-drop file upload
- Multiple file format support
- Real-time validation
- Progress tracking
- Upload history

### 3. Reports
- P&L report generation
- Historical data analysis
- Export functionality (Excel, PDF, CSV)
- Custom date ranges
- Visual analytics

### 4. Configuration
- User management
- Team settings
- Deadline configuration
- Email notification templates
- System parameters

## 🎨 Tech Stack

- **Frontend**: React.js 18
- **Routing**: React Router v6
- **Charts**: Recharts
- **Notifications**: React Toastify
- **File Upload**: React Dropzone
- **Date Handling**: date-fns
- **Styling**: CSS3 with CSS Variables

## 📊 Demo Data

The application uses mock data to simulate:
- 10 upload categories
- Multiple users across teams
- Historical upload records
- Processing workflows
- Notification system

## 🖥️ Available Pages

1. **Dashboard** (`/`) - Main overview and monitoring
2. **Upload Data** (`/upload`) - File upload interface
3. **Reports** (`/reports`) - Report generation and history
4. **Configuration** (`/config`) - System settings

## 🎭 Demo Scenarios

### Scenario 1: Normal Monthly Cycle
- 6 uploads completed
- 1 upload overdue
- 3 uploads pending
- Automated processing in progress

### Scenario 2: File Upload
- Drag and drop files
- See validation results
- Track upload progress
- Receive notifications

### Scenario 3: Report Generation
- Select date range
- Choose report type
- Generate and preview
- Download in preferred format

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

### Code Structure

- **Components**: Reusable UI components
- **Data**: Mock data for demo
- **Utils**: Helper functions
- **Styles**: Global styles and CSS variables

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --primary: #1e40af;
  --success: #059669;
  --warning: #d97706;
  --danger: #dc2626;
}
```

### Data
Modify mock data in `src/data/mockData.js`

### Features
Add new routes in `src/App.js`

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1366px - 1919px)
- Tablet (768px - 1365px)
- Mobile (below 768px)

## 🔒 Security Features (Demo)

- Role-based access control simulation
- File type validation
- Size limit enforcement
- XSS prevention
- CSRF token simulation

## 📈 Performance

- Code splitting enabled
- Lazy loading for routes
- Optimized re-renders
- Memoization where needed
- Production build optimization

## 🐛 Known Limitations (Demo)

- No backend integration
- Mock data only
- File uploads don't persist
- No real authentication
- Simulated API calls

## 🚀 Production Deployment

For production deployment:

1. Build the application:
```bash
npm run build
```

2. Serve the `build` folder with a web server

3. Configure environment variables

4. Set up backend API integration

## 📞 Support

For issues or questions:
- Check the setup instructions
- Review the code comments
- Contact the development team

## 📄 License

This is a demo application for presentation purposes.

## 🎓 Learning Resources

- React Documentation: https://react.dev
- React Router: https://reactrouter.com
- Recharts: https://recharts.org

---

**Version**: 1.0.0  
**Last Updated**: November 2024  
**Status**: Demo/Prototype
