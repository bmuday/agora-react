import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = process.env.REACT_APP_ID;
const channel = process.env.REACT_APP_CHANNEL;
const token = process.env.REACT_APP_TOKEN;

export const config = { mode: "rtc", codec: "vp8", appId, token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = channel;
