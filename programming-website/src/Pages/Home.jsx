import { useState } from "react";
import InfoCard from "../components/InfoCard";
import geninfo from "../geninfo";


const Home = () => {
    const [generalInfo, setGeneralInfo] = useState(geninfo)
    return (<>
        <div class="z-1">

            <div class="flex flex-wrap ">
                {generalInfo.map(i => (
                    <InfoCard title={i.title}
                        description={i.description}
                        key={i.id}
                        id={i.id}
                        urlkey={"geninfo"}
                    />
                ))}
            </div>
        </div>

    </>);
}

export default Home;
