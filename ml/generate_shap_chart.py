"""
SHAP Chart Generator for BSIN
Note: Requires Python 3.10-3.13 (not 3.14) due to numba compatibility
Install dependencies: pip install shap matplotlib
"""
import os
import sys
import pandas as pd
import joblib

try:
    import shap
    import matplotlib.pyplot as plt
except ImportError as e:
    print(f"❌ Error: Missing required packages. Install with: pip install shap matplotlib")
    print(f"   Note: SHAP requires Python 3.10-3.13 (current: {sys.version})")
    sys.exit(1)

# Load saved model and data
MODEL_PATH = "ml/medal_model.pkl"
TRAIN_DATA = "ml/medal_training_table.csv"
OUTPUT_PATH = "ml/shap_global.png"
FRONTEND_PATH = "bsin-frontend/public/shap_global.png"

# Load model & training data
print("Loading model and training data...")
bundle = joblib.load(MODEL_PATH)
model = bundle["model"]
features = bundle["features"]
X = pd.read_csv(TRAIN_DATA)[features]

print(f"Model loaded with {len(features)} features: {features}")

# Create SHAP explainer and calculate values
print("Calculating SHAP values...")
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X)

# Plot SHAP summary bar chart
print("Generating SHAP visualization...")
plt.figure(figsize=(10, 6))
shap.summary_plot(shap_values, X, show=False, plot_type="bar")
plt.tight_layout()

# Save to both locations
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
os.makedirs(os.path.dirname(FRONTEND_PATH), exist_ok=True)

plt.savefig(OUTPUT_PATH, dpi=200, bbox_inches='tight', facecolor='white')
plt.savefig(FRONTEND_PATH, dpi=200, bbox_inches='tight', facecolor='white')
print(f"✅ SHAP global feature importance chart saved at: {OUTPUT_PATH}")
print(f"✅ Also copied to frontend: {FRONTEND_PATH}")

