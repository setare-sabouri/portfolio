import GUI from "lil-gui";

const gui = new GUI({
    title: "UI"
})

//Text Tweak
const textProps = {
    size: 2,
    height: 0.5,
    color: "#ffffff",
    message: "HI I'M SETARE"
}
const textTweaks = gui.addFolder('Text')
textTweaks.close()

textTweaks.add(textProps, "size").min(1).max(5).step(0.2).onFinishChange((value) => {
    textProps.size = value
})
textTweaks.add(textProps, "height").min(1).max(5).step(0.2).onFinishChange((value) => {
    textProps.height = value
})
textTweaks.addColor(textProps, "color").onFinishChange((value) => {
    textProps.color = value
})
export { gui, textProps };