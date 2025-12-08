import {Display} from "../Display/Display.tsx";
import '../Button/Button.css'
import {Button} from "../Button/Button.tsx";

export const SetCounter = () => {
  return (
    <div className="counter-container">
      <Display/>
      <div className="buttons-container">
        <Button title={'set'} onClick={() => {}} disabled={true}/>
      </div>
    </div>
  );
};

export default SetCounter;