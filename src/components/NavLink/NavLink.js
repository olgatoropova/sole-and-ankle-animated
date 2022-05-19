import React from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const NavLink = ({children, ...delegated}) => {
  return (
    <Link {...delegated}>
        <MainText>{children}</MainText>
        <HoverText>{children}</HoverText>
    </Link>
  );
};


const Link = styled.a`
    position: relative;
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gray-900);
    font-weight: ${WEIGHTS.medium};
    overflow: hidden;

    &:first-of-type {
        color: var(--color-secondary);
    }
`;

const Text = styled.span`
    display: block;
    transform: translateY(var(--translate-from));
    transition: transform 500ms;

    @media (prefers-reduced-motion: no-preference) {
        ${Link}:hover & {
            transform: translateY(var(--translate-to));
            transition: transform 250ms;
        }
    }
`;

const MainText = styled(Text)`
    --translate-from: 0%;
    --translate-to: -100%;
`;

const HoverText = styled(Text)`
    --translate-from: 100%;
    --translate-to: 0%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
