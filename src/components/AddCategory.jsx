import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onChangeHandle = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmitHandle = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;
    
    onNewCategory(newInputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={ onSubmitHandle }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onChangeHandle }
      />
    </form>
  )
}