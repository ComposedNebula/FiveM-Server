const spawnPos = [686.245, 577.95, 130.461];

on("onClientGameTypeStart", () => {
  exports.spawnmanager.setAutoSpawnCallback(() => {
    exports.spawnmanager.spawnPlayer(
      {
        x: spawnPos[0],
        y: spawnPos[1],
        z: spawnPos[2],
        model: "a_m_m_skater_01",
      },
      () => {
        emit("chat:addMessage", {
          args: ["Welcome to the server!"],
        });
      }
    );
  });

  exports.spawnmanager.setAutoSpawn(true);
  exports.spawnmanager.forceRespawn();


console.log(`spawned at ${spawnPos}`);

});
