import './index.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';

function App() {
  const position = [22.861029, 81.702662];

  return (
    <>
      <section>
        <div>

          <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
            
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[10.959406, 79.391265]}>
              <Tooltip>My Home Town - Rajesh M</Tooltip>
            </Marker>

          </MapContainer>

        </div>
      </section>
    </>
  )
}

export default App;
