import phpinfo from "../phpinfo";
import { useState } from 'react';
import InfoCard from "../components/InfoCard";

const PHP = () => {
    const [PHPInfo, setPHPInfo] = useState(phpinfo)
    return (<>
        <div class="z-1">

            <div class="flex flex-wrap ">
                {PHPInfo.map(i => (
                    <InfoCard title={i.title}
                        description={i.description}
                        key={i.id}
                        id={i.id}
                        urlkey={"phpinfo"}
                    />
                ))}
            </div>
        </div>

    </>);
}

export default PHP;