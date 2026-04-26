import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const initMixpanel = () => {
  if (typeof window === "undefined" || !MIXPANEL_TOKEN) return;

  mixpanel.init(MIXPANEL_TOKEN, {
    debug: process.env.NODE_ENV === "development",
    track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: false,
  });
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, unknown>,
) => {
  if (typeof window === "undefined" || !MIXPANEL_TOKEN) return;
  mixpanel.track(eventName, properties);
};
