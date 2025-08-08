export default () => ({
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 25,
      apolloServer: { introspection: true },
    },
  },
});
