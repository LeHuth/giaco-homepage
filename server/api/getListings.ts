import {data} from '../data/data'
import {useRequestBody} from "nitropack/runtime/utils";


export default defineEventHandler(async (event) => {
    const query = event.path.split('?')[1].split('=')[1]
    let returnData = data.shows[query]
    if (returnData === undefined) {
        returnData = "No data found"
    }
  return {
    status: 200,
    body: {
      message: returnData,
    },
  }
})