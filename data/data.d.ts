export interface FlavourTextRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Ascendancy {
    id: string;
    name: string;
    flavourText?: string;
    flavourTextColour?: string;
    flavourTextRect?: FlavourTextRect;
}

export interface CharacterClass {
    name: string;
    base_str: number;
    base_dex: number;
    base_int: number;
    ascendancies: Ascendancy[];
}

export interface Coords {
    [key: string]: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}

export interface Sprites {
    line: {
        [key: string]: {
            coords: Coords;
            PSLineDeco: {
                x: number;
                y: number;
                w: number;
                h: number;
            };
        };
    };
    jewelRadius: {
        [key: string]: {
            filename: string;
            w: number;
            h: number;
            coords: Coords;
        };
    };
}

export interface Points {
    totalPoints: number;
    ascendancyPoints: number;
}

export interface MasteryEffect {
    effect: number,
    stats: string[],
    reminderText?: string[],
}

export interface Node {
    activeEffectImage?: string,
    activeIcon?: string,
    inactiveIcon?: string,
    group?: number,
    icon: string,
    in?: any[],
    isNotable: boolean,
    name: string,
    orbit?: number,
    orbitIndex?: number,
    out?: string[],
    recipe?: string[],
    skill: number,
    stats?: string[],
    reminderText?: string[],
    isMastery?: boolean,
    masteryEffects: MasteryEffect[]
}

export interface SkillSprites {
    [key: string]: {
        filename: string;
        coords: Coords;
    }[]
}

export interface Group {
    x: number;
    y: number;
    orbits: number[];
    nodes: string[];
}

export interface PoetreeData {
    tree: string;
    classes: CharacterClass[];
    sprites: Sprites;
    imageZoomLevels: number[];
    points: Points;
    nodes: Record<string, Node>;
    skillSprites: SkillSprites
    groups: Record<string, Group>
}