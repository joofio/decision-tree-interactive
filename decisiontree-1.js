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
}
rootnode = {
    text: {
        name: "Periodo de tempo entre o aparecimento do sintomas ",
        title: "e a primeira toma de penicilina"
    },
    HTMLid: "intial_node",
    HTMLclass: "mynode",
}

above2 = {
    parent: rootnode,
    text: { name: "igual ou superior a 2 horas" },
    HTMLid: "l1_1",
    HTMLclass: "mynode",
    collapsed: true,
}


above_2_new_admin = {
    parent: above2,
    text: {
        name: "Nova administraçãod de  ",
        title: "penicilina sem reacção"
    },
    HTMLid: "l2_1",
    HTMLclass: "mynode",
}

above_2_new_admin_risk = {
    parent: above_2_new_admin,
    text: { name: "Baixo risco de alergia a penicilina" }
}

above_2_severe = {
    parent: above2,
    text: {
        name: "Reacão severa (hospitalização, epinefrina, ...)",
    },
    HTMLclass: "mynode",
    collapsed: true,
}

above_2_severe_risk = {
    parent: above_2_severe,
    text: { name: "Alto risco de alergia a penicilina" }
}

above_2_acute = {
    parent: above2,
    text: {
        name: "Hepatite aguda, pneumonite hipersensível, agranulocitose ou vasculite",
    },
    HTMLclass: "mynode",
    collapsed: true,
}

above_2_acute_risk = {
    parent: above_2_acute,
    text: { name: "Alto risco de alergia a penicilina" }
}

above_2_normal = {
    parent: above2,
    text: { name: "Sem reacção Severa" },
    HTMLclass: "mynode",
    collapsed: true,
}


above_2_normal_skin = {
    parent: above_2_normal, text: { name: "Com Envolvimento Pele" },
    HTMLclass: "mynode",
    collapsed: true,
}

above_2_normal_skin_Mucosal = {
    parent: above_2_normal_skin, text: { name: "Lesões Mucosais e/ou bolhosa" },
    HTMLclass: "mynode",
    collapsed: true,
}
above_2_normal_skin_Mucosal_risk = {
    parent: above_2_normal_skin_Mucosal,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "mynode",
    
}

above_2_normal_skin_below48 = {
    parent: above_2_normal_skin, text: { name: "Duração dos sintomas inferior a 48 horas" },
    HTMLclass: "mynode",
    collapsed: true,
}

above_2_normal_skin_below48_risk = {
    parent: above_2_normal_skin_below48,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLclass: "mynode",
    
}

above_2_normal_skin_above48 = {
    parent: above_2_normal_skin, text: { name: "Duração dos sintomas superior a 48 horas" },
    HTMLclass: "mynode",
    collapsed: true,
}

above_2_normal_skin_above48_risk = {
    parent: above_2_normal_skin_above48,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "mynode",
    
}



above_2_normal_no_skin = {
    parent: above_2_normal, text: { name: "Sem Envolvimento Pele" },
    HTMLclass: "mynode",
    collapsed: true,
}
above_2_normal_no_skin_risk = {
    parent: above_2_normal_no_skin,
    text: { name: "Baixo risco de alergia a penicilina" }
}

//////////////////


unknown = {
    parent: rootnode,
    text: { name: "Desconhecido" },
    HTMLid: "l1_3",
    HTMLclass: "mynode",
    collapsed: true,
}


unknown_new_admin = {
    parent: unknown,
    text: {
        name: "Nova administraçãod de  ",
        title: "penicilina sem reacção"
    },
    HTMLid: "l2_1",
    HTMLclass: "mynode",
}

unknown_new_admin_risk = {
    parent: unknown_new_admin,
    text: { name: "Baixo risco de alergia a penicilina" }
}

unknown_severe = {
    parent: unknown,
    text: {
        name: "Reacão severa (hospitalização, epinefrina, ...)",
    },
    HTMLclass: "mynode",
    collapsed: true,
}
unknown_severe_risk = {
    parent: unknown_severe,
    text: { name: "Alto risco de alergia a penicilina" }
}

unknown_normal = {
    parent: unknown,
    text: {
        name: "Sem Reacção severa",
    },
    HTMLclass: "mynode",
    collapsed: true,
}
unknown_normal_duration = {
    parent: unknown_normal,
    text: {
        name: "Duração Sintomas",
    },
    HTMLclass: "mynode",
    collapsed: true,
}
unknown_normal_duration_below24 = {
    parent: unknown_normal_duration,
    text: {
        name: "Inferior a 24 horas",
    },
    HTMLclass: "mynode",
    collapsed: true,
}
unknown_normal_duration_below24_risk = {
    parent: unknown_normal_duration_below24,
    text: { name: "Alto risco de alergia a penicilina" }
}
unknown_normal_duration_24_48 = {
    parent: unknown_normal_duration,
    text: {
        name: "Entre 24 e 48 horas",
    },
    HTMLclass: "mynode",
    collapsed: true,
}
unknown_normal_duration_24_48_risk = {
    parent: unknown_normal_duration_24_48,
    text: { name: "Baixo risco de alergia a penicilina" }
}

unknown_normal_duration_above48 = {
    parent: unknown_normal_duration,
    text: {
        name: "Entre 24 e 48 horas",
    },
    HTMLclass: "mynode",
    collapsed: true,
}
unknown_normal_duration_above48_risk = {
    parent: unknown_normal_duration_above48,
    text: { name: "Alto risco de alergia a penicilina" }
}

unknown_normal_duration_unknown = {
    parent: unknown_normal_duration,
    text: {
        name: "Período Desconhecido",
    },
    HTMLclass: "mynode",
    collapsed: true,
}
unknown_normal_duration_unknown_risk = {
    parent: unknown_normal_duration_unknown,
    text: { name: "Alto risco de alergia a penicilina" }
}

////////////////////




below2 = {
    parent: rootnode,
    text: { name: "abaixo de 2 horas" },
    HTMLid: "l1_2",
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_new_admin = {
    parent: below2,
    text: {
        name: "Nova administraçãod de  ",
        title: "penicilina sem reacção"
    },
    HTMLid: "l2_1",
    HTMLclass: "mynode",
}

below_2_new_admin_risk = {
    parent: below_2_new_admin,
    text: { name: "Baixo risco de alergia a penicilina" }
}

below_2_severe = {
    parent: below2,
    text: {
        name: "Reacão severa (hospitalização, epinefrina, ...)",
    },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_severe_risk = {
    parent: below_2_severe,
    text: { name: "Alto risco de alergia a penicilina" }
}


below_2_normal = {
    parent: below2,
    text: { name: "Sem reacção Severa" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_skin = {
    parent: below_2_normal, text: { name: "Com Envolvimento Pele" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_skin_pruritus = {
    parent: below_2_normal_skin, text: { name: "Com Prurido" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_skin_pruritus_above_24h = {
    parent: below_2_normal_skin_pruritus, text: { name: "Duração dos sintomas superior a 24 horas" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_skin_pruritus_above_24h_risk = {
    parent: below_2_normal_skin_pruritus_above_24h,
    text: { name: "Baixo risco de alergia a penicilina" }
}


below_2_normal_skin_pruritus_below_24h = {
    parent: below_2_normal_skin_pruritus, text: { name: "Duração dos sintomas inferior a 24 horas" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_skin_pruritus_below_24h_risk = {
    parent: below_2_normal_skin_pruritus_below_24h,
    text: { name: "Alto risco de alergia a penicilina" }
}




below_2_normal_skin_no_pruritus = {
    parent: below_2_normal_skin, text: { name: "Sem Prurido" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_skin_no_pruritus_risk = {
    parent: below_2_normal_skin_no_pruritus,
    text: { name: "Baixo risco de alergia a penicilina" }
}



below_2_normal_no_skin = {
    parent: below_2_normal, text: { name: "Sem Envolvimento Pele" },
    HTMLclass: "mynode",
    collapsed: true,
}
below_2_normal_no_skin_asthma = {
    parent: below_2_normal_no_skin, text: { name: "Ataque de asma e/ou perda de consciência" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_no_skin_asthma_risk = {
    parent: below_2_normal_no_skin_asthma,
    text: { name: "Alto risco de alergia a penicilina" }
}

below_2_normal_no_skin_other = {
    parent: below_2_normal_no_skin, text: { name: "Outras manifestações (diarreia, astenia, ...)" },
    HTMLclass: "mynode",
    collapsed: true,
}

below_2_normal_no_skin_other_risk = {
    parent: below_2_normal_no_skin_other,
    text: { name: "Baixo risco de alergia a penicilina" }
}


chart_config = [config,rootnode
    ,above2
    ,above_2_new_admin
    ,above_2_new_admin_risk
    ,above_2_severe
    ,above_2_severe_risk
    ,above_2_acute
    ,above_2_acute_risk
    ,above_2_normal
    ,above_2_normal_skin
    ,above_2_normal_skin_Mucosal
    ,above_2_normal_skin_Mucosal_risk
    ,above_2_normal_skin_below48
    ,above_2_normal_skin_below48_risk
    ,above_2_normal_skin_above48
    ,above_2_normal_skin_above48_risk
    ,above_2_normal_no_skin
    ,above_2_normal_no_skin_risk
    ,unknown
    ,below2
    ,below_2_new_admin
    ,below_2_new_admin_risk
    ,below_2_severe
    ,below_2_severe_risk
    ,below_2_normal
    ,below_2_normal_skin
    ,below_2_normal_skin_pruritus
    ,below_2_normal_skin_pruritus_above_24h
    ,below_2_normal_skin_pruritus_above_24h_risk
    ,below_2_normal_skin_pruritus_below_24h
    ,below_2_normal_skin_pruritus_below_24h_risk
    ,below_2_normal_skin_no_pruritus
    ,below_2_normal_skin_no_pruritus_risk
    ,below_2_normal_no_skin
    ,below_2_normal_no_skin_asthma
    ,below_2_normal_no_skin_asthma_risk
    ,below_2_normal_no_skin_other
    ,below_2_normal_no_skin_other_risk
    ]