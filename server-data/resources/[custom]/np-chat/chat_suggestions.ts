setImmediate(()=>{
    emit('chat:addSuggestion', '/tp_saved', 'Teleport to saved location', [
        {name: 'Location Name', help: 'Name specified in cl_teleport file'},
    ])

    emit('chat:addSuggestion', '/tp_coords', 'Teleport to specified coordinates', [
        {name: 'x coordinate', help: 'The x coordinate of the designated location'},
        {name: 'y coordinate', help: 'The y coordinate of the designated location'},
        {name: 'z coordinate', help: 'The z coordinate of the designated location'}
    ] )
})