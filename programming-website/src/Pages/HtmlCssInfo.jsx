import { useParams } from 'react-router-dom';
import { useState } from 'react';
import hcinfo from "../htmlcssinfo";

const HtmlCssInfo = ({ infocontent }) => {
  const { htmlcssInfoID } = useParams();
  const [infoList] = useState(hcinfo);

  const infoFind = infoList.find(i => i.id === htmlcssInfoID);

  if (!infoFind) {
    return <div>Unable to find anything.</div>;
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: infoFind.content }} />
    </>
  );
};
export default HtmlCssInfo;