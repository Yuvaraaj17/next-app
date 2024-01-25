from fastapi import FastAPI
from pydantic import BaseModel
import boto3
from fastapi.middleware.cors import CORSMiddleware


origins = [
    
    "http://localhost:3000",
]




app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




# dynamodb=boto3.resource('dynamodb',aws_access_key_id=Access_key_ID,aws_secret_access_key=Secret_access_key,region_name='ap-south-1')

class Data(BaseModel):
    task: str
    expense: str


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/add")
async def add(data: Data):
    print(data)
    # table=dynamodb.Table('expenses')
    # item={
        
    #     'task':data['task'],
    #     'expense':data['expense']
    # }
    # table.put_item(Item=item)
    # return True

