 Food Product Explorer 🍎

A React-based web application that allows users to explore food products using the [OpenFoodFacts API](https://world.openfoodfacts.org/). Users can search, filter, sort, and view detailed information about various food items.

 🚀 Features

- 🔍 Search by Name – Search for food products using keywords.
- 📦 Search by Barcode – Lookup product details using a barcode number.
- 🗂️ Filter by Category – Filter results based on product categories.
- ↕️ Sort Products – Sort by name or nutritional grade (A-E).
- 📄 Product Detail Page – View full product info, including ingredients, nutrition facts, and labels.
- 📱 Responsive Design – Works across desktop and mobile devices.
- 🔁 Pagination – Supports infinite scroll or load more functionality.

## 🧑‍💻 Technologies Used

- ReactJS – Frontend framework
- TailwindCSS / CSS – Styling
- Fetch API – Data fetching from OpenFoodFacts
- React Router – Page navigation

 📦 API Endpoints Used

Search by name: 
  `https://world.openfoodfacts.org/cgi/search.pl?search_terms={name}&json=true`

Search by barcode:
  `https://world.openfoodfacts.org/api/v0/product/{barcode}.json`

(CORS-restricted) Get by category:
  `https://world.openfoodfacts.org/category/{category}.json`  
  > ⚠️ Note: This endpoint is blocked by CORS when accessed directly from the browser, so an alternative search-based method was used for categories.

 🧪 How It Works

- On the homepage, a default list of products is loaded.
- Users can:
  - Type a name or barcode to search.
  - Use the category dropdown to filter (via search fallback).
  - Click on a product to open a detailed view.
- Products are displayed with name, image, category, ingredients, and nutrition grade.

 ⏱ Time Taken

 2 days 


 📝 Project Structure

```bash
src/
│
├── components/        
├── pages/             
├── api/                        
├── App.tsx           
└── index.tsx


🛠️ Setup Instructions

# 1. Clone the repo
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into project folder
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the dev server
npm start

