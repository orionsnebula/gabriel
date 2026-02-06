import { useParams } from 'react-router-dom';
import { useState } from 'react';
import pyinfo from "../pyninfo";

const PyInfo = ({infocontent}) => {

  const { pyInfoID } = useParams();
  const [infoList] = useState(pyinfo);

  const infoFind = infoList.find(i => i.id === pyInfoID);

  if (!infoFind) {
    return <div>Unable to find anything.</div>;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: infoFind.content }} />
    </>
  );
};
export default PyInfo;