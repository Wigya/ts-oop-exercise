import { Fish } from "./Fish";

export class Gupik extends Fish {
    private isSleep: boolean;
    constructor(wiek: number, glod: number, isIll: boolean, isSleep: boolean) {
        super(wiek, glod, isIll);
        this.isSleep = isSleep;
    }

    public setIsSleep(isSleep: boolean): void {
        this.isSleep = isSleep;
    }

    public getIsSleep(): boolean {
        return this.isSleep;
    }
}