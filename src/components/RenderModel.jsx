import React from 'react'

const RenderModel = (children, className) => {
  return (
    <Canvas
    className={clsx("w-screen h-screen relative", className )}>
        <Supense fallback= {null}>
            {children}
        </Supense>
    </Canvas>
  )
}

export default RenderModel