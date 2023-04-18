import * as Components from '../../stylesheets/Style_components'
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'
import {fromLonLat,toLonLat} from 'ol/proj'
import { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import Overlay from "ol/Overlay";

export const ViewLocation = ()=>{
  var marker = null
    const ref = useLocation();
    //console.log(ref.state[0])
    const map = new Map({
        target: null,
        layers: [
          new Tile({
            source: new OSM()
          }),
        ],
        view: new View({
          center: fromLonLat([ref.state[0],ref.state[1],]),
          zoom: 18
        }),
      });
    
    useEffect(()=>{
      var pos = fromLonLat([ref.state[0],ref.state[1]])
    var marker_el = document.getElementById('marker');
    marker = new Overlay({
      position: pos,
      positioning: 'center-center',
      element: marker_el,
      stopEvent: false,
      dragging: false
    });
        map.setTarget("map");
        map.addOverlay(marker);
        //console.log(location)
      },[])
    return (
        <Components.Container>
            <Components.Card flexlen="50%">
                <div id="map" className="map" style={{"height":"100%","width":"100%"}}></div>
                <div id="marker" title="Marker"></div>
            </Components.Card>
        </Components.Container>
    );
}