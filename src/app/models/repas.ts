export class Repas{
    constructor(
        private id:number,
        private nom:string,
        private date:string,
        private time:string,
        private aliments:string
    ){}

    getID(){
        return this.id;
    }
    getNom(){
    return this.nom;
    }
    getDate(){
    return this.date;
    }
    getTime(){
    return this.time;
    }
    getAliments(){
    return this.aliments;
    }
}