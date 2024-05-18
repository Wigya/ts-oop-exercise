export class Fish {
    private wiek: number;
    private isIll: boolean;
    private glod: number;

    constructor(wiek: number, glod: number, isIll: boolean) {
        this.wiek = wiek;
        this.isIll = isIll;
        this.glod = glod;
    }

    public getWiek(): number {
        return this.wiek;
    }

    public getIsIll(): boolean {
        return this.isIll;
    }

    public getGlod(): number {
        return this.glod;
    }

    public setWiek(wiek: number): void {
        this.wiek = wiek;
    }

    public setIsIll(isIll: boolean): void {
        this.isIll = isIll;
    }

    public updateGlod(glod: number): void {
        if (this.glod + glod > 100)
            this.glod = 100;
        else
            this.glod += glod;
    }
}