import { Mutation } from '../typeDefs/mutation';
import { Querys } from '../typeDefs/querys';
// import { Teste } from '../typeDefs/example';
import {example, examples} from './resolvers/example.resolver';
export const resolvers = {
  Query: {
    example
  },
  Mutation: {
    examples
  },
};

export const typeDefs = `
  ${Mutation}
  ${Querys}
`;
