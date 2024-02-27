type ClassNamesArgumentValueType = string | void | null;

type ClassNamesArgumentType = ClassNamesArgumentValueType | {[key: string]: ClassNamesArgumentValueType | boolean};

export function classNames(...argumentList: Array<ClassNamesArgumentType>): string {
    const classNameList: Array<string> = [];

    for (const classNameData of argumentList) {
        if (!classNameData) {
            continue;
        }

        if (typeof classNameData === 'string') {
            classNameList.push(classNameData);
            continue;
        }

        for (const key in classNameData) {
            if (classNameData[key]) {
                classNameList.push(key);
            }
        }
    }

    return classNameList.join(' ');
}
