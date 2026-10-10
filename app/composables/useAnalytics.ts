export type AnalyticsEventName = 'cta_click' | 'wechat_consult_open' | 'wechat_qr_view' | 'wechat_qr_save' | 'official_account_qr_view'

export interface AnalyticsEvent {
  event_name: AnalyticsEventName
  page_path: string
  placement: string
  service_type?: string
}

export function useAnalytics() {
  function track(event: Omit<AnalyticsEvent, 'page_path'>) {
    if (!import.meta.client) return
    const detail: AnalyticsEvent = { ...event, page_path: window.location.pathname }
    window.dispatchEvent(new CustomEvent('souheng:analytics', { detail }))
  }

  return { track }
}
