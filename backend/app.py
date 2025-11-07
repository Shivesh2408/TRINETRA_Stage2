from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pydantic import EmailStr
import joblib
import pandas as pd
from datetime import datetime

# Initialize FastAPI app
app = FastAPI(title="BSIN API - Bharat Sports Intelligence Network")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained model and feature data
bundle = joblib.load("ml/medal_model.pkl")
model = bundle["model"]
features = bundle["features"]
base_data = pd.read_csv("ml/medal_training_table.csv")

# Define Pydantic model for request
class WhatIfRequest(BaseModel):
    state: str
    funding_mult: float = 1.0
    centers_add: int = 0
    coaches_mult: float = 1.0

@app.get("/health")
def health_check():
    """Check if API is running."""
    return {"status": "ok"}

@app.get("/states")
def get_states():
    """Return list of states available in the data."""
    return {"states": sorted(base_data["state"].unique().tolist())}

@app.post("/predict/whatif")
def predict_medals(req: WhatIfRequest):
    """Predict medal count after a what-if simulation."""
    row = base_data[base_data["state"] == req.state].copy()
    if row.empty:
        return {"error": "State not found!"}
    
    # Simulate changes
    row["annual_funding_crore"] *= req.funding_mult
    row["sai_centers"] += req.centers_add
    row["coaches"] *= req.coaches_mult
    
    # Predict
    X = row[features]
    prediction = float(model.predict(X)[0])
    return {
        "state": req.state,
        "predicted_medals": prediction,
        "inputs": req.dict()
    }

# Contact form endpoint
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

@app.post("/contact")
def submit_contact(req: ContactRequest):
    """Handle contact form submissions."""
    # In production, you would:
    # - Send email via SMTP
    # - Save to database
    # - Send notification
    
    # For now, just log and return success
    print(f"Contact form submission: {req.name} ({req.email}) - {req.subject}")
    return {
        "success": True,
        "message": "Thank you for your message! We'll get back to you soon.",
        "timestamp": datetime.now().isoformat()
    }
