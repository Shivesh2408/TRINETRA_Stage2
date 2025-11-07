import joblib
import pandas as pd

# Load the saved model
bundle = joblib.load("ml/medal_model.pkl")
model = bundle["model"]
features = bundle["features"]

# Sample input data (from training data)
test_data = pd.DataFrame({
    "sai_centers": [8],
    "coaches": [95],
    "annual_funding_crore": [90],
    "gyms_per_lakh": [3.5]
})

# Predict total medals using the model
predicted_medals = model.predict(test_data)[0]
print(f"🏅 Predicted medals: {predicted_medals:.2f}")
