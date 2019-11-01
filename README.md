# PerspectiveIO

Hotel Management tool

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

#### Install Node(LTE):-
```
https://nodejs.org/en/download/
```

Check Node and Npm Version in Terminal:-
```
node --version
npm --version
```

#### Install Visual Studio Code:-
```
https://code.visualstudio.com/download
```

#### Install MongoDB:-
```
https://docs.mongodb.com/manual/administration/install-community/
```

##### Start Mongodb Service
###### Window
Run Mongo Service very first time
```
mongod --dbpath C:\MongoDB\data\db
```


After Once Config dbpath Just run
```
mongod
```

Check Service Status

###### Linux
```
sudo service mongod start
```


### Set up Project

#### Github Clone

Take a clone from GITHUB HTTPS URL

```
https://github.com/igandhi88/PerspectiveIO.git
```

#### Open Project
Open PerspectiveIO folder in VISUAL STUDIO CODE IDE

#### Install Node modules

Run Command in Visual Studio Code Terminal

```
npm i
```

NPM Install All node modules which required in project, It take a some time to install all modules.

## Run the demo


### Init run command
Run Command in Visual Studio Code Terminal

```
node index.js
```

Project Start on default port number 3033

Example url ("http://localhost:3033")

## Sample APIS
### Base URL
```
http://localhost:3033/api/v1
```

#### User Register API
```
[POST] BASE_URL/authentication/register 

---Params (x-www-form-urlencoded)---
mobile:1234567890
email:igandhi@yahoo.com
username:igandhi
----------------------------------

```

#### Get User List API
```
[GET] BASE_URL/authentication/get-all_users

```

#### Login User API
```
[POST] BASE_URL/authentication/login

---Params (x-www-form-urlencoded)---
username:igandhi
----------------------------------

```

#### Remove User API
```
[POST] BASE_URL/authentication/remove-user

---Params (x-www-form-urlencoded)---
userId:5da5ad3ec65bdf3474e4112e
----------------------------------
```


## Authors

* **Ishan Gandhi** - *Initial work* - [Sophicts](https://github.com/igandhi88)


