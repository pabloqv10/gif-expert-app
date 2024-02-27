import { useState } from "react";
import { AddCategory } from './components/AddCategory'
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Avatar']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      {/*  Titulo */}
      <h1>Gif Expert App!</h1>

      {/* Input */}
      <AddCategory
        onNewCategory={ (value) => onAddCategory(value) }
      />
      {
        categories.map((category) => <GifGrid key={category} category={category} />)
      }
    </>
  )
}