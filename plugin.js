import {joinGenerator} from './util.js';
import KeyBinderInject from './injects/keybinder.js';

export default class AssetsFix extends Plugin {
	constructor(mod) {
		super(mod);
		this.mod = mod;
		this.config = {
			bgm: {
				trackList: [],
				defaultTracks: []
			},
			controls: {
				// { "name" : {key1: ig.KEY[value], key2: ig.KEY[value] || } 
			}
		};
	}
	preload() {
		console.log('In preload');
		const fs = require('fs');
		
		const path = require('path');
		for (const mod of window.activeMods) {
			const join = joinGenerator(mod);
			
			
			const pathToTrackList = join('config', 'bgm', 'track-list.json');
			if (fs.existsSync(pathToTrackList)) {
				try {
					const track = JSON.parse(fs.readFileSync(pathToTrackList, 'utf8'));
					this.config.bgm.trackList.push(track);	
				} catch (e) {}	
			}
			
			const pathToDefaultTracks = join('config', 'bgm', 'default-tracks.json');
			
			if (fs.existsSync(pathToDefaultTracks)) {
				try {
					const defaultTrack = JSON.parse(fs.readFileSync(pathToDefaultTracks, 'utf8'));
					this.config.bgm.defaultTracks.push(defaultTrack);	
				} catch (e) {}	
			}

			const pathToControls = join('config', 'options', 'controls.json');
			if (fs.existsSync(pathToControls)) {
				try {
					const controls = JSON.parse(fs.readFileSync(pathToControls, 'utf8'));
					const configControls = this.config.controls;
					
					Object.assign(configControls, controls);	
				} catch (e) {}	
			}
			
		}
	}
	
	postload() {
		console.log('In postload');
	}
	prestart() {
		console.log('In prestart');
		

		const controls = this.config.controls;
		const configControls = {};

		for (let key in controls) {
			const actualKey = `keys-${key}`;
			sc.OPTIONS_DEFINITION[actualKey] = {
				type : "CONTROLS",
				init: {
					key1: ig.KEY[controls[key].key1],
					key2: ig.KEY[controls[key].key2]
				},
				cat: sc.OPTION_CATEGORY.CONTROLS
			};
			
			configControls[key] = actualKey;
		}
		KeyBinderInject(configControls);

		this.config.bgm.trackList.forEach((track) => {
			ig.merge(ig.BGM_TRACK_LIST, track);
		});
		
		this.config.bgm.defaultTracks.forEach((defaultTrack) => {
			ig.merge(ig.BGM_DEFAULT_TRACKS, defaultTrack);
		});

		
	}
}
