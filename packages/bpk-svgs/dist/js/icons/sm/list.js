import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M2.5 6a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 2.5 6zM4 9a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 4 9zm0 4.5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 4 13.5zM8 6h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zm0 4.5h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zM8 15h8a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z" /></svg>;
  }

}