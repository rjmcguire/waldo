# Let's play a little game, shall we?
We're looking for reinforcements on the frontend developer front to further develop our - you guessed it - frontend. 

This repository should give you a good idea of the technologies you'll be using, how we structure our code and what will be expected of you.

## Dependencies
1. [Docker](https://docs.docker.com/)
2. [JSPM](http://jspm.io/docs/)

## How to
1. Clone the project
2. Initialize JSPM with `jspm init` and install dependencies with `jspm install` in the `src` directory
3. Start the server with `docker-compose up development`
4. Find a TODO, implement it, rinse, repeat

## Socket Server
Can be found at `104.199.6.31:8085`. The server emits redux actions (plain Javascript objects) as `server_response` events to connected clients
