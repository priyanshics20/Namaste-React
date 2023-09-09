import { useState } from "react";

const Section = ({ title, description , isVisible, setIsVisible}) => {
    // by using this state we are building accordion 
    // const [isVisible, setIsVisible] = useState(false);
    

    return (
        <div style={{
            backgroundColor: "purple",
            border: "1px solid black",
            padding: "10px",
            color: "white",
            margin: "10px",
        }}>
            
            <h3>{title}</h3>
            {   isVisible ?
                (<button
                    onClick={() => { setIsVisible(false) }}>
                    hide
                </button>) :
                (<button
                    onClick={() => { setIsVisible(true) }}>
                    show
                </button>)
            }
            { isVisible && <p>{ description }</p>}
        </div>

    )
}
const Instamart = () => {

    //making customise accordion 
    // giving parent access to control the visibility of child 
    const [isVisibleSection, setIsVisibleSection] = useState("");

    return (
        <div>
            <h1>Instamart</h1>
            {/* <h2>1000 of components </h2> */}

            <Section
                title={"About Instamart"}
                description={"This is about section of Instamart......"}
                isVisible={isVisibleSection === "about"}
                setIsVisible={()=>{ setIsVisibleSection("about")}}
            />

            <Section
                title={"Team Instamart"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem"}
                isVisible={isVisibleSection === "team"}
                setIsVisible={()=>{ setIsVisibleSection("team")}}
            />

            <Section
                title={"Career Instamart"}
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem"}
                isVisible={isVisibleSection === "career"}
                setIsVisible={()=>{ setIsVisibleSection("career")}}
            />
        </div>
    )
}

export default Instamart;