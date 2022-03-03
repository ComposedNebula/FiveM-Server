import { Delay } from '../../helpers/helpers'

const locations = [
    {
        "name": "Diamond Casino",
        "desc": "The Diamond Casino and Resort",
        "coords": {
            "x": 925.783,
            "y": 46.165,
            "z": 80.906
        }
    },

    {
        "name": "Mission Row PD",
        "desc": "LSPD Headquarters",
        "coords": {
            "x": 738,
            "y": 183,
            "z": 812
        }
    },

    {
        "name": "FIB",
        "desc": "FIB Building",
        "coords": {
            "x": 76.661,
            "y": 740.200,
            "z": 45.097
        }
    }
]

RegisterCommand('tp_saved', async (source: number, args: string)=>{
    const ped = source
    const pedVehicle = GetVehiclePedIsIn(ped, false)
    let isInVehicle = false
    if(pedVehicle !== null){
        isInVehicle = true
    }
    let desLocation = 0
    switch(args[0]){
        case 'casino':
            desLocation = 0
            break;
        case 'mrpd':
            desLocation = 1
            break;
        case 'fib':
            desLocation= 2
            break;
    }
    // if(rawArgInput === 'casino'){
    //     desLocation = [0]
    // } else if(rawArgInput === 'fib'){
    //     desLocation = [2]
    // } else if(rawArgInput === 'mrpd'){
    //     desLocation = [1]
    // }
    const desLocationCoords = locations[desLocation].coords

    SetEntityCoords(ped, desLocationCoords.x, desLocationCoords.y, desLocationCoords.z, true, true, false, false)
    if(isInVehicle){
        SetEntityCoords(pedVehicle, desLocationCoords.x, desLocationCoords.y, desLocationCoords.z, true, true, false, false)
        await Delay(100)
        SetPedIntoVehicle(ped, pedVehicle, -1)
    }
}, false)

RegisterCommand('tp_coords', async (source: number, args: any)=>{
    const ped = source
    const pedVehicle = GetVehiclePedIsIn(ped, false)
    let isInVehicle = false
    if(pedVehicle !== null || 0){
        isInVehicle = true
    }
    const desLocationCoords = args

    SetEntityCoords(ped, desLocationCoords[0], desLocationCoords[1], desLocationCoords[2], true, true, false, false)
    if(isInVehicle){
        SetEntityCoords(pedVehicle, desLocationCoords[0], desLocationCoords[1], desLocationCoords[2], true, true, false, false)
        await Delay(100)
        SetPedIntoVehicle(ped, pedVehicle, -1)
    }
}, false)