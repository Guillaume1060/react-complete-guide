import styles from '../form/FormDetail.module.css'
import Card from '../UI/Card';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { redirect } from "react-router-dom";

const FormDetail =  () => {
    const [newRecipe,setNewRecipe] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        let url = "https://react-udemy-lesson-default-rtdb.europe-west1.firebasedatabase.app/meals.json";
        const meal = {...data}

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(meal), // body data type must match "Content-Type" header
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
          });
          setNewRecipe(true)
          redirect("");
        //   return response.json(); // parses JSON response into native JavaScript objects
        }

    

    return (
        <section className={styles.meals}>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.name}>
                        <label>Name of your recipe : </label>
                        <input defaultValue="Pizza, rosbeef..." {...register("name")} />
                    </div>
                    <div>
                        <label> Description : </label>
                        <input {...register("description", { required: true })} />
                    </div>
                    <div>
                        <label> Price : </label>
                        <input {...register("price", { required: true, valueAsNumber:true })} />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button>Envoyer</button>
                    {(newRecipe) && <p>Meal saved, thanks !!</p>}
                </form>
            </Card>
        </section>
    )
}

export default FormDetail