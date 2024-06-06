import Typing from "./TypingEffect";
import "./Myname.css";
import Socialmedia from "./Socialmedia";
import HeadRoom from "react-headroom";

function Myname({
  text,
  TypingSpeed = 100,
  EraseSpeed = 50,
  duration = 1000
}) {
  return (
    <HeadRoom className="my-name-container">
    <div id="name">
          <div className="My_Name">
            <h1 className="boundry"> &lt;</h1>  
            <h1 className="name_write">Divyanshu Pandey</h1>
            <h1 className="boundry">/&gt;</h1>
          </div>
      <Typing text={text} TypingSpeed={TypingSpeed} EraseSpeed={EraseSpeed} duration={duration} />
      <Socialmedia />
    </div>
    </HeadRoom>
  );
  
}
export default Myname;