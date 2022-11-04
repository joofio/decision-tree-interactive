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
    HTMLid: "l0",
    HTMLclass: "mynode",
}

above2 = {
    parent: rootnode,
    text: { name: "igual ou superior a 2 horas" },
    HTMLid: "l1",
    HTMLclass: "mynode",
    collapsed: true,
}


above_2_new_admin = {
    parent: above2,
    text: {
        name: "Nova administração de  ",
        title: "penicilina sem reacção"
    },
    collapsed: true,

    HTMLid: "l1_1",
}

above_2_new_admin_risk = {
    parent: above_2_new_admin,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLid: "l1_1_1",
    HTMLclass: "final-node",


}

above_2_severe = {
    parent: above2,
    text: {
        name: "Reacão severa (hospitalização, epinefrina, ...)",
    },
    HTMLid: "l1_2",
    collapsed: true,
}

above_2_severe_risk = {
    parent: above_2_severe,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l1_2_1",


}

above_2_acute = {
    parent: above2,
    text: {
        name: "Hepatite aguda, pneumonite hipersensível, agranulocitose ou vasculite",
    },
    HTMLid: "l1_3",

    collapsed: true,
}

above_2_acute_risk = {
    parent: above_2_acute,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l1_3_1",



}

above_2_normal = {
    parent: above2,
    text: { name: "Sem reacção Severa" },
    HTMLid: "l1_4",
    collapsed: true,
}


above_2_normal_skin = {
    parent: above_2_normal, text: { name: "Com Envolvimento Pele" },
    HTMLid: "l1_4_1",
    collapsed: true,
}

above_2_normal_skin_Mucosal = {
    parent: above_2_normal_skin, text: { name: "Lesões Mucosais e/ou bolhosa" },
    HTMLid: "l1_4_1_1",
    collapsed: true,
}
above_2_normal_skin_Mucosal_risk = {
    parent: above_2_normal_skin_Mucosal,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLid: "l1_4_1_1_1",
    HTMLclass: "final-node",


}

above_2_normal_skin_below48 = {
    parent: above_2_normal_skin, text: { name: "Duração dos sintomas inferior a 48 horas" },
    HTMLid: "l1_4_1_2",
    collapsed: true,
}

above_2_normal_skin_below48_risk = {
    parent: above_2_normal_skin_below48,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLid: "l1_4_1_2_1",
    HTMLclass: "final-node",


}

above_2_normal_skin_above48 = {
    parent: above_2_normal_skin, text: { name: "Duração dos sintomas superior a 48 horas" },
    HTMLid: "l1_4_1_3",
    collapsed: true,
}

above_2_normal_skin_above48_risk = {
    parent: above_2_normal_skin_above48,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l1_4_1_3_1",


}



above_2_normal_no_skin = {
    parent: above_2_normal, text: { name: "Sem Envolvimento Pele" },
    HTMLclass: "mynode",
    HTMLid: "l1_4_2",

    collapsed: true,
}
above_2_normal_no_skin_risk = {
    parent: above_2_normal_no_skin,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l1_4_2_1",

}

//////////////////


unknown = {
    parent: rootnode,
    text: { name: "Desconhecido" },
    HTMLid: "l3",
    collapsed: true,
}


unknown_new_admin = {
    parent: unknown,
    text: {
        name: "Nova administração de ",
        title: "penicilina sem reacção"
    },
    collapsed: true,

    HTMLid: "l3_1",
}

unknown_new_admin_risk = {
    parent: unknown_new_admin,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLid: "l3_1_1",
    HTMLclass: "final-node",


}

unknown_severe = {
    parent: unknown,
    text: {
        name: "Reação severa (hospitalização, epinefrina, ...)",
    },
    HTMLid: "l3_2",
    collapsed: true,
}
unknown_severe_risk = {
    parent: unknown_severe,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l3_2_1",

}

unknown_normal = {
    parent: unknown,
    text: {
        name: "Sem Reacção severa",
    },
    HTMLid: "l3_3",

    collapsed: true,
}
unknown_normal_duration = {
    parent: unknown_normal,
    text: {
        name: "Duração Sintomas",
    },
    HTMLid: "l3_3_1",

    collapsed: true,
}
unknown_normal_duration_below24 = {
    parent: unknown_normal_duration,
    text: {
        name: "Inferior a 24 horas",
    },
    HTMLid: "l3_3_1_1",

    collapsed: true,
}
unknown_normal_duration_below24_risk = {
    parent: unknown_normal_duration_below24,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l3_3_1_1_1",

}
unknown_normal_duration_24_48 = {
    parent: unknown_normal_duration,
    text: {
        name: "Entre 24 e 48 horas",
    },
    HTMLid: "l3_3_1_2",

    collapsed: true,
}
unknown_normal_duration_24_48_risk = {
    parent: unknown_normal_duration_24_48,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l3_3_1_2_1",


}

unknown_normal_duration_above48 = {
    parent: unknown_normal_duration,
    text: {
        name: "Superior a 48 horas",
    },
    HTMLid: "l3_3_1_3",

    collapsed: true,
}
unknown_normal_duration_above48_risk = {
    parent: unknown_normal_duration_above48,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l3_3_1_3_1",


}

unknown_normal_duration_unknown = {
    parent: unknown_normal_duration,
    text: {
        name: "Período Desconhecido",
    },
    HTMLid: "l3_3_1_4",

    collapsed: true,
}
unknown_normal_duration_unknown_risk = {
    parent: unknown_normal_duration_unknown,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l3_3_1_4_1",
}

////////////////////




below2 = {
    parent: rootnode,
    text: { name: "abaixo de 2 horas" },
    HTMLid: "l2",
    collapsed: true,
}

below_2_new_admin = {
    parent: below2,
    text: {
        name: "Nova administração de  ",
        title: "penicilina sem reacção"
    },
    HTMLid: "l2_1",
    collapsed: true,
}

below_2_new_admin_risk = {
    parent: below_2_new_admin,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLid: "l2_1_1",
    HTMLclass: "final-node",


}

below_2_severe = {
    parent: below2,
    text: {
        name: "Reacão severa (hospitalização, epinefrina, ...)",
    },
    HTMLid: "l2_2",

    collapsed: true,
}

below_2_severe_risk = {
    parent: below_2_severe,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLclass: "final-node",
    HTMLid: "l2_2_1",


}


below_2_normal = {
    parent: below2,
    text: { name: "Sem reacção Severa" },
    HTMLid: "l2_3",

    collapsed: true,
}

below_2_normal_skin = {
    parent: below_2_normal, text: { name: "Com Envolvimento Pele" },
    HTMLid: "l2_3_1",

    collapsed: true,
}

below_2_normal_skin_pruritus = {
    parent: below_2_normal_skin, text: { name: "Com Prurido" },
    HTMLid: "l2_3_1_1",
    collapsed: true,
}

below_2_normal_skin_pruritus_above_24h = {
    parent: below_2_normal_skin_pruritus, text: { name: "Duração dos sintomas superior a 24 horas" },
    HTMLid: "l2_3_1_1_1",

    collapsed: true,
}

below_2_normal_skin_pruritus_above_24h_risk = {
    parent: below_2_normal_skin_pruritus_above_24h,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLid: "l2_3_1_1_1_1",
    HTMLclass: "final-node",

}


below_2_normal_skin_pruritus_below_24h = {
    parent: below_2_normal_skin_pruritus, text: { name: "Duração dos sintomas inferior a 24 horas" },
    HTMLid: "l2_3_1_1_2",
    collapsed: true,
}

below_2_normal_skin_pruritus_below_24h_risk = {
    parent: below_2_normal_skin_pruritus_below_24h,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLid: "l2_3_1_1_2_1",
    HTMLclass: "final-node",

}


below_2_normal_skin_no_pruritus = {
    parent: below_2_normal_skin, text: { name: "Sem Prurido" },
    HTMLid: "l2_3_1_2",

    collapsed: true,
}

below_2_normal_skin_no_pruritus_risk = {
    parent: below_2_normal_skin_no_pruritus,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLid: "l2_3_1_2_1",
    HTMLclass: "final-node",

}



below_2_normal_no_skin = {
    parent: below_2_normal, text: { name: "Sem Envolvimento Pele" },
    HTMLid: "l2_3_2",
    collapsed: true,
}
below_2_normal_no_skin_asthma = {
    parent: below_2_normal_no_skin, text: { name: "Ataque de asma e/ou perda de consciência" },
    HTMLid: "l2_3_2_1",
    collapsed: true,
}

below_2_normal_no_skin_asthma_risk = {
    parent: below_2_normal_no_skin_asthma,
    text: { name: "Alto risco de alergia a penicilina" },
    HTMLid: "l2_3_2_1_1",
    HTMLclass: "final-node",

}

below_2_normal_no_skin_other = {
    parent: below_2_normal_no_skin, text: { name: "Outras manifestações (diarreia, astenia, ...)" },
    HTMLid: "l2_3_2_2",

    collapsed: true,
}

below_2_normal_no_skin_other_risk = {
    parent: below_2_normal_no_skin_other,
    text: { name: "Baixo risco de alergia a penicilina" },
    HTMLid: "l2_3_2_2_1",

    HTMLclass: "final-node",

}

chart_config = [config, rootnode
    , above2
    , above_2_new_admin
    , above_2_new_admin_risk
    , above_2_severe
    , above_2_severe_risk
    , above_2_acute
    , above_2_acute_risk
    , above_2_normal
    , above_2_normal_skin
    , above_2_normal_skin_Mucosal
    , above_2_normal_skin_Mucosal_risk
    , above_2_normal_skin_below48
    , above_2_normal_skin_below48_risk
    , above_2_normal_skin_above48
    , above_2_normal_skin_above48_risk
    , above_2_normal_no_skin
    , above_2_normal_no_skin_risk
    , unknown
    , unknown_new_admin
    , unknown_new_admin_risk
    , unknown_severe
    , unknown_severe_risk
    , unknown_normal
    , unknown_normal_duration
    , unknown_normal_duration_below24
    , unknown_normal_duration_below24_risk
    , unknown_normal_duration_24_48
    , unknown_normal_duration_24_48_risk
    , unknown_normal_duration_above48
    , unknown_normal_duration_above48_risk
    , unknown_normal_duration_unknown
    , unknown_normal_duration_unknown_risk
    , below2
    , below_2_new_admin
    , below_2_new_admin_risk
    , below_2_severe
    , below_2_severe_risk
    , below_2_normal
    , below_2_normal_skin
    , below_2_normal_skin_pruritus
    , below_2_normal_skin_pruritus_above_24h
    , below_2_normal_skin_pruritus_above_24h_risk
    , below_2_normal_skin_pruritus_below_24h
    , below_2_normal_skin_pruritus_below_24h_risk
    , below_2_normal_skin_no_pruritus
    , below_2_normal_skin_no_pruritus_risk
    , below_2_normal_no_skin
    , below_2_normal_no_skin_asthma
    , below_2_normal_no_skin_asthma_risk
    , below_2_normal_no_skin_other
    , below_2_normal_no_skin_other_risk
]
