# Description
Social Media Login Page using a MERN tech stack while also implementing OAuth2.0 using google and github

# Getting Started
To get started the first thing you need to do is clone this repo,
in your teminal make sure you have git CLI tool installed and run this command:
```git clone https://github.com/arpowe11/arp-social.git```

you will get both the client and server code structures. 

# Configuring the Client
The first thing you will need to do is install all the dependencies for this client. To do so change directories until you are in the client folder. Once there run the command ```npm install```, this will install all dependecies for the client. If you do not have npm or node installed on your computer you can follow this guide on how to install them [Node Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
Next you need to make sure that you have the right localhost url, first run ```npm run dev```, your react test server should start up and give you a localhost address. Copy it for later. Open the client folder in VS Code, you need to create a **.env** file in the client root directory.
Inside this .env you need to create a variable called ```REACT_APP_URL=``` and paste the URL your coppied into the variable.
It should look like ```REACT_APP_URL=http://localhost:5173/``` This step is crucial to get right becasue if you do not assign this, when you have the server code running later and go to use the login page, the app will not know where to send the login request. So make sure that the .env file is in the client folder and not accidentally in a sub folder. **SECURITY NOTICE:** .env files do NOT work the same on the client as they do on server, for the client anything you put in this file can be seen by anyone, having the react url in there is okay becasue it is the domain that everyone would have to go to to access the app, **do not put secret keys or data base connections** in the client .env

That is it for the client. If you run the client and click the buttons you will get an error becasue we have to set up the server.

# Configuring the Server
The first thing you will need to do is install all the dependencies for this server. To do so change directories until you are in the server folder. Once there run the command ```npm install```, this will install all dependecies for the server. If you do not have npm or node installed on your computer you can follow this guide on how to install them [Node Guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Next before we run the dev test server we need to get a session secret key, google oauth credentials, github credentials, and a mongoDB cluster in order for our server to work right. Open this server folder in VS Code. You will see in the server folder an example-env.txt file. Copy the contents and create a .env file, paste the contents into the file. There are a few predefined values already like PORT and both google and github REDIRECT_URLs, leave those be. Everything else that says 'replace' will get replaced.

### Session Secret
This project uses exrpess-sessions to handel logged in users, but we need a secret key for this to work. In your terminal type the following command: ```node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"``` this will give you a random hex string, copy it and paste it next to the SESSION_SECRET= 

### Configure Google OAuth 
To get the client ID and client secret for google oauth is a kind of a long process, so to figure out how to do this please watch 
this video, **NOTE** for Home URL its http://localhost:3001, for the Authorized Redirect URIs, you must put **http://localhost:3001/api/auth/google/redirect**, also you do not need to worry about anything with appwrite. Once you get your Google Client ID and Google Client Secret, copy then and paste them next to their env variables in the .env: [Google OAuth](https://www.youtube.com/watch?v=TjMhPr59qn4) 

### Configure Github OAuth
Just like google, watch this video to set up and get the github client id and client secret, one you get them copy and paste them into the github client ID var and client secret variable, **NOTE** the home url is http://localhost:3001, for the callbakc url its http://localhost:3001/api/auth/github/redirect 

you will be given a client ID but you will need to click the 'Generate a new client secret' to get the secret id 
[Github OAuth](https://www.youtube.com/watch?v=o_lFy43q8uw)

### Configure MongoDB
Watch this video, create your mongodb, get the connection string and paste it next to the env var MONGO_URL=
You can name things how you want, it does not matter as long as you get the connection string for the database.
[Mongo DB](https://www.youtube.com/watch?v=SMXbGrKe5gM)

# Wrapping it up
Now you at this point you should have everything you need. Session secret, Mongo connection string, Google credientials, and Github credientials.
We are ready to move forward with the settup.

Once all of your env varialbes are set up, save the file and in the terminal run ```npm run dev``` the server should start and at the end you should get

[INFO] Connected to MongoDB successfully
[INFO] Dev server running on port 3001

Keep this running, now go to your client project and run ```npm run dev``` in the terminal. Copy the localhost address and paste it into your browser. You should now see the beautiful login page. Login using Google or GitHub, you should be redirected to a mock dashboard page that displays your name and email along with a logout button.

Hope you enjoyed this mini project!
