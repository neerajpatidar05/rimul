import React, { useState, useEffect, useRef } from "react";
import OSM from "ol/source/OSM";
import "./styles.css";
import {toStringXY} from 'ol/coordinate';
import { Feature, Map, View } from "ol";
import VectorTileLayer from "ol/layer/VectorTile";
import { createXYZ, wrapX } from "ol/tilegrid";
import { getArea } from "ol/sphere";
import { getBottomLeft, getTopRight } from "ol/extent";
import { transformExtent } from "ol/proj";
import apply from "ol-hashed";
import { fromExtent } from "ol/geom/Polygon";
import VectorTileSource from "ol/source/VectorTile";
import TileLayer from "ol/layer/Tile";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import { getKey } from "ol/tilecoord";
import Contract from "../../Contract";
import rimulecontract from "../../RimuleContract";
import Overlay from 'ol/Overlay';
import UrlTile from "ol/source/UrlTile";
//var coord = [22.7196,75.8577];
var coord=[75.8577,22.7196]
var out = toStringXY(coord, 4)

function OpenLayer(props) {
  const mintData = {};
  let activeMintKey;
  const windowObj = window;
  let currentAccount;
  const [map, setMap] = useState();
  const [mapObj, setmapObj] = useState();
  const mapElement = useRef();
  let initialMap;
  useEffect(() => {
    initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
     
        
        mintGridLayer,
        mintedLayer,
       ],
       
      view: new View({
        center: [0, 0],
        maxZoom: 19,
        zoom: 0,
      }),
      
    });
    setMap(initialMap);
    // apply(initialMap)
  }, []);
  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
      // Do any other work!
    }
  }

  function popupOnclick(tile, sqFt) {
    var e = document.getElementById("popup");
    e.innerHTML =
      "<div>Bounds</div> <div> SW: " +
      tile.lat +
      "," +
      tile.lng +
      ", </div>\n <div> Size (Square Feet): " +
      sqFt 
  }
  var bounds = {
    17: [
        [20969, 20970],
        [50657, 50658],
    ],
    18: [
        [41939, 41940],
        [101315, 101317],
    ],
    19: [
        [83878, 83881],
        [202631, 202634],
    ],
    20: [
        [167757, 167763],
        [405263, 405269],
    ],
};

  if (map) {
    console.log("hii from coord");

var popup = new Overlay({
  element: document.getElementById('opooo'),
  
  position:out,
  getTileUrl: function (coord, zoom) {
    if (zoom < 17 ||
        zoom > 20 ||
        bounds[zoom][0][0] > coord.x ||
        coord.x > bounds[zoom][0][1] ||
        bounds[zoom][1][0] > coord.y ||
        coord.y > bounds[zoom][1][1]) {
        return "";
    }
    return [
        //"https://www.gstatic.com/io2010maps/tiles/5/L2_",
        " https://tile.openstreetmap.org/18/510/844.png",
        // zoom,
        // "_",
        // coord.x,
        // "_",
        // coord.y,
        // ".png",
    ].join("");
},

});
console.log(popup,'popuppppp');
console.log("hii from coordinatessssssss");
popup.setPosition(coord); 
map.addOverlay(popup);
console.log("gffgfg");

    map.on("singleclick", function (event) {
      const tileCoord = getTileCoord(event.coordinate);
      const mintKey = getMintKey(tileCoord);
      mint(tileCoord, !(mintKey in mintData));
    });
   
    map.on("pointermove", function (event) {
      const tileCoord = getTileCoord(event.coordinate);
      activeMintKey = getMintKey(tileCoord);
      mintedLayer.changed();
    });
  }
  function getTileCoord(coordinate) {
    return wrapX(
      tileGrid,
      tileGrid.getTileCoordForCoordAndZ(coordinate, 18),
      map.getView().getProjection()
    );
  }

  function getMintKey(tileCoord) {
    return tileCoord.slice(1, 3).join("/");
  }
  async function mint(tileCoord, add) {
    const mintKey = getMintKey(tileCoord);
    const tileExtent = transformExtent(
      tileGrid.getTileCoordExtent(tileCoord),
      map.getView().getProjection(),
      "EPSG:4326"
    );
    if (add) {
      mintData[mintKey] = {
        squarefeet:
          getArea(fromExtent(tileExtent), {
            projection: "EPSG:4326",
          }) * 10.764,
        sw: getBottomLeft(tileExtent),
        ne: getTopRight(tileExtent),
      };
      let ab = getKey(tileCoord);
      let [z, x, y] = ab.split("/");
      let tile = {
        x: x,
        y: y,
        z: z,
        lat: mintData[mintKey].sw[0],
        lng: mintData[mintKey].sw[1],
      };
      // alert(JSON.stringify(tile));
      var popupdisplay = document.getElementById("popupdisplay");
      popupdisplay.style.visibility = "visible";
      popupOnclick(tile, mintData[mintKey].squarefeet);
      let callMintDom = document.getElementById("mint");

      callMintDom.onclick = async () => {
        let che = document.getElementsByClassName("lds-ring");
        che[0].style.visibility = "visible";
        if (windowObj.ethereum) {
          windowObj.ethereum
            .request({ method: "eth_requestAccounts" })
            .then(handleAccountsChanged)
            .catch((err) => {
              if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log("Please connect to MetaMask.");
              } else {
                console.error(err);
              }
            });

          const approve = await rimulecontract.approve(
            Contract.address,
            100000000
          );
          const wait1 = await approve.wait();

          console.log("Approved"); 
          if (wait1) {
            let callMintFunc = await Contract.safeMint(
              tile.x + "",
              tile.y + "",
              tile.z + "",
              tile.lat + "",
              tile.lng + ""
            );

            let wait = await callMintFunc.wait();
            if (wait) {
              che[0].style.visibility = "hidden";
            }
          }
        }
      };
    } else {
      alert(`unminted ${JSON.stringify(mintData[mintKey])}`);
      delete mintData[mintKey];
    }
    mintedLayer.changed();
  }
  const tileGrid = createXYZ({ minZoom: 18, maxZoom: 18 });

  const mintSource = new VectorTileSource({
    tileGrid: tileGrid,
    tileLoadFunction: function (tile) {
      const feature = new Feature(
        fromExtent(tileGrid.getTileCoordExtent(tile.tileCoord))
      );
      feature.setId(getMintKey(tile.tileCoord));
      tile.setFeatures([feature]);
    },
    url: "{z}/{x}/{y}",
  });

  const mintGridLayer = new VectorTileLayer({
    minZoom: 13,
    source: mintSource,
    style: new Style({
      stroke: new Stroke({
        width: 0.65,
        color: "blue",
      }),
    }),
  });
  const mintedLayer = new VectorTileLayer({
    minZoom: 13,
    source: mintSource,
    renderMode: "vector",
    style: function (feature) {
      const mintKey = feature.getId();
      return mintKey === activeMintKey
        ? new Style({
            stroke: new Stroke({
              width: 10,
              color: mintData[mintKey] ? "gray" : "green",
            }),
          })
        : undefined;
    },
  });
  return (
    <div className="mapRow">
      <div ref={mapElement} className="map-container"/>
    </div>
  );
}

export default OpenLayer;
