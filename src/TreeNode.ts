import { Node } from "../data/data";

export class TreeNode {
    x: number;
    y: number;
    orbit: number;

    constructor(private data: Node) {
        this.x = 0;
        this.y = 0;
        this.orbit = data.orbit || 0;
    }

    setPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    render(): string {
        return `
        <div class="node">
            <tree-icon path="${this.data.icon}" ></tree-icon>
            <h2>${this.data.name}</h2>
            <p>${this.data.stats?.join(", ")}</p>
            <p>${(this.data.reminderText || []).join(", ")}</p>
        </div>
        `;
    }

    renderBullet(): string {
        return `
        <tree-icon path="${this.data.icon}"></tree-icon>
        `;
    }
}