import {ENUM_STATUS} from '../Lib/Enum'
import {createResult} from '../Lib/Func'

interface iAlarms {
	create(name: string, options: chrome.alarms.AlarmCreateInfo)
	addListener(name: string, callback: (alarm: chrome.alarms.Alarm) => void)
	removeListener(name: string)
	removeListeners(name: string)
	clear(name: string)
}

/**
 * @type/chrome.alarms
 */
export class Alarms implements iAlarms {
	private alarm: typeof chrome.alarms | null
	private eventMap: {
		[name: string]: (alarm: chrome.alarms.Alarm) => void
	}
	constructor() {
		this.alarm = chrome.alarms || null
		this.eventMap = {}
	}

	/**
	 * Alarm을 생성합니다. alarmInfo로 지정된 시간에 가까워 지면 onAlarm이벤트가 시작됩니다.
	 * 같은 이름의 다른 알람이있는 경우 (또는 지정되지 않은 경우 이름이없는 경우) 취소되고이 알람으로 대체됩니다.
	 *
	 * 사용자 컴퓨터의 부하를 줄이기 위해 Chrome은 알람을 최대 1 분에 한 번으로 제한하지만 임의의 양을 더 지연시킬 수 있습니다. 즉, delayInMinutes또는 periodInMinutes보다 작게 설정 1하면 적용되지 않으며 경고가 발생합니다. when경고없이 "지금"후 1 분 미만으로 설정할 수 있지만 실제로 최소 1 분 동안 Alarm을 발생하지 않습니다.
	 *
	 * @param name 이 Alarm을 식별하기위한 이름입니다.
	 * @param options 알람이 발생해야하는시기를 설명합니다. 초기 시간은 when 또는 delayInMinutes (둘다는 아님) 로 지정해야합니다 . 경우 periodInMinutes가 설정 한 알람이 매일 반복됩니다 periodInMinutes의 초기 이벤트 후 분. 둘 경우 시 또는 delayInMinutes이 반복 알람 설정, periodInMinutes는 대한 기본값으로 사용되지 않습니다 delayInMinutes.
	 *
	 * @return this
	 */
	create(name: string, options: chrome.alarms.AlarmCreateInfo): Alarms {
		if (!this.alarm) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.alarm.')
		} else if (!name || !name.trim()) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found alarm name.')
		}

		this.alarm.create(name, options)

		return this
	}

	/**
	 * 알람이 경과하면 Listener의 등록되어 있는 callback 함수가 실행됩니다.
	 *
	 * @param name Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.
	 * @param callback Alarm을 발생시 호출되는 Callback 함수입니다. (id: 생성시 고유 ID, alram: 해당 알람의 정보)
	 *
	 * @return this
	 */
	addListener(name: string, callback: (alarm: chrome.alarms.Alarm) => void): Alarms {
		if (!this.alarm) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.alarm.')
		} else if (!name || !name.trim()) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found alarm name.')
		}

		if (Object.keys(this.eventMap).length < 1) {
			this.alarm.onAlarm.addListener(alarm => {
				let alarmName = alarm.name || ''
				if (this.eventMap[alarmName]) {
					this.eventMap[alarmName](alarm)
				}
			})
		}
		
		if (!this.eventMap[name]) {
			this.eventMap[name] = callback
		}

		return this
	}

	/**
	 * 알람시 등록되어있는 Listener를 제거합니다.
	 *
	 * @param name Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.
	 * @param id Alarm addListener시 생성된 ID값
	 */
	removeListener(name: string): Alarms {
		if (!this.alarm) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.alarm.')
		} else if (!name || !name.trim()) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found alarm name.')
		}

		if (this.eventMap[name]) {
			delete this.eventMap[name]
		}

		return this
	}

	/**
	 * 등록되어 있는 알람의 모든 Listener를 제거합니다.
	 *
	 * @param name Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.
	 */
	removeListeners(name: string): Alarms {
		if (!this.alarm) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.alarm.')
		} else if (!name || !name.trim()) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found alarm name.')
		}

		this.alarm.onAlarm.removeListener(alarm => {
			let alarmName = alarm.name || ''
			if (this.eventMap[alarmName]) {
				this.eventMap[alarmName](alarm)
			}
		})

		this.eventMap = {}

		return this
	}

	/**
	 * 등록되어 있는 알람을 제거합니다.
	 *
	 * @param name Alarm을 이 Alarm을 식별하기위한 이름입니다. Create로 생성시 사용한 이름을 입력해주세요.
	 */
	clear(name: string): Alarms {
		if (!this.alarm) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.alarm.')
		} else if (!name || !name.trim()) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found alarm name.')
		}

		this.removeListeners(name)
		this.alarm.clear(name)

		return this
	}

	/**
	 * 등록되어 있는 모든 알람을 제거합니다.
	 */
	clearAll(): Alarms {
		if (!this.alarm) {
			throw createResult(ENUM_STATUS.ERROR, 'Not found chrome.alarm.')
		}

		let eventKeys = Object.keys(this.eventMap) || []
		if (eventKeys.length > 0) {
			for (let name of eventKeys) {
				this.clear(name)
			}
		}

		this.alarm.clearAll()

		return this
	}
}

export default new Alarms()
