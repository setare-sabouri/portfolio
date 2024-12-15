import { useMatcapTexture } from "@react-three/drei";
const Donut = () => {

    const [MatcapTexture] = useMatcapTexture('9F1A27_F1AF7F_CD5845_D08441', 256)
    const tempArray = Array(100)
    return (

        <>
            <mesh>
                <torusGeometry />
                <meshMatcapMaterial matcap={MatcapTexture} />

            </mesh>
        </>
    )
}


export default Donut;
