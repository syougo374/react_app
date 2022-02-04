import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import CookeHandle from './CookeHandle';

// TODO: Import IngredientList

function App() {
    // TODO: Add recipe object
  const recipe = {
    title: 'Mashed potatoes',
    feedback: {
      rating: 4.8,
      reviews: 20
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2 pieces', prepared: false},
      { name: '4 Tbsp butter', prepared: false},
      { name:'1/8 cup heavy cream', prepared: false },
      { name: 'Salt', prepared: true },
      { name: 'Pepper', prepared: true },
    ],
    procedures: [
      '濃い塩水が入った鍋に、カットしたジャガイモを加えます',
      '鍋を沸騰させます',
      'フォークを刺せるくらいの柔らかさまでジャガイモを茹でます(約15-20分)',
      'ジャガイモをざるにあけます。',
      'ジャガイモを鍋に戻します。',
      'バター、クリーム、塩、こしょうを加えて好みの味にします。',
      'ジャガイモをマッシュします。',
      '必要に応じて味を調べ、バターとクリームを追加します。'
    ]
  };
  return (
    <article>
      <h1>Recipe Manager</h1>
      {/* TODO: Add RecipeTitle component */}
      <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
      {/* TODO: Add IngredientList component */}
      <IngredientList ingredients={recipe.ingredients} />
      <CookeHandle procedures={ recipe.procedures }/>
    </article>
  )
}

export default App;
