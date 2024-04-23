import {data} from '../data/data'
import {useRequestBody} from "nitropack/runtime/utils";
import { getQuery } from 'h3'


export default defineEventHandler(async (event) => {
    const queryParam = getQuery(event)
    let returnData = data.shows[queryParam.slug]
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