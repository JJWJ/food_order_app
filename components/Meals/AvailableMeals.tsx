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
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);


  useEffect(() => {
      const fetchMeals = async () => {
          const response = await fetch('https://react-food-app-88148-default-rtdb.firebaseio.com/meals.json')

          if(!response.ok) {
            throw new Error('Something went wrong!');
          }

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
          setIsLoading(false);
      }
      // Only way to catch an error from a promise in a useEffect
      fetchMeals().catch((error) => {
        setIsLoading(false)
        setHttpError(error.message)
      })
  }, [])

  if(isLoading){
    return (
      <section className='text-center text-white flex justify-center items-center mt-4'>
        <span>
          <svg className='animate-spin mr-4 h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
        <p>Loading...</p>
      </section>
    )
  }

  if(httpError){
    return (
      <section className='text-center text-red-600 text-4xl font-bold mt-12'>
        <p>Failed to fetch</p>
      </section>
    )
  }

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
