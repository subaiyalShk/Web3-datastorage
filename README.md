## IPFS Node

This project is a simple IPFS node server using Helia and Express.
taking the following docs as refernce: https://github.com/ipfs-examples/helia-examples/tree/main/examples/helia-ts-node

**Prerequisites**
Before you begin, ensure you have met the following requirements:

- Install tsx -> https://www.npmjs.com/package/tsx
- Node - v20.1.0
- NPM - v9.6.4

**To use IPFS Node, follow these steps:**
- Clone the repository
- navigate to repository 
- Start the development server: `npm run start`

**To test:**
Send a post request - send a json object to be stored using below curl

    curl --location 'http://localhost:3000/upload' \--header 'ContentType: text/plain' \ --data '{"hello": "world"}

Send a get request - send a CID and get back data associated to it
`curl --location 'http://localhost:3000/read?cid=bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea`

**OR** 

view in the browser via IPFS gateway https://ipfs.io/ipfs/{yourCID}


Contact
If you want to contact me you can reach me at <subaiyalshk@gmail.com>.

License
This project uses the following license: ISC.
