/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/nightworking5.glb 
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/nightworking5.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="works_prev" position={[5730.657, 286.533, 2.865]}>
          <mesh name="work_prev_01_0" geometry={nodes.work_prev_01_0.geometry} material={materials['material-13']} />
          <mesh name="work_prev_02_1" geometry={nodes.work_prev_02_1.geometry} material={materials['material-12']} position={[859.599, 0, 0]} />
          <mesh name="work_prev_03_2" geometry={nodes.work_prev_03_2.geometry} material={materials['material-11']} position={[1719.197, 0, 0]} />
          <mesh name="work_prev_04_3" geometry={nodes.work_prev_04_3.geometry} material={materials['material-10']} position={[2578.795, 0, 0]} />
          <mesh name="work_prev_05_4" geometry={nodes.work_prev_05_4.geometry} material={materials['material-09']} position={[3438.394, 0, 0]} />
          <mesh name="work_prev_06_5" geometry={nodes.work_prev_06_5.geometry} material={materials['material-08']} position={[4297.993, 0, 0]} />
        </group>
        <group name="Sketchfab_model" position={[15843.648, 70.069, -458.745]} rotation={[-Math.PI / 2, 0, 0]} scale={[78.626, 1, 61.624]}>
          <group name="Collada_visual_scene_group">
            <group name="Camera" position={[7.359, -6.926, 4.958]} rotation={[0.943, 0.71, 0.441]}>
              <group name="Camera-camera" />
            </group>
            <group name="Circle">
              <mesh name="Material_002-material" geometry={nodes['Material_002-material'].geometry} material={materials['Material.009']} />
              <mesh name="Material_003-material002" geometry={nodes['Material_003-material002'].geometry} material={materials['Material.010']} />
              <mesh name="Material_003-material003" geometry={nodes['Material_003-material003'].geometry} material={materials['Material.010']} />
            </group>
            <group name="Light" position={[4.076, -5.956, 5.904]} rotation={[-0.268, 0.602, 1.932]}>
              <group name="Light001" />
            </group>
            <group name="Plane" position={[1.045, 0, 5.001]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh name="Material_001-material" geometry={nodes['Material_001-material'].geometry} material={materials['Material.011']} />
              <mesh name="Material_001-material001" geometry={nodes['Material_001-material001'].geometry} material={materials['Material.011']} />
              <mesh name="Material_001-material002" geometry={nodes['Material_001-material002'].geometry} material={materials['Material.011']} />
              <mesh name="Material_001-material003" geometry={nodes['Material_001-material003'].geometry} material={materials['Material.011']} />
              <mesh name="Material_001-material004" geometry={nodes['Material_001-material004'].geometry} material={materials['Material.011']} />
              <mesh name="Material_001-material005" geometry={nodes['Material_001-material005'].geometry} material={materials['Material.011']} />
            </group>
          </group>
        </group>
        <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, 0.029]} />
        <mesh name="crown_sugn_our_service" geometry={nodes.crown_sugn_our_service.geometry} material={materials['Material.003']} position={[12035.32, 385.325, 0.029]} />
        <mesh name="hello_sign_contact" geometry={nodes.hello_sign_contact.geometry} material={materials['Material.014']} position={[17046.404, 398.64, 14.091]} />
        <mesh name="Play_button" geometry={nodes.Play_button.geometry} material={materials['Material.004']} position={[2864.844, 275.825, -115.224]} />
        <mesh name="portfolio_text_01" geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038, 0.029]} />
        <mesh name="portfolio_text_02" geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038, 0.029]} />
        <mesh name="portfolio_text_03" geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, 0.029]} />
        <mesh name="portfolio_text_04" geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, 0.029]} />
        <mesh name="portfolio_text_05" geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, 0.029]} />
        <mesh name="portfolio_text_06" geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, 0.029]} />
        <mesh name="screen_showreel" geometry={nodes.screen_showreel.geometry} material={materials['material-04']} position={[2865.328, 286.533, -343.839]} />
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[14004.598, 252.46, 0.029]} />
        <mesh name="Tex_01" geometry={nodes.Tex_01.geometry} material={materials.Tex_01} position={[3133.68, 0, 0]} />
        <mesh name="FloorMirror" geometry={nodes.FloorMirror.geometry} material={materials.Tex_02} position={[3133.68, 0.821, 0]} />
        <mesh name="Tex_02_011" geometry={nodes.Tex_02_011.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_001" geometry={nodes.Tex_02_001.geometry} material={materials.Tex_02} position={[16245.512, 64.865, -444.386]} />
        <mesh name="Tex_02_003" geometry={nodes.Tex_02_003.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_004" geometry={nodes.Tex_02_004.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_007" geometry={nodes.Tex_02_007.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_010" geometry={nodes.Tex_02_010.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_012" geometry={nodes.Tex_02_012.geometry} material={materials.Tex_02} position={[11605.813, 126, -479.078]} />
        <mesh name="Tex_02_013" geometry={nodes.Tex_02_013.geometry} material={materials.Tex_02} position={[1081.763, 0.233, -483.224]} />
        <mesh name="Tex_02_014" geometry={nodes.Tex_02_014.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} />
        <mesh name="Tex_02_015" geometry={nodes.Tex_02_015.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_016" geometry={nodes.Tex_02_016.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} />
        <mesh name="Tex_02_017" geometry={nodes.Tex_02_017.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_02_018" geometry={nodes.Tex_02_018.geometry} material={materials.Tex_02} position={[4642.812, 57.755, -441.286]} />
        <mesh name="Tex_02_019" geometry={nodes.Tex_02_019.geometry} material={materials.Tex_02} position={[1082.439, 21.396, -479.564]} />
        <mesh name="Planet_Rotation" geometry={nodes.Planet_Rotation.geometry} material={materials.Tex_02} position={[16045.839, 286.533, -85.96]} />
        <mesh name="Tex_02_002001" geometry={nodes.Tex_02_002001.geometry} material={materials.Tex_02} position={[2402.937, 33.262, -189.113]} />
        <mesh name="Tex_02_017001" geometry={nodes.Tex_02_017001.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} />
        <mesh name="Tex_03" geometry={nodes.Tex_03.geometry} material={materials.Tex_03} scale={821.018} />
        <mesh name="Text_Var_02" geometry={nodes.Text_Var_02.geometry} material={materials.Tex_03} position={[0.628, -0.57, -4.082]} scale={325.173} />
        <mesh name="Tex_02_010001" geometry={nodes.Tex_02_010001.geometry} material={materials.Tex_02} position={[20084.826, 5.451, -85.961]} />
        <mesh name="ImageToStlcom_logo" geometry={nodes.ImageToStlcom_logo.geometry} material={materials['Material.005']} position={[862.551, 255.775, -58.937]} rotation={[1.585, 0, 0]} />
        <mesh name="Tex_02_002002" geometry={nodes.Tex_02_002002.geometry} material={materials.Tex_02} position={[3332.325, 33.445, -191.833]} rotation={[-Math.PI, 0.018, -Math.PI]} />
        <mesh name="portfolio_text_01001" geometry={nodes.portfolio_text_01001.geometry} material={materials['Material.007']} position={[3432.225, 316.713, -261.516]} rotation={[0, -1.528, 0]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="portfolio_text_01002" geometry={nodes.portfolio_text_01002.geometry} material={materials['Material.006']} position={[2296.807, 315.353, -260.52]} rotation={[-Math.PI, 1.567, -Math.PI]} scale={[0.379, 0.544, 0.699]} />
        <mesh name="portfolio_text_06001" geometry={nodes.portfolio_text_06001.geometry} material={materials['Material.013']} position={[10895.171, 290.826, -263.851]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        <mesh name="portfolio_text_06002" geometry={nodes.portfolio_text_06002.geometry} material={materials['Material.012']} position={[11743.628, 299.703, -273.591]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]} />
        <mesh name="about_text_block001" geometry={nodes.about_text_block001.geometry} material={materials['Material.008']} position={[-19.101, 245.761, 2.356]} scale={[0.565, 0.561, 1]} />
        <mesh name="portfolio_text_01003" geometry={nodes.portfolio_text_01003.geometry} material={materials['Material.015']} position={[4284.202, 452.401, 9.003]} scale={[0.425, 0.274, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/nightworking5.glb')