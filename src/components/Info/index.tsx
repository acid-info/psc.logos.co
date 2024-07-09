import styled from "@emotion/styled";
// import { useState } from "react";

const Info: React.FC = () => {
    // const [readMore, setReadMore] = useState(false);

    // const handleReadMore = () => {
    //     setReadMore(prev => !prev);
    // }
    
    return (
        <InfoContainer>
            <div className="info">
                <h2>INFORMATION:</h2>
                <p>{`In a swiftly evolving world, our conventional understanding of the nation state is increasingly challenged. This situation is ripe for passionate thinkers and builders to shape humanity’s future through a cultural shift backed by cutting-edge technologies.
                
To help bring ideas into action, Logos is inviting global thought leaders, founders, researchers, and engineers to come together with the community to strengthen the relationships between projects and people advancing human governance, civil liberties, network states, and adjacent movements.

For this first Parallel Society Congress, we invite you to join other prominent speakers from the fields of philosophy, technology, and law to discuss your work and ideas.

In addition to the conference programming, we will have installations, immersive spaces, activations, and workshops. Alongside, informal spaces will encourage and support genuine connections and conversations.

The event will take place in Bangkok during the global Devcon meetup. If you are interested, please let us know so we can arrange a call to discuss the details.`}
                </p>
                {/* <MobileReadMoreButton onClick={handleReadMore}>{readMore ? "Show Less" : "Read More"}</MobileReadMoreButton> */}
            </div>
            <div className="org">
                <h2>ORGANISATION:</h2>
                <p>{`Logos is a cultural movement to reimagine the future of human governance beyond the nation state.
Rooted in the blockchain revolution, Logos is building a decentralised, politically neutral technology stack that supports the creation of parallel institutions and self-sovereign digital communities. Our vision is to provide the next generation of governing services, public goods, and social institutions to anyone with an internet connection. The aim is to bring greater freedom, transparency, and prosperity to people around the world.

Contact
events@logos.co`}
                </p>
            </div>
      </InfoContainer>
    );
    };

const InfoContainer = styled.div`
    display: flex;
    margin-top: 54px;

    border: 1px solid #ffffff;

    h2 {
        color: #FFF;

        -webkit-text-stroke-width: 0.20000000298023224;
        -webkit-text-stroke-color: #FFF;
        font-family: "Andale Mono";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 1.82px;
        text-transform: uppercase;

        margin-bottom: 40px;
    }

    p {
        font-family: "Space Mono";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.28px;
        white-space: pre-line;
    }

    div:first-of-type {
       border-right: 1px solid #ffffff;
    }

    & > div {
        padding: 16px;
        width: 100%;
        position: relative;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 0px;
        border-top: none;

        h2 {
            margin-bottom: 32px;
        }

        & > div {
            width: auto;
        }

        .org {
            border-right: none;
            border-bottom: 1px solid #ffffff;
        }

        .info {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-right: none !important;
            border-bottom: 1px solid #ffffff;

            p {
                max-height: auto;
                overflow: hidden;

                text-overflow: ellipsis;

                padding-bottom: 60px;
            }
        }

    }
`

// const MobileReadMoreButton = styled.button`
//     background-color: white;
//     color: black;
//     border: 1px solid white;
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 20px;
//     letter-spacing: 1.82px;
//     padding: 16px;
//     text-transform: uppercase;
//     width: 100%;

//     position: absolute;
//     bottom: 0;
//     left: 0;

//     cursor: pointer;    

//     @media screen and (min-width: 768px) {
//         display: none;
//     }
// `

export default Info;