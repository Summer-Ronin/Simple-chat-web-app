# How to use and how we made it

## 👉 All things we use

-   Mongodb
-   Express.js
-   Node.js
-   Socket.io

## 👉 Database side

-   We are gonna keep it simple and make it local since nowhere on Earth is willing to give us free plan of db hosting
-   Mongo Atlas offers just like 1 free database and others such as Clever Cloud

### 🖥️ How to set up MongoDB local db

-   Travel to this [link](https://attacomsian.com/blog/nodejs-mongodb-local-connection) for more

### 🐛 Error you may have during MongoDB setup

#### `couldn't connect to server 127.0.0.1:27017  - connection could be mute because the target machine actively refused it`

- This happens because your machine has not started MongoDB as a service

- Solution: 

    - 1️⃣ Go and check out your `services.msc` and if `MongoDB` is started or not, if not, start it right the way and done
    - 2️⃣ Begin step 2 if step 1 fails to solve it, you need to Make sure that you added the <MONGODB_PATH>\bin directory to the system variable PATH
    - Open CMD and use this command line as administrator: 
    
    ```bash
        D:\mongodb\bin>mongod --remove
    ```

    - Then do this 
    
    ```bash
        D:\mongodb\bin>mongod --dbpath=D:\mongodb --logpath=D:\mongodb\log.txt --install
    ```

    - Then open `services.msc`

    ```bash
        services.msc
    ```

    - You must see your MongoDB now in your services control panel, start it now

