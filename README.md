# 📌 Task Manager – React App

A responsive, modern task manager built with **React.js** featuring **glassmorphism UI**, **dark/light theme toggle**, **task CRUD**, and a **custom background image**.

The app works smoothly across desktop, tablet, and mobile screens.

---

## 🚀 Features

### ✅ Add Tasks

Create tasks with a title and detailed description.

### ✏️ Edit Tasks

Update any existing task. Auto-fills into the form when editing.

### ❌ Delete Tasks

Remove tasks instantly.

### 🎨 Glassmorphism UI

Beautiful glass-like cards with blur, transparency, and depth shadows.

### 🌗 Light / Dark Mode Toggle

Switch themes instantly while keeping the modern UI design intact.

### 🖼 Custom Background Image

High-quality unsplash background integrated into the layout with a soft gradient overlay.

### 📱 Fully Responsive

Optimized for **mobile, tablet, and desktop** with adaptive spacing & card sizes.

---

## 🛠 Tech Stack

| Technology            | Purpose                            |
| --------------------- | ---------------------------------- |
| **React.js**          | UI components & state management   |
| **JavaScript (ES6+)** | App logic                          |
| **CSS3**              | Styling, animations, glassmorphism |
| **Unsplash Image**    | Custom background                  |
| **Flex/Grid**         | Responsive layout                  |

---

## 📁 Project Structure

```
src/
│── components/
│     └── Form.jsx
│── Form.css
│── index.css
│── App.js
│── main.jsx or index.js
└── README.md
```

---

## 🖥️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
```

### 2. Move into the project

```bash
cd task-manager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

(If you are using CRA:)

```bash
npm start
```

---

## 📝 Usage

### ➕ Adding a Task

1. Enter the **title**
2. Enter **details**
3. Click **Add Task**

### ✏️ Editing a Task

1. Click **Edit**
2. Task loads into the form
3. Modify data
4. Click **Update Task**

### ❌ Deleting a Task

Click the **Delete** button on any card.

---

## 🧩 Code Snippets

### Task State & Functions (add / edit / delete)

```jsx
const [task, setTask] = useState([]);
const [title, setTitle] = useState("");
const [details, setDetails] = useState("");
const [editingId, setEditingId] = useState(null);

const addTask = () => {
  if (editingId !== null) {
    const updated = task.map(t =>
      t.id === editingId ? { ...t, title, details } : t
    );
    setTask(updated);
    setEditingId(null);
  } else {
    setTask([...task, { id: Date.now(), title, details }]);
  }
  setTitle("");
  setDetails("");
};
```

---

## 🎨 UI Preview (Add your screenshots)

Add screenshots inside your repo under:

```
public/screenshots/
```

Then reference them:

```md
![App Screenshot](public/screenshots/screen1.png)
```

---

## 🌈 Customization

### Change Background

Modify the image URL inside **index.css**:

```css
background: url("YOUR_IMAGE_URL_HERE") no-repeat center center fixed;
```

### Adjust Glassmorphism

Edit these blocks in **Form.css**:

* `.input-con`
* `.data`
* `.list`

```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(18px);
```

---

## 📱 Responsiveness

Mobile layout optimized using:

* CSS Grid → stack on small screens
* Lower padding on devices under **768px**
* Smaller text and buttons
* Reduced max-heights for task container

---

## 🧪 Future Improvements

* Save tasks to LocalStorage
* Animations for newly added tasks
* Drag & drop tasks (react-beautiful-dnd)
* Categories/tags
* Due dates

