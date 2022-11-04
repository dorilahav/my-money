import {useState} from 'react';

type ToggleOn = () => void;
type ToggleOff = () => void;
type Toggle = () => void;
type UseToggleReturn = [boolean, ToggleOn, ToggleOff, Toggle];

export const useToggle = (defaultValue = false): UseToggleReturn => {
  const [isToggled, setIsToggled] = useState(defaultValue);

  const toggleOn = () => setIsToggled(true);
  const toggleOff = () => setIsToggled(false);
  const toggle = () => setIsToggled(x => !x);

  return [isToggled, toggleOn, toggleOff, toggle];
};
