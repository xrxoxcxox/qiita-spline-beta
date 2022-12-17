import useSpline from '@splinetool/r3f-spline'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}

export default App

function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/AEn2WTBV91dNrElh/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#f5c9da']} />
      <group {...props} dispose={null}>
        <mesh
          name="Backdrop"
          geometry={nodes.Backdrop.geometry}
          material={materials['Backdrop Material']}
          castShadow
          receiveShadow
          position={[-74.5, 1815.15, 3070.38]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[200.36, 353.45, 300]}
        />
        <group name="coffee" position={[-153.71, -59.99, 306.08]} rotation={[0.15, -0.04, -0.27]} scale={0.86}>
          <mesh
            name="Cylinder 4"
            geometry={nodes['Cylinder 4'].geometry}
            material={materials['color-5']}
            castShadow
            receiveShadow
            position={[-156.28, -23.43, 316.09]}
            rotation={[0.4, -0.09, -0.17]}
            scale={0.86}
          />
          <mesh
            name="Cylinder 3"
            geometry={nodes['Cylinder 3'].geometry}
            material={nodes['Cylinder 3'].material}
            castShadow
            receiveShadow
            position={[-149.32, -44.58, 308.54]}
            rotation={[0.15, -0.04, -0.27]}
            scale={0.86}
          />
          <mesh
            name="Cylinder 2"
            geometry={nodes['Cylinder 2'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-161, -84.4, 301.29]}
            rotation={[0.15, -0.04, -0.27]}
            scale={0.86}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[-162.75, -90.57, 300.3]}
            rotation={[0.15, -0.04, -0.27]}
            scale={0.86}
          />
        </group>
        <group name="Lifebuoy" position={[368.86, -246.68, -203.91]} rotation={[-0.15, -0.44, -0.77]} scale={0.9}>
          <mesh
            name="Torus 8"
            geometry={nodes['Torus 8'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, -1.03]}
            scale={0.9}
          />
          <mesh
            name="Torus 6"
            geometry={nodes['Torus 6'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, -2.6]}
            scale={0.9}
          />
          <mesh
            name="Torus 4"
            geometry={nodes['Torus 4'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, 2.11]}
            scale={0.9}
          />
          <mesh
            name="Torus 2"
            geometry={nodes['Torus 2'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, 0.54]}
            scale={0.9}
          />
          <mesh
            name="Torus 7"
            geometry={nodes['Torus 7'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, -1.81]}
            scale={0.9}
          />
          <mesh
            name="Torus 5"
            geometry={nodes['Torus 5'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, 2.9]}
            scale={0.9}
          />
          <mesh
            name="Torus 3"
            geometry={nodes['Torus 3'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, 1.33]}
            scale={0.9}
          />
          <mesh
            name="Torus"
            geometry={nodes.Torus.geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[368.86, -246.68, -203.91]}
            rotation={[-0.15, -0.44, -0.24]}
            scale={0.9}
          />
        </group>
        <group name="beaker" position={[-422.26, 12.06, 41.74]} rotation={[0.69, 0.28, 0.49]} scale={0.84}>
          <mesh
            name="Cylinder1"
            geometry={nodes.Cylinder1.geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[-404.34, -10.6, 16.95]}
            rotation={[0.69, 0.28, 0.49]}
            scale={0.84}
          />
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            castShadow
            receiveShadow
            position={[-417.04, 5.25, 34.11]}
            rotation={[0.69, 0.28, 0.49]}
            scale={0.84}
          />
        </group>
        <group name="card" position={[-275.5, -150, 329.71]} rotation={[-0.41, -0.22, -0.22]} scale={0.78}>
          <mesh
            name="Rectangle 7"
            geometry={nodes['Rectangle 7'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-304.61, -145.64, 321.28]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
          <mesh
            name="Rectangle 8"
            geometry={nodes['Rectangle 8'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[-303.24, -138.15, 319.73]}
            rotation={[-0.41, -0.22, -1.79]}
            scale={0.78}
          />
          <mesh
            name="Rectangle 6"
            geometry={nodes['Rectangle 6'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-302.92, -138.42, 318.53]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
          <mesh
            name="Rectangle 5"
            geometry={nodes['Rectangle 5'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-301.18, -130.98, 315.7]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
          <mesh
            name="Rectangle 4"
            geometry={nodes['Rectangle 4'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-322.66, -161.86, 324.05]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
          <mesh
            name="Rectangle 3"
            geometry={nodes['Rectangle 3'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-305.98, -172.64, 332.73]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
          <mesh
            name="Ellipse 2"
            geometry={nodes['Ellipse 2'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-244.9, -173.7, 347.78]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
          <mesh
            name="Ellipse"
            geometry={nodes.Ellipse.geometry}
            material={materials['color-5']}
            castShadow
            receiveShadow
            position={[-259.51, -171.92, 343.52]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[-274.49, -151.85, 325.47]}
            rotation={[-0.41, -0.22, -0.22]}
            scale={0.78}
          />
        </group>
        <group
          name="trophy"
          position={[-381.16, 221.26, -331.52]}
          rotation={[-0.09, -0.13, 0.44]}
          scale={[1.93, 1.85, 1.9]}
        >
          <mesh
            name="Cylinder 21"
            geometry={nodes['Cylinder 21'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-419.23, 290.58, -261.89]}
            rotation={[1.82, 0.48, -0.03]}
            scale={[1.93, 1.85, 1.9]}
          />
          <mesh
            name="Star"
            geometry={nodes.Star.geometry}
            material={materials['color-5']}
            castShadow
            receiveShadow
            position={[-418.78, 290.25, -267.88]}
            rotation={[0.23, 0.03, 0.46]}
            scale={[1.93, 1.9, 1.85]}
          />
          <mesh
            name="Cylinder2"
            geometry={nodes.Cylinder2.geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[-327.3, 106.67, -318.8]}
            rotation={[3.06, 0.13, -0.44]}
            scale={[1.93, 1.85, 1.9]}
          />
          <mesh
            name="Cube 3"
            geometry={nodes['Cube 3'].geometry}
            material={nodes['Cube 3'].material}
            castShadow
            receiveShadow
            position={[-503.41, 213.91, -345.23]}
            rotation={[-0.08, -0.14, 0.97]}
            scale={[-1.91, 1.87, 1.9]}
          />
          <mesh
            name="Cube 2"
            geometry={nodes['Cube 2'].geometry}
            material={nodes['Cube 2'].material}
            castShadow
            receiveShadow
            position={[-299.02, 314.17, -331.89]}
            rotation={[-0.09, -0.12, -0.08]}
            scale={[1.91, 1.87, 1.9]}
          />
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={nodes.Cube1.material}
            castShadow
            receiveShadow
            position={[-408.5, 278.02, -337.69]}
            rotation={[-0.09, -0.13, 0.44]}
            scale={[1.93, 1.85, 1.9]}
          />
        </group>
        <group name="Discount" position={[-21.07, -169.97, -54.63]} rotation={[0, 0, 0.26]} scale={0.96}>
          <group name="Group 26" position={[-24.53, -170.89, -70.43]} rotation={[0.08, 0.02, -0.09]} scale={0.96}>
            <mesh
              name="%"
              geometry={nodes['%'].geometry}
              material={materials['color-2']}
              castShadow
              receiveShadow
              position={[-54.39, -210.16, -71.57]}
              rotation={[0.08, 0.02, -0.09]}
              scale={0.96}
            />
            <mesh
              name="%1"
              geometry={nodes['%1'].geometry}
              material={materials['color-2']}
              castShadow
              receiveShadow
              position={[-54.39, -210.16, -71.57]}
              rotation={[0.08, 0.02, -0.09]}
              scale={0.96}
            />
            <mesh
              name="%2"
              geometry={nodes['%2'].geometry}
              material={materials['color-2']}
              castShadow
              receiveShadow
              position={[-54.39, -210.16, -71.57]}
              rotation={[0.08, 0.02, -0.09]}
              scale={0.96}
            />
            <mesh
              name="Shape"
              geometry={nodes.Shape.geometry}
              material={materials['color-5']}
              castShadow
              receiveShadow
              position={[-70.84, -238.69, -80.51]}
              rotation={[0.08, 0.02, -0.09]}
              scale={0.96}
            />
          </group>
          <group name="Group 25" position={[-1.76, -166.14, -44.43]} rotation={[-0.16, -0.07, 0.34]} scale={0.96}>
            <mesh
              name="Ellipse 21"
              geometry={nodes['Ellipse 21'].geometry}
              material={materials['color-1']}
              castShadow
              receiveShadow
              position={[-20.02, -112.89, -51.33]}
              rotation={[-0.16, -0.07, 0.34]}
              scale={0.96}
            />
            <mesh
              name="Ellipse1"
              geometry={nodes.Ellipse1.geometry}
              material={materials['color-3']}
              castShadow
              receiveShadow
              position={[-19.99, -112.97, -51.83]}
              rotation={[-0.16, -0.07, 0.34]}
              scale={0.96}
            />
            <mesh
              name="%3"
              geometry={nodes['%3'].geometry}
              material={materials['color-3']}
              castShadow
              receiveShadow
              position={[-12.61, -213.51, -35.88]}
              rotation={[-0.16, -0.07, 0.34]}
              scale={0.96}
            />
            <mesh
              name="%4"
              geometry={nodes['%4'].geometry}
              material={materials['color-3']}
              castShadow
              receiveShadow
              position={[-12.61, -213.51, -35.88]}
              rotation={[-0.16, -0.07, 0.34]}
              scale={0.96}
            />
            <mesh
              name="%5"
              geometry={nodes['%5'].geometry}
              material={materials['color-3']}
              castShadow
              receiveShadow
              position={[-12.61, -213.51, -35.88]}
              rotation={[-0.16, -0.07, 0.34]}
              scale={0.96}
            />
            <mesh
              name="Shape1"
              geometry={nodes.Shape1.geometry}
              material={materials['color-2']}
              castShadow
              receiveShadow
              position={[-14.77, -247.53, -37.44]}
              rotation={[-0.16, -0.07, 0.34]}
              scale={0.96}
            />
          </group>
        </group>
        <group name="speaker" position={[-21.71, 134.65, 120.37]} rotation={[-0.55, 0.74, -0.83]} scale={2.42}>
          <mesh
            name="Cube2"
            geometry={nodes.Cube2.geometry}
            material={nodes.Cube2.material}
            castShadow
            receiveShadow
            position={[-61.48, 4.71, 34]}
            rotation={[Math.PI / 2, Math.PI / 6, 2.25]}
            scale={2.42}
          />
          <mesh
            name="Cylinder3"
            geometry={nodes.Cylinder3.geometry}
            material={nodes.Cylinder3.material}
            castShadow
            receiveShadow
            position={[-110.34, 81.56, 31.58]}
            rotation={[-2.76, 0.58, 0.93]}
            scale={2.42}
          />
          <mesh
            name="Cylinder 22"
            geometry={nodes['Cylinder 22'].geometry}
            material={nodes['Cylinder 22'].material}
            castShadow
            receiveShadow
            position={[-1.98, 149.36, 150.21]}
            rotation={[0.38, -0.58, -0.93]}
            scale={2.42}
          />
          <mesh
            name="Torus1"
            geometry={nodes.Torus1.geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[39.58, 170.03, 177.66]}
            rotation={[-0.55, 0.74, -0.83]}
            scale={1.77}
          />
          <mesh
            name="Cylinder4"
            geometry={nodes.Cylinder4.geometry}
            material={nodes.Cylinder4.material}
            castShadow
            receiveShadow
            position={[-80.37, 100.22, 68.13]}
            rotation={[0.38, -0.58, -0.93]}
            scale={1.77}
          />
        </group>
        <group name="compass" position={[354.93, 276.53, 26.82]} rotation={[0.11, -0.04, -0.39]} scale={1.1}>
          <mesh
            name="Cube 21"
            geometry={nodes['Cube 21'].geometry}
            material={nodes['Cube 21'].material}
            castShadow
            receiveShadow
            position={[342.03, 254.73, 34.35]}
            rotation={[0.1, -0.04, 2.23]}
            scale={1.1}
          />
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={nodes.Cube3.material}
            castShadow
            receiveShadow
            position={[353.89, 263.83, 35.83]}
            rotation={[0.11, -0.04, -0.91]}
            scale={1.1}
          />
          <mesh
            name="Rectangle 31"
            geometry={nodes['Rectangle 31'].geometry}
            material={materials['Rectangle 31 Material']}
            castShadow
            receiveShadow
            position={[347.35, 258.15, 26.24]}
            rotation={[0.11, -0.04, -0.39]}
            scale={1.1}
          />
          <mesh
            name="Rectangle 21"
            geometry={nodes['Rectangle 21'].geometry}
            material={materials['Rectangle 21 Material']}
            castShadow
            receiveShadow
            position={[347.84, 258.59, 24.72]}
            rotation={[0.11, -0.04, -0.39]}
            scale={1.1}
          />
          <mesh
            name="Cylinder 31"
            geometry={nodes['Cylinder 31'].geometry}
            material={materials['Cylinder 31 Material']}
            castShadow
            receiveShadow
            position={[372.74, 320.14, 32.89]}
            rotation={[0.11, -0.04, -0.39]}
            scale={1.1}
          />
          <mesh
            name="Cylinder 23"
            geometry={nodes['Cylinder 23'].geometry}
            material={materials['Cylinder 23 Material']}
            castShadow
            receiveShadow
            position={[375.11, 325.89, 33.61]}
            rotation={[0.11, -0.04, -0.39]}
            scale={1.1}
          />
          <mesh
            name="Torus2"
            geometry={nodes.Torus2.geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[382.62, 344.15, 35.79]}
            rotation={[0.11, -0.04, -0.39]}
            scale={1.1}
          />
          <mesh
            name="Cylinder5"
            geometry={nodes.Cylinder5.geometry}
            material={nodes.Cylinder5.material}
            castShadow
            receiveShadow
            position={[347, 257.31, 19.17]}
            rotation={[1.69, -0.39, 0.05]}
            scale={2.64}
          />
        </group>
        <group name="calculator" position={[434.17, -72.63, 131.85]} rotation={[-Math.PI / 4, 0.19, 0]} scale={0.85}>
          <mesh
            name="Rectangle 71"
            geometry={nodes['Rectangle 71'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[414.62, -64.97, 125.47]}
            rotation={[-Math.PI / 4, 0.19, 0]}
            scale={0.85}
          />
          <mesh
            name="Rectangle 81"
            geometry={nodes['Rectangle 81'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[465.94, -72.07, 118.37]}
            rotation={[-Math.PI / 4, 0.19, 0]}
            scale={0.85}
          />
          <mesh
            name="Rectangle 61"
            geometry={nodes['Rectangle 61'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[445.69, -69.27, 121.17]}
            rotation={[-Math.PI / 4, 0.19, 0]}
            scale={0.85}
          />
          <mesh
            name="Rectangle 51"
            geometry={nodes['Rectangle 51'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[405.2, -78.74, 141.86]}
            rotation={[-Math.PI / 4, 0.19, 0]}
            scale={0.85}
          />
          <mesh
            name="Rectangle 41"
            geometry={nodes['Rectangle 41'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[405.2, -93.52, 156.63]}
            rotation={[-Math.PI / 4, 0.19, 0]}
            scale={0.85}
          />
          <mesh
            name="Rectangle 32"
            geometry={nodes['Rectangle 32'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[405.2, -109.04, 172.16]}
            rotation={[-Math.PI / 4, 0.19, 0]}
            scale={0.85}
          />
          <mesh
            name="Rectangle 22"
            geometry={nodes['Rectangle 22'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[435.13, -35.33, 104.44]}
            rotation={[-0.08, 0.15, -0.13]}
            scale={[0.85, 0.72, 0.85]}
          />
          <mesh
            name="Cube4"
            geometry={nodes.Cube4.geometry}
            material={nodes.Cube4.material}
            castShadow
            receiveShadow
            position={[431.72, -97.22, 138.74]}
            rotation={[-Math.PI / 4, 0.19, 0]}
            scale={0.85}
          />
        </group>
        <group name="folder" position={[-171.73, 408.83, -94.5]} rotation={[0.65, 0, 0.34]} scale={0.82}>
          <mesh
            name="Rectangle 42"
            geometry={nodes['Rectangle 42'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-167.93, 417.6, -93.77]}
            rotation={[0.9, 0.09, 0.33]}
            scale={0.82}
          />
          <mesh
            name="Rectangle 33"
            geometry={nodes['Rectangle 33'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-177.38, 426.26, -93.14]}
            rotation={[0.81, 0.06, 0.34]}
            scale={0.82}
          />
          <mesh
            name="Rectangle 23"
            geometry={nodes['Rectangle 23'].geometry}
            material={materials['color-3']}
            castShadow
            receiveShadow
            position={[-174.42, 432.51, -96.95]}
            rotation={[0.73, 0.03, 0.34]}
            scale={0.82}
          />
          <mesh
            name="Cube5"
            geometry={nodes.Cube5.geometry}
            material={nodes.Cube5.material}
            castShadow
            receiveShadow
            position={[-171.38, 420.95, -115.79]}
            rotation={[0.65, 0, 0.34]}
            scale={0.82}
          />
        </group>
        <group name="handle" position={[226.5, -92.65, -248.42]} rotation={[-0.15, -0.57, 0.33]} scale={1.21}>
          <mesh
            name="Rectangle 24"
            geometry={nodes['Rectangle 24'].geometry}
            material={materials['color-5']}
            castShadow
            receiveShadow
            position={[206.95, -64.88, -229.68]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Cylinder 24"
            geometry={nodes['Cylinder 24'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[262.7, 1.19, -227.82]}
            rotation={[1.23, 0.28, 0.6]}
            scale={1.21}
          />
          <mesh
            name="Cylinder6"
            geometry={nodes.Cylinder6.geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[145.6, -57.84, -294.92]}
            rotation={[1.23, 0.28, 0.6]}
            scale={1.21}
          />
          <mesh
            name="Ellipse 8"
            geometry={nodes['Ellipse 8'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[260.32, -24.83, -195.36]}
            rotation={[-0.15, -0.57, 1.9]}
            scale={1.21}
          />
          <mesh
            name="Ellipse 7"
            geometry={nodes['Ellipse 7'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[252.35, -45.47, -197.38]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Ellipse 81"
            geometry={nodes['Ellipse 81'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[235.05, -37.57, -209.84]}
            rotation={[-0.15, -0.57, 1.9]}
            scale={1.21}
          />
          <mesh
            name="Ellipse 4"
            geometry={nodes['Ellipse 4'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[243.6, -16.64, -207.48]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Rectangle 43"
            geometry={nodes['Rectangle 43'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[163.03, -73.87, -251.11]}
            rotation={[-0.15, -0.57, 1.9]}
            scale={1.21}
          />
          <mesh
            name="Rectangle 34"
            geometry={nodes['Rectangle 34'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[155.25, -93.46, -253.17]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Rectangle 44"
            geometry={nodes['Rectangle 44'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[139.22, -85.87, -264.75]}
            rotation={[-0.15, -0.57, 1.9]}
            scale={1.21}
          />
          <mesh
            name="Rectangle 25"
            geometry={nodes['Rectangle 25'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[147, -66.29, -262.68]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Ellipse 3"
            geometry={nodes['Ellipse 3'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[248.59, -32.03, -203.45]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Ellipse 22"
            geometry={nodes['Ellipse 22'].geometry}
            material={materials['color-2']}
            castShadow
            receiveShadow
            position={[152.06, -80.68, -258.76]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Ellipse 31"
            geometry={nodes['Ellipse 31'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[249.29, -32.19, -204.53]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Ellipse2"
            geometry={nodes.Ellipse2.geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[152.76, -80.85, -259.84]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
          <mesh
            name="Cube6"
            geometry={nodes.Cube6.geometry}
            material={nodes.Cube6.material}
            castShadow
            receiveShadow
            position={[220.27, -63.78, -262.99]}
            rotation={[-0.15, -0.57, 0.33]}
            scale={1.21}
          />
        </group>
        <group name="bell" position={[477.86, 102.23, -386.45]} rotation={[0.05, 0.26, -0.17]} scale={1.1}>
          <mesh
            name="Torus3"
            geometry={nodes.Torus3.geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[487.74, 168.96, -390.18]}
            rotation={[0.05, 0.26, -0.17]}
            scale={1.1}
          />
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[468.79, 42.1, -385.59]}
            rotation={[0.05, 0.26, -0.17]}
            scale={1.35}
          />
          <mesh
            name="Cube7"
            geometry={nodes.Cube7.geometry}
            material={nodes.Cube7.material}
            castShadow
            receiveShadow
            position={[478.48, 105.92, -386.41]}
            rotation={[0.05, 0.26, -0.17]}
            scale={1.1}
          />
        </group>
        <group name="camera" position={[189.3, 346.84, 53.88]} rotation={[0.45, 0.24, 0.33]} scale={0.83}>
          <mesh
            name="Rectangle 35"
            geometry={nodes['Rectangle 35'].geometry}
            material={materials['color-1']}
            castShadow
            receiveShadow
            position={[186.56, 348.11, 34.52]}
            rotation={[-2.7, -0.24, -0.33]}
            scale={0.83}
          />
          <mesh
            name="Rectangle 26"
            geometry={nodes['Rectangle 26'].geometry}
            material={materials['color-5']}
            castShadow
            receiveShadow
            position={[223.11, 371.94, 68.11]}
            rotation={[0.45, 0.24, 0.33]}
            scale={0.83}
          />
          <mesh
            name="Ellipse3"
            geometry={nodes.Ellipse3.geometry}
            material={materials.lens}
            castShadow
            receiveShadow
            position={[198.16, 331.55, 69.16]}
            rotation={[0.45, 0.24, 0.33]}
            scale={0.83}
          />
          <mesh
            name="Cube8"
            geometry={nodes.Cube8.geometry}
            material={nodes.Cube8.material}
            castShadow
            receiveShadow
            position={[190.07, 343.53, 44.95]}
            rotation={[0.45, 0.24, 0.33]}
            scale={0.83}
          />
        </group>
        <PerspectiveCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={5}
          fov={45}
          position={[2.06, 61.75, 1108.03]}
          rotation={[0, 0, 0]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
