// @ts-nocheck
import tpLocations from './locations.json'

Delay = (ms) => new Promise(res => setTimeout(res, ms))

RegisterCommand('tp', async (source, args)=>{
    const ped = source
    const pedVehicle = GetVehiclePedIsIn(ped, false)
    const rawArgInput = args[1]
    if(rawArgInput === 'casino'){
        let desiredLocation = [0]
    } else if(rawArgInput === 'fib'){
        let desiredLocation = [2]
    } else if(rawArgInput === 'mrpd'){
        let desiredLocation = [1]
    }
    const loc = tpLocations[desiredLocation]

    if(pedVehicle !== 0){
        SetEntityCoordsNoOffset(ped, loc.coords.x, loc.coords.y, loc.coords.z, true, true, false, false)
        SetEntityCoordsNoOffset(pedVehicle, loc.coords.x, loc.coords.y, loc.coords.z, true, true, false, false)
        await Delay(100)
        SetPedIntoVehicle(ped, pedVehicle, -1)
    } else if(pedVehicle === 0){
        SetEntityCoordsNoOffset(ped, loc.coords.x, loc.coords.y, loc.coords.z, true, true, false, false)
    }
}, false)

setImmediate(()=>{
    emit('chat:addSuggestion', '/tp', 'teleport to specified coordinates', [
        {name: 'x coordinate', help: 'x coordinate'},
        {name: 'y coordinate', help: 'y coordinate'},
        {name: 'z coordinate', help: 'z coordinate'}
    ])
})