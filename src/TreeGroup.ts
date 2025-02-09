import { Group, Node } from "../data/data";
import { TreeNode } from "./TreeNode";



export class TreeGroup {
    private x: number;
    private y: number;
    private orbits: number[]
    private nodes: TreeNode[] = []

    constructor(data: Group) {
        this.x = data.x + 10000;
        this.y = data.y + 10000;
        this.orbits = data.orbits;
    }

    addNode(node: TreeNode) {
        this.nodes.push(node);
    }

    eachOrbit = (o: number) => {
        return `<div class="tree-group-orbit tree-group-orbit-${o}"><div>`
            + this.nodes.filter(n => n.orbit == o).map(n => n.renderBullet()).join("</div><div>")
            + `</div></div>`
    }

    render(): string {
        return `
            <div class="tree-group" style="left: ${this.x}px; top: ${this.y}px;">
                ${this.orbits.map(this.eachOrbit).join("")}
            </div>
        `;
    }
}