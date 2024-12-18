import { useTextMatCap } from "../Utils/hooks/useMatcap";
const Donut = () => {

    return (

        <>
            <mesh>
                <octahedronGeometry />
                <meshMatcapMaterial matcap={useTextMatCap()[0]} />

            </mesh>
        </>
    )
}


export default Donut;
