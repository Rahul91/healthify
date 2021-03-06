# Chat App

## Problem Statement
Anyone visiting the website should be asked for login/signup.
Once logged in, they should join a public channel where all users can send messages.
Messages sent by one person should be received by all the other users who are currently logged into the public channel. And this messaging should be realtime.
There should be an option for the user to clear chat, which should only clear the chat for that user, others should still be able to see all the messages.

## My approach

Technological Stack:
- Flask(Flask-Restful) + MySql(db) + sqlAlchemy(ORM) + Alembic(DB Migration) 
- Angularjs(Js) + Bootstrap(CSS)
- Apidoc(Documentation) 
- ~~RabbitMq (broker) + Pika (MessagingClient)~~ 

RabbitMq (broker) + Pika (MessagingClient): This async approach was dropped because of the extra overhead of rabbitmq and pika, Also it increase your point of failures. In our case, async worker was not much but an DB write, so I have moved the async part and made the db call synchronous.


## Project Setup
  1. Clone project: $ git clone https://github.com/Rahul91/Real-Time-Chat-App.git and checkout invite_feature branch.
  2. For backend setup, please follow README.md in /backend.
  3. For frontend setup, do npm install in /frontend, make sure you have package.json in your current directory.
  4. Change constant in /frontend/src/mainApp.js to point to your flask api.
  5. Start server using $python -m SimpleHTTPServer port_no. in frontend folder, make sure you have index.html there.

## Suggestion: 
For a production ready chat, we should probably use pubnub or firebase. Or a tornado server as backend because of the async behaviour of the task, however I have used flask-restless as backend server and angularjs for client side.
