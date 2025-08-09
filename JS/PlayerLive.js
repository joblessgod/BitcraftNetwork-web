async function updatePlayerCount() {
  try {
    const res = await fetch(
      "https://api.mcstatus.io/v2/status/java/play.bitcraftnetwork.fun"
    );
    if (!res.ok) throw new Error("Failed to fetch server status");
    const data = await res.json();
    const countEl = document.getElementById("player-count");
    countEl.textContent = data.online ? data.players?.online ?? 0 : 0;
  } catch (err) {
    console.error(err);
    document.getElementById("player-count").textContent = "0";
  }
}

// Update on page load
updatePlayerCount();

// Refresh every 60 seconds
setInterval(updatePlayerCount, 60000);
