
import React, { Component } from 'react';


class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state ={
            cpu: 0,
            gpu: 0,
            ram: 0,
            disco: 0
        }

        this.alteraValor = this.alteraValor.bind(this);
        this.atribui= this.atribui.bind(this);

    }

    alteraValor(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    atribui(event) {


        const computador = {
            cpu: this.state.cpu,
            gpu: this.state.gpu,
            ram: this.state.ram,
            disco: this.state.disco
        };

        console.log(computador);

        var envia= JSON.stringify(computador);


        var xmlhttp= new XMLHttpRequest();

        xmlhttp.open("POST","/", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");

        xmlhttp.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                alert(this.responseText);
            }
        };

        xmlhttp.send(envia);





    }


    render(){
        return (
            <React.Fragment>
                <h1>Cadastro de Computadores</h1>
                <p>Preencha os campos a seguir para cadastrar uma máquina</p>

                <React.Fragment>
                    <h1>Recursos da máquina</h1><br />

                    CPU:<br />
                    <input id={"cpu"} type={"number"} name={"cpu"} value={this.state.cpu} onChange={this.alteraValor} /> <br />

                    GPU:<br />
                    <input id={"gpu"} type={"number"} name={"gpu"} value={this.state.gpu} onChange={this.alteraValor} /> <br />

                    RAM:<br />
                    <input id={"ram"} type={"number"} name={"ram"} value={this.state.ram} onChange={this.alteraValor} /> <br />

                    Disco:<br />
                    <input id={"disco"} type={"number"} name={"disco"} value={this.state.disco} onChange={this.alteraValor} /> <br /><br />


                    <button id={"clique"} type={"button"} onClick={this.atribui}>Enviar</button>

                    <p id={"verifica"}> </p>

                </React.Fragment>




            </React.Fragment>
        );
    }
}

export default Cadastro;


/*function atribui(){

    let cpu = document.getElementById('cpu').value;
    let gpu = document.getElementById('gpu').value;
    let ram = document.getElementById('ram').value;
    let disco = document.getElementById('disco').value;


    console.log(cpu);

    console.log(gpu);

    console.log(ram);

    console.log(disco);


    document.getElementById('verifica').innerText = "Cadastro Efetuado";

}
*/