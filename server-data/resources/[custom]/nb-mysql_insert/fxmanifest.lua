fx_version 'cerulean'
game 'gta5'

client_script '/client/cl_insert.lua'

server_scripts {
    '/server/sv_insert.lua',
    '@mysql-async/lib/MySQL.lua'
}