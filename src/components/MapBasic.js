import React from 'react';
import { YMaps, Map, Polyline, Placemark } from 'react-yandex-maps';

import './MapBasic.css';

class MapBasics extends React.Component {
  constructor(props) {
    super(props);

    this.mapState = {
      center: props.centerMap,
      zoom: 10,
    };
  }

  handleBoundChange = item => {
    const element = item.get('target');
    this.props.setCenterMapAction(element.getCenter());
  };

  handleDragPlacemark = item => {
    const element = item.get('target');
    const id = element.properties.get('id');
    const coordinate = element.geometry.getCoordinates();
    this.props.dragPointOnMapAction({ id, coordinate });
  };

  handleLoad = () => {
    this.props.mapLoadSuccessAction(true);
  };

  renderLoader = () => {
    return <div className={'loader-spinner'} />;
  };

  renderPlaceMarks = points => {
    return points.map(item => (
      <Placemark
        key={`key-${item.id}`}
        options={{ draggable: true }}
        properties={{
          balloonContentBody: item.coordinate.map(item => item.toFixed(6)),
          balloonContentHeader: item.name,
          id: item.id,
        }}
        geometry={item.coordinate}
        onDrag={this.handleDragPlacemark}
      />
    ));
  };

  renderYmaps = points => {
    return (
      <YMaps>
        <Map
          className={'y-map'}
          onLoad={this.handleLoad}
          state={this.mapState}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          onBoundschange={this.handleBoundChange}
        >
          {this.renderPlaceMarks(points)}
          <Polyline geometry={points.map(item => item.coordinate)} />
        </Map>
      </YMaps>
    );
  };

  render() {
    const { points } = this.props;
    const { isLoaded } = this.props;
    return (
      <div>
        {this.renderYmaps(points)}
        {isLoaded ? null : this.renderLoader()}
      </div>
    );
  }
}

export default MapBasics;
