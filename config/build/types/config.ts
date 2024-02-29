type BuildModeType = 'development' | 'none' | 'production';

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
    css: string;
    src: string;
}

export interface BuildEnvironment {
    mode: BuildModeType;
    port: number;
}

export interface BuildOptions {
    mode: BuildModeType;
    paths: BuildPath;
    isDev: boolean;
    port: number;
}
