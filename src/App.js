
import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SelectingCalories from "./screen/SelectingCalories";
import Test from "./components/Test";
import UploadImage from "./screen/UploadImage";
import React, { useState, useEffect } from 'react'
import RecipiesScreen from "./screen/RecipiesScreen";
import RecipieDetail from "./screen/RecipieDetail";
import HomepageScreen from "./screen/HomepageScreen";
import CameraScreen from "./screen/CameraScreen";
import MultistepForm from "./screen/MultistepForm";
import Imagetest from "./components/Imagetest";
import OtherTest from "./components/OtherTest";

function App() {
  const [formStep, setFormStep] = useState(0)



  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <div className="flex justify-center">
            <LoginScreen />
          </div>
        </Route>

        <Route path="/submitdata/">
          <div className="flex justify-center">
            <SignupScreen />
          </div>
        </Route>



        <Route path="/select-calories/">
          <div className="flex justify-center bg-black w-full h-100">
            <SelectingCalories />
          </div>
        </Route>

        <Route path="/test/" exact>
          <OtherTest />
          <Imagetest />
        </Route>

        <Route path="/upload-image/">
          <div className="flex justify-center bg-black w-full h-100">
            <UploadImage />
          </div>
        </Route>


        <Route path="/recipies/">
          <div className="flex justify-center bg-black w-full h-100">
            <RecipiesScreen />
          </div>
        </Route>



        <Route path="/recipie-detail/">
          <div className="flex justify-center bg-black w-full h-100">
            <RecipieDetail />
          </div>
        </Route>

        <Route path="/homepage/">
          <div className="flex justify-center bg-black w-full h-100">
            <HomepageScreen />
          </div>
        </Route>

        <Route path="/camera/">
          <div className="flex justify-center bg-black w-full h-100">
            <CameraScreen />
          </div>
        </Route>

        <Route path="/multistep/">
          <div className="flex justify-center bg-black w-full h-100">
            <MultistepForm />
          </div>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
