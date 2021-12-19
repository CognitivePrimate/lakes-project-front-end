import styled from "styled-components";
import  device from '../../media-query-sizes'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--orange);
    color: var(--textPrimary);
    padding: 0 .5rem;
    box-shadow: var(--boxShadowPrimary);

    @media ${device.mobileL} {
        /* put md query styles here */
    }

    @media ${device.desktopM} {
        padding: 0 1rem;
    }
`