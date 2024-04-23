import {data} from '../data/data'
import { getQuery } from 'h3'
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    if(query.uuid === undefined || query.uuid === null) {
        return {
            status: 400,
            body: {
                message: "No UUID provided"
            }
        }
    }
    const uuid = query.uuid.toString()
    //@ts-ignore
    let returnData = data.detail[uuid]
})