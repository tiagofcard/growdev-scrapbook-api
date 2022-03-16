
export default class User {
  id: number;
 

  constructor(
                public name: string,
                public email: string,
                public password: string
                ) {
      this.id = Math.floor(Math.random() * (10000 - 1 + 1) + 1)
  }
};