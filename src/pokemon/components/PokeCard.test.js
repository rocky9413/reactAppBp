import PokeCard from './PokeCard';

const Charmander = {
    id: '004',
    name: 'Charmander',
    classification: 'Lizard Pokémon',
    types: ['Fire'],
    resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
    weaknesses: ['Water', 'Ground', 'Rock'],
    weight: {
        minimum: '7.44kg',
        maximum: '9.56kg'
    },
    height: {
        minimum: '0.53m',
        maximum: '0.68m'
    },
    fleeRate: 0.1,
    evolutionRequirements: {
        amount: 25,
        name: 'Charmander candies'
    },
    evolutions: [
        {
            id: 5,
            name: 'Charmeleon'
        },
        {
            id: 6,
            name: 'Charizard'
        }
    ],
    maxCP: 841,
    maxHP: 955,
    attacks: {
        fast: [
            {
                name: 'Ember',
                type: 'Fire',
                damage: 10
            },
            {
                name: 'Scratch',
                type: 'Normal',
                damage: 6
            }
        ],
        special: [
            {
                name: 'Flame Burst',
                type: 'Fire',
                damage: 30
            },
            {
                name: 'Flame Charge',
                type: 'Fire',
                damage: 25
            },
            {
                name: 'Flamethrower',
                type: 'Fire',
                damage: 55
            }
        ]
    }
};

it('should ...', () => {

});