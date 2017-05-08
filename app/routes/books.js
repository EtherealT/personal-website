import Ember from 'ember';

let pageName = 'Favorite Books';
let books = [
];

export default Ember.Route.extend({
    model(){
        return{
            pageName: pageName,
            books: books
        };
    }
});
