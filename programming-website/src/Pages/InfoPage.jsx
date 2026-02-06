import { useParams } from 'react-router-dom';
import { useState } from 'react';
import geninfo from "../geninfo";

const InfoPage = () => {
  const { genInfoID } = useParams();
  const [infoList] = useState(geninfo);

  const infoFind = infoList.find(i => i.id === genInfoID);

  if (!infoFind) {
    return <div>Unable to find anything.</div>;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: infoFind.content }} />
    </>
  );
};

export default InfoPage;