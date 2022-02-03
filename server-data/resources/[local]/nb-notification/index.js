RegisterCommand('notif', (source, args)=>{
    source = GetPlayerPed(-1)
    SetNotificationTextEntry("STRING")
	AddTextComponentString(`${source} - ${args.join(' ')}`)
	DrawNotification(false, false)
}, false)

setImmediate(()=>{
    emit('chat:addSuggestion', '/notif', 'Notification', [
        {name: 'Notification message', help: 'Type what you want you notification to say'}
    ]
    )
})