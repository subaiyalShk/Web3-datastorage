***IPFS Node***

This project is a simple IPFS node server using Helia and Express.
taking the following docs as refernce: https://github.com/ipfs-examples/helia-examples/tree/main/examples/helia-ts-node

Prerequisites
Before you begin, ensure you have met the following requirements:

- Install tsx -> https://www.npmjs.com/package/tsx
- Node v20.1.0


Clone the repository:

>
Navigate to the project directory:

node
Install the dependencies:

install
Using IPFS Node
To use IPFS Node, follow these steps:

Start the development server:

dev
Or, start the production server:

start
The server will start running at http://localhost:3000.

To test:

Post request - send a json object to be stored using below curl
'''
curl --location 'http://localhost:3000/upload' \
--header 'Content-Type: text/plain' \
--data '{
    "hello": "world"
}
'''

Get Request - send a CID and get back data associated to it
'''
curl --location 'http://localhost:3000/read?cid=bagaaierasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea'
'''

OR 

view in the browser via IPFS gateway https://ipfs.io/ipfs/{yourCID}





Contact
If you want to contact me you can reach me at <subaiyalshk@gmail.com>.

License
This project uses the following license: ISC.
