# Polling API
The API allows people to vote on options to a question to come to a anonymous decision . the API supports adding new questions , options to a question , casting vote in favour of options and also deleting a question or option to a quetsion .
## Requirements
1. Node 14
2. Git
3. MongoDB
## steps to setup project on your machine 
1. clone the repository
```
git clone https://github.com/zeusishere/PollingAPI.git
```
2. The node_modules is not a part of the cloned repository and should be downloaded using the npm install .
```
npm install
```
3. To run the project use 
```
npm start
```
API testing
The Postman can be used to make requests to the API for testing purposes .
## folder structure
index.js serves as our entry point,\

├── config \
│   └── mongoose.js\
├── controllers\
│   ├── index.js\
│   └── api\
│       ├── options.js\
│       └── questions.js  \
├── models \
│   ├── options.js\
│   └── questions.js\
├── node_modules\
├── routes\
│   ├── index.js\
│   └── api\
│       ├── options.js\
│       └── questions.js\
├── index.js\
├── package.json\
├── packagelock.json\
└── .gitignore 
## Requests
### Note- Some Requests require sending json data (key-value pairs) along  in the body of request .Do not forget to enable x-www-form-urlencoded for the req body while making requests using Postman .Do not forget to replace <....> in urls with actual values.
####  1. create a question (post request)
```
https://dry-harbor-42942.herokuapp.com/questions/create
```
body-
title :< "question you want to ask" >
#### 2. view a previously created question using question id (get request) 
  ```
https://dry-harbor-42942.herokuapp.com/questions/<question_id>
  ```
no body required with this request .
#### 3. add an option to the question using question id (post request)
  ```
https://dry-harbor-42942.herokuapp.com/questions/<question_id>/options/create
  ```
body- 
option : <"option you want to add to the question">
#### 4. delete a question along with its options (delete request)
  ```
https://dry-harbor-42942.herokuapp.com/questions/<question_id>/delete
  ```
no body required with this request .
#### 5. delete an option  (delete request)
  ```
https://dry-harbor-42942.herokuapp.com/options/<option_id>/delete
  ```
no body required with this request .
#### 6. cast a vote in favour of a question (get request)
  ```
https://dry-harbor-42942.herokuapp.com/options/<option_id>/add_vote
  ```
no body required with this request .
