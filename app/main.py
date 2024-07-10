from fastapi import FastAPI
import yfinance as yf
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StockDataRequest(BaseModel):
    symbol: str
    period: str = "1y"

@app.post("/stock-data/")
async def get_stock_data(request: StockDataRequest):
    ticker = yf.Ticker(request.symbol)
    hist = ticker.history(period=request.period)
    return hist.reset_index().to_dict(orient='records')

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
