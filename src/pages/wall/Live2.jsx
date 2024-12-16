/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/nightworking7.glb 
*/

import React from 'react'
import { Html, useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import ContactForm from '../components/ContactForm'

export function Office(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/nightworking7.glb')
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
        <group name="Sketchfab_model001" position={[11326.109, -1.963, -301.211]} rotation={[-Math.PI / 2, 0, 0]} scale={[9.862, 8.02, 6.154]}>
          <group name="ad72bb6817744cbea1b39b136ec1313cfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="ghost1" position={[-0.929, 37.654, -1.616]} rotation={[-0.815, 0, 0]} scale={0.095}>
                  <mesh name="ghost1_pac_&_ghost_0" geometry={nodes['ghost1_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[-0.001, 0, 0]}  >
                    
                  </mesh>
                </group>
                <group name="ghost2" position={[6.745, 41.929, -6.15]} rotation={[-0.815, 0, 0]} scale={0.095}>
                  <mesh name="ghost2_pac_&_ghost_0" geometry={nodes['ghost2_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[-0.001, 0, 0]}  >
                    
                  </mesh>
                </group>
                <group name="ghost3" position={[0.917, 37.645, -1.606]} rotation={[-0.815, 0, 0]} scale={0.095}>
                  <mesh name="ghost3_pac_&_ghost_0" geometry={nodes['ghost3_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[0.001, 0, 0]} >
                    
                  </mesh>
                </group>
                <group name="ghost4" position={[-3.883, 37.687, -1.65]} rotation={[-0.815, 0, 0]} scale={0.095}>
                  <mesh name="ghost4_pac_&_ghost_0" geometry={nodes['ghost4_pac_&_ghost_0'].geometry} material={materials.pac__ghost} position={[0.001, 0, 0]}  >
                    
                  </mesh>
                </group>
                <group name="pacman" position={[7.345, 37.744, -1.735]} rotation={[-0.815, 0, 0]} scale={0.095}>
                  <group name="mouth_bott">
                    <group name="Object_13" position={[0, -0.317, 0]}>
                      <mesh name="mouth_bott_pac_&_ghost_0" geometry={nodes['mouth_bott_pac_&_ghost_0'].geometry} material={materials.pac__ghost}  >
                        
                      </mesh>
                    </group>
                  </group>
                  <group name="mouth_top">
                    <group name="Object_10" position={[0, -0.317, 0]}>
                      <mesh name="mouth_top_pac_&_ghost_0" geometry={nodes['mouth_top_pac_&_ghost_0'].geometry} material={materials.pac__ghost}  >
                        
                      </mesh>
                    </group>
                  </group>
                  <group name="Object_7" position={[0, -0.317, 0]}>
                    <mesh name="pacman_pac_&_ghost_0" geometry={nodes['pacman_pac_&_ghost_0'].geometry} material={materials.pac__ghost}  >
                      
                    </mesh>
                  </group>
                </group>
                <group name="pac_man_machine" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="pac_man_machine_automat_0" geometry={nodes.pac_man_machine_automat_0.geometry} material={materials.automat}  >
                    
                  </mesh>
                </group>
                <group name="scheibe" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="scheibe_scheibe_0" geometry={nodes.scheibe_scheibe_0.geometry} material={materials.scheibe} >
                    
                  </mesh>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, -0.9]} >
          <Html>
              <div className='about-wall about-wall-text'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '0%',
                  transform: 'translate(-50%, -50%)',
                  willChange: 'transform, opacity', 
                }}
              >
                <h2 style={{ fontSize: '36px', marginTop: '1rem', Top: '0', }}>About Trailblazer</h2>
                <p>Trailblazer Innovations is actually a new style of consultancy that develops the bold business idea into a businessable solution. We are both software and hardware developers with very good and extremely deep technical capabilities, while loving the future very much. Helios, our proprietary framework, allows us to embrace agility and efficiency for creative product disruption and life-empowering change in the industries.
                  <br/>Our mission is to deliver innovative, fully functional products quickly and cost-effectively, helping businesses turn their ideas into reality without the constraints of time and budget.</p>
                <a href="#" class="read-more-btn">Read More</a>
                <div className='hello-img'>
                  <img
                    src="./img/hello-icon.svg"
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            
            </Html>
        </mesh>  
        <mesh name="crown_sugn_our_service" geometry={nodes.crown_sugn_our_service.geometry} material={materials['Material.003']} position={[12035.32, 385.325, 0.029]} />
        <mesh name="hello_sign_contact" geometry={nodes.hello_sign_contact.geometry} material={materials['Material.014']} position={[17046.404, 398.64, 14.091]} />
        <mesh 
            name="contact_form_mesh" 
            geometry={nodes.hello_sign_contact.geometry} 
            material={nodes.hello_sign_contact.material} 
            position={[17596.137, 301.206, -3.029]}

            >
                <Html>
                <ContactForm />
                </Html>
            
            </mesh>
        <mesh name="Play_button" geometry={nodes.Play_button.geometry} material={materials['Material.004']} position={[2864.844, 275.825, -115.224]} />
        <mesh name="portfolio_text_01" geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038,  -0.49]} >
          <Html>
              <div className='about-wall work-wall-text work-txt-wal'
                style={{
                  width: '40rem',
                  position: 'fixed',
                  top: '0%',
                  left: '-50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Secure Bag</h2>
                <p>An incredible safe consumer bag conceived to keep belongings safe in public places. With a unique locking mechanism and tamper-proof materials, the Secure Bag offers a peace of mind for travelers and urban resident.</p>
                <a href="#" class="read-more-btn">View Case</a>
              </div>
            </Html>
        </mesh>
        <mesh name="portfolio_text_02" geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038, -0.29]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Pressure Transducer Monitor </h2>
              <p>This is to address liquid level being monitored in consumer tanks. Innovative device to keep track of the status of its tanks by an individual remotely, thus improving safety and efficiency in both industrial and consumer practices.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_03" geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, -0.029]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Cellular-Enabled Medication Adherence Device</h2>
              <p>It is a revolutionizing device meant to help patients track medication adherence while on the move. It gives real-time alerts and reminders for patients to keep in touch with their treatment plan, improving health outcomes.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_04" geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, -0.029]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Secure Bag</h2>
              <p>An incredible safe consumer bag conceived to keep belongings safe in public places. With a unique locking mechanism and tamper-proof materials, the Secure Bag offers a peace of mind for travelers and urban resident.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_05" geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, -0.029]} >
        <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Pressure Transducer Monitor </h2>
              <p>This is to address liquid level being monitored in consumer tanks. Innovative device to keep track of the status of its tanks by an individual remotely, thus improving safety and efficiency in both industrial and consumer practices.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        <mesh name="portfolio_text_06" geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, -0.29]} >
          <Html>
            <div className='about-wall work-wall-text work-txt-wal'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Cellular-Enabled Medication Adherence Device</h2>
              <p>It is a revolutionizing device meant to help patients track medication adherence while on the move. It gives real-time alerts and reminders for patients to keep in touch with their treatment plan, improving health outcomes.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
        </mesh>
        
        <mesh name="screen_showreel" geometry={nodes.screen_showreel.geometry} material={materials['material-04']} position={[2865.328, 286.533, -343.839]}  >
          
        </mesh>
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material}  position={[13504.598, 252.46, -0.9]}  >
        <Html  style={{
                width: '1000rem',

              }} >
            <div className='about-wall work-wall-text service-text-row'
              style={{
                width: '1000rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-40rem, -50%)',
              }}
            >
              <div className='service-text-col'  style={{
                width: '',
              }}>
              <h5>01</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Hardware Design and Development</h2>
              <p>We specialize in creating and building hardware solutions tailored to your requirements. Our work ranges from custom electronics to embedded systems. We design top-notch hardware that is innovative, compatible, dependable, and operates efficiently, striving to meet and surpass industry performance benchmarks.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>02</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Software and Platform Development</h2>
              <p>We develop software applications that are very effective and perfectly qualify our hardware innovations to ensure a total package. Custom applications, cloud-based platforms, IoT solutions; all compatible and very effective on any device or environment necessary from and after becoming a complete solution partner for any customer.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>03</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Mechanical and Electrical Engineering</h2>
              <p>Our engineers bring precision and expertise to every project, whether it’s designing intricate mechanical systems or developing electrical circuits. We work closely with you to deliver integrated engineering solutions that solve real-world challenges and drive performance.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>04</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Industrial & Packaging Design</h2>
              <p>Our products encompass functionality, robustness as well as super beautiful appearance. Although beginning with sketches and 3D modeling, our designs actually fit in real-world applications. Thereafter, our design styles also guarantee that your products will be addressed in ways that will be both protective and eye-catching. Therefore, by function and branding, we give possible solutions for better user experience and highlight your great products.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>05</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Manufacturing Automation and Production</h2>
              <p>We help streamline production processes, reducing costs and time while increasing quality and efficiency. From concept to production, we leverage cutting-edge manufacturing automation techniques to deliver high-quality products at scale, on time, and within budget.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>06</h5>
              <h2 style={{ fontSize: '27px', marginTop: '1rem', Top: '0', }}>Mobile App Development</h2>
              <p>Bring life, function and better experiences to iPhones or Android devices through our mobile application development expert team. Whether you really need a companion app with hardware devices or a stand-alone app solution, we can develop user-centric mobile applications to keep your customers glued to the screens.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
            </div>
          </Html>
        </mesh>
        <mesh name="Tex_01" geometry={nodes.Tex_01.geometry} material={materials.Tex_01} position={[3133.68, 0, 0]}  >
          
        </mesh>
        <mesh name="FloorMirror" geometry={nodes.FloorMirror.geometry} material={materials.Tex_02} position={[3133.68, 0.821, 0]} >
          
        </mesh>
        <mesh name="Tex_02_011" geometry={nodes.Tex_02_011.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]}  >
          
        </mesh>
        <mesh name="Tex_02_001" geometry={nodes.Tex_02_001.geometry} material={materials.Tex_02} position={[16245.512, 64.865, -444.386]}  >
          
        </mesh>
        <mesh name="Tex_02_003" geometry={nodes.Tex_02_003.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]}  >
          
        </mesh>
        <mesh name="Tex_02_004" geometry={nodes.Tex_02_004.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]}  >
          
        </mesh>
        <mesh name="Tex_02_007" geometry={nodes.Tex_02_007.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]}  >
          
        </mesh>
        <mesh name="Tex_02_010" geometry={nodes.Tex_02_010.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]}  >
          
        </mesh>
        <mesh name="Tex_02_012" geometry={nodes.Tex_02_012.geometry} material={materials.Tex_02} position={[11605.813, 126, -479.078]}  >
          
        </mesh>
        <mesh name="Tex_02_013" geometry={nodes.Tex_02_013.geometry} material={materials.Tex_02} position={[1081.763, 0.233, -483.224]}  >
          
        </mesh>
        <mesh name="Tex_02_014" geometry={nodes.Tex_02_014.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]}  >
          
        </mesh>
        <mesh name="Tex_02_015" geometry={nodes.Tex_02_015.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]}  >
          
        </mesh>
        <mesh name="Tex_02_016" geometry={nodes.Tex_02_016.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]}  >
          
        </mesh>
        <mesh name="Tex_02_017" geometry={nodes.Tex_02_017.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]}  >
          
        </mesh>
        <mesh name="Tex_02_018" geometry={nodes.Tex_02_018.geometry} material={materials.Tex_02} position={[4642.812, 57.755, -441.286]}  >
          
        </mesh>
        <mesh name="Tex_02_019" geometry={nodes.Tex_02_019.geometry} material={materials.Tex_02} position={[1082.439, 21.396, -479.564]}  >
          
        </mesh>
        <mesh name="Planet_Rotation" geometry={nodes.Planet_Rotation.geometry} material={materials.Tex_02} position={[16045.839, 286.533, -85.96]}  >
          
        </mesh>
        <mesh name="Tex_02_002001" geometry={nodes.Tex_02_002001.geometry} material={materials.Tex_02} position={[2402.937, 33.262, -189.113]}  >
          
        </mesh>
        <mesh name="Tex_02_017001" geometry={nodes.Tex_02_017001.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} >
          
        </mesh>
        <mesh name="Tex_03" geometry={nodes.Tex_03.geometry} material={materials.Tex_03} scale={821.018}   >
          
        </mesh>
        <mesh name="Text_Var_02" geometry={nodes.Text_Var_02.geometry} material={materials.Tex_03} position={[0.628, -0.57, -4.082]} scale={325.173}  >
           
        </mesh>
        <mesh name="Tex_02_010001" geometry={nodes.Tex_02_010001.geometry} material={materials.Tex_02} position={[20084.826, 5.451, -85.961]}  >
          
        </mesh>
        <mesh name="ImageToStlcom_logo" geometry={nodes.ImageToStlcom_logo.geometry} material={materials['Material.005']} position={[862.551, 255.775, -58.937]} rotation={[1.585, 0, 0]}  >
          
        </mesh>
        <mesh name="Tex_02_002002" geometry={nodes.Tex_02_002002.geometry} material={materials.Tex_02} position={[3332.325, 33.445, -191.833]} rotation={[-Math.PI, 0.018, -Math.PI]}  >
          
        </mesh>
        <mesh name="portfolio_text_01001" geometry={nodes.portfolio_text_01001.geometry} material={materials['Material.007']} position={[3432.225, 316.713, -261.516]} rotation={[0, -1.528, 0]} scale={[0.379, 0.544, 0.699]}  >
          
        </mesh>
        <mesh name="portfolio_text_01002" geometry={nodes.portfolio_text_01002.geometry} material={materials['Material.006']} position={[2296.807, 315.353, -260.52]} rotation={[-Math.PI, 1.567, -Math.PI]} scale={[0.379, 0.544, 0.699]} >
          
        </mesh>
        <mesh name="portfolio_text_06001" geometry={nodes.portfolio_text_06001.geometry} material={materials['Material.013']} position={[10895.171, 290.826, -263.851]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]}  >
          
        </mesh>
        <mesh name="portfolio_text_06002" geometry={nodes.portfolio_text_06002.geometry} material={materials['Material.012']} position={[11743.628, 299.703, -273.591]} rotation={[-0.021, 1.57, 0.021]} scale={[0.422, 0.598, 1.188]}  >
          
        </mesh>
        <mesh name="about_text_block001" geometry={nodes.about_text_block001.geometry} material={materials['Material.008']} position={[-19.101, 245.761, 2.356]} scale={[0.565, 0.561, 1]}  >
          
        </mesh>
        <mesh name="portfolio_text_01003" geometry={nodes.portfolio_text_01003.geometry} material={materials['Material.015']} position={[4284.202, 452.401, 9.003]} scale={[0.425, 0.274, 1]}  >
          
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/nightworking7.glb')