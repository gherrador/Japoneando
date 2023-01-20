## About the project

Full Stack personal project based on an Ecommerce selling products from  Japanese origin.

+	The server was developed on NodeJs, using Express and MongoDb for data persistence.

+	The client was developed in React, making use of React-Redux for better information interaction.


The project has 4 well differentiated sections.

+ Products: In charge of showing the products in the general panel as well as in an unique view of each product. If you have Administrator permission on the page, you can also delete products as well as modify them from this pattern.

+ Cart: Defines the  shopping cart for each customer. The customer can, add  products to the cart, remove them and modify the quantities.

+	Users:this section is in charge of register each user, as well as to the login access and modify their data if they wish.

+ Orders: After completing the purchase, a purchase order will be generated, which will be the proof of the acquisition. This will be sent to the customer's mailbox for greater fidelity in the purchase data


## Server Structure

Server designed with a layered architecture. The passage of information between layers is done by injection of dependencies in this way each layer does not know the provider of the information, making it easy to apply changes if desired.

This architectural pattern composed of several separate horizontal layers that function together as a single unit of software.

For data persistence, the Dao pattern and the database provided by MongoDb have been used.

The structure of the project is made up of a layer of models, where the Schemas that will be used to exchange information with the database are declared.
The defined Schemas are: 

+ Products
+ Cart
+ Users
+ Orders

Each Dao pattern is made up of functions that will use different schemes defined to interact with MongoDb. 

**The defined Dao are:**

+ Products:
Functions in charge of manipulating products data towards the DB.
If you have Administrator permission on the page, you can also delete products as well as modify them from this pattern.

+ Cart:
Defines all functions in charge of manipulating Cart data towards the DB

+ Users:
Using passport js and Mongo Db we can register and log in.

+ Orders:
Functions incharge to save all orders in the Db.

The next layer is called the "services layer", which is responsible for the modification and manipulation of incoming data from the controller, thus delivering clean data to the Dao.

**Service Layared:**

+ Products
+ Cart
+ Users
+ Orders

Above the service layer we can find the controller layer, which receives the different requests from the defined routes and proceeds to send the responses obtained from the information flow described above.

**Controller Layared:**

+ Products
+ Cart
+ Users
+ Orders

Finally, we can find the route layer, which will be in charge of acting as an access point for information between the client and the server.

Also you can find other complementary folders such as:

+ Middleware: This folder contained the bellow folders:
  - Cloudinary: Logic for storing photos of each user and product on the page.
  - Hasspass: Functions in charge to encrypt and decrypt each client's password.
  - Passport: Middleware used to registered and loged each user.

+ Helpers:
  - Logger: Used to output the logs instead of console.log or console.error

+ Server: All the server configuration is in this folder.

+ Templates: It is a template used by Nodemailer to send emails when the purchase is complete.
```
Server
   ├─ .env
   ├─ config
   │  ├─ DB
   │  └─ Env
   ├─ src
   │  ├─ controllers
   │  │  ├─ cart
   │  │  ├─ orders
   │  │  ├─ products
   │  │  ├─ users
   │  │  └─index.js
   │  ├─ dal
   │  │  └─ Dao
   │  │     ├─ cart
   │  │     ├─ orders
   │  │     ├─ products
   │  │     ├─ user
   │  │     └─index.js
   │  ├─ helpers
   │  ├─ middleware
   │  │  ├─ cloudinary
   │  │  ├─ hasspass
   │  │  └─ passport
   │  ├─ models
   │  │  ├─ cart
   │  │  ├─ orders
   │  │  ├─ products
   │  │  ├─ users
   |  |  └─ index.js
   │  ├─ routes
   │  │  ├─ cart
   │  │  ├─ orders
   │  │  ├─ products
   │  │  ├─ users
   |  |  └─index.js
   │  ├─ server
   │  │  ├─server.js
   │  │  └─ index.js
   │  ├─ services
   │  │  ├─ cart
   │  │  ├─ orders
   │  │  ├─ products
   │  │  └─ index.js
   │  └─ templates
   └─ warn.log
```
## Client Structure

Client was developed in React and React-Redux with Axios Request to the Server.

It has a simple but well-defined structure regarding the task defined for each component.

You can find the following folders:
+ Api
  - Cart: All cart axios requests are defined here.
  - Products: All products axios requests are defined here.
  - Orders: All Orders axios requests are defined here.
  - Users: All Users axios requests are defined here.

+ Assets: Here you can find the different photos used in the website.

+ Componentes - made of:
  - Containers: Logical manager of each section.
  - Views: Each module in this section is in charge of managing the view of each page

+ Features:
Used in React-Redux. All logic of Redux is here.

+ Utils: Some tools used on the page
  - Magnifier: tool to zoom an image in the product detail section
  - Alerts: Using Sweet Alert Js, here you can find all alerts used.

+ Store: Store used in React-Redux

+ Style: Customize style used in the website.
```
─ Client
│  └─ src
│     ├─ api
│     │  ├─ Cart
│     │  ├─ Orders
│     │  ├─ Products
│     │  |─ User
│     │  └─ index.js
│     ├─ assets  
│     ├─ components
│     │  ├─ Containers
│     │  |─ views
│     │  └─ index.js
│     │     
│     ├─ features
│     │  ├─ cart
│     │  ├─ order
│     │  ├─ products
│     │  |- user
│     │  └─ index.js
│     ├─ index.jsx
│     ├─ routes
│     │  ├─ AdminRoutes
│     │  └─ PublicRoutes
│     ├─ store
│     ├─ style
│     │  └─ fonts
│     └─ Utils
│        ├─ Alerts
│        | Magnifier
│        └─ index.js
|─────── App.css
└─────── App.jsx
```


## Navegation

+ Home - Here you can find all the products offered by the page.
+ Product screen with detail of it. It also includes selectable between 1 to 5 photos available for each product. It is also possible to zoom in the image in the desired area to see the details more clearly.
+ NavBar Menu with category selector by product. Also here you can find the Loged/Registr/logOut menu and Cart icon.


## User registration and Login service

- The page has a special user Admin (User Admin, Password Admin). This enables protected routes, not visible to normal clients. Through the Admin access, it is possible to modify products as well as add new ones.

- To make purchases, the page requires a logged in user. Otherwise, it will not allow you to complete your purchase.

- Users can register on the page through a local registration system designed for this purpose. Here they must place their personal information, decide a user name and a password, , there is also a section for placing a photo of the user if desired.


## Cart and Checkout

- When the user decides to finish their purchase, they can access their cart through the widget in the navbar or after adding a product.

- When the user completes his purchase, all the information of his acquisition will be sent to the user's mailbox, in addition to the list of products purchased. This using the Nodemailer tool.

- The cart has action buttons on each product, which will allow you to modify the amount of product to purchase as well as delete the product.


## Product Detail

- A Magnifier tool has been developed to give a magnifying glass animation when hovering over the image in the product detail

- Each product has between 1 to 5 photos to provide more detail of the product to the customer.

- There is a counter, which will allow adding the desired quantity of products as long as the stock is not exceeded.


## Alerts

- A series of alerts have been implemented using SweetAlert. This with the purpose of informing the user when a purchase is made or when, due to an error, it is necessary to carry out an additional step.

## Email with purchased order
An email with the summary of your purchase will arrive at your email after completing the purchase. In this email you can see the list as well as a link where you can access the detailed summary of your purchase on the website.

## Public and Private Routes

+ There are public routes:
  - Main
  - Categories by category ID (Ornament, Kitchen Supplies, Meals, Drinks, Sweets)
  - Login and user registration
  - Product detail for your Id
  - Cart

+ Private routes are available (Admin Only):
  - There is a username and password for Admin routes (User: Admin, Password: Admin)
  - Product modification
  - Add new product
  - Private paths can be checked in the helpers folder.


## My Orders
- As Client: Here you can find the history of orders made by the logged-in customer and thus be able to access each one of them to review the status, detail of the order, such as status and products purchased by the customer.

- As Admin: Here you can find the history of orders made by all customers and access each one of them to review the status of the order, such as status and products purchased by the customer.

## Modification of a product or elimination from the cart

If you proceed to remove a product from your shopping cart, the units of thatproduct in the cart will be automatically reincorporated into the stock of the product. This is so to avoid product stock problems.

On the other hand, as admin you always have the power to modify the stock of each product as you wish.



## Dependencias

* Server side:
  - "bcrypt": "^5.1.0",
  - "cloudinary": "^1.32.0",
  - "connect-mongo": "^4.6.0",
  - "cookie-parser": "^1.4.6",
  - "cors": "^2.8.5",
  - "dotenv": "^16.0.3",
  - "express": "^4.18.2",
  - "express-fileupload": "^1.4.0",
  - "express-session": "^1.17.3",
  - "log4js": "^6.7.1",
  - "mongoose": "^6.7.3",
  - "nodemailer": "^6.8.0",
  - "passport": "^0.6.0",
  - "passport-facebook": "^3.0.0",
  - "passport-local": "^1.0.0"

* Client Side:
  - "@reduxjs/toolkit": "^1.9.1",
  - "@testing-library/jest-dom": "5.16.4",
  - "@testing-library/react": "13.1.1",
  - "@testing-library/user-event": "13.5.0",
  - "axios": "1.2.0",
  - "bootstrap": "5.1.3",
  - "eslint-config-react-app": "^7.0.1",
  - "react": "18.2",
  - "react-bootstrap": "2.3.1",
  - "react-dom": "18.2",
  - "react-hook-form": "7.31.3",
  - "react-redux": "^8.0.5",
  - "react-responsive": "^9.0.2",
  - "react-router-dom": "6.3.0",
  - "react-scripts": "5.0.1",
  - "react-select": "5.7.0",
  - "sweetalert2": "11.4.10",
  - "sweetalert2-react-content": "5.0.0",
  - "web-vitals": "2.1.4"
 


### `npm i`

To install dependencies

### `Scripts`

+ npm start in client and server to start the project.
+ npm start:dev in server to start nodemon server service.

## ENV DATA
If you need the .env files to test the project, please let me know.

You can write me an email to herradorgustavo@gmail.com


## Admin Routes
![React-App-Google-Chrome-2022-06-22-19-17-47](Client/src/assets/images/admin%20functions.gif)

## Client's purchase simulation
![React-App-Google-Chrome-2022-06-22-19-34-36](Client/src/assets/images/purchased-simulated.gif)


## React Documentation

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

