/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/samered.glb 
*/

import React from 'react'
import { Html, useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'

export function Office(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/samered.glb')
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
        {/* <mesh name="phone_wow_title_sign" geometry={nodes.phone_wow_title_sign.geometry} material={nodes.phone_wow_title_sign.material} position={[-168.63, 411.866, 0.029]} rotation={[-Math.PI, 0, 0]} /> */}
        <mesh name="phone_wow_title_sign" geometry={nodes.phone_wow_title_sign.geometry} material={nodes.phone_wow_title_sign.material} position={[-168.63, 411.866, 0.029]} rotation={[-Math.PI, 0, 0]} >
        <Html  transform rotation={[Math.PI, 0, 0]} position={[0, -10, 0]} >
            <div
              style={{
                background: 'transparent',
                height: '400rem',
                width: '400rem',
                position: 'fixed',  
                top: '50%',          
                left: '50%',        
                transform: 'translate(-50%, -50%)',  
              }}
            >
              <img
                src="./img/wow.png"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          </Html>
        </mesh>
        <mesh name="phone_descriptor_title_text" geometry={nodes.phone_descriptor_title_text.geometry} material={nodes.phone_descriptor_title_text.material} position={[105.155, 149.455, 0.029]} rotation={[-Math.PI, 0, 0]} />
        <mesh name="phone_arrow_button_main" geometry={nodes.phone_arrow_button_main.geometry} material={nodes.phone_arrow_button_main.material} position={[178.424, 352.847, 0.029]} rotation={[-Math.PI, 0, 0]} />
        <mesh name="contact_button" geometry={nodes.contact_button.geometry} material={nodes.contact_button.material} position={[16572.182, 157.317, 0.029]} />
        <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, 0.029]} />
        <mesh name="crown_sugn_our_service" geometry={nodes.crown_sugn_our_service.geometry} material={nodes.crown_sugn_our_service.material} position={[12035.32, 385.325, 0.029]} />
        <mesh name="hello_sign_contact" geometry={nodes.hello_sign_contact.geometry} material={nodes.hello_sign_contact.material} position={[17046.137, 401.206, 0.029]} />
        <mesh name="omg_sign" geometry={nodes.omg_sign.geometry} material={nodes.omg_sign.material} position={[4320.142, 389.936, 0.029]} />
        <mesh name="Play_button" geometry={nodes.Play_button.geometry} material={nodes.Play_button.material} position={[2864.844, 275.825, -115.224]} />
        <mesh name="portfolio_text_01" geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038, 0.029]} />
        <mesh name="portfolio_text_02" geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038, 0.029]} />
        <mesh name="portfolio_text_03" geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, 0.029]} />
        <mesh name="portfolio_text_04" geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, 0.029]} />
        <mesh name="portfolio_text_05" geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, 0.029]} />
        <mesh name="portfolio_text_06" geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, 0.029]} />
        <mesh name="screen_showreel" geometry={nodes.screen_showreel.geometry} material={materials['material-04']} position={[2865.328, 286.533, -343.839]} />
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[14004.598, 252.46, 0.029]} />
        <mesh name="Tex_01" geometry={nodes.Tex_01.geometry} material={materials.Tex_01} position={[3133.68, 0, 0]} />
        <mesh name="Tex_01001" geometry={nodes.Tex_01001.geometry} material={materials.Tex_01} position={[3133.68, 0, 0]} />
        <mesh name="FloorMirror" geometry={nodes.FloorMirror.geometry} material={materials.Tex_02} position={[3133.68, 0.821, 0]} />
        <mesh name="Tex_02_011" geometry={nodes.Tex_02_011.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_001" geometry={nodes.Tex_02_001.geometry} material={materials.Tex_02} position={[16245.512, 64.865, -444.386]} />
        <mesh name="Tex_02_003" geometry={nodes.Tex_02_003.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_004" geometry={nodes.Tex_02_004.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_006" geometry={nodes.Tex_02_006.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_007" geometry={nodes.Tex_02_007.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_008" geometry={nodes.Tex_02_008.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} />
        <mesh name="Tex_02_009" geometry={nodes.Tex_02_009.geometry} material={materials.Tex_02} position={[11318.145, 120.258, -286.535]} />
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
        <mesh name="Text_Var_02" geometry={nodes.Text_Var_02.geometry} material={materials.Tex_03} position={[0.001, 0, 0]} scale={325.173} />
        <mesh name="Tex_02_010001" geometry={nodes.Tex_02_010001.geometry} material={materials.Tex_02} position={[20084.826, 5.451, -85.961]} />
        <mesh name="ImageToStlcom_logo" geometry={nodes.ImageToStlcom_logo.geometry} material={materials['Material.001']} position={[862.551, 255.775, -58.937]} rotation={[1.585, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./models//samered.glb')
