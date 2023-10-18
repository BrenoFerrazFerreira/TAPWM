//1) metodo construtor
function Retangulo(x, y){
    this.x = x;
    this.y = y;
    var resultado;

    this.Calcular = function() {
        resultado = this.x * this.y;
        return resultado;
    }
}
    varcalculo = new Retangulo("2", "3");
    alert(aluno4.MostraDados());