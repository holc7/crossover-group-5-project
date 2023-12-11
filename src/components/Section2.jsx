//import "../App.css";
import media_img from "../../assets/second_section_media_img.svg"
import bg from "../../assets/second_section_bg.svg"

export default function Section2(){

    return (
        <>
            <div className="container text-center m-5">
                <div className="row"> 
                    <div className ="col">

                        <div id="section2_text_row"className ="row">
                            <div id="section2_video_col" className ="col text-start">
                                <h2 className="second-section-heading">As a veterinarian and lover of animals</h2>
                                <p className="second-section-p" >Lorem Ipsum available but the majoty
suffered alteration in some form, by
humour randomised words.</p>
                                <button type="button" className="rounded second-section-button">Our Services</button>
                            </div>

                        </div>
                    </div>
                    <div id="section2_video_col" className ="col" style={{backgroundImage: 'url(${media_img})!important'}}>
                        <img className= "img-fluid max-width: 100%" src = {bg} alt="Background with Dog"></img>
                        <p>Test</p>
                    </div>

                </div>
            </div>
        
        </>
    )
}