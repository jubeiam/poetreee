import { SkillSprites, Coords } from "../data/data";
import json from "../data/data.json";

const skillSprites = json.skillSprites as SkillSprites

type IconSprite = { filename: string; x: number; y: number; w: number; h: number; }

export class TreeIcon extends HTMLElement {
    private path: string = this.getAttribute("path") || "";
    private zoom: number = parseInt(this.getAttribute("zoom") || "1")
    private active: boolean = this.getAttribute("active") == "true"

    static observedAttributes = ["path", "zoom", "active"];

    constructor() {
        super();
        this.innerHTML = this.render();
    }

    findSprite(p: string): IconSprite {
        for (const type in skillSprites) {
            for (const i in skillSprites[type]) {
                const sprite = skillSprites[type][i]
                const coords = sprite.coords[p]

                const zoomlvl = this.zoom
                const active = this.active ? "" : "-disabled"
                const skills = `skills${active}-${zoomlvl}`
                const groups = `groups-${zoomlvl}`


                if (coords != undefined && (sprite.filename.includes(skills) || sprite.filename.includes(groups))) {
                    return {
                        filename: sprite.filename,
                        x: coords.x,
                        y: coords.y,
                        w: coords.w,
                        h: coords.h
                    }
                }
            }

        }

        throw new Error("Path not found - " + p)
    }

    findSprites(p: string): { filename: string; cls: string; x: number; y: number; w: number; h: number; }[] {
        const sprites: { filename: string; cls: string; x: number; y: number; w: number; h: number; }[] = []

        for (const type in skillSprites) {
            for (const i in skillSprites[type]) {
                const sprite = skillSprites[type][i]

                if (sprite.coords[p] != undefined) {
                    const cls = sprite.filename.replace(/\..*$/, "")

                    sprites.push({
                        filename: sprite.filename,
                        cls: cls,
                        x: sprite.coords[p].x,
                        y: sprite.coords[p].y,
                        w: sprite.coords[p].w,
                        h: sprite.coords[p].h,
                    })

                    return sprites
                }
            }

        }

        return sprites
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case "path":
                this.path = newValue;
                this.innerHTML = this.render();
                break
            case "zoom":
                this.zoom = parseInt(newValue) || 1;
                this.innerHTML = this.render();
                break
            case "active":
                this.active = newValue == "true";
                this.innerHTML = this.render();
                break
        }
    }


    render(): string {
        if (this.path == "") {
            return ""
        }

        const sprite = this.findSprite(this.path)

        return `<div 
            class="skill" 
            style="background-image: url(/data/assets/${sprite.filename}); background-position: -${sprite.x}px -${sprite.y}px; width: ${sprite.w}px; height: ${sprite.h}px;"
        ></div>
        `
    }


}
