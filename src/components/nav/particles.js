import Particles from 'react-tsparticles'
import particleConfig from './particlesConfig'
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground(){
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles id="tsparticles" options={particleConfig} init={particlesInit} loaded={particlesLoaded} />
    );
}