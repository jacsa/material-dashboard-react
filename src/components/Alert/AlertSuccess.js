import React, { Component } from "react";  
import Swal from "sweetalert2";  
  
export default class AlertSuccess extends Component {  
  
    constructor() {  
        super();  
        this.HandleClick = this.HandleClick.bind(this);  
    }  
  
    HandleClick() {  
        Swal.fire({  
            title: 'Success',  
            type: 'success',  
            text: 'Your work has been saved.',
        });  
    }  
  
    render() {  
        return (  
            <div>  
                <button className="btn btn-success" onClick={this.HandleClick}>  
                    Show Success Alert  
                </button>  
            </div>  
        );  
    }  
}  