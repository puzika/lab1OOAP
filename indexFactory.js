"use strict";

const cubes = require('./cubes.js');

class Cube {
   type;
   brand;
   static warranty;
}

class BudgetCube extends Cube {
   static warranty = 0.5;

   constructor() {
      this.brand = brand;
      this.type = type;
   }
}

class MediumCube extends Cube {
   static warranty = 1;

   constructor() {
      this.brand = brand;
      this.type = type;
   }
}

class PremiumCube extends Cube {
   static warranty = 1.5;

   constructor() {
      this.brand = brand;
      this.type = type;
   }
}


class CubeFactory {
   displayCube() { }
}

class BudgetCubeFactory extends CubeFactory {
   createCube() {
      return new BudgetCube();
   }
}

class MediumCubeFactory extends CubeFactory {
   createCube() {
      return new MediumCube();
   }
}

class PremiumCubeFactory extends CubeFactory {
   createCube() {
      return new PremiumCube();
   }
}