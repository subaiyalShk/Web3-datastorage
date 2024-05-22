import { json } from '@helia/json'
import { CID } from 'multiformats/cid'

export const addData = async (fs) =>{
    // we will use this TextEncoder to turn strings into Uint8Arrays
    const encoder = new TextEncoder()
    const bytes = encoder.encode('Hello World 101')

    // add the bytes to your node and receive a unique content identifier
    const cid = await fs.addBytes(bytes)

    console.log('Added file:', cid.toString())
}