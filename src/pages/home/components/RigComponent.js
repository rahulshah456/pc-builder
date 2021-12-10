import styled from "styled-components";
import { rigHoverThemeColor } from "../../../core/color";
import cpu from "../../../res/cpu.png";
import Thumbnail from "./Thumbnail";

const StyledRigComponent = styled.div`
    border: 0.5px solid ${rigHoverThemeColor};
    width: 300px;
    height: 100px auto;
    border-radius: 0.5rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    algn-items: center;
    gap: 2rem;
    transition: 250ms ease-in;
    cursor: pointer;

    h1 {
        margin: 0;
        padding: 0;
        font-family: 'Product Sans Black';
        font-weight: 500;
    }

    p {
        margin: 0;
        padding: 0;
        font-family: 'Product Sans Light';
        font-weight: 300;
    }

    &:hover {
        background-color: ${rigHoverThemeColor};
    }
`;


function RigComponent(props) {
    return (
        <StyledRigComponent>
            <Thumbnail url={cpu} />
            <div>
                <h1>{props.header}</h1>
                <p>No Selection</p>
            </div>
        </StyledRigComponent>
    );
}

export default RigComponent;