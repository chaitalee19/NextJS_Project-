import { timeStamp } from "console";
import mongoose,{Schema,model,models} from "mongoose";
import { title } from "process";

export const VIDEO_DIAMENTIONS={
    width:1080 ,
    height:1920,
}as const

export interface IVideo{
    _id?: mongoose.Types.ObjectId,
    title: String,
    decription: String,
    videoUrl:String,
    thumbnailUrl:string,
    controls?: boolean;
    transformation?:{
height :number,
width:number,
quality?: number
    }
}

const videoSchema= new videoschema<IVideo>({
    title: {type:String, required: true},
    decription: {type:String ,required:true},
    videoUrl:{type:String,required:true},
    thumbnailUrl: {type:String,required:true},
    controls: {type:Boolean,requied:true},
    transformation:{
        height:{type:Number,default:VIDEO_DIAMENTIONS.height},
        width:{type:Number,default:VIDEO_DIAMENTIONS.width},
        quality:{type:Number,required:true,min : 1  ,max:100}
    }
},
{timeStamp:true })

const video= models?.video || model<IVideo>("video",videoSchema)

export default video;