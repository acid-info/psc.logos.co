import styled from "@emotion/styled";
import { useState } from "react";

const Info: React.FC = () => {
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        setReadMore(prev => !prev);
    }
    
    return (
        <InfoContainer readMore={readMore}>
            <div className="info">
                <h2>Information:</h2>
                <p>{`In a swiftly evolving world, our conventional understanding of the nation state is increasingly challenged. This situation is ripe for passionate thinkers and builders to shape humanity’s future through a cultural shift backed by cutting-edge technologies.

To help bring ideas into action, Logos is inviting global thought leaders, founders, researchers, and engineers to come together with the community to strengthen the relationships between projects and people advancing human governance, civil liberties, network states, and adjacent movements.

For this first Parallel Society Congress, we invite you to join other prominent speakers from the fields of philosophy, technology, and law to discuss your work and ideas. The event will take place in Bangkok during the global Devcon meetup.
In addition to the conference programming, we will create an experiential and educational exhibition showcasing a retrospective of the cypherpunk movement through installations, immersive spaces, activations, talks, and workshops. Alongside, informal spaces will encourage and support genuine connections and conversations.

As a grassroots movement, we aim to collaborate with projects that are passionate about our shared cause. The experience will support local communities at every touch point – from food and beverages to venue selection and more. 

If you are interested, please let us know so we can arrange a call to discuss the details.`}
                </p>
                <MobileReadMoreButton onClick={handleReadMore}>{readMore ? "Show Less" : "Read More"}</MobileReadMoreButton>
            </div>
            <div className="org">
                <h2>Organization:</h2>
                <p>{`Logos is a grassroots movement to create a fully decentralised technology stack that supports the creation of parallel institutions and self-sovereign network states. Our vision is to build technologies that enable digital communities to govern themselves, free from capture.

The Logos technology stack is a politically neutral base for the provisioning of the next generation of governing services, public goods, and social institutions, paving a way to economic opportunities for those who need them most while respecting civil liberties across its design. The aim is to bring greater freedom, transparency, and stability to its citizens through voluntary participation.


Research Forum
events@logos.co`}
                </p>
            </div>
      </InfoContainer>
    );
    };

const InfoContainer = styled.div<{ readMore: boolean }>`
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
        flex-direction: column-reverse;
        margin-top: 0px;
        border-top: none;

        h2 {
            margin-bottom: 32px;
        }

        & > div {
            width: 90%;
        }

        .org {
            border-right: none;
            border-bottom: 1px solid #ffffff;
        }

        .info {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
   

            p {
                max-height: ${props => props.readMore ? "auto" : "541px"};
                overflow: hidden;

                text-overflow: ellipsis;

                padding-bottom: 60px;
            }
        }

    }
`

const MobileReadMoreButton = styled.button`
    background-color: white;
    color: black;
    border: 1px solid white;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 1.82px;
    padding: 16px;
    text-transform: uppercase;
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 0;

    cursor: pointer;    

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export default Info;