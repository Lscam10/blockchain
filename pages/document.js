import React, {Component} from "react"
//import { Grid, Segment, Header, Image, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

export default class extends Component {


    renderDisplay() {

        return (
  <div className="container-fluid mt-5 text-center">
    <div className="row">
      <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
        <div className="content">
          <p>&nbsp;</p>
          <div className="card mb-3 mx-auto bg-secondary" style={{ maxWidth: '512px' }}>
            <h2 className="text-white text-monospace bg-dark"><b><ins>Share File</ins></b></h2>
              <form onSubmit={(event) => {
                event.preventDefault()
                // const description = this.fileDescription.value
                // this.props.uploadFile(description)
              }} >
                  <div className="form-group">
                    <br></br>
                      <input
                        id="fileDescription"
                        type="text"
                        // ref={(input) => { this.fileDescription = input }}
                        className="form-control text-monospace"
                        placeholder="Description..."
                        required />
                  </div>
                <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
                <button type="submit" className="btn-primary btn-block"><b>Upload</b></button>
              </form>
          </div>
          <p>&nbsp;</p>
          <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
            <thead style={{ 'fontSize': '15px' }}>
              <tr className="bg-secondary text-white">
                <th scope="col" style={{ width: '10px'}}>ID</th>
                <th scope="col" style={{ width: '200px'}}>Nombre</th>
                <th scope="col" style={{ width: '230px'}}>Descripcion</th>
                <th scope="col" style={{ width: '120px'}}>Tipo</th>
                <th scope="col" style={{ width: '90px'}}>Tamaño</th>
                <th scope="col" style={{ width: '90px'}}>Fecha</th>
                <th scope="col" style={{ width: '120px'}}>Uploader/view</th>
                <th scope="col" style={{ width: '120px'}}>Hash/view/get</th>
              </tr>
            </thead> 
          </table>
        </div>
      </main>
    </div>
  </div>
);
}
  
    render() {
        return (
            <Layout>
                <div style={{ fontFamily: 'Helvetica' }}>{this.renderDisplay()}</div>
            </Layout>
        );
    }
}