import './description.css';
import Photo from './Divyanshu.jpg';

function Description() {
    return (
        <div id="description">
            <div id="description-text">
                <h3>
                I'm an adventurous traveler and bike rider who loves exploring new places, 
                savoring diverse cuisines, and indulging in street food. Passionate about software engineering, 
                AI, and teaching, I aim to uplift society through education and environmental initiatives.
                </h3>
            </div>
            <div id="description-image">
                <img src={Photo} alt="Description" />
            </div>
        </div>
    );
}

export default Description; 