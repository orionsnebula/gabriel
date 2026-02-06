import hcinfo from "../htmlcssinfo";
import { useState } from 'react';
import InfoCard from "../components/InfoCard";

const HTMLCSS = () => {
    const [HCInfo, setHCInfo] = useState(hcinfo)
    return (<>
        <div class="z-1">

            <div class="flex flex-wrap ">
                {HCInfo.map(i => (
                    <InfoCard title={i.title}
                        description={i.description}
                        key={i.id}
                        id={i.id}
                        urlkey={"htmlcssinfo"}
                    />
                ))}
            </div>
        </div>

    </>);
}

export default HTMLCSS;