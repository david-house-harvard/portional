import React from 'react';
import PropTpes from 'prop-types';
import { connect } from 'react-redux';
import CreateRecipeForm from '../components/create-recipe-form';
import Typography from '@material-ui/core/Typography';


class RecipeCreatePage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  };

  render() {
    return (
      <div className="recipe-create-page">
        <div className="recipe-create-form">
          <Typography component="h1" variant="h1" gutterBottom>Create a recipe</Typography>
          <CreateRecipeForm onSubmit={this.submit} />
        </div>
      </div>
    )
  }
}

export default RecipeCreatePage;
