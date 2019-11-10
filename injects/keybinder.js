export default function KeyBinderInject(keyBindings) {
	sc.KeyBinder.inject({
		initBindings: function() {
			const values = sc.options.values;
			for (const name in keyBindings){ 
				try {
					const actualKey = keyBindings[name];
					const {key1, key2} = values[actualKey];
					if (key1 !== undefined) {
						ig.input.bind(key1, name);
						sc.fontsystem.changeKeyCodeIcon(name, key1);
					}
					if (key2 !== undefined) {
						ig.input.bind(key2, name);
					}
				} catch (e) {
					debugger;
				}
				
			}
			
			this.parent();
		}
	});
}