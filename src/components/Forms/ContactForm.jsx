import React from "react";
import {Dialog, DialogTitle, InputLabel, TextField,DialogActions, DialogContent, DialogContentText, Button, Paper } from "material-ui";
import Select from "react-select";
import {BuddleAPI} from "API/BuddleApi";


class ContactForm extends React.Component{

    state = {
        name:"",
        email:"",
        message:"",
        organization:"",
        messageSent: false,
    }

    handleChange = (name) => {
       console.log(name)
        // this.setState({name})
    }


    sendMessage = () => {
        const {name, email, message, organization } = this.state;
        const { contactCat } = this.props;

        const {handleDialogClose} = this.props;
        this.setState({messageSent: true})
        BuddleAPI.sendMessage({name, email, message, organization, service: contactCat })
        .then((d)=> {
            setTimeout(handleDialogClose, 5000)
        })
    }


    render(){
        const {dialogOpen, handleDialogClose, contactCat, handleServiceClick} = this.props;

        console.log("render")
        return(
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
            >

            <DialogTitle> Contact Us </DialogTitle>
                <DialogContent>
                
                { this.state.messageSent? (
                    <DialogContentText>
                        Thanks for your inquiry! Our team will reach out in the next 1-2 business
                        days!
                    </DialogContentText>

                ) : (
                <div>
                    <InputLabel>Service</InputLabel>
                    <Select
                        name="service"
                        value={contactCat}
                        onChange={(service) => handleServiceClick(service.value)}
                        options={[
                            {value:'inc', label:"Incorporation"},
                            {value: 'brand', label: "Branding"},
                            {value: 'property', label: "Intellectual Property"},
                            {value: 'other', label: "Other"}
                        ]}
                    />

                    <TextField
                        name="name"
                        label="Name"
                        value={this.name}
                        onChange={(e)=> this.setState({ name: e.target.value})}
                    />


                    <TextField
                        name="email"
                        label="Email"
                        value={this.email}
                        onChange={(e)=> this.setState({email: e.target.value})}
                    />

                    <TextField
                        name="organization"
                        label="Organization"
                        value={this.organization}
                        onChange={(e)=> this.setState({organization: e.target.value })}
                    />

                <Paper
                    style={{marginTop: 20}}
                >
                    <TextField
                        fullWidth
                        multiline
                        rows={10}
                        name="message"
                        label="Message"
                        value={this.message}
                        onChange={(e)=> this.setState({message: e.target.value })}
                    />
                </Paper>
            </div>
            )
        }

                </DialogContent>
        
        {this.state.messageSent? (
            null
        ) : (
            <DialogActions>
                <Button
                color="primary"
                onClick={this.sendMessage}
                >Send</Button>
            </DialogActions>
            )
        }

            </Dialog>
        )
    }
}

export default ContactForm;