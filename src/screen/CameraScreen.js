import React from 'react'
import Container from '../components/Container'
import Webcam from "react-webcam";
import snap from '../images/snap.png'

import swithccamera from '../images/switchcamera.png'

import larrow from '../images/leftarrow.png'

const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: "user"
};

const WebcamComponent = () => <Webcam />;
function CameraScreen() {
    const cam = React.useRef(null);
    return (

        <Container>

            <div className="absolute w-full h-full bg-black z-10"></div>
            <div className="content absolute top-0 left-0 w-full h-full z-30">
                <div className="bg-black h-32 mt-8 flex text-white justify-even items-center" style={{ width: '393px', marginLeft: '36px' }}>
                    <img src={larrow} alt="" className="w-16 h-16 mr-8" />
                    <p className="font-bold font-sans " style={{ fontSize: '30px' }}>Scan ingredients</p>
                </div>


                <div className="mt-24" style={{ marginLeft: '29px' }}>
                    <React.Fragment>
                        <Webcam
                            audio={false}
                            height={400}
                            ref={cam}
                            screenshotFormat="image/jpeg"
                            width={402}
                            videoConstraints={videoConstraints}
                        />

                    </React.Fragment>
                </div>

                <div className="flex justify-between items-center mx-auto" style={{ marginTop: '150px', width: '350px' }}>
                    <p className="text-lg text-white">cancel</p>
                    <img src={snap} alt="" onClick={img => cam.current.capture(img)} />
                    <img src={swithccamera} alt="" />
                </div>

            </div>
        </Container>
    )
}

export default CameraScreen
