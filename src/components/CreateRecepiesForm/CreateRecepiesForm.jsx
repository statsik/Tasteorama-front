import React, { useRef } from 'react';
import { Formik, Form, FieldArray } from 'formik'; 
import * as Yup from 'yup';
import css from './CreateRecepiesForm.module.css';

const initialValues = {
  recipeImage: null,
  title: '',
  description: '',
  cookingTime: '',
  calories: '',
  category: 'Soup',
  ingredients: [{ name: '', amount: '' }],
  instructions: '',
};

const validationSchema = Yup.object({
  recipeImage: Yup.mixed()
    .required('Image upload is required'),
  title: Yup.string()
    .min(3, 'Min. 3 characters')
    .max(100, 'Max. 100 characters')
    .required('Title is required'),
  cookingTime: Yup.number()
    .min(1, 'Min. 1 minute')
    .required('Cooking time is required'),
  calories: Yup.number()
    .min(1, 'Min. 1 calorie')
    .required('Calories are required'),
  category: Yup.string().required('Category is required'),
  ingredients: Yup.array().of(
    Yup.object({
      name: Yup.string().required('Ingredient name is required'),
      amount: Yup.string().required('Ingredient amount is required'),
    })
  ).min(1, 'Add at least one ingredient'),
  instructions: Yup.string().required('Instructions are required'),
});

const CATEGORIES = ['Soup', 'Salad', 'Main Course', 'Dessert', 'Breakfast'];

const CreateRecepiesForm = () => {
  const fileInputRef = useRef(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log('Form data:', values);
        setSubmitting(true);
        setTimeout(() => {
          alert('Recipe successfully published! Check the console.');
          setSubmitting(false);
          resetForm();
        }, 1000);
      }}
    >
      {formikProps => {
        const { values, errors, touched, setFieldValue, isSubmitting, isValid, getFieldProps } = formikProps;

        const handleImageClick = () => {
          fileInputRef.current.click();
        };

        const handleFileChange = (event) => {
          const file = event.currentTarget.files[0];
          setFieldValue('recipeImage', file);
          setFieldValue('recipeImage', file);
          setFieldValue('recipeImage', file, true); 
        };

        const imagePreviewUrl = values.recipeImage 
          ? URL.createObjectURL(values.recipeImage) 
          : null;

        return (
          <Form className={css.form}>
            
            <div 
              className={css.imageUploadContainer} 
              onClick={handleImageClick}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                name="recipeImage"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              
              {imagePreviewUrl ? (
                <img 
                  src={imagePreviewUrl} 
                  alt="Recipe preview" 
                  className={css.imagePreview} 
                />
              ) : (
                <div className={css.imagePlaceholder}>
                  <p>Click to upload image</p>
                </div>
              )}
            </div>
            {touched.recipeImage && errors.recipeImage && (
              <div className={css.error}>{errors.recipeImage}</div>
            )}

            <h2 className={css.sectionTitle}>General Information</h2>

            <div className={css.inputGroup}>
              <label htmlFor="title">Recipe Title</label>
              <input 
                id="title" 
                name="title"
                type="text"
                placeholder="Enter the name of your recipe" 
                className={css.input}
                {...getFieldProps('title')}
              />
              {touched.title && errors.title && (
                <div className={css.error}>{errors.title}</div>
              )}
            </div>

            <div className={css.inputGroup}>
              <label htmlFor="description">Recipe Description</label>
              <textarea 
                id="description" 
                name="description"
                placeholder="Enter a brief description of your recipe" 
                rows="4"
                className={css.textarea}
                {...getFieldProps('description')}
              />
              {touched.description && errors.description && (
                <div className={css.error}>{errors.description}</div>
              )}
            </div>

            <div className={css.rowGroup}>
              <div className={css.inputGroup}>
                <label htmlFor="cookingTime">Cooking time in minutes</label>
                <input 
                  id="cookingTime" 
                  name="cookingTime"
                  type="number"
                  placeholder="10" 
                  className={css.input}
                  {...getFieldProps('cookingTime')}
                />
                {touched.cookingTime && errors.cookingTime && (
                  <div className={css.error}>{errors.cookingTime}</div>
                )}
              </div>
            </div>
            
            <div className={css.rowGroup}>
              <div className={css.inputGroupHalf}>
                <label htmlFor="calories">Calories</label>
                <input 
                  id="calories" 
                  name="calories"
                  type="number"
                  placeholder="150 cals" 
                  className={css.input}
                  {...getFieldProps('calories')}
                />
                {touched.calories && errors.calories && (
                  <div className={css.error}>{errors.calories}</div>
                )}
              </div>
              
              <div className={css.inputGroupHalf}>
                <label htmlFor="category">Category</label>
                <select 
                  id="category" 
                  name="category"
                  className={`${css.input} ${css.select}`}
                  {...getFieldProps('category')}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {touched.category && errors.category && (
                  <div className={css.error}>{errors.category}</div>
                )}
              </div>
            </div>

            <h2 className={css.sectionTitle}>Ingredients</h2>
            
            <FieldArray name="ingredients">
              {({ push, remove }) => {
                const ingredients = values.ingredients; 
                return (
                  <div>
                    {ingredients.length > 0 && ingredients.map((ingredient, index) => (
                      <div key={index} className={css.ingredientRow}>
                        <div className={css.inputGroupHalf}>
                          <label htmlFor={`ingredients.${index}.name`}>Name</label>
                          <select
                            id={`ingredients.${index}.name`}
                            name={`ingredients.${index}.name`}
                            className={`${css.input} ${css.select}`}
                            value={ingredients[index]?.name || 'Broccoli'}
                            {...getFieldProps(`ingredients.${index}.name`)}
                          >
                            <option value="Broccoli">Broccoli</option>
                            <option value="Salt">Salt</option>
                            <option value="Water">Water</option>
                          </select>
                          <button 
                            type="button" 
                            onClick={() => remove(index)} 
                            className={css.removeIngredientBtn}
                            title="Remove ingredient"
                          >
                            &times;
                          </button>
                        </div>

                        <div className={css.inputGroupHalf}>
                          <label htmlFor={`ingredients.${index}.amount`}>Amount</label>
                          <input
                            id={`ingredients.${index}.amount`}
                            name={`ingredients.${index}.amount`}
                            type="text"
                            placeholder="100g"
                            className={css.input}
                            {...getFieldProps(`ingredients.${index}.amount`)}
                          />
                        </div>
                      </div>
                    ))}

                    <button 
                      type="button" 
                      onClick={() => push({ name: '', amount: '' })} 
                      className={css.addButton}
                    >
                      Add new Ingredient
                    </button>
                  </div>
                );
              }}
            </FieldArray>

            <h2 className={css.sectionTitle}>Instructions</h2>
            <div className={css.inputGroup}>
              <label htmlFor="instructions">Instructions</label>
              <textarea 
                id="instructions" 
                name="instructions"
                placeholder="Enter a text" 
                rows="6"
                className={css.textarea}
                {...getFieldProps('instructions')}
              />
              {touched.instructions && errors.instructions && (
                <div className={css.error}>{errors.instructions}</div>
              )}
            </div>

            <button 
              type="submit" 
              className={css.submitButton}
              disabled={isSubmitting || !isValid} 
            >
              Publish Recipe
            </button>

          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateRecepiesForm;