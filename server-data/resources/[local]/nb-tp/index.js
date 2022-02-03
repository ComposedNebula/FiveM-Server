RegisterCommand('tp', (source, args)=>{
    const player = PlayerPedId()

    let coords
    
    const pedVehicle = GetVehiclePedIsIn(player, false)

   
    if(args[0] === "casino"){
        coords = {
            x: 925.783,
            y: 46.165,
            z: 80.906
        } 
        if(pedVehicle === 0){
            return
        } else if(pedVehicle !== 0){
            SetEntityCoordsNoOffset(pedVehicle, coords.x, coords.y, coords.z, true, true, false, false)
            setTimeout(()=>{SetPedIntoVehicle(player, pedVehicle, -1)}, 100)
        }
        SetEntityCoordsNoOffset(player, coords.x, coords.y, coords.z, true, true, false, false)
        
    } else if(args[0] === "fib"){
        coords = {
            x: 76.661,
            y: -740.200,
            z: 45.097
        }
        SetEntityCoordsNoOffset(player, coords.x, coords.y, coords.z, true, true, false, false)
    } else if(args[0] > 0){
        coords = {
            x: parseInt(args[0]),
            y: parseInt(args[1]),
            z: parseInt(args[2])
        }
        SetEntityCoordsNoOffset(player, coords.x, coords.y, coords.z, true, true, false, false)
    }
}, false)

setImmediate(()=>{
    emit('chat:addSuggestion', '/tp', 'teleport to specified coordinates', [
        {name: 'x coordinate', help: 'x coordinate'},
        {name: 'y coordinate', help: 'y coordinate'},
        {name: 'z coordinate', help: 'z coordinate'}
    ])
})

RegisterCommand('json', ()=>{
    console.log(points[1]['coords'])
}, false)

