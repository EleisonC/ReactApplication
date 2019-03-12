import recipes from '../../reducers/recipeReducers';

describe('Reducer reducers change state on', () => {
    it('adding a recipe', () => {
        const data = {
            type: 'ADD_RECIPE'
        }
        expect(recipes(undefined, data))
        .toEqual([])
    }),
    it('Viewing recipes', () => {
        const data = {
            type: 'VIEW_RECIPES',
            data:{
                "recipes": {
                    "has_next": false,
                    "has_prev": false,
                    "next_page": null,
                    "previous_page": null,
                    "recipes": [
                      {
                        "category": 88,
                        "date_created": 'Thu, 15 Mar 2018 10:10:56 GMT',
                        "date_modified": 'Thu, 15 Mar 2018 10:10:56 GMT',
                        "instructions": 'werty sdfgh sdafg',
                        "recipe_id": 45,
                        "recipe_name": 'The water'
                      }
                    ]
                  }
            }
        }
        expect(recipes(undefined, data))
        .toEqual({
            recipes: {
                has_next: false,
                has_prev: false,
                next_page: null,
                previous_page: null,
                recipes: [
                  {
                    category: 88,
                    date_created: 'Thu, 15 Mar 2018 10:10:56 GMT',
                    date_modified: 'Thu, 15 Mar 2018 10:10:56 GMT',
                    instructions: 'werty sdfgh sdafg',
                    recipe_id: 45,
                    recipe_name: 'The water'
                  }
                ]
              }
        })
    }),
    it('editing a recipe', () => {
        const data = {
            type: 'EDIT_RECIPE'
        }
        expect(recipes(undefined, data))
        .toEqual([])
    }),
    it('deleteing a recipe', () => {
        const data = {
            type: 'DELETE_RECIPE'
        }
        expect(recipes(undefined, data))
        .toEqual([])
    }),
    it('unknown action', () => {
        const data = {
            type: 'unknown'
        }
        expect(recipes(undefined, data))
        .toEqual([])
    })

})