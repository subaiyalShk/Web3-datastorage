import express from 'express';
import { createHelia } from 'helia'
import { json } from '@helia/json'
import { unixfs } from '@helia/unixfs'
import { addData } from './utils.js'
import { CID } from 'multiformats/cid'

let node;
const app = express();
app.use(express.json()); // for parsing application/json
// // create a filesystem on top of Helia, in this case it's UnixFS
// const fs = unixfs(node)

async function StartIPFSNode(){
  node = await createHelia()
  console.info('Helia is running')
  console.info('PeerId: ', node?.libp2p?.peerId?.toString())
}

async function main () {
 await StartIPFSNode()

  app.post('/upload', async (req, res) => {
      const message = req.body;
      console.log(message);
      const cid = await json(node).add({ hello: 'world' })
      res.json({"cid": cid.toString()});
  });

  app.get('/read', async (req, res) => {
      try {
        let cid = req.query.cid;
        if (!cid) {
          return res.status(400).json({ error: 'Missing cid parameter' });
        }
        cid = CID.parse(cid);

        const data = await json(node).get(cid);
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json({ data: data });
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




