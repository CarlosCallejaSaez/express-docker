const app = require('./app');
const port = 3000;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
  });
}