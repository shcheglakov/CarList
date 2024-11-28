import { useState } from "react"
import { IDropDownPanel } from "./DropDownPanel-Types"
import styles from "./DropDownPanel.module.scss"

const DropDownPanel = ({ title, options, onSelect }: IDropDownPanel) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
      };
    
    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };
  return (
    <div className={styles.dropdown_block} style={isOpen ? {backgroundColor: "#1a1a1a"}: {backgroundColor: ""}}>
      <button onClick={toggleDropDown}>
        {selectedOption || title}
      </button>
      {isOpen && (
        <ul>
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
