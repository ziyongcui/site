import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import RecipeAndTitle from '../components/RecipeAndTitle';
import recipes from '../RecipeDB';

class Recipes extends React.Component {
    state = {
        recipe: recipes[0][0],
        ingredient: recipes[0][1],
        img: recipes[0][2],
        name: recipes[0][3],
    }
    //generate diffrent recipe function
    generateRandomRecipe = (arr) => {
        //get random numbers
        let num = Math.floor(Math.random() * recipes.length)

        let newRecipe = recipes[num];

        //update state
        this.setState({
        recipe: newRecipe[0],
        ingredient: newRecipe[1],
        img: newRecipe[2],
        name: newRecipe[3]
        })

        this.shuffleRecipes(recipes)

    }

    //shuufle recipes function
    shuffleRecipes = (arr) => {
        return arr.sort(function () { return 0.5 - Math.random() });
    }

    handleKeyPress = event => {
        // space
        if (event.keyCode === 32) {
          this.generateRandomRecipe();
        }
        else if (event.keyCode === 13) {
            this.generateRandomRecipe();
          }
      };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress, false);
      }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress, false);
      }

    render() {
    return(
        <div>
            <Hero title="Recipes" />

            <Content>
                <center>
                <h5 className="card-title" style={{ fontSize: '160px' }}>{this.state.name}</h5>
                <img src={this.state.img} onClick={this.generateRandomRecipe} width="35%" alt="recipes"/>
                </center>
            <RecipeAndTitle
                generateRandomRecipe={this.generateRandomRecipe}
                recipe={this.state}
            />
            </Content>
        </div>
    );}

}

export default Recipes;