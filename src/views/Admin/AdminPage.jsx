import React from "react";
import {BuddleAPI} from "API/BuddleApi";
import _ from "lodash";
import classNames from "classnames";
import {withStyles, Table, TableBody, TableCell, TableHead, TableRow, TextField, Paper} from "material-ui";
import Select from "react-select";



class AdminPage extends React.Component{

    state={
        stateInfo:{},
    }

    componentDidMount(){
        BuddleAPI.fetchStateInfo().then((r)=>{
            this.setState({stateInfo: r.data })
        })
        .catch(console.error)
    }

    handleChange(selectedOption, state){
        BuddleAPI.updateStateInfo({status: selectedOption.value}, state.id)
        .then((r)=>{
            let newStateInfo = {...this.state.stateInfo}
            newStateInfo =  _.map(newStateInfo, (s) => s.id === r.data.id ? r.data : s)
            this.setState({stateInfo: newStateInfo})
        })
        .catch(console.error)
    }

    handleDescriptionChange(e, id){
        console.log(e.target.value)
        BuddleAPI.updateStateInfo({desc: e.target.value}, id)
        .then((r)=>{
            let newStateInfo = {...this.state.stateInfo}
            newStateInfo =  _.map(newStateInfo, (s) => s.id === r.data.id ? r.data : s)
            this.setState({stateInfo: newStateInfo})
        })
        .catch(console.error)

    }



    render(){
        return (
        <div>

            <Paper elevation={1} style={{margin: 25}}>

            <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name </TableCell>
                        <TableCell> Legal Status </TableCell>
                        <TableCell> Description </TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>

                    { _.map(this.state.stateInfo, (s)=>{
                    return (
                        <TableRow key={s.id}>
                            <TableCell>{s.name}</TableCell>
                            <TableCell>
                                <Select
                                    name="status"
                                    value={s.status}
                                    onChange={(selectedValue)=> this.handleChange(selectedValue, s)}
                                    options={[
                                        {value:'rec', label:"Recreational"},
                                        {value: 'med', label: "Medical"},
                                        {value: 'nl', label: "Not Legal"}
                                    ]}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    onChange={(e)=>{this.handleDescriptionChange(e, s.id)}}
                                    multiline
                                    value={s.desc || ""}
                                    rows="5"
                                    margin="normal"
                                    style={{width:"100%"}}
                                />
                            </TableCell>
                        </TableRow>
                    )
                }) }

                    </TableBody>
            </Table>
            </Paper>               
        </div>


        )
    }

}

export default AdminPage