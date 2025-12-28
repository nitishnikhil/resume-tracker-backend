## Resume Tracker Backend (Azure)
📌 Project Overview
    Resume Tracker Backend is a cloud-based backend application developed using Node.js and Express, deployed on Azure App Service (Linux).
    The application allows users to upload resumes, store resume files in Azure Blob Storage, and save candidate information in Azure Cosmos DB.
    This project demonstrates real-world cloud integration using Microsoft Azure services.

## 🧠 What This Project Does (Simple Explanation)
   
  -User uploads a resume through a frontend form
  
  -Backend receives the file using Multer
  
  -Resume file is uploaded to Azure Blob Storage
  
  -Candidate details + resume URL are saved in Azure Cosmos DB
  
  -Backend provides APIs to retrieve uploaded candidate data

 ## 🏗️ System Architecture
 Frontend (HTML/CSS/JavaScript)
        |
        |  HTTP Requests
        |
Node.js Backend (Express)
        |
        |---- Upload Resume → Azure Blob Storage
        |
        |---- Save Candidate Data → Azure Cosmos DB
        |
        ↓
     JSON Response


## Features
   --Resume upload functionality
   
   --Cloud file storage using Azure Blob Storage
   
   --Candidate data storage using Azure Cosmos DB
   
   --REST APIs for upload and listing resumes
   
   --Azure health check endpoint
   
   --Deployed on Azure App Service (Linux

## 🛠️ Tech Stack
  Backend
    -Node.js (v20)
    -Express.js
    -Multer (file handling)
    -dotenv (environment variables)

  Cloud Services (Azure)
    -Azure App Service (Linux)
    -Azure Blob Storage
    -Azure Cosmos DB (SQL API)
    
Frontend
    -HTML
    -CSS
    -JavaScript

## 📁 Project Folder Structure

 resume-tracker-backend/
│
├── app.js
├── package.json
├── .env
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── src/
│   ├── routes/
│   │   └── resumes.js
│   │
│   └── services/
│       ├── blobService.js
│       └── cosmosService.js

## 🔗 API Endpoints
    ➤ Upload Resume

     POST
     /api/resumes/upload


     Request Type: multipart/form-data
    -Fields
    -name
    -email
    -skills
     -resume (file)

Response
     {
        "message": "Resume uploaded successfully",
        "url": "https://<azure-blob-url>"
     }

## ➤ Get Uploaded Candidates
      /api/resumes/list
      [
  {
  
    "id": "123456789",
    "name": "John Doe",
    "email": "john@example.com",
    "skills": "Java, SQL, Azure",
    "resumeUrl": "https://blob-url",
    "uploadedAt": "2025-01-01T10:00:00Z"
  }
]

## ➤ Health Check (Azure Requirement)
    /health
    OK

## 🔐 Environment Variables
     PORT=3000

## Azure Blob Storage
    AZURE_STORAGE_CONNECTION_STRING=YOUR_CONNECTION_STRING=string
    AZURE_BLOB_CONTAINER=resumes

## Azure Cosmos DB
    COSMOS_ENDPOINT=YOUR_COSMOS_ENDPOINT
    COSMOS_KEY=YOUR_COSMOS_KEY
    COSMOS_DATABASE=ResumeDB
    COSMOS_CONTAINER=Candidates

## ▶️ How to Run This Project Locally
     Step 1: Install Dependencies
        npm install
     Step 2: Start Server
        npm start
    Server will run at: http://localhost:3000

## ☁️ Azure Deployment Details
       Platform: Azure App Service
       Operating System: Linux
       Node Version: 20
       Startup Command: npm start
       Health Check Path: /health

 ## 🧪 Important Implementation Notes
          - Multer uses memory storage, so files are not saved on disk
          - Resume files are uploaded directly to Azure Blob Storage
          - Blob container is created automatically if it does not exist
          - Cosmos DB stores candidate metadata along with resume URL
          - Static frontend is served from the public folder

  ## 🔮 Future Enhancements
       -Authentication and authorization
       -Resume validation (PDF/DOC)
       -Pagination and search
       -Admin dashboard
       -Resume analytics

## 👨‍💻 Author

Nitish Kumar
B.Tech – Information Technology
Azure | Node.js | Cloud Computing
