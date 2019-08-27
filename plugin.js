import {joinGenerator} from './util.js';

export default class AssetsFix extends Plugin {
	constructor(mod) {
		super(mod);
		this.mod = mod;
		this.config = {
			bgm: {
				trackList: [],
				defaultTracks: []
			}
		};
	}
	preload() {
		console.log('In preload');
		const fs = require('fs');
		
		const path = require('path');
		for (const mod of window.activeMods) {
			const join = joinGenerator(mod);
			
			// check if 
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
		}
	}
	
	postload() {
		console.log('In postload');
	}
	prestart() {
		console.log('In prestart');
		
		
		this.config.bgm.trackList.forEach((track) => {
			ig.merge(ig.BGM_TRACK_LIST, track);
		});
		
		this.config.bgm.defaultTracks.forEach((defaultTrack) => {
			ig.merge(ig.BGM_DEFAULT_TRACKS, defaultTrack);
		});
	}
}
