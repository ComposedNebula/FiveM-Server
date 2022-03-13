RegisterCommand('hudtexton', function()
    SendNUIMessage({
        type = "ui",
        status = true
    })

end)

RegisterCommand('hudtextoff', function()
    SendNUIMessage({
        type = "ui",
        status = false
    })
end)