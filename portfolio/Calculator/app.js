

let calculator = {
    calcMemery: 0,
    calcAddMemery: 0,
    isItNewNumber: true,

    curAction: function (a, b) {
        return a + b; 
    },

    buttonPerсent: function() {
        this.calcAddMemery = this.percent(this.calcMemery, this.calcAddMemery);
        document.getElementById('calc-face').value = this.calcAddMemery;
    },

    buttonAddition: function() {
        this.buttonEquality();
        this.curAction = this.addition; 
    },

    buttonMultiplication: function() {
        this.buttonEquality();
        this.curAction = this.multiplication; 
    },

    buttonSubtraction: function() {
        if (this.calcAddMemery === 0 && this.calcMemery === 0) {
            this.recordNumberToFace('-')
        } else {
        this.buttonEquality();
        this.curAction = this.subtraction; 
        }
    },

    buttonDivision: function() {
        this.buttonEquality();
        this.curAction = this.division; 
    },

    buttonEquality: function() {
        this.calcMemery = this.curAction(this.calcMemery, this.calcAddMemery);
        document.getElementById('calc-face').value = this.calcMemery;
        this.calcAddMemery = 0;
        this.curAction = this.addition;
        console.log(`Временная память: ${this.calcAddMemery}, постоянная память: ${this.calcMemery}`)
        },

    recordNumberToFace: function (n) {
        if (this.calcAddMemery === 0 && n === '-') {
            document.getElementById('calc-face').value = String(n);
        } else if (isNaN(this.calcAddMemery) && n != '-' && n != '.' ){
            document.getElementById('calc-face').value += String(n);
        } else if (isNaN(this.calcAddMemery) && n === '.' ){
            document.getElementById('calc-face').value += '0' + String(n);
        } else if (document.getElementById('calc-face').value.substr(0, 2) === '-0' && n === '.'){
            document.getElementById('calc-face').value += String(n);
        } else if (this.calcAddMemery === 0 && this.calcMemery !== 0 && document.getElementById('calc-face').value.substr(0, 3) === '-0.'){
            document.getElementById('calc-face').value = String(n);    
        } else if (document.getElementById('calc-face').value.substr(0, 3) === '-0.'){
            document.getElementById('calc-face').value += String(n);
        } else if (Number(document.getElementById('calc-face').value) !== 0 && this.calcAddMemery === 0){
            document.getElementById('calc-face').value = String(n);

        } else {
            if (this.calcAddMemery != 0) {
                document.getElementById('calc-face').value += String(n);
            } else {
                if (n === '.') {
                    document.getElementById('calc-face').value = '0' + String(n)
                } else {            
                    if (document.getElementById('calc-face').value.split('.').length > 1) {    
                        document.getElementById('calc-face').value += String(n); 
                    } else {
                        document.getElementById('calc-face').value = String(n);
                    }  
                }
            }
        }
        this.calcAddMemery = Number(document.getElementById('calc-face').value);
        console.log(`Временная память: ${this.calcAddMemery}, постоянная память: ${this.calcMemery}`)
    },

    percent: function(a, b) {
        return Number((String((a * b/100).toFixed(14)).replace(/0*$/,""))); 
    },
    addition: function(a, b) {
        return Number((String((a + b).toFixed(14)).replace(/0*$/,""))); 
    },
    multiplication: function(a, b) {
        return Number((String((a * b).toFixed(14)).replace(/0*$/,""))); 
    },
    subtraction: function(a, b) {
        return Number((String((a - b).toFixed(14)).replace(/0*$/,""))); 
    },
    division: function(a, b) {
        if (b === 0) {
            return 'Error'
        } else {
        return Number((String((a / b).toFixed(14)).replace(/0*$/,""))); 
        }
    },
    buttonC: function () {
        document.getElementById('calc-face').value = 0;
        this.calcMemery = 0;
        this.calcAddMemery = 0;
        this.curAction = this.addition;
    },    
    buttonCE: function () {
        document.getElementById('calc-face').value = 0;
        this.calcAddMemery = 0;
    },   
    buttonDel: function () {
            let s = document.getElementById('calc-face').value;
            if (s.length === 1) {
                document.getElementById('calc-face').value = 0;   
                this.calcAddMemery = 0;
            } else {
                s = s.slice(0,-1);
                document.getElementById('calc-face').value = s;
                this.calcAddMemery = Number(s);
            }
        console.log(`временная память: ${this.calcAddMemery}, постоянная память: ${this.calcMemery}`)
    },
    button1: function () {
        this.recordNumberToFace(1);
    },
    button2: function () {
        this.recordNumberToFace(2);
    },
    button3: function () {
        this.recordNumberToFace(3);
    },
    button4: function () {
        this.recordNumberToFace(4);
    },
    button5: function () {
        this.recordNumberToFace(5);
    },
    button6: function () {
        this.recordNumberToFace(6);
    },
    button7: function () {
        this.recordNumberToFace(7);
    },
    button8: function () {
        this.recordNumberToFace(8);
    },
    button9: function () {
        this.recordNumberToFace(9);
    },
    button0: function () {
        this.recordNumberToFace(0);
    },
    button_: function () {
        if (document.getElementById('calc-face').value.split('.').length < 2 || document.getElementById('calc-face').value === '-' ) {
        this.recordNumberToFace('.');
        }
    },
}