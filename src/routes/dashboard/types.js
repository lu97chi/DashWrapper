// @flow

export type ItemType = {
    text: string,
    icon: string
}

type notificationDataType = {
    type: string,
    name: string,
    icon: string,
}

export type OptionsType = {
    text: string,
    icon: string,
    type: string,
    notifications: ?number,
    search: ?boolean,
    notificationData: ?Array<notificationDataType>
}

export type DropdownType = {
    name: string,
    icon: string,
    divider: boolean,
}