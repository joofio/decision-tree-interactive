
    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text: { name: "Periodo de tempo entre o aparecimento do sintomas " ,
            title: "e a primeira toma de penicilina"},
           HTMLid: "root" ,
            children: [
                {
                    text: { name: "igual ou superior a 2 horas" },
                    collapsed: true,
                    children: [
                        {
                            text: { name: "Nova administraçãod de  ",
                        title:"penicilina sem reacção" },
                            children: [
                                { text: { name: "Baixo risco de alergia a penicilina" } },
                            ]
                        },
                    ]
                },
                {
                    text: { name: "abaixo de 2 horas" },
                    collapsed: true,
                    children: [
                        {
                            text: { name: "Nova administraçãod de  ",
                            title:"penicilina sem reacção" },
                            children: [
                                { text: { name: "Baixo risco de alergia a penicilina" } },
                            ]
                        },
                        {
                            text: { name: "Reacão severa (hospitalização, epinefrina, ...)" },
                            children: [
                                { text: { name: "Alto risco de alergia a penicilina" } },
                            ]
                        },
                        {
                            text: { name: "Sem reacção Severa" },
                            children: [
                                { text: { name: "Envolvimento Pele" } },
                                { text: { name: "Sem envolvimento Pele" } },

                            ]
                        },

                    ]
                },
                {
                    text: { name: "Desconhecido" },
                    collapsed: true,
                    children: [
                        {
                            text: { name: "Time between symptoms and the first penicillin intake" },
                            HTMLid: "finalroot-1" ,
                        }
                    ]
                }
              
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/