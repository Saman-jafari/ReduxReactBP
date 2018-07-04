import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const ContainerBody = ({children}) => {

    const DivContainer = styled.div`
display: flex;
flex-basis: content;
`;

    return (
        <DivContainer>
            {children}
        </DivContainer>
    );
};

ContainerBody.propTypes = {

};

export default ContainerBody;