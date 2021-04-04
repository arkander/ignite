import React from  'react';

import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailsAction';
import {Link} from 'react-router-dom';
import {smallImage} from '../utils';

const Game = ({name, released,  image, id})=>{
   
    const stringPathId  = id.toString();   

    const dispatch = useDispatch();
    
    const loadDetailHandler = ()=>{     
        document.body.style.overflow = 'hidden';//adicionado para evitar o scroll do fundo quando o componente de detalhes for exibido
        dispatch(loadDetail(id));
    };

    return (
        <StyledGame onClick={loadDetailHandler} layoutId={stringPathId}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name}/>   
            </Link>
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
    cursor: pointer;
    overflow:hidden;
    img{
        width:100%;
        height:40vh;
        object-fit:cover;
    }
`;

export default Game;