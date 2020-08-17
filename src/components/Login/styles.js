import styled from 'styled-components';

export default styled.div`
`;

export const IconWrapper = styled.div`
  width: 140px;
  height: 20px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  bottom: 10px;
  right: 15px;
`;

export const LoginFab = styled.div`
  position: fixed;
  bottom: 20px;
  left: 70px;
  width: 0px;
  height: 0px;
  z-index: 99998;
  transition: all 100ms ease 0s;
`;

export const FabButton = styled.a`
  color: inherit;
    text-decoration: none;
    width: 15px !important;
    height: 23px !important;
    /* overflow: hidden; */
    border-radius: 3px;
    background: #fff;
    color: #000;
    font: initial;
    cursor: pointer;
    letter-spacing: initial;
    text-shadow: initial;
    text-transform: initial;
    visibility: initial;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 6px 4px;
    align-items: center;
    box-shadow: ${props => props.visible ? '0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12)' : ''};
    display: flex;
    transition: opacity 0.1s ease, bottom 0.1s ease, width 0.3s ease;
    animation: fade-in 0.1s ease-in-out;
`;

export const Modal = styled.div`
  display: ${({ open }) => open ? 'flex' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  animation: fade-in 0.1s ease-in-out;
  .modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

`;