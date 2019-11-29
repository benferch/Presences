const presence = new Presence({
    clientId: '645671304896315432',
    mediaKeys: false
});

var oldURL, elapsed;

presence.on("UpdateData", async() => {
    let details, state;
    let title = document.title;
    let shortTitle = title.replace(" -- Kickstarter", "");

    if (window.location.href !== oldURL) {
        oldURL = window.location.href;
        elapsed = Math.floor(Date.now() / 1000);
    }

    var data: presenceData = {
        details: details,
        state: state,
        largeImageKey: "kickstarter-logo",
        startTimestamp: elapsed,
    };

    presence.setActivity(data);
});