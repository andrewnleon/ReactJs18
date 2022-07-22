const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, './'),

  // Production build files
  build: path.resolve(__dirname, '../../build'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../../public'),
}
