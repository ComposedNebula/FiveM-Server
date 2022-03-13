local display = false
local ped = PlayerPedId()

print('started1')

AddEventHandler('spawn:spawned', function()
    SetDisplay(not display)
end)

RegisterCommand("nui", function(source, args)
    SetDisplay(not display)
end)

RegisterNUICallback("spawn:at_casino", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 925.783, 46.165, 80.906, true, true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_vwBowl", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 686.245, 577.95, 130.461, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_sandyPD", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 1855.885, 3682.255, 34.267, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_mrpd", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, 427.719, -976.660, 30.709, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_altaApartments", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, -265.115, -964.426, 31.223, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

RegisterNUICallback("spawn:at_pier", function()
    DoScreenFadeOut(1000)
    SetDisplay(false)
    Wait(1000)
    SetEntityCoords(ped, -1647.103, -993.498, 13.017, true , true, false, false)
    Wait(1500)
    TriggerEvent('spawn:teleported')
end)

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    SendNUIMessage({
        type = "ui",
        status = bool,
    })
end

Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        -- https://runtime.fivem.net/doc/natives/#_0xFE99B66D079CF6BC
        --[[ 
            inputGroup -- integer , 
	        control --integer , 
            disable -- boolean 
        ]]
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 322, display) -- ESC
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    end
end)