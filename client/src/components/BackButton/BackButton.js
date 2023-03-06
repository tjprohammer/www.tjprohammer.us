import React from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../../pages/home/Home';

const BackButton = () => {
    const navigate = useNavigate();
    return <StyledButton onClick={() => navigate(-1)} style={{position: 'absolute', top: '80px', left: '40px' }}>
    <AiOutlineRollback size={30} /> Back
</StyledButton>
};

export default BackButton;
