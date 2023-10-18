var aluno = new Object();
aluno.ra = "00001234";
aluno.nome = "Breno";
alert("ra+ " + aluno.ra + " nome= " + aluno.nome);

var aluno2 = {};
aluno2.ra = "1234";
aluno2["nome"] = "Kaylla";
alert("ra= " + aluno2.ra + " nome= " + aluno2.nome);

var aluno3 = {
    ra: "1234567",
    nome: "Lucas"
};
alert("ra= " + aluno3.ra + " nome= " + aluno3.nome);

function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function() {
        return "ra= " + this.ra + " nome= " + this.nome;
    }
}
    var aluno4 = new Aluno("0323", "gga");
    alert(aluno4.MostraDados());

function Aluno2(){
    var ra;
    var nome;
    this.setRa = function(value){
        this.ra = value;
    }
    this.getRa = function(){
        return this.ra;
    }
    this.setNome = function(value){
        this.nome = value;
    }
    this.getNome = function(){
        return this.nome;
    }
}
    var aluno5 = new Aluno2();
    aluno5.setRa("999999");
    aluno5.setNome("parra");
    alert("ra= " + aluno5.getRa() + " nome= " + aluno5.getNome());
