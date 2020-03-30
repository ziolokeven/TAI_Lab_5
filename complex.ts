class Complex{
    private rzeczywista: number;
    private urojona: number;

    constructor(rzeczywista: number, urojona: number) {
        this.rzeczywista = rzeczywista;
        this.urojona = urojona;
    }
    dodawanie(obj:Complex):Complex{
        return new Complex(this.rzeczywista+obj.rzeczywista, this.urojona+obj.urojona)
    }
    odejmowanie(obj:Complex):Complex{
        return new Complex(this.rzeczywista-obj.rzeczywista, this.urojona-obj.urojona)
    }
    modul():number{
        let rzeczywista = Math.pow(this.rzeczywista,2);
        let urojona = Math.pow(this.urojona,2);
        return(Math.sqrt(rzeczywista+urojona));
    }
    toString(){
        console.log('Rzeczywista: ',this.rzeczywista,'Urojona: ',this.urojona)
    }
}
    let x = new Complex(7,3);
    let y = new Complex(6,2);
    let z = x.dodawanie(y);
    z.toString();
    let tmp = z.odejmowanie(x);
    tmp.toString();
    console.log(tmp.modul());
