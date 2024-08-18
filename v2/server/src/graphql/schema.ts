import gql from 'graphql-tag'

// REST API schema: https://gadhagod.github.io/Hyrule-Compendium-API/#/compendium-api?id=entry-schemas

export const schema = gql`
  type Book {
    id: Int!
  }

  type Query {
    monsters: [Monster!]!
    equipment: [Equipment!]!
    materials: [Material!]!
    creatures(filters: CreatureFilters): [Creature!]!
    treasure: [Treasure!]!
  }

  # Allow filtering creatures by edibility
  input CreatureFilters {
    isEdible: Boolean
  }

  type Monster {
    id: Int!
    name: String!
    category: Category!
    description: String!
    image: String!
    commonLocations: [String!]!
    drops: [String!]!
    isDlc: Boolean!
  }

  type EquipmentProperty {
    attackDamage: Int
    defense: Int
    effect: String # Only for TOTK
    type: String # Only for TOTK
  }

  type Equipment {
    id: Int!
    name: String!
    category: Category!
    description: String!
    image: String!
    commonLocations: [String!]!
    properties: EquipmentProperty!
    isDlc: Boolean!
  }

  type Material {
    id: Int!
    name: String!
    category: Category!
    description: String!
    image: String!
    commonLocations: [String!]!
    heartsRecovered: Float!
    cookingEffect: String # Empty string if none
    isDlc: Boolean!
    fuseAttackPower: Int # Only for TOTK
  }

  type Creature {
    id: Int!
    name: String!
    category: Category!
    description: String!
    image: String!
    commonLocations: [String!]!
    cookingEffect: String # Empty string if none
    isEdible: Boolean! # Always true for creatures
    heartsRecovered: Float # Not null for edible creatures
    drops: [String!]!
    isDlc: Boolean!
  }

  type Treasure {
    id: Int!
    name: String!
    category: Category!
    description: String!
    image: String!
    commonLocations: [String!]!
    drops: [String!]!
    isDlc: Boolean!
  }

  enum Category {
    Monsters
    Equipment
    Materials
    Creatures
    Treasure
  }
`
