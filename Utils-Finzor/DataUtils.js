class DataUtils {

    static generateRandomName(baseName) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomText = '';

        for (let i = 0; i < 5; i++) {
            randomText += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return `${baseName}${randomText}`;
    }
}

export default DataUtils;