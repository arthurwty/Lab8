const formatVolumeIconPath = require('../assets/scripts/main')
describe('Test for the formatVolumeIconPath function', () => {
    test('volumeValue more than 66', () => {
        expect(formatVolumeIconPath(80)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
    test('volumeValue is less than 66 but greater than 33', () => {
        expect(formatVolumeIconPath(50)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
    test('volumeValue is less than 33 but greater than 0', () => {
        expect(formatVolumeIconPath(17)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
    test('volumeValue is less than or equal to 0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});