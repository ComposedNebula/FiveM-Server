-- (server side script)
-- Registers a command named 'ping'.
RegisterCommand("ping", function()
        TriggerClientEvent("chat:addMessage", {color = { 255, 0, 0 }})
    )