export function useWechatConsult() {
  const isOpen = useState('wechat-consult-open', () => false)
  const placement = useState('wechat-consult-placement', () => 'unknown')
  const serviceType = useState<string | undefined>('wechat-consult-service-type', () => undefined)
  const trigger = useState<HTMLElement | null>('wechat-consult-trigger', () => null)
  const { track } = useAnalytics()

  function open(options: { placement: string; serviceType?: string; trigger?: HTMLElement | null }) {
    placement.value = options.placement
    serviceType.value = options.serviceType
    trigger.value = options.trigger || null
    isOpen.value = true
    track({ event_name: 'wechat_consult_open', placement: options.placement, service_type: options.serviceType })
  }

  function close() {
    isOpen.value = false
    nextTick(() => trigger.value?.focus())
  }

  return { isOpen, placement, serviceType, open, close }
}
