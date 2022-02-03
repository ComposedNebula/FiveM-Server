/*on('onClientGameTypeStart', ()=>{
    exports.spawnmanager.setAutoSpawnCallback(()=>{
        exports.spawnmanager.spawnPlayer({
            x = 0,
            y = 0,
            z = 0,
            heading = 0,
            skipFade = false
        },()=>{
            emit('chat:addMessage', ()=>{
                args: [
                    'hi'
                ]
            })
        });
    });
exports.spawnmanager.setAutoSpawn(true)
exports.spawnmanager.forceRespawn()
});
*/

const spawnPos = [686.245, 577.950, 130.461];

on('onClientGameTypeStart', () => {
  exports.spawnmanager.setAutoSpawnCallback(() => {
    exports.spawnmanager.spawnPlayer({
      x: spawnPos[0],
      y: spawnPos[1],
      z: spawnPos[2],
      model: 'a_m_m_skater_01'
    }, () => {
      emit('chat:addMessage', {
        args: [
          'Welcome to the party!~'
        ]
      })
    });
  });

  exports.spawnmanager.setAutoSpawn(true)
  exports.spawnmanager.forceRespawn()
});
