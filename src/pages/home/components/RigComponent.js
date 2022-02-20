import styled from "styled-components";
import { rigHoverThemeColor } from "../../../core/color";
import { getComponentThumbnail } from "../../../core/utils";
import cpu from "../../../res/cpu.png";
import ThumbnailComponent from "../../selector/components/ThumbnailComponent";
import Thumbnail from "./Thumbnail";

const StyledRigComponent = styled.div`
    border: 0.5px solid ${rigHoverThemeColor};
    width: 250px;
    height: auto 100px;
    border-radius: 0.5rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    transition: 250ms ease-in;
    cursor: pointer;

    h2 {
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

const StyledWarning = styled.p`
    color: red;
`;


function RigComponent(props) {

    const component = props.component;

    return (
        <StyledRigComponent onClick={component.isAvailable && props.onClickEvent}>
            <Thumbnail url={ component.isSelected ? getComponentThumbnail(component.image) : cpu} />
            <div>
                <h2>{component.header}</h2>
                { component.isAvailable && <p>{ component.isSelected ? component.name : 'No Selection' }</p> }
                { !component.isAvailable && <StyledWarning>Unavailable</StyledWarning> }
            </div>
        </StyledRigComponent>
    );
}

export default RigComponent;