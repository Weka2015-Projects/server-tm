exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(),

    // Inserts seed entries
    knex('products').insert({
      name: 'Fireball scroll',
      price: 50
    }),
    knex('products').insert({
      name: 'Time freeze scroll',
      price: 200
    }),
    knex('products').insert({
      name: 'Anicent Psychic Tandem War Elephant',
      price: 2000
    }),
    knex('products').insert({
      name: 'Invisibilty scroll',
      price: 1000
    })
  )
}
