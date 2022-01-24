import cockatoo from "images/avatar-cockatoo.png";
import koala from "images/avatar-koala.png";
import devil from "images/avatar-tasmanian-devil.png";

export const AVATARS: Record<
  string,
  { id: string; description: string; src: string }
> = {
  cockatoo: {
    id: "cockatoo",
    description: "Cockatoo",
    src: cockatoo,
  },
  koala: {
    id: "koala",
    description: "Koala",
    src: koala,
  },
  devil: {
    id: "devil",
    description: "Tasmanian Devil",
    src: devil,
  },
};

export const DEFAULT_AVATAR = AVATARS.koala;
