/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/samered.glb 
*/
{/* <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet"> */ }
<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rock+Salt&display=swap" rel="stylesheet" /></link>

import React from 'react'
import { Html, useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { Text, Text3D } from '@react-three/drei';
import ContactForm from '../components/ContactForm'

export function Office(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/samered.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="works_prev" position={[5730.657, 286.533, 2.865]}>
          <mesh name="work_prev_01_0" geometry={nodes.work_prev_01_0.geometry} material={materials['material-13']} />
          <mesh name="work_prev_02_1" geometry={nodes.work_prev_02_1.geometry} material={materials['material-12']} position={[859.599, 0, 0]} >
          <Html>
            <div className='about-wall work-wall-text'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-160%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Secure Bag</h2>
              <p>An incredible safe consumer bag conceived to keep belongings safe in public places. With a unique locking mechanism and tamper-proof materials, the Secure Bag offers a peace of mind for travelers and urban resident.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
            </mesh>
          <mesh name="work_prev_03_2" geometry={nodes.work_prev_03_2.geometry} material={materials['material-11']} position={[1719.197, 0, 0]} >
          <Html>
            <div className='about-wall work-wall-text'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-160%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Pressure Transducer Monitor </h2>
              <p>This is to address liquid level being monitored in consumer tanks. Innovative device to keep track of the status of its tanks by an individual remotely, thus improving safety and efficiency in both industrial and consumer practices.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
          
            </mesh>
          <mesh name="work_prev_04_3" geometry={nodes.work_prev_04_3.geometry} material={materials['material-10']} position={[2578.795, 0, 0]}>
          <Html>
            <div className='about-wall work-wall-text'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-160%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Cellular-Enabled Medication Adherence Device</h2>
              <p>It is a revolutionizing device meant to help patients track medication adherence while on the move. It gives real-time alerts and reminders for patients to keep in touch with their treatment plan, improving health outcomes.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
            </mesh>
          <mesh name="work_prev_05_4" geometry={nodes.work_prev_05_4.geometry} material={materials['material-09']} position={[3438.394, 0, 0]}>
          
          <Html>
            <div className='about-wall work-wall-text'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-160%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Lorem Ipsum text</h2>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
            </mesh>
          <mesh name="work_prev_06_5" geometry={nodes.work_prev_06_5.geometry} material={materials['material-08']} position={[4297.993, 0, 0]} >
          <Html>
            <div className='about-wall work-wall-text'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '-50%',
                transform: 'translate(-160%, -50%)',
              }}
            >
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Lorem Ipsum text</h2>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <a href="#" class="read-more-btn">View Case</a>
            </div>
          </Html>
            </mesh>
        </group>
        {/* <mesh name="phone_wow_title_sign" geometry={nodes.phone_wow_title_sign.geometry} material={nodes.phone_wow_title_sign.material} position={[-168.63, 411.866, 0.029]} rotation={[-Math.PI, 0, 0]} /> */}
        <mesh name="phone_wow_title_sign" geometry={nodes.phone_wow_title_sign.geometry} material={nodes.phone_wow_title_sign.material} position={[-168.63, 411.866, 0.029]} rotation={[-Math.PI, 0, 0]} >
          <Html transform rotation={[Math.PI, 0, 0]} position={[0, -10, 0]} >
            <div
              style={{
                background: 'transparent',
                height: '400rem',
                width: '400rem',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity', 
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
        {/* <mesh name="phone_descriptor_title_text" geometry={nodes.phone_descriptor_title_text.geometry} material={nodes.phone_descriptor_title_text.material} position={[105.155, 149.455, 0.029]} rotation={[-Math.PI, 0, 0]} /> */}
        <mesh name="phone_descriptor_title_text" geometry={nodes.phone_descriptor_title_text.geometry} material={nodes.phone_descriptor_title_text.material} position={[125.155, 132.455, 0.029]} rotation={[-Math.PI, 0, 0]} >
          {/* <Text
            position={[0, 10, 0]} // Adjust position as needed
            rotation={[Math.PI, 0, 0]}
            fontSize={25}
            color="black"
          >
            Powering the Future of Technology with Innovative Microchip Solutions
          </Text> */}
          {/* <Html  transform rotation={[Math.PI, 0, 0]} position={[0, -10, 0]} >
              <div className='banner-txt'
                style={{
                  background: 'transparent',
                  height: '400rem',
                  width: '610rem',
                  position: 'fixed',  
                  top: '50%',          
                  left: '50%',        
                  transform: 'translate(-50%, -50%)',  
                }}
              >
               <p style={{fontSize:'50rem',marginTop:'75rem',}}>Powering the Future of Technology with Innovative Microchip Solutions</p>
              </div>
          </Html> */}
           <Html transform rotation={[Math.PI, 0, 0]} position={[0, -10, 0]} >
            <div
              style={{
                background: 'transparent',
                height: '350rem',
                width: '620rem',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity', 
              }}
            >
              <img
                src="./img/ban-txt-img.svg"
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
        <mesh name="phone_arrow_button_main" geometry={nodes.phone_arrow_button_main.geometry} material={nodes.phone_arrow_button_main.material} position={[178.424, 352.847, 0.029]} rotation={[-Math.PI, 0, 0]} />
        <mesh name="contact_button" geometry={nodes.contact_button.geometry} material={nodes.contact_button.material} position={[16572.182, 157.317, 0.029]} />
        {/* <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1715.285, 279.178, 0.029]} /> */}
        <mesh name="about_text_block" geometry={nodes.about_text_block.geometry} material={nodes.about_text_block.material} position={[1705.285, 310.178, 0.029]} >
          <Html>
            <div className='about-wall '
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
            {/* <Text
    position={[0, 0, 100]} // Adjust the Z-position as needed
    rotation={[0, 0, 0]} // Ensure no unnecessary rotation
    fontSize={36}
    color="#000000"
    maxWidth={780}
    anchorX="left"
    anchorY="top"
  >
About Trailblazer  </Text>

        <Text
    position={[0, 0, 100]} // Adjust the Z-position as needed
    rotation={[0, 0, 0]} // Ensure no unnecessary rotation
    fontSize={20}
    color="#000000"
    maxWidth={780}
    anchorX="center"
    anchorY="middle"
  >
    At Trailblazer Innovations, we are driven by a passion for creating groundbreaking hardware and software solutions. Our mission is to partner with our clients to deliver cutting-edge technology experiences that inspire and empower. With a focus on innovation, quality, and collaboration, we work closely with our clients to transform their vision into reality, ensuring each solution is as unique and powerful as the ideas behind it. Whether you're looking for comprehensive hardware support or custom software development, We are here to help you navigate the future of technology with confidence and expertise. Together, we can build something extraordinary.
  </Text> */}
          </Html>
        </mesh>
        <mesh name="crown_sugn_our_service" geometry={nodes.crown_sugn_our_service.geometry} material={nodes.crown_sugn_our_service.material} position={[11985.32, 395.325, 0.029]} >
        <Html transform position={[0, -10, 0]}>
            <div
              style={{
                background: 'transparent',
                height: '350rem',
                width: '320rem',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity', 
              }}
            >
              <img
                src="./img/crown-img.svg"
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
        <mesh name="hello_sign_contact" geometry={nodes.hello_sign_contact.geometry} material={nodes.hello_sign_contact.material} position={[17046.137, 401.206, 0.029]}>

        </mesh>
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
        <mesh name="omg_sign" geometry={nodes.omg_sign.geometry} material={nodes.omg_sign.material} position={[3620.142, 429.936, 0.029]} >
          <Html transform position={[0, -10, 0]}>
            <div
              style={{
                background: 'transparent',
                height: '400rem',
                width: '400rem',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity', 
              }}
            >
              <img
                src="./img/omg-icon.svg"
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
        <mesh className="reel-video-btn" name="Play_button" geometry={nodes.Play_button.geometry} material={nodes.Play_button.material} position={[2864.844, 275.825, -115.224]} >

        </mesh>
        <mesh name="portfolio_text_01" geometry={nodes.portfolio_text_01.geometry} material={nodes.portfolio_text_01.material} position={[6151.875, 287.038, 0.029]} >

        </mesh>
        <mesh name="portfolio_text_02" geometry={nodes.portfolio_text_02.geometry} material={nodes.portfolio_text_02.material} position={[7004.646, 287.038, 0.029]} >
        </mesh>
        <mesh name="portfolio_text_03" geometry={nodes.portfolio_text_03.geometry} material={nodes.portfolio_text_03.material} position={[7858.798, 287.038, 0.029]} >
        </mesh>
        <mesh name="portfolio_text_04" geometry={nodes.portfolio_text_04.geometry} material={nodes.portfolio_text_04.material} position={[8730.079, 287.038, 0.029]} >
        </mesh>
        <mesh name="portfolio_text_05" geometry={nodes.portfolio_text_05.geometry} material={nodes.portfolio_text_05.material} position={[9580.784, 287.038, 0.029]} >
        </mesh>
        <mesh name="portfolio_text_06" geometry={nodes.portfolio_text_06.geometry} material={nodes.portfolio_text_06.material} position={[10447.699, 287.038, 0.029]} >
        </mesh>
        <mesh
          name="screen_showreel"
          geometry={nodes.screen_showreel.geometry}
          material={materials['material-04']}
          position={[2865.328, 286.533, -343.839]}
        >
          {/* <Html transform rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
    <div
      className="banner-txt"
      style={{
        background: 'transparent',
        height: '1140rem',
        width: '1540rem',
        position: 'relative', // Changed from 'fixed' to 'relative'
        display: 'flex', // Ensures the iframe respects container dimensions
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden', // Prevents any overflow
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/9qUw2Xfzlps?si=7wySXKMKimSaLw8q"
        title="YouTube video player"
        style={{
          width: '100%', // Ensures the iframe fits the container
          height: '100%',
          border: 'none', // Removes default border
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </Html> */}
        </mesh>

        
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[13504.598, 250.46, 0.029]} >
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
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Hardware Design and Development</h2>
              <p>We specialize in creating and building hardware solutions tailored to your requirements. Our work ranges from custom electronics to embedded systems. We design top-notch hardware that is innovative, compatible, dependable, and operates efficiently, striving to meet and surpass industry performance benchmarks.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>02</h5>
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Software and Platform Development</h2>
              <p>We develop software applications that are very effective and perfectly qualify our hardware innovations to ensure a total package. Custom applications, cloud-based platforms, IoT solutions; all compatible and very effective on any device or environment necessary from and after becoming a complete solution partner for any customer.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>03</h5>
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Mechanical and Electrical Engineering</h2>
              <p>Our engineers bring precision and expertise to every project, whether it’s designing intricate mechanical systems or developing electrical circuits. We work closely with you to deliver integrated engineering solutions that solve real-world challenges and drive performance.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>04</h5>
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Industrial & Packaging Design</h2>
              <p>Our products encompass functionality, robustness as well as super beautiful appearance. Although beginning with sketches and 3D modeling, our designs actually fit in real-world applications. Thereafter, our design styles also guarantee that your products will be addressed in ways that will be both protective and eye-catching. Therefore, by function and branding, we give possible solutions for better user experience and highlight your great products.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>05</h5>
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Manufacturing Automation and Production</h2>
              <p>We help streamline production processes, reducing costs and time while increasing quality and efficiency. From concept to production, we leverage cutting-edge manufacturing automation techniques to deliver high-quality products at scale, on time, and within budget.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
              <div className='service-text-col'>
              <h5>06</h5>
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Mobile App Development</h2>
              <p>Bring life, function and better experiences to iPhones or Android devices through our mobile application development expert team. Whether you really need a companion app with hardware devices or a stand-alone app solution, we can develop user-centric mobile applications to keep your customers glued to the screens.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
            </div>
          </Html>
        </mesh>
        <mesh name="Tex_01" geometry={nodes.Tex_01.geometry} material={materials.Tex_01} position={[3133.68, 0, 0]} >
       
        </mesh>
        <mesh name="Tex_01001" geometry={nodes.Tex_01001.geometry} material={materials.Tex_01} position={[3133.68, 0, 0]} >
      
        </mesh>
        <mesh name="FloorMirror" geometry={nodes.FloorMirror.geometry} material={materials.Tex_02} position={[3133.68, 0.821, 0]} >
        </mesh>
        <mesh name="Tex_02_011" geometry={nodes.Tex_02_011.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} >
      
        </mesh>
        <mesh name="Tex_02_001" geometry={nodes.Tex_02_001.geometry} material={materials.Tex_02} position={[16245.512, 64.865, -444.386]} >
      
        </mesh>
        <mesh name="Tex_02_003" geometry={nodes.Tex_02_003.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} >
          
        </mesh>
        <mesh name="Tex_02_004" geometry={nodes.Tex_02_004.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} >
        </mesh>
        <mesh name="Tex_02_006" geometry={nodes.Tex_02_006.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} >
        </mesh>
        <mesh name="Tex_02_007" geometry={nodes.Tex_02_007.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} >
        </mesh>
        <mesh name="Tex_02_008" geometry={nodes.Tex_02_008.geometry} material={materials.Tex_02} position={[3133.68, 0, 0]} >
        </mesh>
        <mesh name="Tex_02_009" geometry={nodes.Tex_02_009.geometry} material={materials.Tex_02} position={[11318.145, 120.258, -286.535]} >
          
        </mesh>
        <mesh name="Tex_02_010" geometry={nodes.Tex_02_010.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} >
        </mesh>
        <mesh name="Tex_02_012" geometry={nodes.Tex_02_012.geometry} material={materials.Tex_02} position={[11605.813, 126, -479.078]} >
        </mesh>
        <mesh name="Tex_02_013" geometry={nodes.Tex_02_013.geometry} material={materials.Tex_02} position={[1081.763, 0.233, -483.224]} >
        </mesh>
        <mesh name="Tex_02_014" geometry={nodes.Tex_02_014.geometry} material={materials.Tex_02} position={[16045.978, 0, -85.961]} >
        </mesh>
        <mesh name="Tex_02_015" geometry={nodes.Tex_02_015.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} >
        </mesh>
        <mesh name="Tex_02_016" geometry={nodes.Tex_02_016.geometry} material={materials.Tex_02} position={[11636.431, 0.8, -348.8]} >
        </mesh>
        <mesh name="Tex_02_017" geometry={nodes.Tex_02_017.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} >
        </mesh>
        <mesh name="Tex_02_018" geometry={nodes.Tex_02_018.geometry} material={materials.Tex_02} position={[4642.812, 57.755, -441.286]} >
        </mesh>
        <mesh name="Tex_02_019" geometry={nodes.Tex_02_019.geometry} material={materials.Tex_02} position={[1082.439, 21.396, -479.564]} >
        </mesh>
        <mesh name="Planet_Rotation" geometry={nodes.Planet_Rotation.geometry} material={materials.Tex_02} position={[16045.839, 286.533, -85.96]} >
        </mesh>
        <mesh name="Tex_02_002001" geometry={nodes.Tex_02_002001.geometry} material={materials.Tex_02} position={[2402.937, 33.262, -189.113]} >
        </mesh>
        <mesh name="Tex_02_017001" geometry={nodes.Tex_02_017001.geometry} material={materials.Tex_02} position={[11664.611, 62.413, -470.158]} >
        </mesh>
        <mesh name="Tex_03" geometry={nodes.Tex_03.geometry} material={materials.Tex_03} scale={821.018} >
        </mesh>
        <mesh name="Text_Var_02" geometry={nodes.Text_Var_02.geometry} material={materials.Tex_03} position={[0.001, 0, 0]} scale={325.173} >
        </mesh>
        <mesh name="Tex_02_010001" geometry={nodes.Tex_02_010001.geometry} material={materials.Tex_02} position={[20084.826, 5.451, -85.961]} >
          </mesh>
        <mesh name="services_text_block" geometry={nodes.services_text_block.geometry} material={nodes.services_text_block.material} position={[14004.598, 252.46, 0.029]} >
        {/* <Html>
            <div className='about-wall work-wall-text service-text-blog'
              style={{
                width: '40rem',
                position: 'fixed',
                top: '0%',
                left: '0%',
                transform: 'translate(-170%, -50%)',
              }}
            >
              <div className='service-text-col'>
              <h5>02</h5>
              <h2 style={{ fontSize: '30px', marginTop: '1rem', Top: '0', }}>Software and Platform Development</h2>
              <p>We develop software applications that are very effective and perfectly qualify our hardware innovations to ensure a total package. Custom applications, cloud-based platforms, IoT solutions; all compatible and very effective on any device or environment necessary from and after becoming a complete solution partner for any customer.</p>
              <a href="#" class="read-more-btn">View Case</a>
              </div>
            </div>
          </Html> */}
        </mesh>
        <mesh name="ImageToStlcom_logo" geometry={nodes.ImageToStlcom_logo.geometry} material={materials['Material.001']} position={[862.551, 255.775, -58.937]} rotation={[1.585, 0, 0]} >

        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/samered.glb')

