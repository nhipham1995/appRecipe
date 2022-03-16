import React, {useState} from 'react';
import ModalShow from '../ModalShow';
import { Button } from 'react-bootstrap';
import '../css/Recipe.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Recipe = (props) =>{
    const [modalShow, setModalShow] = useState(false);
    const {totalNutrients, healthLabel, digest, dietLabels} = props;

    return(
        <div className="card">
            <div className="thumbnail">
                <img className="left" 
                     src={props.image}
                     alt="illustration of food">
                </img>
            </div>

            <div className="right">
                <h3>{props.title}</h3>
                <div className="separator"></div>
                <p>{Math.round(props.calory)} calories</p> 
            </div>

            <div className="list-ingre">
                <h4>Ingredients:</h4>
                {props.ingredient.map((i, index)=>{
                    return <p key={index}>- {i.text}</p>
                })}
            </div>
            <div className="button-info">
                <Button variant="outline-success"
                        onClick={() => setModalShow(true)}>
                    More Detail
                </Button>

                <ModalShow
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    totalNutrients= {totalNutrients}
                    healthLabel = {healthLabel}
                    digest = {digest}
                    dietLabels={dietLabels}
                    title={props.title}/>
            </div>
        </div>
    )
}

export default Recipe;