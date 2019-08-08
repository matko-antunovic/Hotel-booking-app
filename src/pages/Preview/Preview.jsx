import React, { Component } from 'react'
import {connect} from "react-redux"
import {getRooms,getMaxPrice,getMaxSize,setPrice,handleFilterChange,filterRooms} from "../../redux/Filter/filterActions";
import Bar from "../../components/FilterBar/Bar"
import PreviewSelection from "../../components/PreviewSelection/PreviewSelection"
import PreviewGallery from "../../components/PreviewGallery/PreviewGallery"

class Preview extends Component {

      componentDidMount() {
        this.props.getRooms(this.props.data);
        this.props.getMaxPrice();
        this.props.getMaxSize();
        this.props.setPrice();
        this.props.filterRooms();
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
                <PreviewGallery/>
                <Bar 
                rooms={this.props.data} 
                handleChange={this.handleChange}
                type={this.props.filter.type}
                capacity={this.props.filter.capacity}
                price={this.props.filter.price}
                minPrice={this.props.filter.minPrice}
                maxPrice={this.props.filter.maxPrice}
                breakfast={this.props.filter.breakfast}
                pets={this.props.filter.pets}
                 />
                <PreviewSelection rooms={this.props.filter.sortedRooms} />
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
    filterRooms:()=>{dispatch(filterRooms())},
    // slider:()=>{dispatch()}
})

export default connect(mapStateToProps,mapDispatchToProps)(Preview);






