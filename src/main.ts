import json from "../data/data.json";
import { PoetreeData } from "../data/data";
import { TreeNode } from "./TreeNode";
import { TreeIcon } from "./TreeIcon";
import { TreeGroup } from "./TreeGroup";

customElements.define("tree-icon", TreeIcon);

const treeData = json as PoetreeData

const groups = new Map()
const nodes = new Map()

for (const g in treeData.groups) {
    const group = treeData.groups[g]
    const tg = new TreeGroup(group);
    groups.set(+g, tg)
}

for (const i in treeData.nodes) {
    const node = treeData.nodes[i]
    const tn = new TreeNode(node);
    nodes.set(i, tn);

    if (groups.has(node.group)) {
        groups.get(node.group)!.addNode(tn)
    }
}

let docGroups = ""
for (const g of groups.values()) {
    docGroups += g.render();
}



document.getElementById("app")!.innerHTML = docGroups;

document.addEventListener("click", (e) => {
    const target = e.target as Element

    if (target.parentNode && target.parentNode instanceof Element && target.parentNode.tagName == "TREE-ICON") {
        const c = target.parentNode.getAttribute("active") == "true"
        target.parentNode.setAttribute("active", "" + !c)
    }
})

let debounceTimer: any
const $zoom = document.getElementById("zoom")! as HTMLInputElement
$zoom.addEventListener("input", (e) => {
    const zoom = +e.target!.value
    document.getElementById("app")!.style.zoom = "" + zoom

    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
        document.querySelectorAll("tree-icon").forEach(e => {
            e.setAttribute("zoom", "" + Math.round(zoom))
        })
    }, 500)

})

document.getElementById("app")!.addEventListener("wheel", (e) => {
    e.preventDefault(); // Prevent the default scroll behavior

    let zoom = +$zoom.value;

    // Adjust zoom based on scroll direction
    if (e.deltaY < 0) {
        zoom = Math.min(3, zoom + 0.1); // Zoom in
    } else {
        zoom = Math.max(0.1, zoom - 0.1); // Zoom out
    }

    $zoom.value = "" + zoom; // Update the input value

    $zoom.dispatchEvent(new Event("input", { bubbles: true }));
});



