RegisterCommand('coords',()=>{
    const playerCoords = GetEntityCoords(PlayerPedId())
    console.log(playerCoords)
}, false)   