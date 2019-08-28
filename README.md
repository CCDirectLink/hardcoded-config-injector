# hardcoded-config-injector
The mod will look for a config folder in your root mod directory.
Inside the config folder, you can have a `track-list.json` and `default-tracks.json`.

Here is a sample `track-list.json`:
```
{
    "nameOfTrack": {
        "intro": "path/to/intro.ogg",
        "path": "path/to/loop.ogg",
        "introEnd": 32, // offset to trigger the loop
        "loopEnd": 64, // offset to start loop over at
        "volume": 0.5
    },
    "nameOfTrack2": {
        "path": "path/to/loop.ogg",
        "loopEnd": 64, // offset to start loop over at
        "volume": 0.5
    }
}
```
- nameOfTrack is an example of a multi-track bgm
- nameofTrack2 is an example of a single track bgm

Here is a sample `default-tracks.json`:
```
{
    "bestGirlArea": {
        "field": {
            "track": "nameOfTrack",
            "volume": 1
        },
        "battle": {
            "track": "nameOfTrack2",
            "volume": 1
        }
    }
}```
