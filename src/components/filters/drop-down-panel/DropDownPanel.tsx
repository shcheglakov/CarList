import { useState, useRef, useEffect } from "react"
import { IDropDownPanel } from "./DropDownPanel-Types"
import styles from "./DropDownPanel.module.scss"

const DropDownPanel = ({ title, options, onSelect }: IDropDownPanel) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [buttonWidth, setButtonWidth] = useState(0);


    const toggleDropDown = () => {
        setIsOpen(!isOpen);
      };
    
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    useEffect(() => {
        if (buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          setButtonWidth(rect.width);
        }
      }, [isOpen]);

  return (
    <div className={styles.dropdown_block} style={{ backgroundColor: isOpen ? "white" : "", width: buttonWidth, borderRadius: isOpen ? "0px" : "", borderTopLeftRadius: isOpen ? "16px" : "", borderTopRightRadius: isOpen ? "16px" : "" }}>
      <button ref={buttonRef} onClick={toggleDropDown}>
        {selectedOption || title}
      </button>
      {isOpen && (
        <ul style={{width: buttonWidth}}>
          <li onClick={() => handleOptionClick('')}>
            ✖ 
          </li>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDownPanel