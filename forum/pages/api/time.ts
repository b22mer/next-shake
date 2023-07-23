
export default async function handler(req:any, res:any){

    //과제 1.
    const curTime = new Date();
    console.log(curTime);
    
    res.status(200).json(curTime)
}