import React, {Component} from "react";
import NavbarSub from './NavbarSub';

import './DashboardSensorStatus.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import axios from 'axios';


const mapStyles = {
    width: '100%',
    height: '100%'
  };

class DashboardSensorStatus extends Component{

    constructor (props){
        super(props);
        this.state = {
            showingInfoWindow: false,  
            activeMarker: {},          
            selectedPlace: {},
            marker1ActiveFlag: false,
            marker2ActiveFlag: false,
            marker3ActiveFlag: false,
            marker4ActiveFlag: false,
            clusterId: 0,
            authFlag: false,
        }
    };

      onMarker1Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        marker1ActiveFlag: true,
        });

        onMarker2Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true, 
        marker2ActiveFlag: true
        });

        onMarker3Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        marker3ActiveFlag: true
        });

        onMarker4Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        marker4ActiveFlag: true
        });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onSFSUClick = () =>
  this.setState({
      sfsuMarker: true,
      clusterId: 1,
  });

  onMissionClick = () =>
  this.setState({
      missionMarker: true,
      clusterId: 2,
  });

  onGoldenClick = () =>
  this.setState({
      goldenMarker: true,
      clusterId: 3,
  });

  onTwinClick = () =>
  this.setState({
      twinMarker: true,
      clusterId: 4,
  });

  onSJSUClick = () =>
  this.setState({
      SJSUMarker: true,
      clusterId: 5,
  });

  onHensleyClick = () =>
  this.setState({
      hensleyMarker: true,
      clusterId: 6,
  });

  onSantaClaraClick = () =>
  this.setState({
      santaClaraMarker: true,
      clusterId: 7,
  });

  onWilliamClick = () =>
  this.setState({
      williamMarker: true,
      clusterId: 8,
  });

  onEastPaloClick = () =>
  this.setState({
      eastPaloMarker: true,
      clusterId: 9,
  });

  onTheHomeClick = () =>
  this.setState({
      theHomeMarker: true,
      clusterId: 10,
  });

  onChanningClick = () =>
  this.setState({
      ChanningMarker: true,
      clusterId: 11,
  });

  onTheWillowClick = () =>
  this.setState({
      TheWilliamMarker: true,
      clusterId: 12,
  });

  onArdenClick = () =>
  this.setState({
      ardenFlag: true,
      clusterId: 13,
  });

  onCostcoClick = () =>
  this.setState({
      costcoFlag: true,
      clusterId: 14,
  });

  onElCaminoClick = () =>
  this.setState({
      elCaminoFlag: true,
      clusterId: 15,
  });

  onSutterClick = () =>
  this.setState({
      sutterFlag: true,
      clusterId: 16,
  });


    render(){

      let tabledata2 = null;
      

        if(this.state.sfsuMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              sfsuMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.goldenMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              goldenMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.missionMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              missionMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.twinMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              twinMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.SJSUMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              SJSUMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.williamMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              williamMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.hensleyMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              hensleyMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.santaClaraMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              santaClaraMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.eastPaloMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              eastPaloMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.theHomeMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              theHomeMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.ChanningMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              ChanningMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.TheWilliamMarker){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              TheWilliamMarker : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.elCaminoFlag){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              elCaminoFlag : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.sutterFlag){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              sutterFlag : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.ardenFlag){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              ardenFlag : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }

      if(this.state.costcoFlag){
          const data = {
            clusterId: this.state.clusterId
          };
          console.log(data);
          axios.defaults.withCredentials = true;
          axios
        .post("http://localhost:3001/api/fetchSensors", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.status === 200) {
            this.setState({

              authFlag: true,
              costcoFlag : false,
              sensors: response.data.sensors
              //properties: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ error: true });
          console.log(err);
        });
      }



      
      

      if (this.state.authFlag){
        console.log("inside");
            tabledata2 = (
              <div className = "dashboardsensor-tablemain" style = {{overflowX: "auto"}}>
              <table style={{borderCollapse: "collapse", borderSpacing:0, width:"100%", border:"2px solid #ddd",padding:"5px"}}>
              <tr className="dashboardsensor-tablemain-heading">
                  <th>Sensor Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Company</th>
                  <th>Status</th>
              </tr>
              {this.state.sensors.map(sensor => (
              <tr className="dashboardsensor-tablemain-data">
                <td>{sensor.sensorId}</td>
                <td>{sensor.type}</td>
                <td>{sensor.location}</td>
                <td>{sensor.provider}</td>
                <td >{sensor.status}</td>
              </tr>
              ))}
            </table> 
            </div>
              );
              this.setState.marker2ActiveFlag = false;
              
      }


        return(
            <div className="super-dashboardcloudiot col-md-12">
            
                <NavbarSub/>

                    <div className="dashboardmain-heading">
                    Cloud-based IOT status view
                    </div>

                    <div className="dashboardsensor-dashboardbutton-main col-md-12">

                        <div class="btn-group dashboardsensor-dashboardbutton-sub col-md-12" role="group" aria-label="...">

                        <a href="/dashboard">
                            <button type="button" class="btn btn-default dashboardsensor-dashboardbutton-dasboard col-md-3">
                            CloudBased-Dashboard
                                

                            </button></a>

                           
                            <button type="button" href="/dashboardsensorstatus" class="btn btn-default dashboardsensor-dashboardbutton-sensor col-md-3">
                            Cloud-based IOT status view

                            </button>
                           

                            <a href="/dashboardregion">
                            <button type="button" class="btn btn-default dashboardsensor-dashboardbutton-cloud col-md-3">
                            RegionBased-Dashboard
                            </button>
                            </a>

                            <a href="/dashboardregioniotsensorstatus">
                            <button type="button"  class="btn btn-default dashboardsensor-dashboardbutton-region col-md-3">
                            Region-based IOT status view
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="dashboardsensor-table col-md-6">
                        
                        {tabledata2}
                        
                    </div>

                    <div className="google-maps-component col-md-5">
                        <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{lat: 37.3511,lng: -121.87434}}
                        >
                        <Marker
                            onClick={this.onSJSUClick}
                            name={'SJSU'}
                            position={{lat: 37.3353,lng: -121.8803}}
                        />
                        <Marker
                            onClick={this.onHensleyClick}
                            name={'Hensley'}
                            position={{lat: 37.3453,lng: -121.8903}}
                        />
                        <Marker
                            onClick={this.onSantaClaraClick}
                            name={'Santa Clara St.'}
                            position={{lat: 37.3399,lng: -121.8803}}
                        />
                        <Marker
                            onClick={this.onWilliamClick}
                            name={'William St. Park'}
                            position={{lat: 37.3338,lng: -121.8703}}
                        />
                        <Marker
                            onClick={this.onSFSUClick}
                            name={'SFSU'}
                            position={{lat: 37.7240,lng: -122.4803}}
                            />
                        <Marker
                            onClick={this.onGoldenClick}
                            name={'Golden Gate Park'}
                            position={{lat: 37.7700,lng: -122.4653}}
                        />
                        <Marker
                            onClick={this.onTwinClick}
                            name={'Twin Peaks'}
                            position={{lat: 37.7540,lng: -122.4485}}
                        />
                        <Marker
                            onClick={this.onMissionClick}
                            name={'Mission Distroit'}
                            position={{lat: 37.7580,lng: -122.4085}}
                        />
                        <Marker
                            onClick={this.onCostcoClick}
                            name={'Costco Wholesale'}
                            position={{lat: 38.5988,lng: -121.4529}}
                        />
                        <Marker
                            onClick={this.onElCaminoClick}
                            name={'El Camino Ave'}
                            position={{lat: 38.611,lng: -121.4591}}
                        />
                        <Marker
                            onClick={this.onSutterClick}
                            name={'Sutter Landing'}
                            position={{lat: 38.584,lng: -121.4559}}
                        />
                        <Marker
                            onClick={this.onArdenClick}
                            name={'Arden Garden'}
                            position={{lat: 38.6058,lng: -121.4691}}
                        />
                        <Marker
                            onClick={this.onTheHomeClick}
                            name={'The Home Depot'}
                            position={{lat: 37.459,lng: -122.1400}}
                        />
                        <Marker
                            onClick={this.onEastPaloClick}
                            name={'East Palo Alto'}
                            position={{lat: 37.469,lng: -122.1400}}
                        />
                        <Marker
                            onClick={this.onChanningClick}
                            name={'Channing Ave.'}
                            position={{lat: 37.449,lng: -122.1400}}
                        />
                        <Marker
                            onClick={this.onTheWillowClick}
                            name={'The Willow'}
                            position={{lat: 37.459,lng: -122.1490}}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                        </InfoWindow>
                        </Map>
                    </div>

                    
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBLF7TdB5A5hLaxAY2wZg2vg8ZSM-1PtP8'
  })(DashboardSensorStatus);