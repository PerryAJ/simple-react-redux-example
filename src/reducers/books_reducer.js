export default function(state=[], action){
    // here I am just returning a static list of objects, but this could just as easily be there result of a fetch,
    // or a Promise, or whatever else.
    return [
        {title: 'Javascript: Good Parts'},
        {title: 'Harry Potter'},
        {title: 'The Dark Tower'},
        {title: 'The Man and a Faulty Plan'}
    ]
}
