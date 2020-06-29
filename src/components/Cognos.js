import React from "react";
import Iframe from 'react-iframe'
import { useAuth } from "./../util/auth.js";



function Cognos(props) {
  const auth = useAuth();
  if (!auth.user) return null;

  return (
    <div>
    <Iframe src="http://9.30.160.60:9300/bi/?perspective=dashboard&amp;pathRef=.public_folders%2FC4C%2FC4C%2BDashboard&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="1600" height="980" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen="">
    </Iframe>
    </div>

  );
}

export default Cognos;