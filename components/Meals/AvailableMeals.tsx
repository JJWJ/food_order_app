import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem';

export interface IMeal {
    id:          string;
    description: string;
    name:        string;
    price:       number;
}

const AvailableMeals = () => {
  const [meals, setMeals] = useState<IMeal[]>([]);


  useEffect(() => {
      const fetchMeals = async () => {
          const response = await fetch('https://react-food-app-88148-default-rtdb.firebaseio.com/meals.json')
          const responseData = await response.json();

          const loadedMeals: Array<IMeal> = [];

          for(const key in responseData){
              loadedMeals.push({
                  id: key,
                  name: responseData[key].name,
                  description: responseData[key].description,
                  price: responseData[key].price
              })
          }

          setMeals(loadedMeals);
      }
      fetchMeals()
  }, [])


  const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} description={meal.description} mealName={meal.name} price={meal.price} />)

  return (
      <section  className='max-w-5xl w-11/12 my-4 mx-auto animate-appear'>
          <ul title='meals list' className='list-none m-0 p-0'>
            <Card>
              {mealsList}
            </Card>
          </ul>
      </section>
  )
}

export default AvailableMeals
