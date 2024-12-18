
import { useMatcapTexture } from "@react-three/drei";
import * as THREE from 'three'
import { useEffect, useMemo } from "react";
export const useTextMatCap = () => {
    const [matCapTextue] = useMatcapTexture('9F1A27_F1AF7F_CD5845_D08441', 256)

    useEffect(() => {
        matCapTextue.colorSpace = THREE.SRGBColorSpace;
        matCapTextue.needsUpdate = true;
    }, [matCapTextue]);

    const material = useMemo(() => {
        const material = new THREE.MeshMatcapMaterial();
        material.matcap = matCapTextue;
        material.needsUpdate = true;
        return material;
    }, [matCapTextue]);

    return material;

}





