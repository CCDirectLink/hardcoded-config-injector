# hardcoded-config-injector
The mod will look for a config folder in your root mod directory.
The config file can have these folders:
`bgm` - for music related configurations
`options` - for options related configurations


Inside the options folder, you can have a `controls.json` file:

Here is a sample `controls.json`:
```
{
	"key": {
		"key1": "A",
		"key2": "_0"
	}
}
```


Inside the bgm folder, you can have a `track-list.json` and `default-tracks.json`.

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
}
```
