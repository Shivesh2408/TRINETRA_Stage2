import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error
import joblib, os

# 1) load data
medals = pd.read_csv("data/state_medals.csv")
infra  = pd.read_csv("data/state_infra.csv")

# 2) target = total medals
medals["total_medals"] = medals[["gold","silver","bronze"]].sum(axis=1)
state_latest = medals.sort_values("year").groupby("state", as_index=False).tail(1)

# 3) join features
df = state_latest.merge(infra, on="state", how="left")

# 4) features & target
X = df[["sai_centers","coaches","annual_funding_crore","gyms_per_lakh"]]
y = df["total_medals"]

# 5) split + train
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestRegressor(n_estimators=400, random_state=42)
model.fit(Xtr, ytr)

# 6) quick eval
pred = model.predict(Xte)
print("R2:", round(r2_score(yte, pred), 3), "MAE:", round(mean_absolute_error(yte, pred), 3))

# 7) save model + training table (for what-if)
os.makedirs("ml", exist_ok=True)
joblib.dump({"model":model, "features":X.columns.tolist()}, "ml/medal_model.pkl")
df.to_csv("ml/medal_training_table.csv", index=False)
print("Saved: ml/medal_model.pkl and ml/medal_training_table.csv")
