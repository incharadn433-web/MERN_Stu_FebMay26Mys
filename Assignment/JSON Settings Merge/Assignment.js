function mergeSettings(savedSettingsJSON, defaultSettings) {

    
    const savedSettings = JSON.parse(savedSettingsJSON);

    
    const merged = { ...defaultSettings };

    
    for (let key in savedSettings) {
        merged[key] = savedSettings[key];
    }

    
    const mergedJSON = JSON.stringify(merged);

    return {
        mergedObject: merged,
        mergedJSON: mergedJSON
    };
}
const defaultSettings = {
    theme: "light",
    notification: true,
    fontsize: 14
};

const savedSettingsJSON = '{"theme":"dark","fontsize":16}';

const result = mergeSettings(savedSettingsJSON, defaultSettings);

console.log(result);