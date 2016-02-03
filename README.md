# interview-project
twitter viewer is a responsive HTML5 website hosted by a locally running ES6 Node express server that displays the 15 latest tweets of any public twitter user.

## installation and running the server
The build and run process for AdVisor is meant to be as easy as pie.
The only system packages required are Git and NodeJS.

* OS X Homebrew: `brew install git node`
* Ubuntu: `sudo apt-get install git nodejs`

### Installing local dependencies

Most of our module dependencies are installed via [npm](https://www.npmjs.com/). Others with [bower](http://bower.io/).

When cloning or updating the repo, you can install the latest dependencies by running:

    npm install
    
cd into the public folder and grab the front-end dependencies with bower

    bower install
    
We should be ready to run the server.

    npm start

NOTE: The server connects to Twitter's API service, you will need a valid twitter account and api access. [further instructions are here](https://dev.twitter.com/oauth/overview/application-owner-access-tokens)

In order to tell the application your twitter credentials run npm start like so:

```
TWITTER_CONSUMER_KEY=‘xxx’ TWITTER_CONSUMER_SECRET=‘xxx’ TWITTER_ACCESS_TOKEN_KEY =‘xxx-xxxx’ TWITTER_ACCESS_TOKEN_SECRET =‘xxx’ npm start
```
## Development workflow    

We use [gulp](http://gulpjs.com/) as our front end build tool, Gulp is used to compile our sass files into css. 
So you'll want the `gulp` command-line tool. Install it by running:

```
npm install -g gulp
```

then in anothe terminal start the server as listed above

    npm start

#Improvments + Considerations

*Would have liked to add at least simple integration testing that would hit the getTweets route on the server and ensure correct functioning.

*Error handeling and easier loading of twitter api credentials. (support loading from file as a fallback to using process env vars)

*FRONTEND: further breakout javascript into 3 seperate files (entry.js, events.js and onHashchange.js) + use webpack to manage this

*FRONTEND: do a better job of breaking out the SASS files, I started this process but did'nt want to spend to much time on it. the _mobile and _tweet files are a start at that idea. In a larger project I would scaffold diffrent folders for (layouts, modules[....like tweet.sass], layout and style)

*FRONTEND: Wanted to expiremnt with React and see how it could have saved some wiring of components

*(small) support changing port with a setting in package.json file
