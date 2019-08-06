import React, { Component } from 'react'
import Bar from "../../components/FilterBar/Bar";
import PreviewSelection from "../../components/PreviewSelection/PreviewSelection";
import PreviewGallery from "../../components/PreviewGallery/PreviewGallery";
import "./Preview.scss"

class Preview extends Component {
    render() {
        return (
            <div className="preview-collection">
                <PreviewGallery/>
               <Bar/>
               <PreviewSelection/>
            </div>
        )
    }
}
export default Preview;
