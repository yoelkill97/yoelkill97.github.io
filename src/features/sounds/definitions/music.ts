import { Howl } from "howler";

import trackLuci from "../../../assets/music/lofi-1.mp3";
import trackAbout from "../../../assets/music/ambient-lofi.mp3";

import type { MusicTrack } from "../types";

export const musicTracks = {
  luci: new Howl({ src: [trackLuci], loop: true, volume: 0, preload: false }),
  about: new Howl({ src: [trackAbout], loop: true, volume: 0, preload: false }),
} as const;

export const BASE_VOLUMES = {
  luci: 0.2,
  about: 0.3,
} as const satisfies Record<MusicTrack, number>;
