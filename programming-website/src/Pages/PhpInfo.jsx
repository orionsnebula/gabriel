import { useParams } from 'react-router-dom';
import { useState } from 'react';
import phpinfo from "../phpinfo";

const PhpInfo = ({ infocontent }) => {

  const { phpInfoID } = useParams();
  const [infoList] = useState(phpinfo);

  const infoFind = infoList.find(i => i.id === phpInfoID);

  if (!infoFind) {
    return <div>Unable to find anything.</div>;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: infoFind.content }} />
    </>
  );
};

export default PhpInfo;