import { create } from 'zustand';


const useTextPropsStore = create((set) => ({
    textProps: {
        size: 1,
        depth: 0.2,
        color: "#0000ff",
        message: "Hey \n I'M SETARE",
    },
    setTextProps: (updates) => set((state) => ({
        textProps: { ...state.textProps, ...updates },
    }))

}))

export default useTextPropsStore;