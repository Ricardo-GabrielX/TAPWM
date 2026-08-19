let eventos = require('events');
let EmissorEventos = eventos.EventEmitter;
let ee = new EmissorEventos();

ee.on('dados', function(fecha){ 
    console.log(fecha);
});


// emissao do enveto somente um vez
ee.emit('dados', 'primeira vez ' + Date.now());


// emissao do evento a cada 2 segundos
setInterval(function() {
    ee.emit('dados', 'segunda vez ' + Date.now());
}, 2000);
