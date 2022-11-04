
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
        text: {
            name: "Periodo de tempo entre o aparecimento do sintomas ",
            title: "e a primeira toma de penicilina"
        },
        HTMLid: "intial_node",
        HTMLclass: "mynode",
        children: [
            {
                text: { name: "igual ou superior a 2 horas" },
                HTMLid: "l1_1",
                HTMLclass: "mynode",

                collapsed: true,
                children: [
                    {
                        text: {
                            name: "Nova administraçãod de  ",
                            title: "penicilina sem reacção"
                        },
                        HTMLid: "l2_1",
                        HTMLclass: "mynode",

                        children: [
                            { text: { name: "Baixo risco de alergia a penicilina" } },
                        ]
                    },
                ]
            },
            {
                text: { name: "abaixo de 2 horas" },
                HTMLid: "l1_2",
                HTMLclass: "mynode",

                collapsed: true,
                children: [
                    {
                        text: {
                            name: "Nova administraçãod de  ",
                            title: "penicilina sem reacção"
                        },
                        HTMLclass: "mynode",
                        collapsed: true,

                        children: [
                            {
                                text: { name: "Baixo risco de alergia a penicilina" },
                                HTMLclass: "mynode",

                            },
                        ]
                    },
                    {
                        text: {
                            name: "Reacão severa (hospitalização, epinefrina, ...)",


                        },
                        HTMLclass: "mynode",
                        collapsed: true,
                        children: [
                            {
                                text: { name: "Alto risco de alergia a penicilina" },
                                HTMLclass: "mynode",
                            },
                        ]
                    },
                    {
                        text: { name: "Sem reacção Severa" },
                        HTMLclass: "mynode",
                        collapsed: true,
                        children: [
                            {
                                text: { name: "Envolvimento Pele" },
                                HTMLclass: "mynode",
                                collapsed: true,

                                children: [{
                                    text: { name: "Sem Prurido" },
                                    HTMLclass: "mynode",
                                    collapsed: true,

                                    children: [
                                        {
                                            text: { name: "Baixo risco de alergia a penicilina" },
                                            HTMLclass: "mynode",
                                        },
                                    ]
                                }, {
                                    text: { name: "Com Prurido" },
                                    HTMLclass: "mynode",
                                    collapsed: true,

                                    children: [
                                        {
                                            text: { name: "Duração dos sintomas superior a 24 horas" },
                                            HTMLclass: "mynode",
                                            collapsed: true,

                                            children: [{
                                                text: { name: "Baixo risco de alergia a penicilina" },
                                                HTMLclass: "mynode",
                                            },]
                                        },
                                        {
                                            text: { name: "Duração dos sintomas inferior a 24 horas" },
                                            HTMLclass: "mynode",
                                            collapsed: true,

                                            children: [{
                                                text: { name: "Alto risco de alergia a penicilina" },
                                                HTMLclass: "mynode",
                                            },]
                                        },

                                    ]

                                }]
                            },
                            {
                                text: { name: "Sem envolvimento Pele" },
                                HTMLclass: "mynode",
                                collapsed: true,

                                children: [{
                                    text: { name: "Ataque de asma e/ou perda de consciência" },
                                    HTMLclass: "mynode",
                                    children: [{
                                        text: { name: "Alto risco de alergia a penicilina" },
                                        HTMLclass: "mynode",
                                    },]
                                }, {
                                    text: { name: "Outras manifestações (diarreia, astenia, ...)" },
                                    HTMLclass: "mynode",
                                    children: [{
                                        text: { name: "Baixo risco de alergia a penicilina" },
                                        HTMLclass: "mynode",
                                    },]
                                },]
                            },

                        ]
                    },

                ]
            },
            {
                text: { name: "Desconhecido" },
                HTMLid: "l1_3",
                HTMLclass: "mynode",

                collapsed: true,
                children: [
                    {
                        text: { name: "Time between symptoms and the first penicillin intake" },
                        HTMLid: "finalroot-1",
                        HTMLclass: "mynode",

                    }
                ]
            }

        ]
    }
};

//Array approach
/*
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