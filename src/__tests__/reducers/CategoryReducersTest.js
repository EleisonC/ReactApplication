import categories from '../../reducers/reducers';

describe('Category reducers change state on', () => {
    it('maintains state on adding a category', () => {
        const data = {
            type: 'ADD_CATEGORY'
        }
        expect(categories(undefined, data))
        .toEqual([])
    }),
    it('maintains state on viewing a categories', () => {
        const data = {
            type: 'VIEW_CATEGORIES',
            data:{
            "categories":{
                    "categories": [
                    {
                        "category_id": 79,
                        "category_name": "Cood",
                        "created_by": 47,
                        "date_created": "Thu, 15 Mar 2018 00:11:45 GMT",
                        "date_modified": "Thu, 15 Mar 2018 00:11:45 GMT"
                    }
                ],
                "has_next": false,
                "has_prev": false,
                "next_page": null,
                "previous_page": null
            }}
        }
        expect(categories(undefined, data))
        .toEqual({
        categories:{
            "categories": [
                {
                    "category_id": 79,
                    "category_name": "Cood",
                    "created_by": 47,
                    "date_created": "Thu, 15 Mar 2018 00:11:45 GMT",
                    "date_modified": "Thu, 15 Mar 2018 00:11:45 GMT"
                }
            ],
            "has_next": false,
            "has_prev": false,
            "next_page": null,
            "previous_page": null}
        })
        
    }),
    it('maintains state on editing a category', () => {
        const data = {
            type: 'EDIT_CATEGORY'
        }
        expect(categories(undefined, data))
        .toEqual([])
    }),
    it('maintains state on deleting a category', () => {
        const data = {
            type: 'DELETE_CATEGORY'
        }
        expect(categories(undefined, data))
        .toEqual([])
    }),
    it('unknown action', () => {
        const data = {
            type: 'unknown'
        }
        expect(categories(undefined, data))
        .toEqual([])
    })

})