import io
import uvicorn
from fastapi import FastAPI, Form
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware
import qrcode
import os
from dotenv import load_dotenv

load_dotenv()

PORT = os.getenv('PORT')

app = FastAPI()

# Configure CORS to allow requests from your React frontend
origins = [
    "https://qr-code-generator-seven-tan.vercel.app/"
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate_qr_code")
async def generate_qr_code(text_data: str = Form(...)):
    """
    Generates a QR code from provided text data.
    """
    if not text_data:
        return Response(content="No data provided", status_code=400)

    try:
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=10,
            border=4
        )
        qr.add_data(text_data)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        
        img_bytes = io.BytesIO()
        img.save(img_bytes, format='PNG')
        img_bytes.seek(0)
        
        return Response(content=img_bytes.getvalue(), media_type="image/png")

    except Exception as e:
        return Response(content=f"Error generating QR code: {str(e)}", status_code=500)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=PORT)
