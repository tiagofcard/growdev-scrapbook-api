export default class Schedule{

id: number;

constructor(
            public model: string,
            public year: number,
            public date: string,
            public service: string
            ) {
        this.id = Math.floor(Math.random() * (10000 - 1 + 1) + 1)
    }
};