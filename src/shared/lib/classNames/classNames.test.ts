import {classNames} from './classNames';

describe('classNames', () => {
    test('should return an empty string for no arguments', () => {
        expect(classNames()).toBe('');
    });

    test('should concatenate string arguments', () => {
        expect(classNames('one', 'two', 'three')).toBe('one two three');
    });

    test('should include keys with truthy values from object arguments', () => {
        const result = classNames({
            'class-one': true,
            'class-two': false,
            'class-three': true,
        });
    
        expect(result).toBe('class-one class-three');
    });

    test('should skip falsy, null, and undefined values', () => {
        const result = classNames(null, 'one', undefined, { 'class-two': false });
    
        expect(result).toBe('one');
    });
});
