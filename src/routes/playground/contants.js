// each propertie is a type
export const HeaderData = {
    userName: 'Luis Hernandez',
    options: [
        {
            type: 'searcher',
            icon: 'search',
            col: 2,
            iconSize: '18px',
            iconColor: 'red',
        },
        {
            type: 'tooltip',
            icon: 'user',
            text: 'Perfil',
            col: 2,
            iconSize: '18px',
            iconColor: 'red',
        },
        {
            type: 'notification',
            icon: 'user',
            notifications: 12,
            badgeBackground: 'yellow',
            badgeColor: 'orange',
            badgeOffset: [8,-8],
            iconSize: '18px',
            iconColor: 'yellow',
            notificationData: [
                {
                    type: 'text',
                    divider: true,
                    text: 'notificacion 1',
                },
                {
                    type: 'iconText',
                    divider: true
                }
            ]
        },
        {
            type: 'tooltip',
            icon: 'user',
            text: 'Perfil',
            col: 2,
            iconSize: '18px',
            iconColor: 'red',
        },
        {
            type: 'tooltip',
            icon: 'user',
            text: 'Perfil',
            col: 2,
            iconSize: '18px',
            iconColor: 'red',
        },
    ]
}

export const SidebarData = [
    {
        name: 'Perfil',
        route: 'perfil',
        icon: 'user',
        iconSize: '14px',
        fontSize: '18px'
    },
    {
        name: 'Usuario',
        route: 'usuario',
        icon: 'user',
        iconSize: '14px',
        fontSize: '18px',
        nested: [
            {
                name: 'Algun nombre',
                icon: 'search',
                route: '/ruta2'
            },
            {
                name: 'Algun nombre',
                icon: 'search',
                route: '/ruta2'
            },
            {
                name: 'Algun nombre',
                icon: 'search',
                route: '/ruta2'
            },
            {
                name: 'Algun nombre',
                icon: 'search',
                route: '/ruta2'
            }
        ]
    },
    {
        name: 'Estadisticas',
        route: 'estadisticas',
        icon: 'user',
        iconSize: '14px',
        fontSize: '18px'
    },
]