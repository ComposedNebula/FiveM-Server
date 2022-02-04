Delay = (ms)=> new Promise(res => setTimeout(res, ms))

RegisterCommand('spawncar', async(source, args, raw)=>{
    let model = 'adder'
    if(args.length > 0){
        model = args[0].toString()
    }

    const hash = GetHashKey(model)
    if(!IsModelInCdimage(hash) || !IsModelAVehicle(hash)){
        emit('chat:addMessage', {
            args: [
                'Model is not a valid vehicle model'
            ]
        })
    return
    }

    RequestModel(hash)
    while(!HasModelLoaded(hash)){
        await Delay(500)
    }

    const ped = PlayerPedId()

    const coords = GetEntityCoords(ped)

    const currentVehicle = GetVehiclePedIsIn(ped, false)
    if(currentVehicle !== 0){
        SetEntityAsMissionEntity(currentVehicle, true, true)
        DeleteVehicle(currentVehicle)
    }

    const vehicle = CreateVehicle(hash, coords[0], coords[1], coords[2], GetEntityHeading(ped), true, false)

    SetPedIntoVehicle(ped, vehicle, -1)

    SetEntityAsNoLongerNeeded(vehicle)
    SetModelAsNoLongerNeeded(model)

    emit('chat:addMessage', {
        args: [
            `Vehicle ${model} spawned`
        ]
    })


}, false)

setImmediate(()=>{
    emit('chat:addSuggestion', '/spawncar', 'spawn a car model', [
        {name: 'car model', help: 'enter the model of car you want to spawn'}
    ])
})





RegisterCommand('vhealth', ()=>{
    const ped = GetPlayerPed()
    const pedVehicle = GetVehiclePedIsIn(ped, false)
    
    const vhealth = GetVehicleEngineHealth(pedVehicle)
    return console.log(vhealth)
})

RegisterCommand('fix', ()=>{
    const ped = GetPlayerPed()
    const pedVehicle = GetVehiclePedIsIn(ped, false)

    SetVehicleEngineHealth(pedVehicle, 1000)
    SetVehicleEngineOn(pedVehicle, true, true, false)
    SetVehicleFixed(pedVehicle)
    
//     if(IsVehicleDamaged(pedVehicle)){
//         SetVehicleDamage(pedVehicle, 0.0, 0.0, 0.33, 0, 100, true )
//     } else return setImmediate(()=>{
//         emit('chat:addMessage', {
//             args: [
//                 'Your vehicle is not damaged!'
//             ]
//         })
//     })
    console.log('fixed', pedVehicle)
}, false)