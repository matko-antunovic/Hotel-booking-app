import React, { Component } from 'react'
import {connect} from "react-redux"
import {getRooms,getMaxPrice,getMaxSize,setPrice,handleFilterChange,filterRooms} from "../../redux/Filter/filterActions";
import Bar from "../../components/FilterBar/Bar"
import PreviewSelection from "../../components/PreviewSelection/PreviewSelection"

class Zaredux extends Component {

      componentDidMount() {
        this.props.getRooms(this.props.data);
        this.props.getMaxPrice();
        this.props.getMaxSize();
        this.props.setPrice();
      }

    handleChange=event=>{
        const target=event.target;
        const value=target.type === "checkbox" ? target.checked : target.value;
        const name=target.name;

        this.props.handleFilterChange(name,value);
        this.props.filterRooms();
    }

    render() {
        return (
            <div>
                <h1>ZA REDUX RODACI PROVJERA STEJTA ALOO</h1>
                <Bar rooms={this.props.data} handleChange={this.handleChange}/>
                <PreviewSelection rooms={this.props.filter.sortedRooms}/>
            </div>
        )
    }
}
  
const mapStateToProps=state=>({
    data:state.data.rooms,
    filter:state.filter
  })

const mapDispatchToProps=dispatch=>({
    getRooms:(rooms)=>{dispatch(getRooms(rooms))},
    getMaxPrice:()=>{dispatch(getMaxPrice())},
    getMaxSize:()=>{dispatch(getMaxSize())},
    setPrice:()=>{dispatch(setPrice())},
    handleFilterChange:(name,value)=>{dispatch(handleFilterChange(name,value))},
    filterRooms:()=>{dispatch(filterRooms())}
})

export default connect(mapStateToProps,mapDispatchToProps)(Zaredux);
