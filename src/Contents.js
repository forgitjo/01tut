import { useState } from "react";

const Contents = () => {
    const [name, setName] = useState('Jasurbek');
    const [count, setCount] = useState(0);
    
    const handleNameChange = () => {
        const names = ['Jasurbek', 'Otabek', 'Shuhratbek', 'Farhodbek', 'Umidjon']
        const int = Math.floor(Math.random()*5);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count+1);
        setCount(count+1);
        console.log(count);
    }
    
    const handleClick2 = ({name}) => {
        console.log(count);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }


  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!!!
        </p>
      
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick('Jasurbek')}>Click it</button>
        <button onClick={(e) => handleClick2(e)}>Click it</button>

    </main>
  )
}

export default Contents
