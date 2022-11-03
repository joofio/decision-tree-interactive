
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
            text: { name: "Time between symptoms and the first penicillin intake",
            HTMLid: "root" ,
         //   title: "One of kind",
          //  desc: "A basic example",
           // data-foo: " data Attribute for node" s
        },
            children: [
                {
                    text: { name: "> 2 hours" },
                    collapsed: true,
                    children: [
                        {
                            text: { name: "New administration of penicillin without reaction" },
                            children: [
                                { text: { name: "Low risk of penicillin allergy" } },
                            ]
                        },
                    ]
                },
                {
                    text: { name: "<2 hours" },
                    collapsed: true,

                    childrenDropLevel: 1,
                    children: [
                        {
                            text: { name: "New administration of penicillin without reaction" },
                            children: [
                                { text: { name: "Low risk of penicillin allergy" } },
                            ]
                        },
                        {
                            text: { name: "Serious reaction (hospitalization, epinephrine)" },
                            children: [
                                { text: { name: "High risk of penicillin allergy" } },
                            ]
                        },
                        {
                            text: { name: "No serious Reaction" },
                            children: [
                                { text: { name: "Skin Envolvement" } },
                                { text: { name: "No Skin Envolvement" } },

                            ]
                        },

                    ]
                },
                {
                    text: { name: "Unknown" },
                    childrenDropLevel: 1,
                    collapsed: true,

                    children: [
                        {
                            text: { name: "Time between symptoms and the first penicillin intake" },
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