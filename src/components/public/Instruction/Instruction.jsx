import React, {useEffect, useState} from 'react';
import {Label} from '../../index';
import './Instruction.css';

const Instruction = ({ strInstructions }) => {
    const [instructions, setInstructions] = useState([]);

    useEffect(() => {
        // on coupe les instructions et on verifie si ce n'est pas vide
        const splitInstructions = strInstructions.split('.').filter(instruction => instruction.trim() !== '');
        setInstructions(splitInstructions);
        console.log(splitInstructions);
    }, [strInstructions]);

    return (
        <div>
            <Label content="Instructions" />
                { instructions.map((instruction, index) => (
                    <p key={index}>{instruction}</p>
                ))}
        </div>
    );
};

export default Instruction;
