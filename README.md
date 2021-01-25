
<a name="readmemd"></a>

@metacoin/browser-extensionizer - v0.2.0 / [Exports](#modulesmd)

<a name="readmemd"></a>

@metacoin/browser-extensionizer - v0.2.0 / [Exports](#modulesmd)

<a name="readmemd"></a>

@metacoin/browser-extensionizer - v0.2.0 / [Exports](#modulesmd)

<a name="readmemd"></a>

@metacoin/browser-extensionizer - v0.2.0 / [Exports](#modulesmd)

# browser-api-handler

# Classes

<a name="classesbrowser_alarmsalarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / alarms

## Class: alarms

[Browser/Alarms](#modulesbrowser_alarmsmd).alarms

**`type/chrome.alarms`** 

### Hierarchy

* **alarms**

### Implements

* [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [clearAll](#clearall)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Constructors

#### constructor

\+ **new alarms**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L19)

### Properties

#### instance

▪ `Static` **instance**: [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L16)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람이 경과하면 Listener의 등록되어 있는 callback 함수가 실행됩니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* | Alarm을 발생시 호출되는 Callback 함수입니다. (id: 생성시 고유 ID, alram: 해당 알람의 정보)    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Defined in: [src/Browser/Alarms.ts:63](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L63)

___

#### clear

▸ **clear**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람을 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:150](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L150)

___

#### clearAll

▸ **clearAll**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 모든 알람을 제거합니다.

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L166)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): [*alarms*](#classesbrowser_alarmsalarmsmd)

Alarm을 생성합니다. alarmInfo로 지정된 시간에 가까워 지면 onAlarm이벤트가 시작됩니다.
같은 이름의 다른 알람이있는 경우 (또는 지정되지 않은 경우 이름이없는 경우) 취소되고이 알람으로 대체됩니다.

사용자 컴퓨터의 부하를 줄이기 위해 Chrome은 알람을 최대 1 분에 한 번으로 제한하지만 임의의 양을 더 지연시킬 수 있습니다. 즉, delayInMinutes또는 periodInMinutes보다 작게 설정 1하면 적용되지 않으며 경고가 발생합니다. when경고없이 "지금"후 1 분 미만으로 설정할 수 있지만 실제로 최소 1 분 동안 Alarm을 발생하지 않습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 이 Alarm을 식별하기위한 이름입니다.   |
`options` | AlarmCreateInfo | 알람이 발생해야하는시기를 설명합니다. 초기 시간은 when 또는 delayInMinutes (둘다는 아님) 로 지정해야합니다 . 경우 periodInMinutes가 설정 한 알람이 매일 반복됩니다 periodInMinutes의 초기 이벤트 후 분. 둘 경우 시 또는 delayInMinutes이 반복 알람 설정, periodInMinutes는 대한 기본값으로 사용되지 않습니다 delayInMinutes.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:42](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L42)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람시 등록되어있는 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`id` | *string* | Alarm addListener시 생성된 ID값    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:98](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L98)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람의 모든 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:121](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L121)

<a name="classesbrowser_messagemessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / message

## Class: message

[Browser/Message](#modulesbrowser_messagemd).message

### Hierarchy

* **message**

### Implements

* [*iMessage*](#interfacesbrowser_messageimessagemd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Constructors

#### constructor

\+ **new message**(): [*message*](#classesbrowser_messagemessagemd)

**Returns:** [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L24)

### Properties

#### instance

▪ `Static` **instance**: [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L21)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

확장 프로세스 (by sendMessage) 또는 콘텐츠 스크립트 (by tabs.sendMessage) 에서 메시지가 전송되면 이벤트가 발생합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:127](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L127)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

다른 확장 프로그램 / 앱에서 메시지가 전송되면 시작됩니다 ( sendMessage). 콘텐츠 스크립트에서 사용할 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:203](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L203)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

확장 / 앱 또는 다른 확장 / 앱 내의 이벤트 리스너에 단일 메시지를 보냅니다.

확장 프로그램은이 방법을 사용하여 콘텐츠 스크립트에 메시지를 보낼 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:46](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L46)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

응답이 다시 전송 될 때 실행할 선택적 콜백과 함께 지정된 탭의 콘텐츠 스크립트에 단일 메시지를 보냅니다.

해당 이벤트는 runtime.onMessage 및 해당 Class의 on 함수로 처리할 수 있습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`tabId` | *number* | - | 발신 Tab ID   |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:88](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L88)

<a name="classesbrowser_notifynotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / notify

## Class: notify

[Browser/Notify](#modulesbrowser_notifymd).notify

**`type/chrome.notifications`** 

### Hierarchy

* **notify**

### Implements

* [*iNotify*](#interfacesbrowser_notifyinotifymd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Constructors

#### constructor

\+ **new notify**(): [*notify*](#classesbrowser_notifynotifymd)

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:35](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L35)

### Properties

#### instance

▪ `Static` **instance**: [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L32)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

알림을 만들고 표시합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*string*\>

Promise - notification ID를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:289](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L289)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

이 앱 또는 확장 프로그램의 모든 알림을 가져옵니다.

**Returns:** *Promise*<Object\>

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:337](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L337)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림에서 버튼을 눌렀을 때 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* | notification의 ID 및 누른 버튼의 Index를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L190)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림의 버튼이 아닌 영역을 클릭시 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*) => *void* | notification의 ID를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:89](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L89)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

시스템 또는 사용자 작업에 의해 알림이 닫혔을 때 발생하는 이벤트 입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* | notification의 ID 및 사용자에 의해 닫힌 여부를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:140](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L140)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 권한 수준을 변경합니다. Chrome 47부터는 ChromeOS에만이 이벤트를 전달하는 UI가 있습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`level`: *string*) => *void* | notification의 권한 레벨을 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:240](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L240)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

버튼을 눌렀을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:218](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L218)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

클릭시 발생되는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:118](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L118)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

알림이 닫혔을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:168](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L168)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

권한 수준을 변경 이벤트를 삭제합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:265](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L265)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): [*notify*](#classesbrowser_notifynotifymd)

알림의 기본 옵션을 정의합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:67](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L67)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*boolean*\>

Promise - Update 여부를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:315](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L315)

<a name="classesbrowser_portportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / port

## Class: port

[Browser/Port](#modulesbrowser_portmd).port

### Hierarchy

* **port**

### Implements

* [*iPort*](#interfacesbrowser_portiportmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Constructors

#### constructor

\+ **new port**(): [*port*](#classesbrowser_portportmd)

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:31

### Properties

#### instance

▪ `Static` **instance**: [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:25

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

지정된 이름으로 포트를 연결합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** *null* | Port

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:69

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

연결되어 있는 포트를 닫습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** Boolean

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:94

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *undefined* | { `removeListener`: () => *void*  }

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | portCallbackFunction |

**Returns:** *undefined* | { `removeListener`: () => *void*  }

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:213

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): [*port*](#classesbrowser_portportmd)

지정된 포트가 닫혔을때 이벤트가 발생합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름   |
`callback` | (`port`: Port) => *void* | 포트가 닫힐 때 발생되는 Callback 함수    |

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:114

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *Promise*<*void*\>

지정된 포트로 메세지를 발송합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`name` | *string* | - | 지정된 포트 이름   |
`method` | *string* | - | 발생시킬 메소드 명   |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | 암호화 여부   |
`response` | *null* | Function | null | Response를 받아야할 경우 Timeout 시간 만큼 기다립니다.    |

**Returns:** *Promise*<*void*\>

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:141

___

#### setTimeout

▸ **setTimeout**(`ms?`: *number*): [*port*](#classesbrowser_portportmd)

Port 사용시 Resoponse를 위한 Timeout 설정

기본적으로 Port는 단방향으로만 메세지를 발생합니다.

하지만, 해당 Class는 Response를 구현하였으므로 결과값을 받기 위해 기본 Timeout 시간을 설정할 수 있습니다.

**`default`** 240000ms (4min)

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ms` | *number* | 240000 | milliseconds    |

**Returns:** [*port*](#classesbrowser_portportmd)

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:58

<a name="classesbrowser_runtimeruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / runtimeEvent

## Class: runtimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).runtimeEvent

### Hierarchy

* **runtimeEvent**

### Implements

* [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Constructors

#### constructor

\+ **new runtimeEvent**(): [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

**Returns:** [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L20)

### Properties

#### instance

▪ `Static` **instance**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L15)

### Methods

#### onCommand

▸ **onCommand**(`callback`: Function, `key?`: *string*): *void*

Chrome.commands
Fired when a registered command is activated using a keyboard shortcut.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:209](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L209)

___

#### onConnect

▸ **onConnect**(`callback`: Function, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from either an extension process or a content script

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:124](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L124)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from another extension

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L166)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:82](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L82)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

Remove onCommand event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:230](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L230)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

Remove onConnect event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:146](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L146)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

Remove onConnectExternal event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:189](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L189)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:104](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L104)

<a name="classesbrowser_tabstabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / tabsEvent

## Class: tabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).tabsEvent

### Hierarchy

* *EventEmitter*

  ↳ **tabsEvent**

### Implements

* [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)
* *EventEmitter*

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [captureRejectionSymbol](#capturerejectionsymbol)
- [captureRejections](#capturerejections)
- [defaultMaxListeners](#defaultmaxlisteners)
- [errorMonitor](#errormonitor)
- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [emit](#emit)
- [eventNames](#eventnames)
- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getMaxListeners](#getmaxlisteners)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [listenerCount](#listenercount)
- [listeners](#listeners)
- [off](#off)
- [on](#on)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [once](#once)
- [prependListener](#prependlistener)
- [prependOnceListener](#prependoncelistener)
- [rawListeners](#rawlisteners)
- [removeActivated](#removeactivated)
- [removeAllListeners](#removealllisteners)
- [removeListener](#removelistener)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)
- [setMaxListeners](#setmaxlisteners)
- [listenerCount](#listenercount)
- [on](#on)
- [once](#once)

### Constructors

#### constructor

\+ **new tabsEvent**(): [*tabsEvent*](#classesbrowser_tabstabseventmd)

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:72](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L72)

### Properties

#### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:38

___

#### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:44

___

#### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

#### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:37

___

#### instance

▪ `Static` **instance**: [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:66](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L66)

### Methods

#### addListener

▸ **addListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:57

___

#### emit

▸ **emit**(`event`: *string* | *symbol*, ...`args`: *any*[]): *boolean*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:67

___

#### eventNames

▸ **eventNames**(): (*string* | *symbol*)[]

**Returns:** (*string* | *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:72

___

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

Returns the active tab information stored in the class.

**Returns:** *Promise*<*null* | tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:359](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L359)

___

#### getActiveTab

▸ **getActiveTab**(`index?`: *number*): *Promise*<tabResult\>

Chrome.tabs.query -> Chrome.tabs.get

Retrieves details about the specified active tab.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:326](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L326)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:227](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L227)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Returns a list of tabs stored in the class.

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:341](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L341)

___

#### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tabId` | *number* |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:238](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L238)

___

#### getTabIndex

▸ **getTabIndex**(`index?`: *number*, `options?`: *null* | QueryInfo): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |
`options` | *null* | QueryInfo | null | - |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:271](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L271)

___

#### getTabs

▸ **getTabs**(`options?`: *null* | QueryInfo): *Promise*<tabResult[]\>

Chrome.tabs.get

Gets all tabs that have the specified properties, or all tabs if no properties are specified.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`options` | *null* | QueryInfo | null |     |

**Returns:** *Promise*<tabResult[]\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:387](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L387)

___

#### listenerCount

▸ **listenerCount**(`event`: *string* | *symbol*): *number*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

#### listeners

▸ **listeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

#### off

▸ **off**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:61

___

#### on

▸ **on**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:58

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onActivated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:425](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L425)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onRemoved
Fired when a tab is closed.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tabId`: *number*) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:574](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L574)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onUpdated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:501](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L501)

___

#### once

▸ **once**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:59

___

#### prependListener

▸ **prependListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:70

___

#### prependOnceListener

▸ **prependOnceListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:71

___

#### rawListeners

▸ **rawListeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

#### removeActivated

▸ **removeActivated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:467](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L467)

___

#### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* | *symbol*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* | *symbol* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:62

___

#### removeListener

▸ **removeListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:60

___

#### removeRemoved

▸ **removeRemoved**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:608](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L608)

___

#### removeUpdated

▸ **removeUpdated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:540](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L540)

___

#### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:63

___

#### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* | *symbol*): *number*

**`deprecated`** since v4.0.0

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

#### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:23

___

#### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* | *symbol*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* | *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:22

<a name="classeslib_cryptrsacryptomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Crypt](#moduleslib_cryptmd) / RSACrypto

## Class: RSACrypto

[Lib/Crypt](#moduleslib_cryptmd).RSACrypto

### Hierarchy

* **RSACrypto**

### Implements

* [*iRSACrypto*](#interfaceslib_cryptirsacryptomd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [createEckey](#createeckey)
- [privateDecrypt](#privatedecrypt)
- [privateEncrypt](#privateencrypt)
- [publicDecrypt](#publicdecrypt)
- [publicEncrypt](#publicencrypt)
- [signEckey](#signeckey)

### Constructors

#### constructor

\+ **new RSACrypto**(): [*RSACrypto*](#classeslib_cryptrsacryptomd)

**Returns:** [*RSACrypto*](#classeslib_cryptrsacryptomd)

Defined in: [src/Lib/Crypt.ts:86](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L86)

### Methods

#### createEckey

▸ **createEckey**(): *object*

**Returns:** *object*

Name | Type |
------ | ------ |
`private` | *any* |
`public` | *any* |

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:93](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L93)

___

#### privateDecrypt

▸ **privateDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding?`: *number*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`encryptData` | *string* | - |
`decryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *string*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:133](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L133)

___

#### privateEncrypt

▸ **privateEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding?`: *number*): *any*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | *any* | - |
`encryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:156](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L156)

___

#### publicDecrypt

▸ **publicDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding?`: *number*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`encryptData` | *string* | - |
`decryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *string*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:180](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L180)

___

#### publicEncrypt

▸ **publicEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding?`: *number*): *any*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | *any* | - |
`encryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:109](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L109)

___

#### signEckey

▸ **signEckey**(`data`: *any*, `signKey`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |
`signKey` | *string* |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:104](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L104)

# Enums

<a name="enumslib_enumenum_eventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_EVENT

## Enumeration: ENUM\_EVENT

[Lib/Enum](#moduleslib_enummd).ENUM_EVENT

Event list

### Table of contents

#### Enumeration members

- [ACCOUNTS](#accounts)
- [ADDRESSBOOK](#addressbook)
- [NOTIFY](#notify)
- [REGISTER](#register)
- [STORE](#store)

### Enumeration members

#### ACCOUNTS

• **ACCOUNTS**: = "GET\_ACCOUNTS"

Defined in: [src/Lib/Enum.ts:31](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L31)

___

#### ADDRESSBOOK

• **ADDRESSBOOK**: = "GET\_ADDRESSBOOK"

Defined in: [src/Lib/Enum.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L32)

___

#### NOTIFY

• **NOTIFY**: = "UPDATE\_NOTIFY"

Defined in: [src/Lib/Enum.ts:34](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L34)

___

#### REGISTER

• **REGISTER**: = "REGISTER"

Defined in: [src/Lib/Enum.ts:30](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L30)

___

#### STORE

• **STORE**: = "UPDATE\_STORE"

Defined in: [src/Lib/Enum.ts:33](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L33)

<a name="enumslib_enumenum_methodsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_METHODS

## Enumeration: ENUM\_METHODS

[Lib/Enum](#moduleslib_enummd).ENUM_METHODS

HTTP METHODS

### Table of contents

#### Enumeration members

- [DELETE](#delete)
- [GET](#get)
- [POST](#post)
- [PUT](#put)

### Enumeration members

#### DELETE

• **DELETE**: = "DELETE"

Defined in: [src/Lib/Enum.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L8)

___

#### GET

• **GET**: = "GET"

Defined in: [src/Lib/Enum.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L5)

___

#### POST

• **POST**: = "POST"

Defined in: [src/Lib/Enum.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L6)

___

#### PUT

• **PUT**: = "PUT"

Defined in: [src/Lib/Enum.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L7)

<a name="enumslib_enumenum_servermd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_SERVER

## Enumeration: ENUM\_SERVER

[Lib/Enum](#moduleslib_enummd).ENUM_SERVER

### Table of contents

#### Enumeration members

- [MAINNET](#mainnet)
- [TESTNET](#testnet)

### Enumeration members

#### MAINNET

• **MAINNET**: = 1

Defined in: [src/Lib/Enum.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L12)

___

#### TESTNET

• **TESTNET**: = 5

Defined in: [src/Lib/Enum.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L13)

<a name="enumslib_enumenum_statusmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STATUS

## Enumeration: ENUM\_STATUS

[Lib/Enum](#moduleslib_enummd).ENUM_STATUS

This class result status

### Table of contents

#### Enumeration members

- [DENIED](#denied)
- [ERROR](#error)
- [SUCCESS](#success)
- [WARNING](#warning)

### Enumeration members

#### DENIED

• **DENIED**: = "DENIED"

Defined in: [src/Lib/Enum.ts:23](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L23)

___

#### ERROR

• **ERROR**: = "ERROR"

Defined in: [src/Lib/Enum.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L21)

___

#### SUCCESS

• **SUCCESS**: = "SUCCESS"

Defined in: [src/Lib/Enum.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L20)

___

#### WARNING

• **WARNING**: = "WARNING"

Defined in: [src/Lib/Enum.ts:22](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L22)

<a name="enumslib_enumenum_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STORAGE

## Enumeration: ENUM\_STORAGE

[Lib/Enum](#moduleslib_enummd).ENUM_STORAGE

**`param`** localStorage - Window LocalStorage

**`param`** local - Browser.storage.local

**`param`** sync - Browser.storage.sync

### Table of contents

#### Enumeration members

- [LOCAL](#local)
- [LOCALSTORAGE](#localstorage)
- [SYNC](#sync)

### Enumeration members

#### LOCAL

• **LOCAL**: = "local"

Defined in: [src/Lib/Enum.ts:44](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L44)

___

#### LOCALSTORAGE

• **LOCALSTORAGE**: = "localStorage"

Defined in: [src/Lib/Enum.ts:43](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L43)

___

#### SYNC

• **SYNC**: = "sync"

Defined in: [src/Lib/Enum.ts:45](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L45)

<a name="enumslib_enumenum_typemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_TYPE

## Enumeration: ENUM\_TYPE

[Lib/Enum](#moduleslib_enummd).ENUM_TYPE

**`param`** Window LocalStorage

**`param`** Browser.storage

### Table of contents

#### Enumeration members

- [BRWOSER](#brwoser)
- [LOCAL](#local)

### Enumeration members

#### BRWOSER

• **BRWOSER**: = "BRWOSER"

Defined in: [src/Lib/Enum.ts:54](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L54)

___

#### LOCAL

• **LOCAL**: = "LOCAL"

Defined in: [src/Lib/Enum.ts:53](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L53)

# Interfaces

<a name="interfacesbrowser_alarmsialarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / iAlarms

## Interface: iAlarms

[Browser/Alarms](#modulesbrowser_alarmsmd).iAlarms

### Hierarchy

* **iAlarms**

### Implemented by

* [*alarms*](#classesbrowser_alarmsalarmsmd)

### Table of contents

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L6)

___

#### clear

▸ **clear**(`name`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Alarms.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L9)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`options` | AlarmCreateInfo |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L5)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L7)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L8)

<a name="interfacesbrowser_messageimessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / iMessage

## Interface: iMessage

[Browser/Message](#modulesbrowser_messagemd).iMessage

### Hierarchy

* **iMessage**

### Implemented by

* [*message*](#classesbrowser_messagemessagemd)

### Table of contents

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L16)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:17](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L17)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L13)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L14)

<a name="interfacesbrowser_notifyinotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / iNotify

## Interface: iNotify

[Browser/Notify](#modulesbrowser_notifymd).iNotify

### Hierarchy

* **iNotify**

### Implemented by

* [*notify*](#classesbrowser_notifynotifymd)

### Table of contents

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*string*\>

Defined in: [src/Browser/Notify.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L14)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

**Returns:** *Promise*<Object\>

Defined in: [src/Browser/Notify.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L16)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L10)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L6)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L8)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`level`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L12)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L11)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L7)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L9)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L13)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L5)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*boolean*\>

Defined in: [src/Browser/Notify.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L15)

<a name="interfacesbrowser_portiportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / iPort

## Interface: iPort

[Browser/Port](#modulesbrowser_portmd).iPort

### Hierarchy

* **iPort**

### Implemented by

* [*port*](#classesbrowser_portportmd)

### Table of contents

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *null* | Port

Defined in: src/Browser/Port.ts:16

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** Boolean

Defined in: src/Browser/Port.ts:17

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | portCallbackFunction |

**Returns:** *void*

Defined in: src/Browser/Port.ts:21

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`port`: Port) => *void* |

**Returns:** *any*

Defined in: src/Browser/Port.ts:18

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |
`response?` | *null* | Function |

**Returns:** *void*

Defined in: src/Browser/Port.ts:20

___

#### setTimeout

▸ **setTimeout**(`ms`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`ms` | *number* |

**Returns:** *any*

Defined in: src/Browser/Port.ts:14

<a name="interfacesbrowser_runtimeiruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / iRuntimeEvent

## Interface: iRuntimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).iRuntimeEvent

### Hierarchy

* **iRuntimeEvent**

### Implemented by

* [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

### Table of contents

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Methods

#### onCommand

▸ **onCommand**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L10)

___

#### onConnect

▸ **onConnect**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L6)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L8)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L4)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L11)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L7)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L9)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L5)

<a name="interfacesbrowser_storageistoragemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Storage](#modulesbrowser_storagemd) / iStorage

## Interface: iStorage

[Browser/Storage](#modulesbrowser_storagemd).iStorage

### Hierarchy

* **iStorage**

### Table of contents

#### Methods

- [changeType](#changetype)
- [load](#load)
- [remove](#remove)
- [save](#save)

### Methods

#### changeType

▸ **changeType**(`type`: [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd)): [*iStorage*](#interfacesbrowser_storageistoragemd)

##### Parameters:

Name | Type |
------ | ------ |
`type` | [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd) |

**Returns:** [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: [src/Browser/Storage.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L5)

___

#### load

▸ **load**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L8)

___

#### remove

▸ **remove**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L9)

___

#### save

▸ **save**(`key`: *string* | *number*, `val`: *any*): *Promise*<*void*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |
`val` | *any* |

**Returns:** *Promise*<*void*\>

Defined in: [src/Browser/Storage.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L7)

<a name="interfacesbrowser_tabsitabinfomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabInfo

## Interface: iTabInfo

[Browser/Tabs](#modulesbrowser_tabsmd).iTabInfo

### Hierarchy

* **iTabInfo**

### Table of contents

#### Properties

- [favIcon](#favicon)
- [host](#host)
- [id](#id)
- [index](#index)
- [origin](#origin)
- [status](#status)
- [title](#title)
- [windowId](#windowid)

### Properties

#### favIcon

• **favIcon**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L10)

___

#### host

• **host**: *string*

Defined in: [src/Browser/Tabs.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L8)

___

#### id

• **id**: *null* | *number*

Defined in: [src/Browser/Tabs.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L4)

___

#### index

• **index**: *number*

Defined in: [src/Browser/Tabs.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L5)

___

#### origin

• **origin**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L9)

___

#### status

• **status**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L6)

___

#### title

• **title**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L7)

___

#### windowId

• **windowId**: *number*

Defined in: [src/Browser/Tabs.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L11)

<a name="interfacesbrowser_tabsitabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabsEvent

## Interface: iTabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).iTabsEvent

### Hierarchy

* **iTabsEvent**

### Implemented by

* [*tabsEvent*](#classesbrowser_tabstabseventmd)

### Table of contents

#### Methods

- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [removeActivated](#removeactivated)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)

### Methods

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

**Returns:** *Promise*<*null* | tabResult\>

Defined in: [src/Browser/Tabs.ts:26](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L26)

___

#### getActiveTab

▸ **getActiveTab**(`index`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L24)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Defined in: [src/Browser/Tabs.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L20)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Defined in: [src/Browser/Tabs.ts:25](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L25)

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L21)

___

#### getTabIndex

▸ **getTabIndex**(`index`: *number*, `options`: *null* | QueryInfo): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:22](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L22)

___

#### getTabs

▸ **getTabs**(`options`: *null* | QueryInfo): *Promise*<tabResult[]\>

##### Parameters:

Name | Type |
------ | ------ |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult[]\>

Defined in: [src/Browser/Tabs.ts:23](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L23)

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:28](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L28)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tabId`: *number*) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L32)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:30](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L30)

___

#### removeActivated

▸ **removeActivated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:29](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L29)

___

#### removeRemoved

▸ **removeRemoved**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:33](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L33)

___

#### removeUpdated

▸ **removeUpdated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:31](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L31)

<a name="interfacesindexibrowserevtmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / iBrowserEvt

## Interface: iBrowserEvt

[index](#modulesindexmd).iBrowserEvt

### Hierarchy

* **iBrowserEvt**

### Table of contents

#### Properties

- [alarms](#alarms)
- [message](#message)
- [notify](#notify)
- [port](#port)
- [runtime](#runtime)
- [storage](#storage)
- [tabs](#tabs)

### Properties

#### alarms

• **alarms**: [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

Defined in: src/index.ts:21

___

#### message

• **message**: [*iMessage*](#interfacesbrowser_messageimessagemd)

Defined in: src/index.ts:19

___

#### notify

• **notify**: [*iNotify*](#interfacesbrowser_notifyinotifymd)

Defined in: src/index.ts:22

___

#### port

• **port**: [*iPort*](#interfacesbrowser_portiportmd)

Defined in: src/index.ts:20

___

#### runtime

• **runtime**: [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: src/index.ts:18

___

#### storage

• **storage**: [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: src/index.ts:24

___

#### tabs

• **tabs**: () => [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: src/index.ts:23

<a name="interfaceslib_cryptirsacryptomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Crypt](#moduleslib_cryptmd) / iRSACrypto

## Interface: iRSACrypto

[Lib/Crypt](#moduleslib_cryptmd).iRSACrypto

### Hierarchy

* **iRSACrypto**

### Implemented by

* [*RSACrypto*](#classeslib_cryptrsacryptomd)

### Table of contents

#### Methods

- [createEckey](#createeckey)
- [privateDecrypt](#privatedecrypt)
- [privateEncrypt](#privateencrypt)
- [publicDecrypt](#publicdecrypt)
- [publicEncrypt](#publicencrypt)
- [signEckey](#signeckey)

### Methods

#### createEckey

▸ **createEckey**(): *object*

**Returns:** *object*

Name | Type |
------ | ------ |
`private` | *string* |
`public` | *string* |

Defined in: [src/Lib/Crypt.ts:73](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L73)

___

#### privateDecrypt

▸ **privateDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding`: *number*): *string*

##### Parameters:

Name | Type |
------ | ------ |
`encryptData` | *string* |
`decryptKey` | *string* |
`padding` | *number* |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:79](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L79)

___

#### privateEncrypt

▸ **privateEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`param` | *any* |
`encryptKey` | *string* |
`padding` | *number* |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:80](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L80)

___

#### publicDecrypt

▸ **publicDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding`: *number*): *string*

##### Parameters:

Name | Type |
------ | ------ |
`encryptData` | *string* |
`decryptKey` | *string* |
`padding` | *number* |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:81](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L81)

___

#### publicEncrypt

▸ **publicEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`param` | *any* |
`encryptKey` | *string* |
`padding` | *number* |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:78](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L78)

___

#### signEckey

▸ **signEckey**(`data`: *any*, `signKey`: *string*): *Buffer*

##### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |
`signKey` | *string* |

**Returns:** *Buffer*

Defined in: [src/Lib/Crypt.ts:77](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L77)

<a name="modulesmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / Exports

# @metacoin/browser-extensionizer - v0.2.0

## Table of contents

### Modules

- [Browser/Alarms](#modulesbrowser_alarmsmd)
- [Browser/Message](#modulesbrowser_messagemd)
- [Browser/Notify](#modulesbrowser_notifymd)
- [Browser/Port](#modulesbrowser_portmd)
- [Browser/Runtime](#modulesbrowser_runtimemd)
- [Browser/Storage](#modulesbrowser_storagemd)
- [Browser/Tabs](#modulesbrowser_tabsmd)
- [Lib/Crypt](#moduleslib_cryptmd)
- [Lib/Enum](#moduleslib_enummd)
- [Lib/Func](#moduleslib_funcmd)
- [index](#modulesindexmd)

# Modules

<a name="modulesbrowser_alarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Alarms

## Module: Browser/Alarms

### Table of contents

#### Classes

- [alarms](#classesbrowser_alarmsalarmsmd)

#### Interfaces

- [iAlarms](#interfacesbrowser_alarmsialarmsmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*alarms*](#classesbrowser_alarmsalarmsmd)

<a name="modulesbrowser_messagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Message

## Module: Browser/Message

### Table of contents

#### Classes

- [message](#classesbrowser_messagemessagemd)

#### Interfaces

- [iMessage](#interfacesbrowser_messageimessagemd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*message*](#classesbrowser_messagemessagemd)

<a name="modulesbrowser_notifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Notify

## Module: Browser/Notify

### Table of contents

#### Classes

- [notify](#classesbrowser_notifynotifymd)

#### Interfaces

- [iNotify](#interfacesbrowser_notifyinotifymd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*notify*](#classesbrowser_notifynotifymd)

<a name="modulesbrowser_portmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Port

## Module: Browser/Port

### Table of contents

#### Classes

- [port](#classesbrowser_portportmd)

#### Interfaces

- [iPort](#interfacesbrowser_portiportmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*port*](#classesbrowser_portportmd)

<a name="modulesbrowser_runtimemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Runtime

## Module: Browser/Runtime

### Table of contents

#### Classes

- [runtimeEvent](#classesbrowser_runtimeruntimeeventmd)

#### Interfaces

- [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

<a name="modulesbrowser_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Storage

## Module: Browser/Storage

### Table of contents

#### Interfaces

- [iStorage](#interfacesbrowser_storageistoragemd)

#### Variables

- [default](#default)

### Variables

#### default

• `Const` **default**: *Storage*

Defined in: [src/Browser/Storage.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L190)

<a name="modulesbrowser_tabsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Tabs

## Module: Browser/Tabs

### Table of contents

#### Classes

- [tabsEvent](#classesbrowser_tabstabseventmd)

#### Interfaces

- [iTabInfo](#interfacesbrowser_tabsitabinfomd)
- [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: () => [*tabsEvent*](#classesbrowser_tabstabseventmd)

<a name="modulesindexmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / index

## Module: index

### Table of contents

#### Interfaces

- [iBrowserEvt](#interfacesindexibrowserevtmd)

#### Variables

- [default](#default)

### Variables

#### default

• `Const` **default**: [*iBrowserEvt*](#interfacesindexibrowserevtmd)

Defined in: src/index.ts:27

<a name="moduleslib_cryptmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Crypt

## Module: Lib/Crypt

### Table of contents

#### Classes

- [RSACrypto](#classeslib_cryptrsacryptomd)

#### Interfaces

- [iRSACrypto](#interfaceslib_cryptirsacryptomd)

#### Variables

- [RSA](#rsa)

#### Functions

- [Hash](#hash)
- [HashHmac](#hashhmac)
- [decryptData](#decryptdata)
- [encryptData](#encryptdata)

### Variables

#### RSA

• `Const` **RSA**: [*RSACrypto*](#classeslib_cryptrsacryptomd)

Defined in: [src/Lib/Crypt.ts:206](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L206)

### Functions

#### Hash

▸ `Const`**Hash**(`type`: *string*, `txt`: *string* | *number*): *string*

Create Hash

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | *string* | Hash type (md5, sha256, sha512....)   |
`txt` | *string* | *number* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L9)

___

#### HashHmac

▸ `Const`**HashHmac**(`text`: *string* | *Buffer*, `secret`: *string*, `algorithm?`: *string*, `isHex?`: *boolean*): *any*

create hash hmac

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`text` | *string* | *Buffer* | - | sign text   |
`secret` | *string* | - | Secret key   |
`algorithm` | *string* | 'sha256' | md5, sha256, sha512...   |
`isHex` | *boolean* | true | return type is Hex?    |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L20)

___

#### decryptData

▸ `Const`**decryptData**(`encryptData`: *string* | *number*, `salt`: *string*): *string*

Symmetric decryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`encryptData` | *string* | *number* | - |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:55](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L55)

___

#### encryptData

▸ `Const`**encryptData**(`text`: *string* | *number*, `salt`: *string*): *string*

Symmetric encryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | *string* | *number* |  |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:35](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L35)

<a name="moduleslib_enummd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Enum

## Module: Lib/Enum

### Table of contents

#### Enumerations

- [ENUM\_EVENT](#enumslib_enumenum_eventmd)
- [ENUM\_METHODS](#enumslib_enumenum_methodsmd)
- [ENUM\_SERVER](#enumslib_enumenum_servermd)
- [ENUM\_STATUS](#enumslib_enumenum_statusmd)
- [ENUM\_STORAGE](#enumslib_enumenum_storagemd)
- [ENUM\_TYPE](#enumslib_enumenum_typemd)

<a name="moduleslib_funcmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Func

## Module: Lib/Func

### Table of contents

#### Functions

- [createResult](#createresult)
- [decryptValue](#decryptvalue)
- [encryptValue](#encryptvalue)
- [makeid](#makeid)

### Functions

#### createResult

▸ `Const`**createResult**(`result`: *string*, `msg?`: *string*, `data?`: *any*): *object*

Function for common use of result values

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`result` | *string* | - | result Type   |
`msg` | *string* | '' | result message   |
`data` | *any* | null | result data    |

**Returns:** *object*

Defined in: [src/Lib/Func.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L12)

___

#### decryptValue

▸ `Const`**decryptValue**(`id`: *string* | *number*, `data`: *any*): *Promise*<*null* | Object\>

복호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`data` | *any* | 암호화된 데이터    |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:84](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L84)

___

#### encryptValue

▸ `Const`**encryptValue**(`id`: *string* | *number*, `param`: *any*): *Promise*<*null* | Object\>

암호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`param` | *any* | 저장할 데이터     |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:49](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L49)

___

#### makeid

▸ `Const`**makeid**(`length`: *number*, `isMs?`: *boolean*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`length` | *number* | - |
`isMs` | *boolean* | true |

**Returns:** *string*

Defined in: [src/Lib/Func.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L20)

# Classes

<a name="classesbrowser_alarmsalarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / alarms

## Class: alarms

[Browser/Alarms](#modulesbrowser_alarmsmd).alarms

**`type/chrome.alarms`** 

### Hierarchy

* **alarms**

### Implements

* [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [clearAll](#clearall)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Constructors

#### constructor

\+ **new alarms**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L19)

### Properties

#### instance

▪ `Static` **instance**: [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L16)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람이 경과하면 Listener의 등록되어 있는 callback 함수가 실행됩니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* | Alarm을 발생시 호출되는 Callback 함수입니다. (id: 생성시 고유 ID, alram: 해당 알람의 정보)    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Defined in: [src/Browser/Alarms.ts:63](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L63)

___

#### clear

▸ **clear**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람을 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:150](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L150)

___

#### clearAll

▸ **clearAll**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 모든 알람을 제거합니다.

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L166)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): [*alarms*](#classesbrowser_alarmsalarmsmd)

Alarm을 생성합니다. alarmInfo로 지정된 시간에 가까워 지면 onAlarm이벤트가 시작됩니다.
같은 이름의 다른 알람이있는 경우 (또는 지정되지 않은 경우 이름이없는 경우) 취소되고이 알람으로 대체됩니다.

사용자 컴퓨터의 부하를 줄이기 위해 Chrome은 알람을 최대 1 분에 한 번으로 제한하지만 임의의 양을 더 지연시킬 수 있습니다. 즉, delayInMinutes또는 periodInMinutes보다 작게 설정 1하면 적용되지 않으며 경고가 발생합니다. when경고없이 "지금"후 1 분 미만으로 설정할 수 있지만 실제로 최소 1 분 동안 Alarm을 발생하지 않습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 이 Alarm을 식별하기위한 이름입니다.   |
`options` | AlarmCreateInfo | 알람이 발생해야하는시기를 설명합니다. 초기 시간은 when 또는 delayInMinutes (둘다는 아님) 로 지정해야합니다 . 경우 periodInMinutes가 설정 한 알람이 매일 반복됩니다 periodInMinutes의 초기 이벤트 후 분. 둘 경우 시 또는 delayInMinutes이 반복 알람 설정, periodInMinutes는 대한 기본값으로 사용되지 않습니다 delayInMinutes.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:42](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L42)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람시 등록되어있는 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`id` | *string* | Alarm addListener시 생성된 ID값    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:98](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L98)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람의 모든 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:121](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L121)

<a name="classesbrowser_messagemessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / message

## Class: message

[Browser/Message](#modulesbrowser_messagemd).message

### Hierarchy

* **message**

### Implements

* [*iMessage*](#interfacesbrowser_messageimessagemd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Constructors

#### constructor

\+ **new message**(): [*message*](#classesbrowser_messagemessagemd)

**Returns:** [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L24)

### Properties

#### instance

▪ `Static` **instance**: [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L21)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

확장 프로세스 (by sendMessage) 또는 콘텐츠 스크립트 (by tabs.sendMessage) 에서 메시지가 전송되면 이벤트가 발생합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:127](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L127)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

다른 확장 프로그램 / 앱에서 메시지가 전송되면 시작됩니다 ( sendMessage). 콘텐츠 스크립트에서 사용할 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:203](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L203)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

확장 / 앱 또는 다른 확장 / 앱 내의 이벤트 리스너에 단일 메시지를 보냅니다.

확장 프로그램은이 방법을 사용하여 콘텐츠 스크립트에 메시지를 보낼 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:46](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L46)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

응답이 다시 전송 될 때 실행할 선택적 콜백과 함께 지정된 탭의 콘텐츠 스크립트에 단일 메시지를 보냅니다.

해당 이벤트는 runtime.onMessage 및 해당 Class의 on 함수로 처리할 수 있습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`tabId` | *number* | - | 발신 Tab ID   |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:88](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L88)

<a name="classesbrowser_notifynotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / notify

## Class: notify

[Browser/Notify](#modulesbrowser_notifymd).notify

**`type/chrome.notifications`** 

### Hierarchy

* **notify**

### Implements

* [*iNotify*](#interfacesbrowser_notifyinotifymd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Constructors

#### constructor

\+ **new notify**(): [*notify*](#classesbrowser_notifynotifymd)

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:35](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L35)

### Properties

#### instance

▪ `Static` **instance**: [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L32)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

알림을 만들고 표시합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*string*\>

Promise - notification ID를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:289](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L289)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

이 앱 또는 확장 프로그램의 모든 알림을 가져옵니다.

**Returns:** *Promise*<Object\>

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:337](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L337)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림에서 버튼을 눌렀을 때 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* | notification의 ID 및 누른 버튼의 Index를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L190)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림의 버튼이 아닌 영역을 클릭시 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*) => *void* | notification의 ID를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:89](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L89)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

시스템 또는 사용자 작업에 의해 알림이 닫혔을 때 발생하는 이벤트 입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* | notification의 ID 및 사용자에 의해 닫힌 여부를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:140](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L140)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 권한 수준을 변경합니다. Chrome 47부터는 ChromeOS에만이 이벤트를 전달하는 UI가 있습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`level`: *string*) => *void* | notification의 권한 레벨을 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:240](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L240)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

버튼을 눌렀을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:218](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L218)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

클릭시 발생되는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:118](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L118)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

알림이 닫혔을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:168](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L168)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

권한 수준을 변경 이벤트를 삭제합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:265](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L265)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): [*notify*](#classesbrowser_notifynotifymd)

알림의 기본 옵션을 정의합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:67](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L67)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*boolean*\>

Promise - Update 여부를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:315](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L315)

<a name="classesbrowser_portportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / port

## Class: port

[Browser/Port](#modulesbrowser_portmd).port

### Hierarchy

* **port**

### Implements

* [*iPort*](#interfacesbrowser_portiportmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Constructors

#### constructor

\+ **new port**(): [*port*](#classesbrowser_portportmd)

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:31

### Properties

#### instance

▪ `Static` **instance**: [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:25

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

지정된 이름으로 포트를 연결합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** *null* | Port

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:69

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

연결되어 있는 포트를 닫습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** Boolean

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:94

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *undefined* | { `removeListener`: () => *void*  }

이 이벤트는 포트의 다른 쪽 끝에서 postMessage 를 호출 하면 시작됩니다.

첫 번째 매개 변수는 메시지이고 두 번째 매개 변수는 메시지를 수신 한 포트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름   |
`callback` | portCallbackFunction | 메세지를 받았을 때 발생되는 Callback 함수    |

**Returns:** *undefined* | { `removeListener`: () => *void*  }

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:221

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): [*port*](#classesbrowser_portportmd)

지정된 포트가 닫혔을때 이벤트가 발생합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름   |
`callback` | (`port`: Port) => *void* | 포트가 닫힐 때 발생되는 Callback 함수    |

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:114

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *Promise*<*void*\>

지정된 포트로 메세지를 발송합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`name` | *string* | - | 지정된 포트 이름   |
`method` | *string* | - | 발생시킬 메소드 명   |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | 암호화 여부   |
`response` | *null* | Function | null | Response를 받아야할 경우 Timeout 시간 만큼 기다립니다.    |

**Returns:** *Promise*<*void*\>

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:141

___

#### setTimeout

▸ **setTimeout**(`ms?`: *number*): [*port*](#classesbrowser_portportmd)

Port 사용시 Resoponse를 위한 Timeout 설정

기본적으로 Port는 단방향으로만 메세지를 발생합니다.

하지만, 해당 Class는 Response를 구현하였으므로 결과값을 받기 위해 기본 Timeout 시간을 설정할 수 있습니다.

**`default`** 240000ms (4min)

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ms` | *number* | 240000 | milliseconds    |

**Returns:** [*port*](#classesbrowser_portportmd)

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:58

<a name="classesbrowser_runtimeruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / runtimeEvent

## Class: runtimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).runtimeEvent

### Hierarchy

* **runtimeEvent**

### Implements

* [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Constructors

#### constructor

\+ **new runtimeEvent**(): [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

**Returns:** [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L20)

### Properties

#### instance

▪ `Static` **instance**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L15)

### Methods

#### onCommand

▸ **onCommand**(`callback`: Function, `key?`: *string*): *void*

Chrome.commands
Fired when a registered command is activated using a keyboard shortcut.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:209](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L209)

___

#### onConnect

▸ **onConnect**(`callback`: Function, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from either an extension process or a content script

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:124](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L124)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from another extension

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L166)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:82](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L82)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

Remove onCommand event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:230](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L230)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

Remove onConnect event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:146](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L146)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

Remove onConnectExternal event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:189](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L189)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:104](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L104)

<a name="classesbrowser_tabstabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / tabsEvent

## Class: tabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).tabsEvent

### Hierarchy

* *EventEmitter*

  ↳ **tabsEvent**

### Implements

* [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)
* *EventEmitter*

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [captureRejectionSymbol](#capturerejectionsymbol)
- [captureRejections](#capturerejections)
- [defaultMaxListeners](#defaultmaxlisteners)
- [errorMonitor](#errormonitor)
- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [emit](#emit)
- [eventNames](#eventnames)
- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getMaxListeners](#getmaxlisteners)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [listenerCount](#listenercount)
- [listeners](#listeners)
- [off](#off)
- [on](#on)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [once](#once)
- [prependListener](#prependlistener)
- [prependOnceListener](#prependoncelistener)
- [rawListeners](#rawlisteners)
- [removeActivated](#removeactivated)
- [removeAllListeners](#removealllisteners)
- [removeListener](#removelistener)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)
- [setMaxListeners](#setmaxlisteners)
- [listenerCount](#listenercount)
- [on](#on)
- [once](#once)

### Constructors

#### constructor

\+ **new tabsEvent**(): [*tabsEvent*](#classesbrowser_tabstabseventmd)

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:72](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L72)

### Properties

#### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:38

___

#### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:44

___

#### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

#### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:37

___

#### instance

▪ `Static` **instance**: [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:66](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L66)

### Methods

#### addListener

▸ **addListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:57

___

#### emit

▸ **emit**(`event`: *string* | *symbol*, ...`args`: *any*[]): *boolean*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:67

___

#### eventNames

▸ **eventNames**(): (*string* | *symbol*)[]

**Returns:** (*string* | *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:72

___

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

Returns the active tab information stored in the class.

**Returns:** *Promise*<*null* | tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:359](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L359)

___

#### getActiveTab

▸ **getActiveTab**(`index?`: *number*): *Promise*<tabResult\>

Chrome.tabs.query -> Chrome.tabs.get

Retrieves details about the specified active tab.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:326](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L326)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:227](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L227)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Returns a list of tabs stored in the class.

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:341](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L341)

___

#### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tabId` | *number* |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:238](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L238)

___

#### getTabIndex

▸ **getTabIndex**(`index?`: *number*, `options?`: *null* | QueryInfo): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |
`options` | *null* | QueryInfo | null | - |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:271](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L271)

___

#### getTabs

▸ **getTabs**(`options?`: *null* | QueryInfo): *Promise*<tabResult[]\>

Chrome.tabs.get

Gets all tabs that have the specified properties, or all tabs if no properties are specified.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`options` | *null* | QueryInfo | null |     |

**Returns:** *Promise*<tabResult[]\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:387](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L387)

___

#### listenerCount

▸ **listenerCount**(`event`: *string* | *symbol*): *number*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

#### listeners

▸ **listeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

#### off

▸ **off**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:61

___

#### on

▸ **on**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:58

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onActivated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:425](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L425)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onRemoved
Fired when a tab is closed.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tabId`: *number*) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:574](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L574)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onUpdated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:501](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L501)

___

#### once

▸ **once**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:59

___

#### prependListener

▸ **prependListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:70

___

#### prependOnceListener

▸ **prependOnceListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:71

___

#### rawListeners

▸ **rawListeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

#### removeActivated

▸ **removeActivated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:467](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L467)

___

#### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* | *symbol*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* | *symbol* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:62

___

#### removeListener

▸ **removeListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:60

___

#### removeRemoved

▸ **removeRemoved**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:608](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L608)

___

#### removeUpdated

▸ **removeUpdated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:540](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L540)

___

#### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:63

___

#### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* | *symbol*): *number*

**`deprecated`** since v4.0.0

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

#### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:23

___

#### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* | *symbol*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* | *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:22

<a name="classeslib_cryptrsacryptomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Crypt](#moduleslib_cryptmd) / RSACrypto

## Class: RSACrypto

[Lib/Crypt](#moduleslib_cryptmd).RSACrypto

### Hierarchy

* **RSACrypto**

### Implements

* [*iRSACrypto*](#interfaceslib_cryptirsacryptomd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [createEckey](#createeckey)
- [privateDecrypt](#privatedecrypt)
- [privateEncrypt](#privateencrypt)
- [publicDecrypt](#publicdecrypt)
- [publicEncrypt](#publicencrypt)
- [signEckey](#signeckey)

### Constructors

#### constructor

\+ **new RSACrypto**(): [*RSACrypto*](#classeslib_cryptrsacryptomd)

**Returns:** [*RSACrypto*](#classeslib_cryptrsacryptomd)

Defined in: [src/Lib/Crypt.ts:86](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L86)

### Methods

#### createEckey

▸ **createEckey**(): *object*

**Returns:** *object*

Name | Type |
------ | ------ |
`private` | *any* |
`public` | *any* |

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:93](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L93)

___

#### privateDecrypt

▸ **privateDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding?`: *number*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`encryptData` | *string* | - |
`decryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *string*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:133](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L133)

___

#### privateEncrypt

▸ **privateEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding?`: *number*): *any*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | *any* | - |
`encryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:156](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L156)

___

#### publicDecrypt

▸ **publicDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding?`: *number*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`encryptData` | *string* | - |
`decryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *string*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:180](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L180)

___

#### publicEncrypt

▸ **publicEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding?`: *number*): *any*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | *any* | - |
`encryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:109](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L109)

___

#### signEckey

▸ **signEckey**(`data`: *any*, `signKey`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |
`signKey` | *string* |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:104](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L104)

# Enums

<a name="enumslib_enumenum_eventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_EVENT

## Enumeration: ENUM\_EVENT

[Lib/Enum](#moduleslib_enummd).ENUM_EVENT

Event list

### Table of contents

#### Enumeration members

- [ACCOUNTS](#accounts)
- [ADDRESSBOOK](#addressbook)
- [NOTIFY](#notify)
- [REGISTER](#register)
- [STORE](#store)

### Enumeration members

#### ACCOUNTS

• **ACCOUNTS**: = "GET\_ACCOUNTS"

Defined in: [src/Lib/Enum.ts:31](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L31)

___

#### ADDRESSBOOK

• **ADDRESSBOOK**: = "GET\_ADDRESSBOOK"

Defined in: [src/Lib/Enum.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L32)

___

#### NOTIFY

• **NOTIFY**: = "UPDATE\_NOTIFY"

Defined in: [src/Lib/Enum.ts:34](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L34)

___

#### REGISTER

• **REGISTER**: = "REGISTER"

Defined in: [src/Lib/Enum.ts:30](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L30)

___

#### STORE

• **STORE**: = "UPDATE\_STORE"

Defined in: [src/Lib/Enum.ts:33](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L33)

<a name="enumslib_enumenum_methodsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_METHODS

## Enumeration: ENUM\_METHODS

[Lib/Enum](#moduleslib_enummd).ENUM_METHODS

HTTP METHODS

### Table of contents

#### Enumeration members

- [DELETE](#delete)
- [GET](#get)
- [POST](#post)
- [PUT](#put)

### Enumeration members

#### DELETE

• **DELETE**: = "DELETE"

Defined in: [src/Lib/Enum.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L8)

___

#### GET

• **GET**: = "GET"

Defined in: [src/Lib/Enum.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L5)

___

#### POST

• **POST**: = "POST"

Defined in: [src/Lib/Enum.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L6)

___

#### PUT

• **PUT**: = "PUT"

Defined in: [src/Lib/Enum.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L7)

<a name="enumslib_enumenum_servermd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_SERVER

## Enumeration: ENUM\_SERVER

[Lib/Enum](#moduleslib_enummd).ENUM_SERVER

### Table of contents

#### Enumeration members

- [MAINNET](#mainnet)
- [TESTNET](#testnet)

### Enumeration members

#### MAINNET

• **MAINNET**: = 1

Defined in: [src/Lib/Enum.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L12)

___

#### TESTNET

• **TESTNET**: = 5

Defined in: [src/Lib/Enum.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L13)

<a name="enumslib_enumenum_statusmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STATUS

## Enumeration: ENUM\_STATUS

[Lib/Enum](#moduleslib_enummd).ENUM_STATUS

This class result status

### Table of contents

#### Enumeration members

- [DENIED](#denied)
- [ERROR](#error)
- [SUCCESS](#success)
- [WARNING](#warning)

### Enumeration members

#### DENIED

• **DENIED**: = "DENIED"

Defined in: [src/Lib/Enum.ts:23](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L23)

___

#### ERROR

• **ERROR**: = "ERROR"

Defined in: [src/Lib/Enum.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L21)

___

#### SUCCESS

• **SUCCESS**: = "SUCCESS"

Defined in: [src/Lib/Enum.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L20)

___

#### WARNING

• **WARNING**: = "WARNING"

Defined in: [src/Lib/Enum.ts:22](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L22)

<a name="enumslib_enumenum_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STORAGE

## Enumeration: ENUM\_STORAGE

[Lib/Enum](#moduleslib_enummd).ENUM_STORAGE

**`param`** localStorage - Window LocalStorage

**`param`** local - Browser.storage.local

**`param`** sync - Browser.storage.sync

### Table of contents

#### Enumeration members

- [LOCAL](#local)
- [LOCALSTORAGE](#localstorage)
- [SYNC](#sync)

### Enumeration members

#### LOCAL

• **LOCAL**: = "local"

Defined in: [src/Lib/Enum.ts:44](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L44)

___

#### LOCALSTORAGE

• **LOCALSTORAGE**: = "localStorage"

Defined in: [src/Lib/Enum.ts:43](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L43)

___

#### SYNC

• **SYNC**: = "sync"

Defined in: [src/Lib/Enum.ts:45](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L45)

<a name="enumslib_enumenum_typemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_TYPE

## Enumeration: ENUM\_TYPE

[Lib/Enum](#moduleslib_enummd).ENUM_TYPE

**`param`** Window LocalStorage

**`param`** Browser.storage

### Table of contents

#### Enumeration members

- [BRWOSER](#brwoser)
- [LOCAL](#local)

### Enumeration members

#### BRWOSER

• **BRWOSER**: = "BRWOSER"

Defined in: [src/Lib/Enum.ts:54](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L54)

___

#### LOCAL

• **LOCAL**: = "LOCAL"

Defined in: [src/Lib/Enum.ts:53](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L53)

# Interfaces

<a name="interfacesbrowser_alarmsialarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / iAlarms

## Interface: iAlarms

[Browser/Alarms](#modulesbrowser_alarmsmd).iAlarms

### Hierarchy

* **iAlarms**

### Implemented by

* [*alarms*](#classesbrowser_alarmsalarmsmd)

### Table of contents

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L6)

___

#### clear

▸ **clear**(`name`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Alarms.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L9)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`options` | AlarmCreateInfo |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L5)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L7)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L8)

<a name="interfacesbrowser_messageimessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / iMessage

## Interface: iMessage

[Browser/Message](#modulesbrowser_messagemd).iMessage

### Hierarchy

* **iMessage**

### Implemented by

* [*message*](#classesbrowser_messagemessagemd)

### Table of contents

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L16)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:17](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L17)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L13)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L14)

<a name="interfacesbrowser_notifyinotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / iNotify

## Interface: iNotify

[Browser/Notify](#modulesbrowser_notifymd).iNotify

### Hierarchy

* **iNotify**

### Implemented by

* [*notify*](#classesbrowser_notifynotifymd)

### Table of contents

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*string*\>

Defined in: [src/Browser/Notify.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L14)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

**Returns:** *Promise*<Object\>

Defined in: [src/Browser/Notify.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L16)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L10)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L6)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L8)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`level`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L12)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L11)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L7)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L9)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L13)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L5)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*boolean*\>

Defined in: [src/Browser/Notify.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L15)

<a name="interfacesbrowser_portiportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / iPort

## Interface: iPort

[Browser/Port](#modulesbrowser_portmd).iPort

### Hierarchy

* **iPort**

### Implemented by

* [*port*](#classesbrowser_portportmd)

### Table of contents

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *null* | Port

Defined in: src/Browser/Port.ts:16

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** Boolean

Defined in: src/Browser/Port.ts:17

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | portCallbackFunction |

**Returns:** *void*

Defined in: src/Browser/Port.ts:21

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`port`: Port) => *void* |

**Returns:** *any*

Defined in: src/Browser/Port.ts:18

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |
`response?` | *null* | Function |

**Returns:** *void*

Defined in: src/Browser/Port.ts:20

___

#### setTimeout

▸ **setTimeout**(`ms`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`ms` | *number* |

**Returns:** *any*

Defined in: src/Browser/Port.ts:14

<a name="interfacesbrowser_runtimeiruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / iRuntimeEvent

## Interface: iRuntimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).iRuntimeEvent

### Hierarchy

* **iRuntimeEvent**

### Implemented by

* [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

### Table of contents

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Methods

#### onCommand

▸ **onCommand**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L10)

___

#### onConnect

▸ **onConnect**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L6)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L8)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L4)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L11)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L7)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L9)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L5)

<a name="interfacesbrowser_storageistoragemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Storage](#modulesbrowser_storagemd) / iStorage

## Interface: iStorage

[Browser/Storage](#modulesbrowser_storagemd).iStorage

### Hierarchy

* **iStorage**

### Table of contents

#### Methods

- [changeType](#changetype)
- [load](#load)
- [remove](#remove)
- [save](#save)

### Methods

#### changeType

▸ **changeType**(`type`: [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd)): [*iStorage*](#interfacesbrowser_storageistoragemd)

##### Parameters:

Name | Type |
------ | ------ |
`type` | [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd) |

**Returns:** [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: [src/Browser/Storage.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L5)

___

#### load

▸ **load**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L8)

___

#### remove

▸ **remove**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L9)

___

#### save

▸ **save**(`key`: *string* | *number*, `val`: *any*): *Promise*<*void*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |
`val` | *any* |

**Returns:** *Promise*<*void*\>

Defined in: [src/Browser/Storage.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L7)

<a name="interfacesbrowser_tabsitabinfomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabInfo

## Interface: iTabInfo

[Browser/Tabs](#modulesbrowser_tabsmd).iTabInfo

### Hierarchy

* **iTabInfo**

### Table of contents

#### Properties

- [favIcon](#favicon)
- [host](#host)
- [id](#id)
- [index](#index)
- [origin](#origin)
- [status](#status)
- [title](#title)
- [windowId](#windowid)

### Properties

#### favIcon

• **favIcon**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L10)

___

#### host

• **host**: *string*

Defined in: [src/Browser/Tabs.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L8)

___

#### id

• **id**: *null* | *number*

Defined in: [src/Browser/Tabs.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L4)

___

#### index

• **index**: *number*

Defined in: [src/Browser/Tabs.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L5)

___

#### origin

• **origin**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L9)

___

#### status

• **status**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L6)

___

#### title

• **title**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L7)

___

#### windowId

• **windowId**: *number*

Defined in: [src/Browser/Tabs.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L11)

<a name="interfacesbrowser_tabsitabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabsEvent

## Interface: iTabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).iTabsEvent

### Hierarchy

* **iTabsEvent**

### Implemented by

* [*tabsEvent*](#classesbrowser_tabstabseventmd)

### Table of contents

#### Methods

- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [removeActivated](#removeactivated)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)

### Methods

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

**Returns:** *Promise*<*null* | tabResult\>

Defined in: [src/Browser/Tabs.ts:26](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L26)

___

#### getActiveTab

▸ **getActiveTab**(`index`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L24)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Defined in: [src/Browser/Tabs.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L20)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Defined in: [src/Browser/Tabs.ts:25](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L25)

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L21)

___

#### getTabIndex

▸ **getTabIndex**(`index`: *number*, `options`: *null* | QueryInfo): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:22](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L22)

___

#### getTabs

▸ **getTabs**(`options`: *null* | QueryInfo): *Promise*<tabResult[]\>

##### Parameters:

Name | Type |
------ | ------ |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult[]\>

Defined in: [src/Browser/Tabs.ts:23](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L23)

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:28](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L28)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tabId`: *number*) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L32)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:30](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L30)

___

#### removeActivated

▸ **removeActivated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:29](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L29)

___

#### removeRemoved

▸ **removeRemoved**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:33](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L33)

___

#### removeUpdated

▸ **removeUpdated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:31](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L31)

<a name="interfacesindexibrowserevtmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / iBrowserEvt

## Interface: iBrowserEvt

[index](#modulesindexmd).iBrowserEvt

### Hierarchy

* **iBrowserEvt**

### Table of contents

#### Properties

- [alarms](#alarms)
- [message](#message)
- [notify](#notify)
- [port](#port)
- [runtime](#runtime)
- [storage](#storage)
- [tabs](#tabs)

### Properties

#### alarms

• **alarms**: [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

Defined in: src/index.ts:21

___

#### message

• **message**: [*iMessage*](#interfacesbrowser_messageimessagemd)

Defined in: src/index.ts:19

___

#### notify

• **notify**: [*iNotify*](#interfacesbrowser_notifyinotifymd)

Defined in: src/index.ts:22

___

#### port

• **port**: [*iPort*](#interfacesbrowser_portiportmd)

Defined in: src/index.ts:20

___

#### runtime

• **runtime**: [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: src/index.ts:18

___

#### storage

• **storage**: [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: src/index.ts:24

___

#### tabs

• **tabs**: () => [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: src/index.ts:23

<a name="interfaceslib_cryptirsacryptomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Crypt](#moduleslib_cryptmd) / iRSACrypto

## Interface: iRSACrypto

[Lib/Crypt](#moduleslib_cryptmd).iRSACrypto

### Hierarchy

* **iRSACrypto**

### Implemented by

* [*RSACrypto*](#classeslib_cryptrsacryptomd)

### Table of contents

#### Methods

- [createEckey](#createeckey)
- [privateDecrypt](#privatedecrypt)
- [privateEncrypt](#privateencrypt)
- [publicDecrypt](#publicdecrypt)
- [publicEncrypt](#publicencrypt)
- [signEckey](#signeckey)

### Methods

#### createEckey

▸ **createEckey**(): *object*

**Returns:** *object*

Name | Type |
------ | ------ |
`private` | *string* |
`public` | *string* |

Defined in: [src/Lib/Crypt.ts:73](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L73)

___

#### privateDecrypt

▸ **privateDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding`: *number*): *string*

##### Parameters:

Name | Type |
------ | ------ |
`encryptData` | *string* |
`decryptKey` | *string* |
`padding` | *number* |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:79](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L79)

___

#### privateEncrypt

▸ **privateEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`param` | *any* |
`encryptKey` | *string* |
`padding` | *number* |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:80](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L80)

___

#### publicDecrypt

▸ **publicDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding`: *number*): *string*

##### Parameters:

Name | Type |
------ | ------ |
`encryptData` | *string* |
`decryptKey` | *string* |
`padding` | *number* |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:81](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L81)

___

#### publicEncrypt

▸ **publicEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`param` | *any* |
`encryptKey` | *string* |
`padding` | *number* |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:78](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L78)

___

#### signEckey

▸ **signEckey**(`data`: *any*, `signKey`: *string*): *Buffer*

##### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |
`signKey` | *string* |

**Returns:** *Buffer*

Defined in: [src/Lib/Crypt.ts:77](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L77)

<a name="modulesmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / Exports

# @metacoin/browser-extensionizer - v0.2.0

## Table of contents

### Modules

- [Browser/Alarms](#modulesbrowser_alarmsmd)
- [Browser/Message](#modulesbrowser_messagemd)
- [Browser/Notify](#modulesbrowser_notifymd)
- [Browser/Port](#modulesbrowser_portmd)
- [Browser/Runtime](#modulesbrowser_runtimemd)
- [Browser/Storage](#modulesbrowser_storagemd)
- [Browser/Tabs](#modulesbrowser_tabsmd)
- [Lib/Crypt](#moduleslib_cryptmd)
- [Lib/Enum](#moduleslib_enummd)
- [Lib/Func](#moduleslib_funcmd)
- [index](#modulesindexmd)

# Modules

<a name="modulesbrowser_alarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Alarms

## Module: Browser/Alarms

### Table of contents

#### Classes

- [alarms](#classesbrowser_alarmsalarmsmd)

#### Interfaces

- [iAlarms](#interfacesbrowser_alarmsialarmsmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*alarms*](#classesbrowser_alarmsalarmsmd)

<a name="modulesbrowser_messagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Message

## Module: Browser/Message

### Table of contents

#### Classes

- [message](#classesbrowser_messagemessagemd)

#### Interfaces

- [iMessage](#interfacesbrowser_messageimessagemd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*message*](#classesbrowser_messagemessagemd)

<a name="modulesbrowser_notifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Notify

## Module: Browser/Notify

### Table of contents

#### Classes

- [notify](#classesbrowser_notifynotifymd)

#### Interfaces

- [iNotify](#interfacesbrowser_notifyinotifymd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*notify*](#classesbrowser_notifynotifymd)

<a name="modulesbrowser_portmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Port

## Module: Browser/Port

### Table of contents

#### Classes

- [port](#classesbrowser_portportmd)

#### Interfaces

- [iPort](#interfacesbrowser_portiportmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*port*](#classesbrowser_portportmd)

<a name="modulesbrowser_runtimemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Runtime

## Module: Browser/Runtime

### Table of contents

#### Classes

- [runtimeEvent](#classesbrowser_runtimeruntimeeventmd)

#### Interfaces

- [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

<a name="modulesbrowser_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Storage

## Module: Browser/Storage

### Table of contents

#### Interfaces

- [iStorage](#interfacesbrowser_storageistoragemd)

#### Variables

- [default](#default)

### Variables

#### default

• `Const` **default**: *Storage*

Defined in: [src/Browser/Storage.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L190)

<a name="modulesbrowser_tabsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Tabs

## Module: Browser/Tabs

### Table of contents

#### Classes

- [tabsEvent](#classesbrowser_tabstabseventmd)

#### Interfaces

- [iTabInfo](#interfacesbrowser_tabsitabinfomd)
- [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: () => [*tabsEvent*](#classesbrowser_tabstabseventmd)

<a name="modulesindexmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / index

## Module: index

### Table of contents

#### Interfaces

- [iBrowserEvt](#interfacesindexibrowserevtmd)

#### Variables

- [default](#default)

### Variables

#### default

• `Const` **default**: [*iBrowserEvt*](#interfacesindexibrowserevtmd)

Defined in: src/index.ts:27

<a name="moduleslib_cryptmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Crypt

## Module: Lib/Crypt

### Table of contents

#### Classes

- [RSACrypto](#classeslib_cryptrsacryptomd)

#### Interfaces

- [iRSACrypto](#interfaceslib_cryptirsacryptomd)

#### Variables

- [RSA](#rsa)

#### Functions

- [Hash](#hash)
- [HashHmac](#hashhmac)
- [decryptData](#decryptdata)
- [encryptData](#encryptdata)

### Variables

#### RSA

• `Const` **RSA**: [*RSACrypto*](#classeslib_cryptrsacryptomd)

Defined in: [src/Lib/Crypt.ts:206](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L206)

### Functions

#### Hash

▸ `Const`**Hash**(`type`: *string*, `txt`: *string* | *number*): *string*

Create Hash

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | *string* | Hash type (md5, sha256, sha512....)   |
`txt` | *string* | *number* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L9)

___

#### HashHmac

▸ `Const`**HashHmac**(`text`: *string* | *Buffer*, `secret`: *string*, `algorithm?`: *string*, `isHex?`: *boolean*): *any*

create hash hmac

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`text` | *string* | *Buffer* | - | sign text   |
`secret` | *string* | - | Secret key   |
`algorithm` | *string* | 'sha256' | md5, sha256, sha512...   |
`isHex` | *boolean* | true | return type is Hex?    |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L20)

___

#### decryptData

▸ `Const`**decryptData**(`encryptData`: *string* | *number*, `salt`: *string*): *string*

Symmetric decryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`encryptData` | *string* | *number* | - |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:55](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L55)

___

#### encryptData

▸ `Const`**encryptData**(`text`: *string* | *number*, `salt`: *string*): *string*

Symmetric encryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | *string* | *number* |  |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:35](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L35)

<a name="moduleslib_enummd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Enum

## Module: Lib/Enum

### Table of contents

#### Enumerations

- [ENUM\_EVENT](#enumslib_enumenum_eventmd)
- [ENUM\_METHODS](#enumslib_enumenum_methodsmd)
- [ENUM\_SERVER](#enumslib_enumenum_servermd)
- [ENUM\_STATUS](#enumslib_enumenum_statusmd)
- [ENUM\_STORAGE](#enumslib_enumenum_storagemd)
- [ENUM\_TYPE](#enumslib_enumenum_typemd)

<a name="moduleslib_funcmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Func

## Module: Lib/Func

### Table of contents

#### Functions

- [createResult](#createresult)
- [decryptValue](#decryptvalue)
- [encryptValue](#encryptvalue)
- [makeid](#makeid)

### Functions

#### createResult

▸ `Const`**createResult**(`result`: *string*, `msg?`: *string*, `data?`: *any*): *object*

Function for common use of result values

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`result` | *string* | - | result Type   |
`msg` | *string* | '' | result message   |
`data` | *any* | null | result data    |

**Returns:** *object*

Defined in: [src/Lib/Func.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L12)

___

#### decryptValue

▸ `Const`**decryptValue**(`id`: *string* | *number*, `data`: *any*): *Promise*<*null* | Object\>

복호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`data` | *any* | 암호화된 데이터    |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:84](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L84)

___

#### encryptValue

▸ `Const`**encryptValue**(`id`: *string* | *number*, `param`: *any*): *Promise*<*null* | Object\>

암호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`param` | *any* | 저장할 데이터     |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:49](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L49)

___

#### makeid

▸ `Const`**makeid**(`length`: *number*, `isMs?`: *boolean*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`length` | *number* | - |
`isMs` | *boolean* | true |

**Returns:** *string*

Defined in: [src/Lib/Func.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L20)

# Classes

<a name="classesbrowser_alarmsalarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / alarms

## Class: alarms

[Browser/Alarms](#modulesbrowser_alarmsmd).alarms

**`type/chrome.alarms`** 

### Hierarchy

* **alarms**

### Implements

* [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [clearAll](#clearall)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Constructors

#### constructor

\+ **new alarms**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L19)

### Properties

#### instance

▪ `Static` **instance**: [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L16)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람이 경과하면 Listener의 등록되어 있는 callback 함수가 실행됩니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* | Alarm을 발생시 호출되는 Callback 함수입니다. (id: 생성시 고유 ID, alram: 해당 알람의 정보)    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Defined in: [src/Browser/Alarms.ts:63](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L63)

___

#### clear

▸ **clear**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람을 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:150](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L150)

___

#### clearAll

▸ **clearAll**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 모든 알람을 제거합니다.

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L166)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): [*alarms*](#classesbrowser_alarmsalarmsmd)

Alarm을 생성합니다. alarmInfo로 지정된 시간에 가까워 지면 onAlarm이벤트가 시작됩니다.
같은 이름의 다른 알람이있는 경우 (또는 지정되지 않은 경우 이름이없는 경우) 취소되고이 알람으로 대체됩니다.

사용자 컴퓨터의 부하를 줄이기 위해 Chrome은 알람을 최대 1 분에 한 번으로 제한하지만 임의의 양을 더 지연시킬 수 있습니다. 즉, delayInMinutes또는 periodInMinutes보다 작게 설정 1하면 적용되지 않으며 경고가 발생합니다. when경고없이 "지금"후 1 분 미만으로 설정할 수 있지만 실제로 최소 1 분 동안 Alarm을 발생하지 않습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 이 Alarm을 식별하기위한 이름입니다.   |
`options` | AlarmCreateInfo | 알람이 발생해야하는시기를 설명합니다. 초기 시간은 when 또는 delayInMinutes (둘다는 아님) 로 지정해야합니다 . 경우 periodInMinutes가 설정 한 알람이 매일 반복됩니다 periodInMinutes의 초기 이벤트 후 분. 둘 경우 시 또는 delayInMinutes이 반복 알람 설정, periodInMinutes는 대한 기본값으로 사용되지 않습니다 delayInMinutes.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:42](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L42)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람시 등록되어있는 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`id` | *string* | Alarm addListener시 생성된 ID값    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:98](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L98)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람의 모든 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:121](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L121)

<a name="classesbrowser_messagemessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / message

## Class: message

[Browser/Message](#modulesbrowser_messagemd).message

### Hierarchy

* **message**

### Implements

* [*iMessage*](#interfacesbrowser_messageimessagemd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Constructors

#### constructor

\+ **new message**(): [*message*](#classesbrowser_messagemessagemd)

**Returns:** [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L24)

### Properties

#### instance

▪ `Static` **instance**: [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L21)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

확장 프로세스 (by sendMessage) 또는 콘텐츠 스크립트 (by tabs.sendMessage) 에서 메시지가 전송되면 이벤트가 발생합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:127](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L127)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

다른 확장 프로그램 / 앱에서 메시지가 전송되면 시작됩니다 ( sendMessage). 콘텐츠 스크립트에서 사용할 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:203](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L203)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

확장 / 앱 또는 다른 확장 / 앱 내의 이벤트 리스너에 단일 메시지를 보냅니다.

확장 프로그램은이 방법을 사용하여 콘텐츠 스크립트에 메시지를 보낼 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:46](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L46)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

응답이 다시 전송 될 때 실행할 선택적 콜백과 함께 지정된 탭의 콘텐츠 스크립트에 단일 메시지를 보냅니다.

해당 이벤트는 runtime.onMessage 및 해당 Class의 on 함수로 처리할 수 있습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`tabId` | *number* | - | 발신 Tab ID   |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:88](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L88)

<a name="classesbrowser_notifynotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / notify

## Class: notify

[Browser/Notify](#modulesbrowser_notifymd).notify

**`type/chrome.notifications`** 

### Hierarchy

* **notify**

### Implements

* [*iNotify*](#interfacesbrowser_notifyinotifymd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Constructors

#### constructor

\+ **new notify**(): [*notify*](#classesbrowser_notifynotifymd)

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:35](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L35)

### Properties

#### instance

▪ `Static` **instance**: [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L32)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

알림을 만들고 표시합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*string*\>

Promise - notification ID를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:289](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L289)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

이 앱 또는 확장 프로그램의 모든 알림을 가져옵니다.

**Returns:** *Promise*<Object\>

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:337](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L337)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림에서 버튼을 눌렀을 때 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* | notification의 ID 및 누른 버튼의 Index를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L190)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림의 버튼이 아닌 영역을 클릭시 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*) => *void* | notification의 ID를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:89](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L89)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

시스템 또는 사용자 작업에 의해 알림이 닫혔을 때 발생하는 이벤트 입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* | notification의 ID 및 사용자에 의해 닫힌 여부를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:140](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L140)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 권한 수준을 변경합니다. Chrome 47부터는 ChromeOS에만이 이벤트를 전달하는 UI가 있습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`level`: *string*) => *void* | notification의 권한 레벨을 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:240](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L240)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

버튼을 눌렀을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:218](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L218)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

클릭시 발생되는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:118](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L118)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

알림이 닫혔을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:168](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L168)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

권한 수준을 변경 이벤트를 삭제합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:265](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L265)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): [*notify*](#classesbrowser_notifynotifymd)

알림의 기본 옵션을 정의합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:67](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L67)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*boolean*\>

Promise - Update 여부를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:315](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L315)

<a name="classesbrowser_portportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / port

## Class: port

[Browser/Port](#modulesbrowser_portmd).port

### Hierarchy

* **port**

### Implements

* [*iPort*](#interfacesbrowser_portiportmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Constructors

#### constructor

\+ **new port**(): [*port*](#classesbrowser_portportmd)

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:31

### Properties

#### instance

▪ `Static` **instance**: [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:25

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

지정된 이름으로 포트를 연결합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** *null* | Port

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:69

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

연결되어 있는 포트를 닫습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** Boolean

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:94

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *undefined* | { `removeListener`: () => *void*  }

이 이벤트는 포트의 다른 쪽 끝에서 postMessage 를 호출 하면 시작됩니다.

첫 번째 매개 변수는 메시지이고 두 번째 매개 변수는 메시지를 수신 한 포트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름   |
`callback` | portCallbackFunction | 메세지를 받았을 때 발생되는 Callback 함수    |

**Returns:** *undefined* | { `removeListener`: () => *void*  }

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:221

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): [*port*](#classesbrowser_portportmd)

지정된 포트가 닫혔을때 이벤트가 발생합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름   |
`callback` | (`port`: Port) => *void* | 포트가 닫힐 때 발생되는 Callback 함수    |

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: src/Browser/Port.ts:114

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *Promise*<*void*\>

지정된 포트로 메세지를 발송합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`name` | *string* | - | 지정된 포트 이름   |
`method` | *string* | - | 발생시킬 메소드 명   |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | 암호화 여부   |
`response` | *null* | Function | null | Response를 받아야할 경우 Timeout 시간 만큼 기다립니다.    |

**Returns:** *Promise*<*void*\>

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:141

___

#### setTimeout

▸ **setTimeout**(`ms?`: *number*): [*port*](#classesbrowser_portportmd)

Port 사용시 Resoponse를 위한 Timeout 설정

기본적으로 Port는 단방향으로만 메세지를 발생합니다.

하지만, 해당 Class는 Response를 구현하였으므로 결과값을 받기 위해 기본 Timeout 시간을 설정할 수 있습니다.

**`default`** 240000ms (4min)

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ms` | *number* | 240000 | milliseconds    |

**Returns:** [*port*](#classesbrowser_portportmd)

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: src/Browser/Port.ts:58

<a name="classesbrowser_runtimeruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / runtimeEvent

## Class: runtimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).runtimeEvent

### Hierarchy

* **runtimeEvent**

### Implements

* [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Constructors

#### constructor

\+ **new runtimeEvent**(): [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

**Returns:** [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L20)

### Properties

#### instance

▪ `Static` **instance**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L15)

### Methods

#### onCommand

▸ **onCommand**(`callback`: Function, `key?`: *string*): *void*

Chrome.commands
Fired when a registered command is activated using a keyboard shortcut.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:209](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L209)

___

#### onConnect

▸ **onConnect**(`callback`: Function, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from either an extension process or a content script

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:124](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L124)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from another extension

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L166)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:82](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L82)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

Remove onCommand event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:230](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L230)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

Remove onConnect event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:146](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L146)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

Remove onConnectExternal event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:189](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L189)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:104](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L104)

<a name="classesbrowser_tabstabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / tabsEvent

## Class: tabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).tabsEvent

### Hierarchy

* *EventEmitter*

  ↳ **tabsEvent**

### Implements

* [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)
* *EventEmitter*

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [captureRejectionSymbol](#capturerejectionsymbol)
- [captureRejections](#capturerejections)
- [defaultMaxListeners](#defaultmaxlisteners)
- [errorMonitor](#errormonitor)
- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [emit](#emit)
- [eventNames](#eventnames)
- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getMaxListeners](#getmaxlisteners)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [listenerCount](#listenercount)
- [listeners](#listeners)
- [off](#off)
- [on](#on)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [once](#once)
- [prependListener](#prependlistener)
- [prependOnceListener](#prependoncelistener)
- [rawListeners](#rawlisteners)
- [removeActivated](#removeactivated)
- [removeAllListeners](#removealllisteners)
- [removeListener](#removelistener)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)
- [setMaxListeners](#setmaxlisteners)
- [listenerCount](#listenercount)
- [on](#on)
- [once](#once)

### Constructors

#### constructor

\+ **new tabsEvent**(): [*tabsEvent*](#classesbrowser_tabstabseventmd)

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:72](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L72)

### Properties

#### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:38

___

#### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:44

___

#### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

#### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:37

___

#### instance

▪ `Static` **instance**: [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:66](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L66)

### Methods

#### addListener

▸ **addListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:57

___

#### emit

▸ **emit**(`event`: *string* | *symbol*, ...`args`: *any*[]): *boolean*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:67

___

#### eventNames

▸ **eventNames**(): (*string* | *symbol*)[]

**Returns:** (*string* | *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:72

___

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

Returns the active tab information stored in the class.

**Returns:** *Promise*<*null* | tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:359](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L359)

___

#### getActiveTab

▸ **getActiveTab**(`index?`: *number*): *Promise*<tabResult\>

Chrome.tabs.query -> Chrome.tabs.get

Retrieves details about the specified active tab.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:326](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L326)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:227](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L227)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Returns a list of tabs stored in the class.

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:341](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L341)

___

#### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tabId` | *number* |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:238](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L238)

___

#### getTabIndex

▸ **getTabIndex**(`index?`: *number*, `options?`: *null* | QueryInfo): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |
`options` | *null* | QueryInfo | null | - |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:271](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L271)

___

#### getTabs

▸ **getTabs**(`options?`: *null* | QueryInfo): *Promise*<tabResult[]\>

Chrome.tabs.get

Gets all tabs that have the specified properties, or all tabs if no properties are specified.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`options` | *null* | QueryInfo | null |     |

**Returns:** *Promise*<tabResult[]\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:387](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L387)

___

#### listenerCount

▸ **listenerCount**(`event`: *string* | *symbol*): *number*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

#### listeners

▸ **listeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

#### off

▸ **off**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:61

___

#### on

▸ **on**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:58

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onActivated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:425](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L425)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onRemoved
Fired when a tab is closed.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tabId`: *number*) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:574](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L574)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onUpdated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:501](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L501)

___

#### once

▸ **once**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:59

___

#### prependListener

▸ **prependListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:70

___

#### prependOnceListener

▸ **prependOnceListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:71

___

#### rawListeners

▸ **rawListeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

#### removeActivated

▸ **removeActivated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:467](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L467)

___

#### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* | *symbol*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* | *symbol* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:62

___

#### removeListener

▸ **removeListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:60

___

#### removeRemoved

▸ **removeRemoved**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:608](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L608)

___

#### removeUpdated

▸ **removeUpdated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:540](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L540)

___

#### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:63

___

#### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* | *symbol*): *number*

**`deprecated`** since v4.0.0

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

#### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:23

___

#### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* | *symbol*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* | *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:22

<a name="classeslib_cryptrsacryptomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Crypt](#moduleslib_cryptmd) / RSACrypto

## Class: RSACrypto

[Lib/Crypt](#moduleslib_cryptmd).RSACrypto

### Hierarchy

* **RSACrypto**

### Implements

* [*iRSACrypto*](#interfaceslib_cryptirsacryptomd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [createEckey](#createeckey)
- [privateDecrypt](#privatedecrypt)
- [privateEncrypt](#privateencrypt)
- [publicDecrypt](#publicdecrypt)
- [publicEncrypt](#publicencrypt)
- [signEckey](#signeckey)

### Constructors

#### constructor

\+ **new RSACrypto**(): [*RSACrypto*](#classeslib_cryptrsacryptomd)

**Returns:** [*RSACrypto*](#classeslib_cryptrsacryptomd)

Defined in: [src/Lib/Crypt.ts:86](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L86)

### Methods

#### createEckey

▸ **createEckey**(): *object*

**Returns:** *object*

Name | Type |
------ | ------ |
`private` | *any* |
`public` | *any* |

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:93](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L93)

___

#### privateDecrypt

▸ **privateDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding?`: *number*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`encryptData` | *string* | - |
`decryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *string*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:133](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L133)

___

#### privateEncrypt

▸ **privateEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding?`: *number*): *any*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | *any* | - |
`encryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:156](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L156)

___

#### publicDecrypt

▸ **publicDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding?`: *number*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`encryptData` | *string* | - |
`decryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *string*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:180](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L180)

___

#### publicEncrypt

▸ **publicEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding?`: *number*): *any*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`param` | *any* | - |
`encryptKey` | *string* | - |
`padding` | *number* | ... |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:109](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L109)

___

#### signEckey

▸ **signEckey**(`data`: *any*, `signKey`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |
`signKey` | *string* |

**Returns:** *any*

Implementation of: [iRSACrypto](#interfaceslib_cryptirsacryptomd)

Defined in: [src/Lib/Crypt.ts:104](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L104)

# Enums

<a name="enumslib_enumenum_statusmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STATUS

## Enumeration: ENUM\_STATUS

[Lib/Enum](#moduleslib_enummd).ENUM_STATUS

This class result status

### Table of contents

#### Enumeration members

- [DENIED](#denied)
- [ERROR](#error)
- [SUCCESS](#success)
- [WARNING](#warning)

### Enumeration members

#### DENIED

• **DENIED**: = "DENIED"

Defined in: [src/Lib/Enum.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L8)

___

#### ERROR

• **ERROR**: = "ERROR"

Defined in: [src/Lib/Enum.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L6)

___

#### SUCCESS

• **SUCCESS**: = "SUCCESS"

Defined in: [src/Lib/Enum.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L5)

___

#### WARNING

• **WARNING**: = "WARNING"

Defined in: [src/Lib/Enum.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L7)

<a name="enumslib_enumenum_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STORAGE

## Enumeration: ENUM\_STORAGE

[Lib/Enum](#moduleslib_enummd).ENUM_STORAGE

**`param`** localStorage - Window LocalStorage

**`param`** local - Browser.storage.local

**`param`** sync - Browser.storage.sync

### Table of contents

#### Enumeration members

- [LOCAL](#local)
- [LOCALSTORAGE](#localstorage)
- [SYNC](#sync)

### Enumeration members

#### LOCAL

• **LOCAL**: = "local"

Defined in: [src/Lib/Enum.ts:18](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L18)

___

#### LOCALSTORAGE

• **LOCALSTORAGE**: = "localStorage"

Defined in: [src/Lib/Enum.ts:17](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L17)

___

#### SYNC

• **SYNC**: = "sync"

Defined in: [src/Lib/Enum.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L19)

<a name="enumslib_enumenum_typemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_TYPE

## Enumeration: ENUM\_TYPE

[Lib/Enum](#moduleslib_enummd).ENUM_TYPE

**`param`** Window LocalStorage

**`param`** Browser.storage

### Table of contents

#### Enumeration members

- [BRWOSER](#brwoser)
- [LOCAL](#local)

### Enumeration members

#### BRWOSER

• **BRWOSER**: = "BRWOSER"

Defined in: [src/Lib/Enum.ts:28](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L28)

___

#### LOCAL

• **LOCAL**: = "LOCAL"

Defined in: [src/Lib/Enum.ts:27](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Enum.ts#L27)

# Interfaces

<a name="interfacesbrowser_alarmsialarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / iAlarms

## Interface: iAlarms

[Browser/Alarms](#modulesbrowser_alarmsmd).iAlarms

### Hierarchy

* **iAlarms**

### Implemented by

* [*alarms*](#classesbrowser_alarmsalarmsmd)

### Table of contents

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L6)

___

#### clear

▸ **clear**(`name`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Alarms.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L9)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`options` | AlarmCreateInfo |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L5)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L7)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Alarms.ts#L8)

<a name="interfacesbrowser_messageimessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / iMessage

## Interface: iMessage

[Browser/Message](#modulesbrowser_messagemd).iMessage

### Hierarchy

* **iMessage**

### Implemented by

* [*message*](#classesbrowser_messagemessagemd)

### Table of contents

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L16)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:17](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L17)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L13)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Message.ts#L14)

<a name="interfacesbrowser_notifyinotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / iNotify

## Interface: iNotify

[Browser/Notify](#modulesbrowser_notifymd).iNotify

### Hierarchy

* **iNotify**

### Implemented by

* [*notify*](#classesbrowser_notifynotifymd)

### Table of contents

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*string*\>

Defined in: [src/Browser/Notify.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L14)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

**Returns:** *Promise*<Object\>

Defined in: [src/Browser/Notify.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L16)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L10)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L6)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L8)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`level`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L12)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L11)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L7)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L9)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L13)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L5)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*boolean*\>

Defined in: [src/Browser/Notify.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Notify.ts#L15)

<a name="interfacesbrowser_portiportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / iPort

## Interface: iPort

[Browser/Port](#modulesbrowser_portmd).iPort

### Hierarchy

* **iPort**

### Implemented by

* [*port*](#classesbrowser_portportmd)

### Table of contents

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *null* | Port

Defined in: src/Browser/Port.ts:16

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** Boolean

Defined in: src/Browser/Port.ts:17

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | portCallbackFunction |

**Returns:** *void*

Defined in: src/Browser/Port.ts:21

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`port`: Port) => *void* |

**Returns:** *any*

Defined in: src/Browser/Port.ts:18

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |
`response?` | *null* | Function |

**Returns:** *void*

Defined in: src/Browser/Port.ts:20

___

#### setTimeout

▸ **setTimeout**(`ms`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`ms` | *number* |

**Returns:** *any*

Defined in: src/Browser/Port.ts:14

<a name="interfacesbrowser_runtimeiruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / iRuntimeEvent

## Interface: iRuntimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).iRuntimeEvent

### Hierarchy

* **iRuntimeEvent**

### Implemented by

* [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

### Table of contents

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Methods

#### onCommand

▸ **onCommand**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L10)

___

#### onConnect

▸ **onConnect**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L6)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L8)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L4)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L11)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L7)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L9)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Runtime.ts#L5)

<a name="interfacesbrowser_storageistoragemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Storage](#modulesbrowser_storagemd) / iStorage

## Interface: iStorage

[Browser/Storage](#modulesbrowser_storagemd).iStorage

### Hierarchy

* **iStorage**

### Table of contents

#### Methods

- [changeType](#changetype)
- [load](#load)
- [remove](#remove)
- [save](#save)

### Methods

#### changeType

▸ **changeType**(`type`: [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd)): [*iStorage*](#interfacesbrowser_storageistoragemd)

##### Parameters:

Name | Type |
------ | ------ |
`type` | [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd) |

**Returns:** [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: [src/Browser/Storage.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L5)

___

#### load

▸ **load**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L8)

___

#### remove

▸ **remove**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L9)

___

#### save

▸ **save**(`key`: *string* | *number*, `val`: *any*): *Promise*<*void*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |
`val` | *any* |

**Returns:** *Promise*<*void*\>

Defined in: [src/Browser/Storage.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L7)

<a name="interfacesbrowser_tabsitabinfomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabInfo

## Interface: iTabInfo

[Browser/Tabs](#modulesbrowser_tabsmd).iTabInfo

### Hierarchy

* **iTabInfo**

### Table of contents

#### Properties

- [favIcon](#favicon)
- [host](#host)
- [id](#id)
- [index](#index)
- [origin](#origin)
- [status](#status)
- [title](#title)
- [windowId](#windowid)

### Properties

#### favIcon

• **favIcon**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L10)

___

#### host

• **host**: *string*

Defined in: [src/Browser/Tabs.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L8)

___

#### id

• **id**: *null* | *number*

Defined in: [src/Browser/Tabs.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L4)

___

#### index

• **index**: *number*

Defined in: [src/Browser/Tabs.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L5)

___

#### origin

• **origin**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L9)

___

#### status

• **status**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L6)

___

#### title

• **title**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L7)

___

#### windowId

• **windowId**: *number*

Defined in: [src/Browser/Tabs.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L11)

<a name="interfacesbrowser_tabsitabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabsEvent

## Interface: iTabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).iTabsEvent

### Hierarchy

* **iTabsEvent**

### Implemented by

* [*tabsEvent*](#classesbrowser_tabstabseventmd)

### Table of contents

#### Methods

- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [removeActivated](#removeactivated)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)

### Methods

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

**Returns:** *Promise*<*null* | tabResult\>

Defined in: [src/Browser/Tabs.ts:26](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L26)

___

#### getActiveTab

▸ **getActiveTab**(`index`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L24)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Defined in: [src/Browser/Tabs.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L20)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Defined in: [src/Browser/Tabs.ts:25](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L25)

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L21)

___

#### getTabIndex

▸ **getTabIndex**(`index`: *number*, `options`: *null* | QueryInfo): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:22](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L22)

___

#### getTabs

▸ **getTabs**(`options`: *null* | QueryInfo): *Promise*<tabResult[]\>

##### Parameters:

Name | Type |
------ | ------ |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult[]\>

Defined in: [src/Browser/Tabs.ts:23](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L23)

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:28](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L28)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tabId`: *number*) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L32)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:30](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L30)

___

#### removeActivated

▸ **removeActivated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:29](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L29)

___

#### removeRemoved

▸ **removeRemoved**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:33](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L33)

___

#### removeUpdated

▸ **removeUpdated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:31](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Tabs.ts#L31)

<a name="interfacesindexibrowserevtmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / iBrowserEvt

## Interface: iBrowserEvt

[index](#modulesindexmd).iBrowserEvt

### Hierarchy

* **iBrowserEvt**

### Table of contents

#### Properties

- [alarms](#alarms)
- [message](#message)
- [notify](#notify)
- [port](#port)
- [runtime](#runtime)
- [storage](#storage)
- [tabs](#tabs)

### Properties

#### alarms

• **alarms**: [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

Defined in: src/index.ts:21

___

#### message

• **message**: [*iMessage*](#interfacesbrowser_messageimessagemd)

Defined in: src/index.ts:19

___

#### notify

• **notify**: [*iNotify*](#interfacesbrowser_notifyinotifymd)

Defined in: src/index.ts:22

___

#### port

• **port**: [*iPort*](#interfacesbrowser_portiportmd)

Defined in: src/index.ts:20

___

#### runtime

• **runtime**: [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: src/index.ts:18

___

#### storage

• **storage**: [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: src/index.ts:24

___

#### tabs

• **tabs**: () => [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: src/index.ts:23

<a name="interfaceslib_cryptirsacryptomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Crypt](#moduleslib_cryptmd) / iRSACrypto

## Interface: iRSACrypto

[Lib/Crypt](#moduleslib_cryptmd).iRSACrypto

### Hierarchy

* **iRSACrypto**

### Implemented by

* [*RSACrypto*](#classeslib_cryptrsacryptomd)

### Table of contents

#### Methods

- [createEckey](#createeckey)
- [privateDecrypt](#privatedecrypt)
- [privateEncrypt](#privateencrypt)
- [publicDecrypt](#publicdecrypt)
- [publicEncrypt](#publicencrypt)
- [signEckey](#signeckey)

### Methods

#### createEckey

▸ **createEckey**(): *object*

**Returns:** *object*

Name | Type |
------ | ------ |
`private` | *string* |
`public` | *string* |

Defined in: [src/Lib/Crypt.ts:73](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L73)

___

#### privateDecrypt

▸ **privateDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding`: *number*): *string*

##### Parameters:

Name | Type |
------ | ------ |
`encryptData` | *string* |
`decryptKey` | *string* |
`padding` | *number* |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:79](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L79)

___

#### privateEncrypt

▸ **privateEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`param` | *any* |
`encryptKey` | *string* |
`padding` | *number* |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:80](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L80)

___

#### publicDecrypt

▸ **publicDecrypt**(`encryptData`: *string*, `decryptKey`: *string*, `padding`: *number*): *string*

##### Parameters:

Name | Type |
------ | ------ |
`encryptData` | *string* |
`decryptKey` | *string* |
`padding` | *number* |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:81](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L81)

___

#### publicEncrypt

▸ **publicEncrypt**(`param`: *any*, `encryptKey`: *string*, `padding`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`param` | *any* |
`encryptKey` | *string* |
`padding` | *number* |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:78](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L78)

___

#### signEckey

▸ **signEckey**(`data`: *any*, `signKey`: *string*): *Buffer*

##### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |
`signKey` | *string* |

**Returns:** *Buffer*

Defined in: [src/Lib/Crypt.ts:77](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L77)

<a name="modulesmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / Exports

# @metacoin/browser-extensionizer - v0.2.0

## Table of contents

### Modules

- [Browser/Alarms](#modulesbrowser_alarmsmd)
- [Browser/Message](#modulesbrowser_messagemd)
- [Browser/Notify](#modulesbrowser_notifymd)
- [Browser/Port](#modulesbrowser_portmd)
- [Browser/Runtime](#modulesbrowser_runtimemd)
- [Browser/Storage](#modulesbrowser_storagemd)
- [Browser/Tabs](#modulesbrowser_tabsmd)
- [Lib/Crypt](#moduleslib_cryptmd)
- [Lib/Enum](#moduleslib_enummd)
- [Lib/Func](#moduleslib_funcmd)
- [index](#modulesindexmd)

# Modules

<a name="modulesbrowser_alarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Alarms

## Module: Browser/Alarms

### Table of contents

#### Classes

- [alarms](#classesbrowser_alarmsalarmsmd)

#### Interfaces

- [iAlarms](#interfacesbrowser_alarmsialarmsmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*alarms*](#classesbrowser_alarmsalarmsmd)

<a name="modulesbrowser_messagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Message

## Module: Browser/Message

### Table of contents

#### Classes

- [message](#classesbrowser_messagemessagemd)

#### Interfaces

- [iMessage](#interfacesbrowser_messageimessagemd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*message*](#classesbrowser_messagemessagemd)

<a name="modulesbrowser_notifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Notify

## Module: Browser/Notify

### Table of contents

#### Classes

- [notify](#classesbrowser_notifynotifymd)

#### Interfaces

- [iNotify](#interfacesbrowser_notifyinotifymd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*notify*](#classesbrowser_notifynotifymd)

<a name="modulesbrowser_portmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Port

## Module: Browser/Port

### Table of contents

#### Classes

- [port](#classesbrowser_portportmd)

#### Interfaces

- [iPort](#interfacesbrowser_portiportmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*port*](#classesbrowser_portportmd)

<a name="modulesbrowser_runtimemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Runtime

## Module: Browser/Runtime

### Table of contents

#### Classes

- [runtimeEvent](#classesbrowser_runtimeruntimeeventmd)

#### Interfaces

- [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

<a name="modulesbrowser_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Storage

## Module: Browser/Storage

### Table of contents

#### Interfaces

- [iStorage](#interfacesbrowser_storageistoragemd)

#### Variables

- [default](#default)

### Variables

#### default

• `Const` **default**: *Storage*

Defined in: [src/Browser/Storage.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Browser/Storage.ts#L190)

<a name="modulesbrowser_tabsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Tabs

## Module: Browser/Tabs

### Table of contents

#### Classes

- [tabsEvent](#classesbrowser_tabstabseventmd)

#### Interfaces

- [iTabInfo](#interfacesbrowser_tabsitabinfomd)
- [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: () => [*tabsEvent*](#classesbrowser_tabstabseventmd)

<a name="modulesindexmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / index

## Module: index

### Table of contents

#### Interfaces

- [iBrowserEvt](#interfacesindexibrowserevtmd)

#### Variables

- [default](#default)

### Variables

#### default

• `Const` **default**: [*iBrowserEvt*](#interfacesindexibrowserevtmd)

Defined in: src/index.ts:27

<a name="moduleslib_cryptmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Crypt

## Module: Lib/Crypt

### Table of contents

#### Classes

- [RSACrypto](#classeslib_cryptrsacryptomd)

#### Interfaces

- [iRSACrypto](#interfaceslib_cryptirsacryptomd)

#### Variables

- [RSA](#rsa)

#### Functions

- [Hash](#hash)
- [HashHmac](#hashhmac)
- [decryptData](#decryptdata)
- [encryptData](#encryptdata)

### Variables

#### RSA

• `Const` **RSA**: [*RSACrypto*](#classeslib_cryptrsacryptomd)

Defined in: [src/Lib/Crypt.ts:206](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L206)

### Functions

#### Hash

▸ `Const`**Hash**(`type`: *string*, `txt`: *string* | *number*): *string*

Create Hash

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | *string* | Hash type (md5, sha256, sha512....)   |
`txt` | *string* | *number* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L9)

___

#### HashHmac

▸ `Const`**HashHmac**(`text`: *string* | *Buffer*, `secret`: *string*, `algorithm?`: *string*, `isHex?`: *boolean*): *any*

create hash hmac

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`text` | *string* | *Buffer* | - | sign text   |
`secret` | *string* | - | Secret key   |
`algorithm` | *string* | 'sha256' | md5, sha256, sha512...   |
`isHex` | *boolean* | true | return type is Hex?    |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L20)

___

#### decryptData

▸ `Const`**decryptData**(`encryptData`: *string* | *number*, `salt`: *string*): *string*

Symmetric decryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`encryptData` | *string* | *number* | - |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:55](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L55)

___

#### encryptData

▸ `Const`**encryptData**(`text`: *string* | *number*, `salt`: *string*): *string*

Symmetric encryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | *string* | *number* |  |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:35](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Crypt.ts#L35)

<a name="moduleslib_enummd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Enum

## Module: Lib/Enum

### Table of contents

#### Enumerations

- [ENUM\_STATUS](#enumslib_enumenum_statusmd)
- [ENUM\_STORAGE](#enumslib_enumenum_storagemd)
- [ENUM\_TYPE](#enumslib_enumenum_typemd)

<a name="moduleslib_funcmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Func

## Module: Lib/Func

### Table of contents

#### Functions

- [createResult](#createresult)
- [decryptValue](#decryptvalue)
- [encryptValue](#encryptvalue)
- [makeid](#makeid)

### Functions

#### createResult

▸ `Const`**createResult**(`result`: *string*, `msg?`: *string*, `data?`: *any*): *object*

Function for common use of result values

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`result` | *string* | - | result Type   |
`msg` | *string* | '' | result message   |
`data` | *any* | null | result data    |

**Returns:** *object*

Defined in: [src/Lib/Func.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L12)

___

#### decryptValue

▸ `Const`**decryptValue**(`id`: *string* | *number*, `data`: *any*): *Promise*<*null* | Object\>

복호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`data` | *any* | 암호화된 데이터    |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:84](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L84)

___

#### encryptValue

▸ `Const`**encryptValue**(`id`: *string* | *number*, `param`: *any*): *Promise*<*null* | Object\>

암호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`param` | *any* | 저장할 데이터     |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:49](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L49)

___

#### makeid

▸ `Const`**makeid**(`length`: *number*, `isMs?`: *boolean*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`length` | *number* | - |
`isMs` | *boolean* | true |

**Returns:** *string*

Defined in: [src/Lib/Func.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/030c38b/src/Lib/Func.ts#L20)

# Classes


<a name="classesbrowser_alarmsalarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / alarms

## Class: alarms

[Browser/Alarms](#modulesbrowser_alarmsmd).alarms

**`type/chrome.alarms`** 

### Hierarchy

* **alarms**

### Implements

* [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [clearAll](#clearall)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Constructors

#### constructor

\+ **new alarms**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L19)

### Properties

#### instance

▪ `Static` **instance**: [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L16)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람이 경과하면 Listener의 등록되어 있는 callback 함수가 실행됩니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* | Alarm을 발생시 호출되는 Callback 함수입니다. (id: 생성시 고유 ID, alram: 해당 알람의 정보)    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Defined in: [src/Browser/Alarms.ts:63](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L63)

___

#### clear

▸ **clear**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람을 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:150](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L150)

___

#### clearAll

▸ **clearAll**(): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 모든 알람을 제거합니다.

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Defined in: [src/Browser/Alarms.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L166)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): [*alarms*](#classesbrowser_alarmsalarmsmd)

Alarm을 생성합니다. alarmInfo로 지정된 시간에 가까워 지면 onAlarm이벤트가 시작됩니다.
같은 이름의 다른 알람이있는 경우 (또는 지정되지 않은 경우 이름이없는 경우) 취소되고이 알람으로 대체됩니다.

사용자 컴퓨터의 부하를 줄이기 위해 Chrome은 알람을 최대 1 분에 한 번으로 제한하지만 임의의 양을 더 지연시킬 수 있습니다. 즉, delayInMinutes또는 periodInMinutes보다 작게 설정 1하면 적용되지 않으며 경고가 발생합니다. when경고없이 "지금"후 1 분 미만으로 설정할 수 있지만 실제로 최소 1 분 동안 Alarm을 발생하지 않습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 이 Alarm을 식별하기위한 이름입니다.   |
`options` | AlarmCreateInfo | 알람이 발생해야하는시기를 설명합니다. 초기 시간은 when 또는 delayInMinutes (둘다는 아님) 로 지정해야합니다 . 경우 periodInMinutes가 설정 한 알람이 매일 반복됩니다 periodInMinutes의 초기 이벤트 후 분. 둘 경우 시 또는 delayInMinutes이 반복 알람 설정, periodInMinutes는 대한 기본값으로 사용되지 않습니다 delayInMinutes.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

this

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:42](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L42)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

알람시 등록되어있는 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.   |
`id` | *string* | Alarm addListener시 생성된 ID값    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:98](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L98)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): [*alarms*](#classesbrowser_alarmsalarmsmd)

등록되어 있는 알람의 모든 Listener를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.    |

**Returns:** [*alarms*](#classesbrowser_alarmsalarmsmd)

Implementation of: [iAlarms](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/Browser/Alarms.ts:121](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L121)


<a name="classesbrowser_messagemessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / message

## Class: message

[Browser/Message](#modulesbrowser_messagemd).message

### Hierarchy

* **message**

### Implements

* [*iMessage*](#interfacesbrowser_messageimessagemd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Constructors

#### constructor

\+ **new message**(): [*message*](#classesbrowser_messagemessagemd)

**Returns:** [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L24)

### Properties

#### instance

▪ `Static` **instance**: [*message*](#classesbrowser_messagemessagemd)

Defined in: [src/Browser/Message.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L21)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

확장 프로세스 (by sendMessage) 또는 콘텐츠 스크립트 (by tabs.sendMessage) 에서 메시지가 전송되면 이벤트가 발생합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:127](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L127)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

다른 확장 프로그램 / 앱에서 메시지가 전송되면 시작됩니다 ( sendMessage). 콘텐츠 스크립트에서 사용할 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | onCallbackFunction | - | On 이벤트 함수, 반드시 sendResult를 호출해야됩니다.   |
`extId` | *string* | '' | 특정 app extension id를 입력시 해당 id와 매치된 메세지만 callback을 실행합니다.    |

**Returns:** *null* | *object*

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:203](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L203)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

확장 / 앱 또는 다른 확장 / 앱 내의 이벤트 리스너에 단일 메시지를 보냅니다.

확장 프로그램은이 방법을 사용하여 콘텐츠 스크립트에 메시지를 보낼 수 없습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:46](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L46)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

응답이 다시 전송 될 때 실행할 선택적 콜백과 함께 지정된 탭의 콘텐츠 스크립트에 단일 메시지를 보냅니다.

해당 이벤트는 runtime.onMessage 및 해당 Class의 on 함수로 처리할 수 있습니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`tabId` | *number* | - | 발신 Tab ID   |
`method` | *string* | - |  |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | Parameters 암호화 여부    |

**Returns:** *Promise*<*any*\>

Implementation of: [iMessage](#interfacesbrowser_messageimessagemd)

Defined in: [src/Browser/Message.ts:88](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L88)


<a name="classesbrowser_notifynotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / notify

## Class: notify

[Browser/Notify](#modulesbrowser_notifymd).notify

**`type/chrome.notifications`** 

### Hierarchy

* **notify**

### Implements

* [*iNotify*](#interfacesbrowser_notifyinotifymd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Constructors

#### constructor

\+ **new notify**(): [*notify*](#classesbrowser_notifynotifymd)

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:35](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L35)

### Properties

#### instance

▪ `Static` **instance**: [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L32)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

알림을 만들고 표시합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*string*\>

Promise - notification ID를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:289](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L289)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

이 앱 또는 확장 프로그램의 모든 알림을 가져옵니다.

**Returns:** *Promise*<Object\>

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:337](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L337)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림에서 버튼을 눌렀을 때 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* | notification의 ID 및 누른 버튼의 Index를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L190)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 알림의 버튼이 아닌 영역을 클릭시 발생하는 이벤트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*) => *void* | notification의 ID를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:89](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L89)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

시스템 또는 사용자 작업에 의해 알림이 닫혔을 때 발생하는 이벤트 입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* | notification의 ID 및 사용자에 의해 닫힌 여부를 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:140](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L140)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): [*notify*](#classesbrowser_notifynotifymd)

사용자가 권한 수준을 변경합니다. Chrome 47부터는 ChromeOS에만이 이벤트를 전달하는 UI가 있습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`callback` | (`level`: *string*) => *void* | notification의 권한 레벨을 반환합니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Defined in: [src/Browser/Notify.ts:240](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L240)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

버튼을 눌렀을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:218](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L218)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

클릭시 발생되는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:118](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L118)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

알림이 닫혔을 때 발생하는 이벤트를 제거합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:168](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L168)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): [*notify*](#classesbrowser_notifynotifymd)

권한 수준을 변경 이벤트를 삭제합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:265](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L265)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): [*notify*](#classesbrowser_notifynotifymd)

알림의 기본 옵션을 정의합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** [*notify*](#classesbrowser_notifynotifymd)

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:67](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L67)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`id` | *string* | - | 알림의 식별자입니다. 식별자는 500자를 넘을 수 없습니다.   |
`options` | NotificationOptions | ... | https://developer.chrome.com/docs/extensions/reference/notifications/#type-NotificationOptions 를 참조하세요.    |

**Returns:** *Promise*<*boolean*\>

Promise - Update 여부를 반환합니다.

Implementation of: [iNotify](#interfacesbrowser_notifyinotifymd)

Defined in: [src/Browser/Notify.ts:315](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L315)


<a name="classesbrowser_portportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / port

## Class: port

[Browser/Port](#modulesbrowser_portmd).port

### Hierarchy

* **port**

### Implements

* [*iPort*](#interfacesbrowser_portiportmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Constructors

#### constructor

\+ **new port**(): [*port*](#classesbrowser_portportmd)

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: [src/Browser/Port.ts:31](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L31)

### Properties

#### instance

▪ `Static` **instance**: [*port*](#classesbrowser_portportmd)

Defined in: [src/Browser/Port.ts:25](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L25)

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

지정된 이름으로 포트를 연결합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** *null* | Port

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: [src/Browser/Port.ts:69](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L69)

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

연결되어 있는 포트를 닫습니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름    |

**Returns:** Boolean

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: [src/Browser/Port.ts:94](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L94)

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *undefined* | { `removeListener`: () => *void*  }

이 이벤트는 포트의 다른 쪽 끝에서 postMessage 를 호출 하면 시작됩니다.

첫 번째 매개 변수는 메시지이고 두 번째 매개 변수는 메시지를 수신 한 포트입니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름   |
`callback` | portCallbackFunction | 메세지를 받았을 때 발생되는 Callback 함수    |

**Returns:** *undefined* | { `removeListener`: () => *void*  }

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: [src/Browser/Port.ts:221](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L221)

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): [*port*](#classesbrowser_portportmd)

지정된 포트가 닫혔을때 이벤트가 발생합니다.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | 지정된 포트 이름   |
`callback` | (`port`: Port) => *void* | 포트가 닫힐 때 발생되는 Callback 함수    |

**Returns:** [*port*](#classesbrowser_portportmd)

Defined in: [src/Browser/Port.ts:114](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L114)

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *Promise*<*void*\>

지정된 포트로 메세지를 발송합니다.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`name` | *string* | - | 지정된 포트 이름   |
`method` | *string* | - | 발생시킬 메소드 명   |
`param` | *any* | ... |  |
`isEncrypt` | *boolean* | false | 암호화 여부   |
`response` | *null* | Function | null | Response를 받아야할 경우 Timeout 시간 만큼 기다립니다.    |

**Returns:** *Promise*<*void*\>

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: [src/Browser/Port.ts:141](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L141)

___

#### setTimeout

▸ **setTimeout**(`ms?`: *number*): [*port*](#classesbrowser_portportmd)

Port 사용시 Resoponse를 위한 Timeout 설정

기본적으로 Port는 단방향으로만 메세지를 발생합니다.

하지만, 해당 Class는 Response를 구현하였으므로 결과값을 받기 위해 기본 Timeout 시간을 설정할 수 있습니다.

**`default`** 240000ms (4min)

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`ms` | *number* | 240000 | milliseconds    |

**Returns:** [*port*](#classesbrowser_portportmd)

Implementation of: [iPort](#interfacesbrowser_portiportmd)

Defined in: [src/Browser/Port.ts:58](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L58)


<a name="classesbrowser_runtimeruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / runtimeEvent

## Class: runtimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).runtimeEvent

### Hierarchy

* **runtimeEvent**

### Implements

* [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [instance](#instance)

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Constructors

#### constructor

\+ **new runtimeEvent**(): [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

**Returns:** [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L20)

### Properties

#### instance

▪ `Static` **instance**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L15)

### Methods

#### onCommand

▸ **onCommand**(`callback`: Function, `key?`: *string*): *void*

Chrome.commands
Fired when a registered command is activated using a keyboard shortcut.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:209](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L209)

___

#### onConnect

▸ **onConnect**(`callback`: Function, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from either an extension process or a content script

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | Function | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:124](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L124)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when a connection is made from another extension

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:166](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L166)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key?`: *string*): *void*

Chrome.runtime
Fired when the extension is first installed, when the extension is updated to a new version, and when Chrome is updated to a new version.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | eventFunction | - | callback function    |
`key` | *string* | 'init' | Event identify name   |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:82](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L82)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

Remove onCommand event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:230](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L230)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

Remove onConnect event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:146](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L146)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

Remove onConnectExternal event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:189](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L189)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | *string* | Event identify name    |

**Returns:** *void*

Implementation of: [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/Browser/Runtime.ts:104](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L104)


<a name="classesbrowser_tabstabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / tabsEvent

## Class: tabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).tabsEvent

### Hierarchy

* *EventEmitter*

  ↳ **tabsEvent**

### Implements

* [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)
* *EventEmitter*

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [captureRejectionSymbol](#capturerejectionsymbol)
- [captureRejections](#capturerejections)
- [defaultMaxListeners](#defaultmaxlisteners)
- [errorMonitor](#errormonitor)
- [instance](#instance)

#### Methods

- [addListener](#addlistener)
- [emit](#emit)
- [eventNames](#eventnames)
- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getMaxListeners](#getmaxlisteners)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [listenerCount](#listenercount)
- [listeners](#listeners)
- [off](#off)
- [on](#on)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [once](#once)
- [prependListener](#prependlistener)
- [prependOnceListener](#prependoncelistener)
- [rawListeners](#rawlisteners)
- [removeActivated](#removeactivated)
- [removeAllListeners](#removealllisteners)
- [removeListener](#removelistener)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)
- [setMaxListeners](#setmaxlisteners)
- [listenerCount](#listenercount)
- [on](#on)
- [once](#once)

### Constructors

#### constructor

\+ **new tabsEvent**(): [*tabsEvent*](#classesbrowser_tabstabseventmd)

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:72](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L72)

### Properties

#### captureRejectionSymbol

▪ `Readonly` `Static` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:38

___

#### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Defined in: node_modules/@types/node/events.d.ts:44

___

#### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

#### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:37

___

#### instance

▪ `Static` **instance**: [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:66](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L66)

### Methods

#### addListener

▸ **addListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:57

___

#### emit

▸ **emit**(`event`: *string* | *symbol*, ...`args`: *any*[]): *boolean*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:67

___

#### eventNames

▸ **eventNames**(): (*string* | *symbol*)[]

**Returns:** (*string* | *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:72

___

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

Returns the active tab information stored in the class.

**Returns:** *Promise*<*null* | tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:359](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L359)

___

#### getActiveTab

▸ **getActiveTab**(`index?`: *number*): *Promise*<tabResult\>

Chrome.tabs.query -> Chrome.tabs.get

Retrieves details about the specified active tab.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:326](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L326)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:227](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L227)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Returns a list of tabs stored in the class.

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:341](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L341)

___

#### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:64

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`tabId` | *number* |     |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:238](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L238)

___

#### getTabIndex

▸ **getTabIndex**(`index?`: *number*, `options?`: *null* | QueryInfo): *Promise*<tabResult\>

Chrome.tabs.get

Retrieves details about the specified tabs index.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`index` | *number* | 0 |     |
`options` | *null* | QueryInfo | null | - |

**Returns:** *Promise*<tabResult\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:271](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L271)

___

#### getTabs

▸ **getTabs**(`options?`: *null* | QueryInfo): *Promise*<tabResult[]\>

Chrome.tabs.get

Gets all tabs that have the specified properties, or all tabs if no properties are specified.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`options` | *null* | QueryInfo | null |     |

**Returns:** *Promise*<tabResult[]\>

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:387](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L387)

___

#### listenerCount

▸ **listenerCount**(`event`: *string* | *symbol*): *number*

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:68

___

#### listeners

▸ **listeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:65

___

#### off

▸ **off**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:61

___

#### on

▸ **on**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:58

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onActivated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:425](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L425)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onRemoved
Fired when a tab is closed.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tabId`: *number*) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:574](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L574)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Chrome.tabs.onUpdated
Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events so as to be notified when a URL is set.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* | - |  |
`key` | *string* | 'init' | optional    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: [src/Browser/Tabs.ts:501](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L501)

___

#### once

▸ **once**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:59

___

#### prependListener

▸ **prependListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:70

___

#### prependOnceListener

▸ **prependOnceListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:71

___

#### rawListeners

▸ **rawListeners**(`event`: *string* | *symbol*): Function[]

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:66

___

#### removeActivated

▸ **removeActivated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:467](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L467)

___

#### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* | *symbol*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* | *symbol* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:62

___

#### removeListener

▸ **removeListener**(`event`: *string* | *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`event` | *string* | *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:60

___

#### removeRemoved

▸ **removeRemoved**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:608](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L608)

___

#### removeUpdated

▸ **removeUpdated**(`key?`: *string*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

Remove onInstalled event
If the key is *, all events are deleted.

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`key` | *string* | 'init' | Event identify name    |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Implementation of: [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:540](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L540)

___

#### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*tabsEvent*](#classesbrowser_tabstabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*tabsEvent*](#classesbrowser_tabstabseventmd)

Defined in: node_modules/@types/node/events.d.ts:63

___

#### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* | *symbol*): *number*

**`deprecated`** since v4.0.0

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* | *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:26

___

#### on

▸ `Static`**on**(`emitter`: *EventEmitter*, `event`: *string*): *AsyncIterableIterator*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* |

**Returns:** *AsyncIterableIterator*<*any*\>

Defined in: node_modules/@types/node/events.d.ts:23

___

#### once

▸ `Static`**once**(`emitter`: *NodeEventTarget*, `event`: *string* | *symbol*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | *NodeEventTarget* |
`event` | *string* | *symbol* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:21

▸ `Static`**once**(`emitter`: DOMEventTarget, `event`: *string*): *Promise*<*any*[]\>

##### Parameters:

Name | Type |
------ | ------ |
`emitter` | DOMEventTarget |
`event` | *string* |

**Returns:** *Promise*<*any*[]\>

Defined in: node_modules/@types/node/events.d.ts:22

# Enums


<a name="enumslib_enumenum_statusmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STATUS

## Enumeration: ENUM\_STATUS

[Lib/Enum](#moduleslib_enummd).ENUM_STATUS

This class result status

### Table of contents

#### Enumeration members

- [DENIED](#denied)
- [ERROR](#error)
- [SUCCESS](#success)
- [WARNING](#warning)

### Enumeration members

#### DENIED

• **DENIED**: = "DENIED"

Defined in: [src/Lib/Enum.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L8)

___

#### ERROR

• **ERROR**: = "ERROR"

Defined in: [src/Lib/Enum.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L6)

___

#### SUCCESS

• **SUCCESS**: = "SUCCESS"

Defined in: [src/Lib/Enum.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L5)

___

#### WARNING

• **WARNING**: = "WARNING"

Defined in: [src/Lib/Enum.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L7)


<a name="enumslib_enumenum_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_STORAGE

## Enumeration: ENUM\_STORAGE

[Lib/Enum](#moduleslib_enummd).ENUM_STORAGE

**`param`** localStorage - Window LocalStorage

**`param`** local - Browser.storage.local

**`param`** sync - Browser.storage.sync

### Table of contents

#### Enumeration members

- [LOCAL](#local)
- [LOCALSTORAGE](#localstorage)
- [SYNC](#sync)

### Enumeration members

#### LOCAL

• **LOCAL**: = "local"

Defined in: [src/Lib/Enum.ts:18](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L18)

___

#### LOCALSTORAGE

• **LOCALSTORAGE**: = "localStorage"

Defined in: [src/Lib/Enum.ts:17](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L17)

___

#### SYNC

• **SYNC**: = "sync"

Defined in: [src/Lib/Enum.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L19)


<a name="enumslib_enumenum_typemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Lib/Enum](#moduleslib_enummd) / ENUM_TYPE

## Enumeration: ENUM\_TYPE

[Lib/Enum](#moduleslib_enummd).ENUM_TYPE

**`param`** Window LocalStorage

**`param`** Browser.storage

### Table of contents

#### Enumeration members

- [BRWOSER](#brwoser)
- [LOCAL](#local)

### Enumeration members

#### BRWOSER

• **BRWOSER**: = "BRWOSER"

Defined in: [src/Lib/Enum.ts:28](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L28)

___

#### LOCAL

• **LOCAL**: = "LOCAL"

Defined in: [src/Lib/Enum.ts:27](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Enum.ts#L27)

# Interfaces


<a name="interfacesbrowser_alarmsialarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Alarms](#modulesbrowser_alarmsmd) / iAlarms

## Interface: iAlarms

[Browser/Alarms](#modulesbrowser_alarmsmd).iAlarms

### Hierarchy

* **iAlarms**

### Implemented by

* [*alarms*](#classesbrowser_alarmsalarmsmd)

### Table of contents

#### Methods

- [addListener](#addlistener)
- [clear](#clear)
- [create](#create)
- [removeListener](#removelistener)
- [removeListeners](#removelisteners)

### Methods

#### addListener

▸ **addListener**(`name`: *string*, `callback`: (`id`: *string*, `alarm`: Alarm) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`id`: *string*, `alarm`: Alarm) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L6)

___

#### clear

▸ **clear**(`name`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Alarms.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L9)

___

#### create

▸ **create**(`name`: *string*, `options`: AlarmCreateInfo): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`options` | AlarmCreateInfo |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L5)

___

#### removeListener

▸ **removeListener**(`name`: *string*, `id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L7)

___

#### removeListeners

▸ **removeListeners**(`name`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Alarms.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Alarms.ts#L8)


<a name="interfacesbrowser_messageimessagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Message](#modulesbrowser_messagemd) / iMessage

## Interface: iMessage

[Browser/Message](#modulesbrowser_messagemd).iMessage

### Hierarchy

* **iMessage**

### Implemented by

* [*message*](#classesbrowser_messagemessagemd)

### Table of contents

#### Methods

- [on](#on)
- [onExternal](#onexternal)
- [send](#send)
- [sendTab](#sendtab)

### Methods

#### on

▸ **on**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L16)

___

#### onExternal

▸ **onExternal**(`callback`: onCallbackFunction, `extId?`: *string*): *null* | *object*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | onCallbackFunction |
`extId?` | *string* |

**Returns:** *null* | *object*

Defined in: [src/Browser/Message.ts:17](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L17)

___

#### send

▸ **send**(`method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L13)

___

#### sendTab

▸ **sendTab**(`tabId`: *number*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Message.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Message.ts#L14)


<a name="interfacesbrowser_notifyinotifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Notify](#modulesbrowser_notifymd) / iNotify

## Interface: iNotify

[Browser/Notify](#modulesbrowser_notifymd).iNotify

### Hierarchy

* **iNotify**

### Implemented by

* [*notify*](#classesbrowser_notifynotifymd)

### Table of contents

#### Methods

- [create](#create)
- [getAll](#getall)
- [onButtonClicked](#onbuttonclicked)
- [onClicked](#onclicked)
- [onClosed](#onclosed)
- [onPermissionChanged](#onpermissionchanged)
- [removeButtonClicked](#removebuttonclicked)
- [removeClicked](#removeclicked)
- [removeClosed](#removeclosed)
- [removePermissionChanged](#removepermissionchanged)
- [setOptions](#setoptions)
- [update](#update)

### Methods

#### create

▸ **create**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*string*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*string*\>

Defined in: [src/Browser/Notify.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L14)

___

#### getAll

▸ **getAll**(): *Promise*<Object\>

**Returns:** *Promise*<Object\>

Defined in: [src/Browser/Notify.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L16)

___

#### onButtonClicked

▸ **onButtonClicked**(`id`: *string*, `callback`: (`notificationId`: *string*, `buttonIndex`: *number*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `buttonIndex`: *number*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L10)

___

#### onClicked

▸ **onClicked**(`id`: *string*, `callback`: (`notificationId`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L6)

___

#### onClosed

▸ **onClosed**(`id`: *string*, `callback`: (`notificationId`: *string*, `byUser`: *boolean*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`notificationId`: *string*, `byUser`: *boolean*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L8)

___

#### onPermissionChanged

▸ **onPermissionChanged**(`id`: *string*, `callback`: (`level`: *string*) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`callback` | (`level`: *string*) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L12)

___

#### removeButtonClicked

▸ **removeButtonClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L11)

___

#### removeClicked

▸ **removeClicked**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L7)

___

#### removeClosed

▸ **removeClosed**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L9)

___

#### removePermissionChanged

▸ **removePermissionChanged**(`id`: *string*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:13](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L13)

___

#### setOptions

▸ **setOptions**(`id`: *string*, `options?`: NotificationOptions): *any*

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *any*

Defined in: [src/Browser/Notify.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L5)

___

#### update

▸ **update**(`id`: *string*, `options?`: NotificationOptions): *Promise*<*boolean*\>

##### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`options?` | NotificationOptions |

**Returns:** *Promise*<*boolean*\>

Defined in: [src/Browser/Notify.ts:15](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Notify.ts#L15)


<a name="interfacesbrowser_portiportmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Port](#modulesbrowser_portmd) / iPort

## Interface: iPort

[Browser/Port](#modulesbrowser_portmd).iPort

### Hierarchy

* **iPort**

### Implemented by

* [*port*](#classesbrowser_portportmd)

### Table of contents

#### Methods

- [connect](#connect)
- [disConnect](#disconnect)
- [on](#on)
- [onDisconnect](#ondisconnect)
- [send](#send)
- [setTimeout](#settimeout)

### Methods

#### connect

▸ **connect**(`name`: *string*): *null* | Port

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** *null* | Port

Defined in: [src/Browser/Port.ts:16](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L16)

___

#### disConnect

▸ **disConnect**(`name`: *string*): Boolean

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |

**Returns:** Boolean

Defined in: [src/Browser/Port.ts:17](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L17)

___

#### on

▸ **on**(`name`: *string*, `callback`: portCallbackFunction): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | portCallbackFunction |

**Returns:** *void*

Defined in: [src/Browser/Port.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L21)

___

#### onDisconnect

▸ **onDisconnect**(`name`: *string*, `callback`: (`port`: Port) => *void*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`callback` | (`port`: Port) => *void* |

**Returns:** *any*

Defined in: [src/Browser/Port.ts:18](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L18)

___

#### send

▸ **send**(`name`: *string*, `method`: *string*, `param?`: *any*, `isEncrypt?`: *boolean*, `response?`: *null* | Function): *void*

##### Parameters:

Name | Type |
------ | ------ |
`name` | *string* |
`method` | *string* |
`param?` | *any* |
`isEncrypt?` | *boolean* |
`response?` | *null* | Function |

**Returns:** *void*

Defined in: [src/Browser/Port.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L20)

___

#### setTimeout

▸ **setTimeout**(`ms`: *number*): *any*

##### Parameters:

Name | Type |
------ | ------ |
`ms` | *number* |

**Returns:** *any*

Defined in: [src/Browser/Port.ts:14](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Port.ts#L14)


<a name="interfacesbrowser_runtimeiruntimeeventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Runtime](#modulesbrowser_runtimemd) / iRuntimeEvent

## Interface: iRuntimeEvent

[Browser/Runtime](#modulesbrowser_runtimemd).iRuntimeEvent

### Hierarchy

* **iRuntimeEvent**

### Implemented by

* [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)

### Table of contents

#### Methods

- [onCommand](#oncommand)
- [onConnect](#onconnect)
- [onConnectExternal](#onconnectexternal)
- [onInstalled](#oninstalled)
- [removeCommand](#removecommand)
- [removeConnect](#removeconnect)
- [removeConnectExternal](#removeconnectexternal)
- [removeInstalled](#removeinstalled)

### Methods

#### onCommand

▸ **onCommand**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L10)

___

#### onConnect

▸ **onConnect**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L6)

___

#### onConnectExternal

▸ **onConnectExternal**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L8)

___

#### onInstalled

▸ **onInstalled**(`callback`: eventFunction, `key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`callback` | eventFunction |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L4)

___

#### removeCommand

▸ **removeCommand**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L11)

___

#### removeConnect

▸ **removeConnect**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L7)

___

#### removeConnectExternal

▸ **removeConnectExternal**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L9)

___

#### removeInstalled

▸ **removeInstalled**(`key`: *string*): *void*

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** *void*

Defined in: [src/Browser/Runtime.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Runtime.ts#L5)


<a name="interfacesbrowser_storageistoragemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Storage](#modulesbrowser_storagemd) / iStorage

## Interface: iStorage

[Browser/Storage](#modulesbrowser_storagemd).iStorage

### Hierarchy

* **iStorage**

### Table of contents

#### Methods

- [changeType](#changetype)
- [load](#load)
- [remove](#remove)
- [save](#save)

### Methods

#### changeType

▸ **changeType**(`type`: [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd)): [*iStorage*](#interfacesbrowser_storageistoragemd)

##### Parameters:

Name | Type |
------ | ------ |
`type` | [*ENUM\_STORAGE*](#enumslib_enumenum_storagemd) |

**Returns:** [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: [src/Browser/Storage.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Storage.ts#L5)

___

#### load

▸ **load**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Storage.ts#L8)

___

#### remove

▸ **remove**(`key`: *string* | *number*): *Promise*<*any*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |

**Returns:** *Promise*<*any*\>

Defined in: [src/Browser/Storage.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Storage.ts#L9)

___

#### save

▸ **save**(`key`: *string* | *number*, `val`: *any*): *Promise*<*void*\>

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* | *number* |
`val` | *any* |

**Returns:** *Promise*<*void*\>

Defined in: [src/Browser/Storage.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Storage.ts#L7)


<a name="interfacesbrowser_tabsitabinfomd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabInfo

## Interface: iTabInfo

[Browser/Tabs](#modulesbrowser_tabsmd).iTabInfo

### Hierarchy

* **iTabInfo**

### Table of contents

#### Properties

- [favIcon](#favicon)
- [host](#host)
- [id](#id)
- [index](#index)
- [origin](#origin)
- [status](#status)
- [title](#title)
- [windowId](#windowid)

### Properties

#### favIcon

• **favIcon**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:10](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L10)

___

#### host

• **host**: *string*

Defined in: [src/Browser/Tabs.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L8)

___

#### id

• **id**: *null* | *number*

Defined in: [src/Browser/Tabs.ts:4](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L4)

___

#### index

• **index**: *number*

Defined in: [src/Browser/Tabs.ts:5](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L5)

___

#### origin

• **origin**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:9](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L9)

___

#### status

• **status**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:6](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L6)

___

#### title

• **title**: *null* | *string*

Defined in: [src/Browser/Tabs.ts:7](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L7)

___

#### windowId

• **windowId**: *number*

Defined in: [src/Browser/Tabs.ts:11](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L11)


<a name="interfacesbrowser_tabsitabseventmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [Browser/Tabs](#modulesbrowser_tabsmd) / iTabsEvent

## Interface: iTabsEvent

[Browser/Tabs](#modulesbrowser_tabsmd).iTabsEvent

### Hierarchy

* **iTabsEvent**

### Implemented by

* [*tabsEvent*](#classesbrowser_tabstabseventmd)

### Table of contents

#### Methods

- [getActiveItem](#getactiveitem)
- [getActiveTab](#getactivetab)
- [getInfo](#getinfo)
- [getItems](#getitems)
- [getTab](#gettab)
- [getTabIndex](#gettabindex)
- [getTabs](#gettabs)
- [onActivated](#onactivated)
- [onRemoved](#onremoved)
- [onUpdated](#onupdated)
- [removeActivated](#removeactivated)
- [removeRemoved](#removeremoved)
- [removeUpdated](#removeupdated)

### Methods

#### getActiveItem

▸ **getActiveItem**(): *Promise*<*null* | tabResult\>

**Returns:** *Promise*<*null* | tabResult\>

Defined in: [src/Browser/Tabs.ts:26](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L26)

___

#### getActiveTab

▸ **getActiveTab**(`index`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L24)

___

#### getInfo

▸ **getInfo**(`tab`: Tab): [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

##### Parameters:

Name | Type |
------ | ------ |
`tab` | Tab |

**Returns:** [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)

Defined in: [src/Browser/Tabs.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L20)

___

#### getItems

▸ **getItems**(): *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

**Returns:** *Promise*<{ [tabId: string]: { `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)  };  }\>

Defined in: [src/Browser/Tabs.ts:25](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L25)

___

#### getTab

▸ **getTab**(`tabId`: *number*): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`tabId` | *number* |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L21)

___

#### getTabIndex

▸ **getTabIndex**(`index`: *number*, `options`: *null* | QueryInfo): *Promise*<tabResult\>

##### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult\>

Defined in: [src/Browser/Tabs.ts:22](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L22)

___

#### getTabs

▸ **getTabs**(`options`: *null* | QueryInfo): *Promise*<tabResult[]\>

##### Parameters:

Name | Type |
------ | ------ |
`options` | *null* | QueryInfo |

**Returns:** *Promise*<tabResult[]\>

Defined in: [src/Browser/Tabs.ts:23](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L23)

___

#### onActivated

▸ **onActivated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:28](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L28)

___

#### onRemoved

▸ **onRemoved**(`callback`: (`tabId`: *number*) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tabId`: *number*) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:32](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L32)

___

#### onUpdated

▸ **onUpdated**(`callback`: (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void*, `key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`callback` | (`tab`: Tab, `info`: [*iTabInfo*](#interfacesbrowser_tabsitabinfomd)) => *void* |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:30](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L30)

___

#### removeActivated

▸ **removeActivated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:29](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L29)

___

#### removeRemoved

▸ **removeRemoved**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:33](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L33)

___

#### removeUpdated

▸ **removeUpdated**(`key`: *string*): [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

##### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/Browser/Tabs.ts:31](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Tabs.ts#L31)


<a name="interfacesindexibrowserevtmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / iBrowserEvt

## Interface: iBrowserEvt

[index](#modulesindexmd).iBrowserEvt

### Hierarchy

* **iBrowserEvt**

### Table of contents

#### Properties

- [alarms](#alarms)
- [message](#message)
- [notify](#notify)
- [port](#port)
- [runtime](#runtime)
- [storage](#storage)
- [tabs](#tabs)

### Properties

#### alarms

• **alarms**: [*iAlarms*](#interfacesbrowser_alarmsialarmsmd)

Defined in: [src/index.ts:21](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/index.ts#L21)

___

#### message

• **message**: [*iMessage*](#interfacesbrowser_messageimessagemd)

Defined in: [src/index.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/index.ts#L19)

___

#### notify

• **notify**: [*iNotify*](#interfacesbrowser_notifyinotifymd)

Defined in: [src/index.ts:22](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/index.ts#L22)

___

#### port

• **port**: [*iPort*](#interfacesbrowser_portiportmd)

Defined in: [src/index.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/index.ts#L20)

___

#### runtime

• **runtime**: [*iRuntimeEvent*](#interfacesbrowser_runtimeiruntimeeventmd)

Defined in: [src/index.ts:18](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/index.ts#L18)

___

#### storage

• **storage**: [*iStorage*](#interfacesbrowser_storageistoragemd)

Defined in: [src/index.ts:24](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/index.ts#L24)

___

#### tabs

• **tabs**: () => [*iTabsEvent*](#interfacesbrowser_tabsitabseventmd)

Defined in: [src/index.ts:23](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/index.ts#L23)


<a name="modulesmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / Exports

# @metacoin/browser-extensionizer - v0.2.0

## Table of contents

### Modules

- [Browser/Alarms](#modulesbrowser_alarmsmd)
- [Browser/Message](#modulesbrowser_messagemd)
- [Browser/Notify](#modulesbrowser_notifymd)
- [Browser/Port](#modulesbrowser_portmd)
- [Browser/Runtime](#modulesbrowser_runtimemd)
- [Browser/Storage](#modulesbrowser_storagemd)
- [Browser/Tabs](#modulesbrowser_tabsmd)
- [Lib/Crypt](#moduleslib_cryptmd)
- [Lib/Enum](#moduleslib_enummd)
- [Lib/Func](#moduleslib_funcmd)
- [index](#modulesindexmd)

# Modules


<a name="modulesbrowser_alarmsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Alarms

## Module: Browser/Alarms

### Table of contents

#### Classes

- [alarms](#classesbrowser_alarmsalarmsmd)

#### Interfaces

- [iAlarms](#interfacesbrowser_alarmsialarmsmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*alarms*](#classesbrowser_alarmsalarmsmd)


<a name="modulesbrowser_messagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Message

## Module: Browser/Message

### Table of contents

#### Classes

- [message](#classesbrowser_messagemessagemd)

#### Interfaces

- [iMessage](#interfacesbrowser_messageimessagemd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*message*](#classesbrowser_messagemessagemd)


<a name="modulesbrowser_notifymd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Notify

## Module: Browser/Notify

### Table of contents

#### Classes

- [notify](#classesbrowser_notifynotifymd)

#### Interfaces

- [iNotify](#interfacesbrowser_notifyinotifymd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*notify*](#classesbrowser_notifynotifymd)


<a name="modulesbrowser_portmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Port

## Module: Browser/Port

### Table of contents

#### Classes

- [port](#classesbrowser_portportmd)

#### Interfaces

- [iPort](#interfacesbrowser_portiportmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*port*](#classesbrowser_portportmd)


<a name="modulesbrowser_runtimemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Runtime

## Module: Browser/Runtime

### Table of contents

#### Classes

- [runtimeEvent](#classesbrowser_runtimeruntimeeventmd)

#### Interfaces

- [iRuntimeEvent](#interfacesbrowser_runtimeiruntimeeventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: [*runtimeEvent*](#classesbrowser_runtimeruntimeeventmd)


<a name="modulesbrowser_storagemd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Storage

## Module: Browser/Storage

### Table of contents

#### Interfaces

- [iStorage](#interfacesbrowser_storageistoragemd)

#### Variables

- [default](#default)

### Variables

#### default

• `Const` **default**: *Storage*

Defined in: [src/Browser/Storage.ts:190](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Browser/Storage.ts#L190)


<a name="modulesbrowser_tabsmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Browser/Tabs

## Module: Browser/Tabs

### Table of contents

#### Classes

- [tabsEvent](#classesbrowser_tabstabseventmd)

#### Interfaces

- [iTabInfo](#interfacesbrowser_tabsitabinfomd)
- [iTabsEvent](#interfacesbrowser_tabsitabseventmd)

#### Properties

- [default](#default)

### Properties

#### default

• **default**: () => [*tabsEvent*](#classesbrowser_tabstabseventmd)


<a name="modulesindexmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / index

## Module: index

### Table of contents

#### Interfaces

- [iBrowserEvt](#interfacesindexibrowserevtmd)


<a name="moduleslib_cryptmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Crypt

## Module: Lib/Crypt

### Table of contents

#### Functions

- [Hash](#hash)
- [HashHmac](#hashhmac)
- [decryptData](#decryptdata)
- [encryptData](#encryptdata)

### Functions

#### Hash

▸ `Const`**Hash**(`type`: *string*, `txt`: *string* | *number*): *string*

Create Hash

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`type` | *string* | Hash type (md5, sha256, sha512....)   |
`txt` | *string* | *number* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:8](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Crypt.ts#L8)

___

#### HashHmac

▸ `Const`**HashHmac**(`text`: *string* | *Buffer*, `secret`: *string*, `algorithm?`: *string*, `isHex?`: *boolean*): *any*

create hash hmac

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`text` | *string* | *Buffer* | - | sign text   |
`secret` | *string* | - | Secret key   |
`algorithm` | *string* | 'sha256' | md5, sha256, sha512...   |
`isHex` | *boolean* | true | return type is Hex?    |

**Returns:** *any*

Defined in: [src/Lib/Crypt.ts:19](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Crypt.ts#L19)

___

#### decryptData

▸ `Const`**decryptData**(`encryptData`: *string* | *number*, `salt`: *string*): *string*

Symmetric decryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`encryptData` | *string* | *number* | - |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:54](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Crypt.ts#L54)

___

#### encryptData

▸ `Const`**encryptData**(`text`: *string* | *number*, `salt`: *string*): *string*

Symmetric encryption

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | *string* | *number* |  |
`salt` | *string* |     |

**Returns:** *string*

Defined in: [src/Lib/Crypt.ts:34](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Crypt.ts#L34)


<a name="moduleslib_enummd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Enum

## Module: Lib/Enum

### Table of contents

#### Enumerations

- [ENUM\_STATUS](#enumslib_enumenum_statusmd)
- [ENUM\_STORAGE](#enumslib_enumenum_storagemd)
- [ENUM\_TYPE](#enumslib_enumenum_typemd)


<a name="moduleslib_funcmd"></a>

[@metacoin/browser-extensionizer - v0.2.0](#readmemd) / [Exports](#modulesmd) / Lib/Func

## Module: Lib/Func

### Table of contents

#### Functions

- [createResult](#createresult)
- [decryptValue](#decryptvalue)
- [encryptValue](#encryptvalue)
- [makeid](#makeid)

### Functions

#### createResult

▸ `Const`**createResult**(`result`: *string*, `msg?`: *string*, `data?`: *any*): *object*

Function for common use of result values

##### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`result` | *string* | - | result Type   |
`msg` | *string* | '' | result message   |
`data` | *any* | null | result data    |

**Returns:** *object*

Defined in: [src/Lib/Func.ts:12](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Func.ts#L12)

___

#### decryptValue

▸ `Const`**decryptValue**(`id`: *string* | *number*, `data`: *any*): *Promise*<*null* | Object\>

복호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`data` | *any* | 암호화된 데이터    |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:84](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Func.ts#L84)

___

#### encryptValue

▸ `Const`**encryptValue**(`id`: *string* | *number*, `param`: *any*): *Promise*<*null* | Object\>

암호화

##### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | *number* | Passpharse를 저장할 때 사용하는 Key   |
`param` | *any* | 저장할 데이터     |

**Returns:** *Promise*<*null* | Object\>

Defined in: [src/Lib/Func.ts:49](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Func.ts#L49)

___

#### makeid

▸ `Const`**makeid**(`length`: *number*, `isMs?`: *boolean*): *string*

##### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`length` | *number* | - |
`isMs` | *boolean* | true |

**Returns:** *string*

Defined in: [src/Lib/Func.ts:20](https://github.com/MetacoinPlatform/browser-extensionizer/blob/8b8cc53/src/Lib/Func.ts#L20)
