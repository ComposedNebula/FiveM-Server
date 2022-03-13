setImmediate(()=>{
    emit('chat:addSuggestion', '/spawncar', 'spawn a car model', [
        {name: 'car model', help: 'enter the model of car you want to spawn'}
    ])

    emit('chat:addSuggestion', '/tp_saved', 'Teleport to saved location', [
        {name: 'Location Name', help: 'Name specified in cl_teleport file'},
    ])

    emit('chat:addSuggestion', '/tp_coords', 'Teleport to specified coordinates', [
        {name: 'x coordinate', help: 'The x coordinate of the designated location'},
        {name: 'y coordinate', help: 'The y coordinate of the designated location'},
        {name: 'z coordinate', help: 'The z coordinate of the designated location'}
    ])
    
    emit('chat:addSuggestion', '/notif', 'Notification', [
        {name: 'Notification message', help: 'Type what you want you notification to say'}
    ])
})