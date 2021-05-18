import { useHistory } from "react-router-dom";
import l_arrow from "../images/left-arrow.svg";




const BackImg = () => {
    let history = useHistory();

    return (
      <img onClick={history.goBack} src={l_arrow} alt="previous page navigation" />
    )
  }
  export default BackImg;