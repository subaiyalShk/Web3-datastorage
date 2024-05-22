import express from 'express';
import { createHelia } from 'helia'
import { json } from '@helia/json'
import { unixfs } from '@helia/unixfs'
import { addData } from './utils.js'

let node; 
let j; 
const app = express();
app.use(express.json()); // for parsing application/json
// // create a filesystem on top of Helia, in this case it's UnixFS
// const fs = unixfs(node)

async function main () {
  node = await createHelia()
  j = json(node)
  console.info('helia node created')
  console.info('PeerId:', node?.libp2p?.peerId?.toString())
  const cid = await j.add({ hello: 'world' })
  const data = await j.get(cid);
  console.log(data);
    // Upload data to IPFS
  app.post('/upload', async (req, res) => {
      const message = req.body;
      console.log(message);
      const cid = await j.add({ hello: 'world' })
      res.json({"cid": cid});
  });

  app.get('/read', async (req, res) => {
      try {
        const cid = req.query.cid;
        console.log(cid)
        if (!cid) {
          return res.status(400).json({ error: 'Missing cid parameter' });
        }
        console.log(cid.toString())
        // The below line is not working and breaks the code; possibly due to scoping issue
        // const data = await j.get(cid);
        // if (!data) {
        //     return res.status(404).json({ error: 'Data not found' });
        // }
        res.status(200).json({ data: 'data' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to read data' });
    }
  })
  
  app.listen(3000, () => {
      console.log("Server running on port 3000");
  });
}

main()




