# BSIN Backend Startup Script
cd "D:\BSIN 2\bsin"
Write-Host "Starting BSIN Backend Server..." -ForegroundColor Cyan
python -m uvicorn backend.app:app --reload --host 127.0.0.1 --port 8000


