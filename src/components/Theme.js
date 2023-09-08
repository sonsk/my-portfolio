import React, {useState, useEffect} from 'react'
import { Switch } from 'antd';
export default function Theme() {
    const [theme, setTheme] = useState(null);
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

 
  return (
    <div><Switch onClick={handleThemeSwitch} className="bg-blue-950 dark:bg-slate-400" /></div>
  )
}
