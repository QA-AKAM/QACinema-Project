# QACinema-Project

Frontend coverage: 59.04%

Backend coverage: 91.24%

# QA Cinema Website by Team AKAM

This project focuses on a cinema website that was coded using the MERN (MongoDB, Express, React, Node) stack. The backend was built using express by creating various API requests. The data for the requests was retrieved from a cloud mongo database

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing for Windows machine

A step by step series of examples that tell you how to get a development environment  running.

#### Prerequisites

To get started, please install:

- **Microsoft Visual Studio Code** - or any other code editor of your choice.
- **Node.js** - to install required modules.
- **MongoDB Server** - can either be locally hosted or on a cloud using [MongoDB Atlas Cloud Database](https://www.mongodb.com/try).

Additional tools:

- **Postman** - used to test API calls to and from the database.

## Importing and running QA Cinema website

1. First you will have to import the project by either downloading this project as a zip or can be cloned down using git with the following command:

   ```
   git clone https://github.com/QA-AKAM/QACinema-Project.git
   ```

2. Once its been cloned down you can access the folder through Visual Studio Code as shown below:

![](https://i.imgur.com/u3bMPbS.png)

3. Before running the backend, make sure that the NODE variable is NOT set to "test". Otherwise you will only be able to access the test database. The link for the database can be changed by changing the MONGODB_URI string:

   ![](https://i.imgur.com/P83NzVL.png)

4. Next you will need to open a command window at both the backend and frontend folder and run the command 

   ```
   npm i
   ```

   ![](https://i.imgur.com/2g5Q1z1.png)

   ![](https://i.imgur.com/GfN0KNL.png)

   This will install all the relevant modules that are listed in the package.json files in the backed and frontend folder.

5. Once they have been installed, you can now start the backend server by running: 

   ```
   nodemon index.js
   ```

   This will start the backend server and connect to your mongoDB. Once its connected you will see the following output in your terminal:

   ![](https://i.imgur.com/oTIw32M.png)

   Then to start the frontend run the following:

   ```
   npm start
   ```

   This will then start up the website on your localhost at port 3000.

   ![](https://i.imgur.com/IKw90yy.jpg)

   

   You now have the QA Cinema setup for developing!

## MongoDB Setup





## Running the tests

### Deployment

To deploy this program once its been developed and tested:

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Supporting Documentation

All supporting documentation can be found in the "Documentation" folder. This folder includes the following:

1. Jira Folder - Screenshots from Jira
3. Risk assessment.pdf
4. ERD Initial.png
4. UML Diagram.png

## Authors

* **Asshwin Mugundharajah** - [ashkl](https://github.com/ashkl)
* **Kevin Doan** - [KevinD-QA](https://github.com/KevinD-QA)
* **Alin Ivan** - [thealinivan](https://github.com/thealinivan)
* **Matthew Holmes** - [Matayoh14](https://github.com/Matayoh14)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments

* All the QAC Trainers!