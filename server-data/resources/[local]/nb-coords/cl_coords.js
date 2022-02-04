import { writeFile } from 'fs'

RegisterCommand('coords',(source, args)=>{
    if(args < 0){
        const playerCoords = GetEntityCoords(source)
        console.log(playerCoords)
    } else if(args[1] === 'save'){
        const playerCoords = GetEntityCoords(source)
        let data = playerCoords
        writeFile('../saved-coords.txt', data, (err)=>{
            if(err){
                console.log('error in writing file')
            } else {
                console.log('file written succesfully!')
            }
        } )
    }
}, false)   