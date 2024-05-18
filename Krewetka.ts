import { Fish } from "./Fish";

export class Krewetka extends Fish {
    private isFiltering: boolean;
    constructor(wiek: number, glod: number, isIll: boolean, isFiltering: boolean) {
        super(wiek, glod, isIll);
        this.isFiltering = isFiltering;
    }

    public setIsFiltering(isFiltering: boolean) {
        this.isFiltering = isFiltering;
    }

    public getIsFiltering(): boolean {
        return this.isFiltering;
    }


}