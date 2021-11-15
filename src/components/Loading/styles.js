import styled from 'styled-components';

export const Load = styled.div`
    color: #999;
    text-indent: -9999em;
    margin: 88px auto;
    margin-top: 20rem;
    position: relative;
    font-size: 3rem;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    background: transparent;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;

    &::before{
        position: absolute;
        top:0;
        content: '';
        left: -1.5em;
        -webkit-animation-delay:-0.32s;
        animation-delay: -0.32s;
        background: transparent;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
    }
    &::after{
        position: absolute;
        top:0;
        content: '';
        left: 1.5em;
        background: transparent;
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
    }

@-webkit-keyframes load1{
    0%,
    80%,
    100% {
        box-shadow:0 0;
        height: 4em;
    }

    40% {
        box-shadow:0 -2em;
        height: 5em;
    }
}   

@keyframes load1{
    0%,
    80%,
    100% {
        box-shadow:0 0;
        height: 4em;
    }

    40%{
        box-shadow:0 -2em;
        height: 5em;
    }
}
`;