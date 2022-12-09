//1st method
//
// Compare with undefined


hero.name !== undefined;     // true
hero.realName !== undefined; // false

//2nd method
//
// Use hasOwnProperty() method

hero.hasOwnProperty('name'); // true
hero.hasOwnProperty('trueName'); // false

//3rd method
//
// Use in operator

const hero = {
    name: 'Batman',
};

hero.name; // 'Batman'
hero.trueName; // undefined

'name' in hero; // true
'trueName' in hero; // false
