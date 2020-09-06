module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb+srv://vaibhav:vaibhav1234@cluster0.szqik.mongodb.net/strapi?retryWrites=true&w=majority",
      },
      options: {
        useNullAsDefault: true,
        ssl: true
      },
    },
  },
});
