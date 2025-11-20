# Project Overview:

**Eco Track** is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) application that empowers users to report, track, and contribute to resolving environmental and cleanliness-related issues in their local community. The platform allows users to stay informed, participate in cleanup drives, and manage contributions effectively.


--
## Features

- 📝 **Issue Reporting & Tracking**: Report local issues like garbage buildup, broken footpaths, illegal dumping, waterlogging, and more.
- 🔍 **Dynamic Filtering & Sorting**: Filter issues by category and status, or view only your own submitted issues.
- 💰 **Contribution System**: Contribute to ongoing issues via a secure modal form, with contributions tracked per user. Contributions for resolved issues are automatically disabled.
- 📊 **My Issues Dashboard**: View, update, or delete issues submitted by the logged-in user. Updates and deletions are handled via modal forms.
- 📄 **Issue Details & Contributors**: Each issue has a dedicated detail page with a contributors table, showing contributor names, amounts, and photos (if the logged-in user contributed).
- 🌗 **Dark/Light Mode Toggle**: Switch between dark and light themes across all pages.

---

## Pages & Functionality

### All Issues Page
- View all reported issues.
- Filter by category and status.
- Click **"See Details"** on any issue card to open the Issue Details page.

### My Issues Page
- Displays issues submitted by the logged-in user in a table.
- **Update Button**: Opens modal to edit issue details (title, category, amount, description, status).
- **Delete Button**: Opens confirmation modal to delete a specific issue.

### Issue Details Page
- View detailed information about a selected issue.
- **Contribution Button**: Opens modal to contribute towards the issue.
- **Contributors Table**: Shows all users who contributed, including name, amount, and profile photo. Logged-in users see their own photo if they contributed.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS / Daisy UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase authentication

---




