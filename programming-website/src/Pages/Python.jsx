import pyinfo from "../pyninfo";
import { useState } from 'react';
import InfoCard from "../components/InfoCard";

const Python = () => {
    const [PythonInfo, setPythonInfo] = useState(pyinfo)

    return (<>
        <div class="z-1">

            <div class="flex flex-wrap ">
                {PythonInfo.map(i => (
                    <InfoCard title={i.title}
                        description={i.description}
                        key={i.id}
                        id={i.id}
                        urlkey={"pyinfo"}
                    />
                ))}
            </div>
        </div>

    </>);
}

export default Python;