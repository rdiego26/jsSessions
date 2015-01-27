/**
 * Created by ramos on 27/01/15.
 */

var app = {

    sobrenome: '',

    name : {

        setaNome: function(_nome) {
            document.getElementById('nome').value = _nome;
        }
    }


};

var app2 = {

    //_that : this,

    mostraNome: function() {
        setTimeout(function() { console.log('Mostra nome'); }, 3000);
    },

    mostraSobreNome: function() {
        console.log('Mostra Sobrenome');
    },

    run: function() {
        app2.mostraNome();
        app2.mostraSobreNome();
    },

    example: function(_cb) {
        app2.run2( _cb );
    },

    run2: function(jorgeFun) {

        console.log('Rodando run2...');

        if (jorgeFun && typeof(jorgeFun) === 'function') { jorgeFun(); }
        throw ('jorgeFun is not a function');

    }

};
/*
function setaNome(_nome) {
    document.getElementById('nome').value = _nome;
}
*/