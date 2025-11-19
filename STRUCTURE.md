# Project Structure

```
billing-portal-demo/
├── public/
│   └── index.html                 # HTML template
│
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.js       # Main dashboard page
│   │   │   ├── Dashboard.css
│   │   │   ├── StatsCards.js      # KPI statistics cards
│   │   │   ├── StatsCards.css
│   │   │   ├── FilterBar.js       # Filter controls
│   │   │   ├── FilterBar.css
│   │   │   ├── DataTable.js       # Upload data table
│   │   │   ├── DataTable.css
│   │   │   ├── Timeline.js        # Process timeline
│   │   │   ├── Timeline.css
│   │   │   ├── AlertsPanel.js     # Notifications panel
│   │   │   └── AlertsPanel.css
│   │   │
│   │   ├── UploadData/
│   │   │   ├── UploadData.js      # Upload page
│   │   │   └── UploadData.css
│   │   │
│   │   ├── Reports/
│   │   │   ├── Reports.js         # Reports & analytics
│   │   │   └── Reports.css
│   │   │
│   │   ├── Configuration/
│   │   │   ├── Configuration.js   # System configuration
│   │   │   └── Configuration.css
│   │   │
│   │   ├── Layout/
│   │   │   ├── Navbar.js          # Top navigation bar
│   │   │   └── Navbar.css
│   │   │
│   │   └── common/
│   │       ├── UploadModal.js     # Reusable upload modal
│   │       └── UploadModal.css
│   │
│   ├── data/
│   │   └── mockData.js            # Demo/mock data
│   │
│   ├── styles/
│   │   └── global.css             # Global styles & variables
│   │
│   ├── utils/
│   │   └── helpers.js             # Utility functions
│   │
│   ├── App.js                     # Main app component
│   ├── App.css                    # App styles
│   └── index.js                   # Entry point
│
├── package.json                   # Dependencies & scripts
├── README.md                      # Project documentation
├── QUICKSTART.md                  # Quick start guide
├── SETUP_INSTRUCTIONS.md          # Detailed setup
├── STRUCTURE.md                   # This file
└── .gitignore                     # Git ignore rules

```

## Key Files Explanation

### Entry Points
- **public/index.html**: HTML template with Font Awesome CDN
- **src/index.js**: React app initialization
- **src/App.js**: Main router and layout

### Pages (Routes)
- **Dashboard** (`/`): Main overview page
- **UploadData** (`/upload`): File upload interface
- **Reports** (`/reports`): Analytics and reports
- **Configuration** (`/config`): System settings

### Data & Logic
- **mockData.js**: All demo data (users, uploads, notifications, reports)
- **helpers.js**: Utility functions (formatting, validation, etc.)

### Styling
- **global.css**: CSS variables, animations, utility classes
- Component-specific CSS files for each component

## Component Hierarchy

```
App
├── Navbar (persistent across all pages)
└── Routes
    ├── Dashboard
    │   ├── StatsCards
    │   ├── FilterBar
    │   ├── DataTable
    │   ├── AlertsPanel
    │   └── Timeline
    │
    ├── UploadData
    │   └── UploadModal (conditional)
    │
    ├── Reports
    │   └── Charts (Recharts)
    │
    └── Configuration
        └── Tabbed Interface
```

## Data Flow

1. **Mock Data** (`mockData.js`) → Components via props
2. **User Actions** → Toast Notifications
3. **State Management** → React useState hooks
4. **File Upload** → Dropzone → Validation → Toast

## Technology Stack

- **React**: ^18.2.0
- **React Router**: ^6.20.0
- **Recharts**: ^2.10.3 (Charts)
- **React Dropzone**: ^14.2.3 (File upload)
- **React Toastify**: ^9.1.3 (Notifications)
- **Font Awesome**: 6.4.0 (Icons via CDN)

## Customization Points

### Colors
Edit `src/styles/global.css` → `:root` variables

### Mock Data
Edit `src/data/mockData.js` → Update arrays

### Add New Page
1. Create component in `src/components/NewPage/`
2. Add route in `src/App.js`
3. Add nav link in `src/components/Layout/Navbar.js`

### Modify Existing Page
Each page is self-contained in its folder with JS and CSS

## Development Scripts

```bash
npm start      # Development server (localhost:3000)
npm run build  # Production build
npm test       # Run tests
```

## Notes

- All file uploads are simulated (no backend)
- Data doesn't persist (resets on refresh)
- Charts use Recharts library
- Drag-drop uses react-dropzone
- Notifications use react-toastify
- Routing uses react-router-dom v6
