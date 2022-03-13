RegisterCommand('notif', (source, args)=>{
    source = PlayerPedId()
    SetNotificationTextEntry("STRING")
	AddTextComponentString(`${source} - ${args.join(' ')}`)
	DrawNotification(false, false)
}, false)