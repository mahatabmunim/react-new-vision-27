interface PracticePropTypes{
    name:string,
    isDone:boolean
}

function ProfileName({name,isDone}:PracticePropTypes){
    
     if(isDone===true){
        return <li>Hello, Mahatab</li>
     }
     else{
        <li>Hello, Munim</li>
     }
    
}
export default ProfileName ;