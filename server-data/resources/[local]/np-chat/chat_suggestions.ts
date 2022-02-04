//@ts-nocheck
setImmediate(()=>{
    emit('chat:addSuggestion', '/tp', 'teleport to specified coordinates', [
        {name: 'x coordinate', help: 'x coordinate'},
        {name: 'y coordinate', help: 'y coordinate'},
        {name: 'z coordinate', help: 'z coordinate'}
    ])
})