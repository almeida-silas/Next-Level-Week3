import React from 'react'

import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import mapMakerImg from '../../assets/map-marker.svg'
import './styles.css'

const OrphanagesMap: React.FC = () => {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMakerImg} alt='Happy Marker'/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Salvador</strong>
          <span>Bahia</span>
        </footer>
      </aside>

      <Map
        center={[-12.9606136, -38.4744683]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link to='/create-orphanage' className='create-orphanage'>
        <FiPlus size={32} color='#FFFF' />
      </Link>
    </div>
  )
}

export default OrphanagesMap;
