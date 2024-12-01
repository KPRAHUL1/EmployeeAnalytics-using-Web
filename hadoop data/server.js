const fs = require("fs");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Serve static files (if needed for images or other assets)
app.use(express.static(path.join(__dirname, 'public')));

// Read and display employee data when the server starts
fs.readFile("large_employee_data.csv", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading employee data:", err);
        return;
    }

    // Parse CSV data into JSON format
    const rows = data.split("\n").slice(1); // Skip header row
    const employees = rows
        .map(row => {
            const [id,employee_id,first_name,last_name,department,position,salary,email,hire_date] = row.split(",");
            if (id) {
                return { id,employee_id,first_name,last_name,department,position,salary,email,hire_date};
            }
            return null;
        })
        .filter(employee => employee !== null);

    // Route to display data as a SQL-like table on the web
    app.get("/", (req, res) => {
        // Build the HTML table rows
        const tableRows = employees
            .map(
                (employee) => `
                <tr>
                    <td>${employee.id}</td>
                    <td>${employee.employee_id}</td>
                    <td>${employee.first_name}</td>
                    <td>${employee.last_name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.position}</td>
                    <td>${parseFloat(employee.salary).toFixed(2)}</td>
                    <td>${employee.email}</td>
                    <td>${employee.hire_date}</td>
                </tr>`
            )
            .join("");

        // HTML structure with basic CSS for styling
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Employee Data</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    h1 {
                        background-color: #333;
                        color: white;
                        text-align: center;
                        padding: 10px 0;
                    }
                    table {
                        
                        margin: 20px auto;
                        border-collapse: collapse;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    th, td {
                        padding: 10px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background-color: #333;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                    tr:hover {
                        background-color: #eaeaea;
                    }
                    .container {
                        
                        margin: 0 auto;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Employee Data - Simulated PostgreSQL Output</h1>
                    <table>
                        <thead>
                            <tr>
                             <th>id</th>
                             <th>employee_id</th>          
                             <th>first_name</th>
                             <th>last_name</th>
                             <th>department</th>
                             <th>position</th>
                             <th>salary</th>
                             <th>email</th>
                             <th>hire_date </th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                        </tbody>
                    </table>
                </div>
            </body>
            </html>
        `;

        res.send(htmlContent);
    });

    // Start the Express server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
        console.log("Employee data loaded and displayed in the console.");
    });
});
