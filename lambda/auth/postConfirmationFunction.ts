import { PostConfirmationTriggerEvent,Callback,Context } from "aws-lambda";

export async function handler(event:PostConfirmationTriggerEvent, context:Context,
    callback:Callback):Promise<void>{

        console.log(event)

        callback(null,event)
    }