# Complete Billing Portal Demo Setup Guide

## Prerequisites Installation

### 1. Install Node.js
1. Go to https://nodejs.org/
2. Download and install LTS version (v18 or higher)
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### 2. Install VS Code
1. Go to https://code.visualstudio.com/
2. Download and install for Windows
3. Install recommended extensions:
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - ESLint

## Project Setup Steps

### Step 1: Extract the project files
Extract the `billing-portal-demo.zip` to your desired location (e.g., `C:\Projects\billing-portal-demo`)

### Step 2: Open in VS Code
1. Open VS Code
2. File → Open Folder
3. Select the `billing-portal-demo` folder

### Step 3: Install Dependencies
Open terminal in VS Code (Ctrl + `) and run:
```bash
npm install
```

### Step 4: Run the Development Server
```bash
npm start
```

The application will automatically open in your browser at http://localhost:3000

### Step 5: Build for Production (Optional)
```bash
npm run build
```

## Troubleshooting

### If npm install fails:
```bash
npm cache clean --force
npm install
```

### If port 3000 is already in use:
The app will prompt you to use another port. Type 'y' and press Enter.

### If you get permission errors:
Run VS Code as Administrator

## Demo Walkthrough

### 1. Dashboard View (Home)
- Shows 4 KPI cards with real-time stats
- Filter by month, status, team
- View overall progress (80%)
- See all upload tasks in table format

### 2. Upload Data Tab
- Click on "Upload Data" in navigation
- See all data categories
- Try uploading files (drag & drop or browse)
- Real-time validation and feedback

### 3. Reports Tab
- View historical data
- Generate P&L reports
- Download in multiple formats
- See processing history

### 4. Configuration Tab
- Manage users and teams
- Set deadlines and workflows
- Configure email notifications
- System settings

### 5. Interactive Features
- Click on any table row for details
- Use filters to narrow results
- Upload files via modal
- View processing status in real-time
- Check notifications

## Features to Showcase

✅ Real-time dashboard updates
✅ Drag-and-drop file upload
✅ Advanced filtering
✅ Status tracking
✅ Process timeline
✅ Alert notifications
✅ Responsive design
✅ Professional UI/UX
✅ Data export functionality
✅ User management

## Keyboard Shortcuts in VS Code

- `Ctrl + ~` - Toggle terminal
- `Ctrl + B` - Toggle sidebar
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + F` - Search in files
- `F5` - Start debugging

## Contact for Support

If you encounter any issues during setup, check the README.md file in the project root.
