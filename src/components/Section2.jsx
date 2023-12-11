//import "../App.css";
//import media_img from "../../assets/second_section_media_img.svg"
import bg from "../../assets/second_section_bg.svg"
import arrow_right from "../../assets/second_section_arrow_right.svg"

export default function Section2(){

    return (
        <>
            <div className="container m-5">
                <div className="row justify-content-center"> 
                    <div className ="col-lg-5 col-md-12 col-sm-12 m-5 justify-content-center ">

                        <div id="section2_text_row"className ="row mt-5 justify-content-center ">
                            <div id="section2_video_col" className ="col text-start mt-5">
                                <h2 className="second-section-heading">As a veterinarian and lover of animals</h2>
                                <p className="second-section-p" >Lorem Ipsum available but the majoty suffered alteration in some form, by
humour randomised words.</p>
                                <button type="button" className="rounded second-section-button">Our Services</button>
                            </div>

                        </div>
                    </div>
                    <div id="section2_video_col" className ="col-lg-5 col-md-12 col-sm-12 m-5" style={{backgroundImage: 'url(${media_img})!important'}}>
                        <div className="second-section-image-container">
                            <img className= "img-fluid" src = {bg} alt="Background with Dog"></img>
                            <img className= "second-section-arrow-right" src = {arrow_right} alt="Arrow Button"></img>
                        </div>

                    </div>

                </div>
            </div>
        
        </>
    )
}