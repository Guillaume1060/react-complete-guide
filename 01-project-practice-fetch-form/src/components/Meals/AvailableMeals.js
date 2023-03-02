import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://react-udemy-lesson-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
        );
        if (!response.ok) throw new Error("Smthing wrong!");
        const data = await response.json();
        const transformedMeals = [];
        for (const key in data) {
          transformedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setLoading(false);
        setMeals(transformedMeals);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Houston, we have a problem 🫤 ({error})</p>
        ) : (
          <ul>{mealsList}</ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
