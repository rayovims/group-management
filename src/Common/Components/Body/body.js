import React, { Component } from "react";
import "./body.css";
import { Modal, Button } from "react-bootstrap";

export default class Body extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          type: ''
        };
      }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  browse() {
    console.log(this.state.type, this.state.show);
  }

  search() {
    console.log(this.state.type, this.state.show);
  }

  render() {
    return (
      <div className="container" id="body-outline">
        <p style={{ marginTop: "5px", fontWeight: "700" }}>Select the Type</p>
        <hr />
        <input
          className="radio-btn"
          type="radio"
          value="security"
          name="btn"
          onChange={e => this.setState({ type: e.target.value })}
        />
        <label>Security Group</label>
        <hr />
        <input
          className="radio-btn"
          type="radio"
          value="mailbox"
          name="btn"
          onChange={e => this.setState({ type: e.target.value })}
        />
        <label>Team Mailbox</label>
        <hr />
        <div className="row" style={{ marginBottom: "15px" }}>
          <div className="col-sm-6 text-right">
            <button
              type="button"
              className="btn"
              onClick={this.search.bind(this)}
            >
              Search
            </button>
          </div>
          <div className="col-sm-6 text-left">
            <button
              type="button"
              className="btn"
              onClick={this.browse.bind(this)}
            >
              Browse
            </button>
          </div>
        </div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
