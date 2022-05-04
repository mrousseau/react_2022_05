export interface IMeme{
    id?:number
    titre:string
    text:string
    x:number
    y:number
    fontWeight:string
    fontSize:number
    underline:boolean
    italic:boolean
    imageId:number
    color:string
};
export const DummyMeme:IMeme={
    titre:'',
    text:'',
    x:0,
    y:17,
    fontWeight:'500',
    fontSize:30,
    underline:false,
    italic:false,
    imageId:-1,
    color:'#000000'
};
export interface IImage{
    id:number
    url:string
    w:number
    h:number
    name:string
};