interface TaskPropTypes{
    name:string,
    isDone:boolean
}

export default Task;

function Task( {name, isDone} : TaskPropTypes){
    let  list;

    if(isDone){
        list=<li>Done: {name}</li>
    }
    else{
        list= <li>Not Done: {name}</li>
    }
    return list;
 
}
// export default Task;

// function Task( {name, isDone} : TaskPropTypes){
//     return isDone===false ||  <li>Done Up: {name}</li>
//     // return isDone===false &&  <li>Hurry Up: {name}</li>
//     // return isDone===true ?  <li>Completes: {name}</li> :  <li>Painding: {name}</li>

 
// }


// function Task( {name, isDone} : TaskPropTypes){
//     return isDone===true ?  <li>Completes: {name}</li> :  <li>Painding: {name}</li>


    // if(isDone=== true){
    //     return <li>Completes: {name}</li>
    // }else{
    //     return <li>Painding: {name}</li>
    // }
 
// }

// ternary operator
// const time = 5>10 ? 100:20;
    // return isDone===true ?  <li>Completes: {name}</li> :  <li>Painding: {name}</li>


// if aelse conditions

// function Task( {name, isDone} : TaskPropTypes){
//     if(isDone=== true){
//         return <li>Completes: {name}</li>
//     }else{
//         return <li>Painding: {name}</li>
//     }
 
// }

// if coonditions

// function Task( {name, isDone} : TaskPropTypes){
//     if(isDone=== true){
//         return <li>Completes: {name}</li>
//     }
 
//     return <li>Painding: {name}</li>
// }