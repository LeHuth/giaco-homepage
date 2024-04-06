import {data} from '../data/data'
export default defineEventHandler(async (event) => {
   return {
        status: 200,
        body: {
        message: 'Hello World',
            data: data
        }
   }
})
