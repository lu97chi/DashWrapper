// each propertie is a type
export const Theme = {
    primaryColor : "#1890ff", // primary color for all components
    linkColor : "#1890ff", // link color
    successColor: "#52c41a", // success state color
    warningColor: "#faad14", // warning state color
    errorColor : "#f5222d", // error state color
    fontSizeBase: "18px", // major text font size
    headingColor : "rgba(0, 0, 0, 0.85)", // heading text color
    textColor : "rgba(0, 0, 0, 0.65)", // major text color
    textColorSecondary : "rgba(0, 0, 0, .45)", // secondary text color
    disabledColor : "rgba(0, 0, 0, .25)", // disable state color
    borderRadiusBase : "4px", // major border radius
    borderColorBase : "#d9d9d9", // major border color
    boxshadowBase : "0 2px 8px rgba(0, 0, 0, 0.15)", // major shadow for layers
    primaryBackgroundColor: "#001529",
    primaryHoverColor: '#E6F7FE',
    secondaryBackgroundColor: '#000C17',
    secondaryHoverColor: 'red',
    textColorLight: '#fffff0',
    textColorLightHover: '#ffffff'
}

export const HeaderData = {
    userName: 'Luis Hernandez',
    options: [
        {
            type: 'searcher',
            icon: 'search',
            col: 2,
            iconSize: '18px',
            iconColor: Theme.textColor,
        },
        {
            type: 'tooltip',
            icon: 'user',
            text: 'Perfil',
            col: 2,
            iconSize: '18px',
            iconColor: Theme.textColor,
        },
        {
            type: 'notification',
            icon: 'user',
            notifications: 12,
            badgeBackground: Theme.primaryColor,
            badgeColor: Theme.primaryColor,
            badgeOffset: [8,-8],
            iconSize: '18px',
            iconColor: Theme.textColor,
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
            iconColor: Theme.textColor,
        },
        {
            type: 'tooltip',
            icon: 'user',
            text: 'Perfil',
            col: 2,
            iconSize: '18px',
            iconColor: Theme.textColor,
        },
    ]
}

export const SidebarData = [
    {
        name: 'Perfil',
        route: 'perfil',
        icon: 'user',
        iconSize: '18px',
        fontSize: '18px'
    },
    // {
    //     name: 'Usuario',
    //     route: 'usuario',
    //     icon: 'user',
    //     iconSize: '18px',
    //     fontSize: '18px',
    //     nested: [
    //         {
    //             name: 'Algun nombre',
    //             icon: 'search',
    //             route: '/ruta2'
    //         },
    //         {
    //             name: 'Algun nombre',
    //             icon: 'search',
    //             route: '/ruta2'
    //         },
    //         {
    //             name: 'Algun nombre',
    //             icon: 'search',
    //             route: '/ruta2'
    //         },
    //         {
    //             name: 'Algun nombre',
    //             icon: 'search',
    //             route: '/ruta2'
    //         }
    //     ]
    // },
    {
        name: 'Estadisticas',
        route: 'estadisticas',
        icon: 'user',
        iconSize: '18px',
        fontSize: '18px',
        nested: [
            {
                name: 'Algun nombre',
                icon: 'search',
                route: '/ruta2'
            },
            {
                name: 'Algun nombre2',
                icon: 'search',
                route: '/ruta2',
                nested: [
                    {
                        name: 'Algun nombre3',
                        icon: 'search',
                        route: '/ruta2'
                    }, 
                ]
            },
            {
                name: 'Algun nombre4',
                icon: 'search',
                route: '/ruta2'
            },
            {
                name: 'Algun nombre5',
                icon: 'search',
                route: '/ruta2'
            }
        ]
    },
]