import React from  'react';

import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailsAction';

const Game = ({name, released, id, image})=>{

    const dispatch = useDispatch();
    const loadDetailHandler = ()=>{       
        dispatch(loadDetail(id));
    };

    return (
        <StyledGame onClick={loadDetailHandler}>

            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>

        </StyledGame>
    );


}

const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow:0px 5px 30px rgba(0,0,0,0.2);
    text-align:center;
    /*border-radius:1rem;*/
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    img{
        width:100%;
        height:40vh;
        object-fit:cover;
    }
`;

export default Game;