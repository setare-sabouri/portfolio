import GUI from "lil-gui";
import useTextPropsStore from "./store";

const gui = new GUI({ title: "UI" })


const textTweaks = gui.addFolder('Text')
textTweaks.close()

const { textProps, setTextProps } = useTextPropsStore.getState();

textTweaks.add(textProps, "size").min(0.5).max(2).step(0.1).onFinishChange((value) => {
    setTextProps({ size: value })
})
textTweaks.add(textProps, "depth").min(0.1).max(2).step(0.1).onFinishChange((value) => {
    setTextProps({ depth: value })
})
textTweaks.addColor(textProps, "color").onChange((value) => {
    setTextProps({ color: value })
})

