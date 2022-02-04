RegisterNetEvent("display")
AddEventHandler("display", function(arg)
    TriggerEvent('chat:addMessage', '[Database]', {0,255,0}, arg)
end
)