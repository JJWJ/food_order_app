import React from 'react'

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li key={meal.id}>{meal.name}</li>)

    return (
        <section  className='max-w-5xl w-11/12 my-4 mx-auto animate-appear'>
            <ul title='meals list' className='list-none m-0 p-0'>
                {mealsList}
            </ul>
        </section>
    )
}

export default AvailableMeals
