import "./Home.css"
import pfp from "../../assets/Default_pfp.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Modal from "../../Components/Modal/modal";


function Home() {
    const navigate = useNavigate();
    const handeClick = () => {
        navigate("/menu")
    }
    const [modal, setModal] = useState(0);

    const handleModal = () => {
        setModal(!modal);
        console.log(modal);
    }

    return (
        <div id="homePage" className="homePage">

            {
                modal ?
                     <div>
                       <div className="modalContainer">
                          <div className="modal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus aliquam architecto illum tempore nemo delectus ut deleniti,
                            sapiente placeat quae quasi repellat pariatur culpa quisquam laboriosam
                            unde totam! Ad, aliquam. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus aliquam architecto illum tempore nemo delectus ut deleniti,
                            sapiente placeat quae quasi repellat pariatur culpa quisquam laboriosam
                            unde totam! Ad, aliquam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus aliquam architecto illum tempore nemo delectus ut deleniti,
                            sapiente placeat quae quasi repellat pariatur culpa quisquam laboriosam
                            unde totam! Ad, aliquam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Repellendus aliquam architecto illum tempore nemo delectus ut deleniti,
                            sapiente placeat quae quasi repellat pariatur culpa quisquam laboriosam
                            unde totam! Ad, aliquam.
                          </div>
                     </div>
                     </div>

                        :
                        <div></div>
                }

            <div className="userContainer">
                <div className="userInfo">
                    <img className="userInfoPFP" src={pfp} alt="Pfp" />
                    <div className="userInfoName">Username</div>
                    <div>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
            </div>

            <div className="aboutContainer">
                <div className="about">
                    <h1 className="aboutTitle">Cauza</h1>
                    <p className="aboutText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderitâ...
                    </p>
                    <div className="containerAflaMaiMulte">
                        <button className="aflaMaiMulte" onClick={handleModal}>Afla mai multe</button>
                    </div>
                </div>
            </div>


            <div className="btnContainer">
                <button className="btnComandaAcum" onClick={handeClick}>Comanda acum</button>
            </div>

        </div>
    )
}

export default Home;
