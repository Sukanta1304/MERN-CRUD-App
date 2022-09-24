# MERN-CRUD-App
Note taking MERN CRUD app .


### Backend
          As the backend is deployed so backend folder is only to 
          understand the endpoints. No affect if skip the backend folder.
          
* /user/register route for signup
* /user/login route for signup
* /notes/ for getting all notes for a particular user and the mush have logged in.
* /notes/create for creating notes of a loggedin user.
* /notes/delete/:notesId for deleting a note of a logged in user 
* /notes/edit/:notesId for updating a note of a logged in user 
* In all operation (Cretae,Read,Update,Delete), it's mandatory to pass the token in head.

### Frontend

* signup first with email id and password , not allowed to use one emil Id more than once .
* login with correctt email and password .
* create a note, Edit a note or Delete a note . Not allowed to create/edit/delete a note without logged in.


### Insatallation Backed
```
npm i express nodemon mongoose dotenv jsonwebtoken bcrypt cors.

```

### Insatallation Frontend

```
npm create vite@latest appname --template react
npm i react-router-dom
npm i axios
npm i react-toastify

```
