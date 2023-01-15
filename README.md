# PhotoBlog

A simple website where users can upload their photos and see and like photos of other users. 
Created with the concepts of CRUD, and built with MVC Architecture.

[screen-capture.webm](https://user-images.githubusercontent.com/102907651/208216347-6c78e58a-d8e5-47e9-aa3d-2ef5e145ff65.webm)

## Visit the live website here: 

https://lizkil-photoblog.herokuapp.com/

## How it's made

Tech: Express, Node, MongoDB, Mongoose, EJS, Cloudinary, Multer, PassportJS, 

This app was built using MongoDB as a database, Express and Node to handle server requests, Cloudinary and Multer to handle image upload and PassportJS to handle user authentication. 
 
## Install

npm install

## Things to add

Create a .env file in config folder and add the following as key = value
PORT = your preferred port number
DB_STRING = your database URI
CLOUD_NAME = your cloudinary cloud name
API_KEY = your cloudinary api key
API_SECRET = your cloudinary api secret

## Run
npm start

## Optimizations
For future implementations, I would like to add a search option and a comment function.
