var Complex = /** @class */ (function () {
    function Complex(rzeczywista, urojona) {
        this.rzeczywista = rzeczywista;
        this.urojona = urojona;
    }
    Complex.prototype.dodawanie = function (obj) {
        return new Complex(this.rzeczywista + obj.rzeczywista, this.urojona + obj.urojona);
    };
    Complex.prototype.odejmowanie = function (obj) {
        return new Complex(this.rzeczywista - obj.rzeczywista, this.urojona - obj.urojona);
    };
    Complex.prototype.modul = function () {
        var rzeczywista = Math.pow(this.rzeczywista, 2);
        var urojona = Math.pow(this.urojona, 2);
        return (Math.sqrt(rzeczywista + urojona));
    };
    Complex.prototype.toString = function () {
        console.log('Rzeczywista: ', this.rzeczywista, 'Urojona: ', this.urojona);
    };
    return Complex;
}());
var x = new Complex(7, 3);
var y = new Complex(6, 2);
var z = x.dodawanie(y);
z.toString();
var tmp = z.odejmowanie(x);
tmp.toString();
console.log(tmp.modul());
