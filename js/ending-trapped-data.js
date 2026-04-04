const endingTrappedData = {
  // ------------------------------
  // BAD ENDING - CORRIDOR
  // Background 2.5
  // ------------------------------
  et_01_corridor_start: {
    background: "backgrounds/2.5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Dion opens his hand again, grapes untouched. Dawn stalls, trapped in perpetual twilight. The distant dancers keep moving, slower now, their smiles fixed and hollow.",
    next: "et_02_dion_not_ready"
  },

  et_02_dion_not_ready: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "upset",
    text: "...I'm not ready to let it go.",
    next: "et_03_apollo_naive"
  },

  et_03_apollo_naive: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "upset",
    text: "You're so naive, Dionysus. Choosing the same comfortable lie again and again.",
    next: "et_04_dion_still_mine"
  },

  et_04_dion_still_mine: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "This is still mine! I can decide for myself. You don't get to decide that for me anymore. I'm done listening!",
    next: "et_05_apollo_warned"
  },

  et_05_apollo_warned: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "I never decided. I only warned. But you never listened. You always thought you knew the answer for everything, but you don't. Pathetic.",
    next: "et_06_dion_heartless"
  },

  et_06_dion_heartless: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "You're the one who's cold and heartless! Always smashing everything, always judging me like I'm some stupid kid! I'm enjoying this!",
    next: "et_07_apollo_delusion"
  },

  et_07_apollo_delusion: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "Enjoying? This pathetic delusion? You're trapped and too blind to see it. You'll regret every second of this.",
    next: "et_08_dion_control"
  },

  et_08_dion_control: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "Trapped?! You're not even trying to understand! You just want control! I know what I'm doing! You don't get to decide this for me! Why are you talking to me like that?! You don't trust me at all, do you?!",
    next: "et_09_apollo_trust"
  },

  et_09_apollo_trust: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "angry",
    text: "Trust? You've proven you can't handle it.",
    next: "et_10_dion_goodbye"
  },

  et_10_dion_goodbye: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "Enough! I didn't ask for your help! I didn't ask you to step in! This is my life, not yours! Back off! I'm done with this! Forever!",
    next: "et_11_apollo_goodbye"
  },

  et_11_apollo_goodbye: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "eyes-closed",
    text: "Goodbye, Dion.",
    next: "et_12_apollo_exit"
  },

  et_12_apollo_exit: {
    background: "backgrounds/2.5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Apollo turns and leaves. The corridor falls silent.",
    next: "et_13_party_shift"
  },

  // ------------------------------
  // BAD ENDING - PARTY LOOP
  // Background 1
  // ------------------------------
  et_13_party_shift: {
    background: "backgrounds/1.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "The silence doesn't last. The beat returns. Lights flare again. The party rebuilds itself as if it was never broken.",
    next: "et_14_dion_not_big_deal"
  },

  et_14_dion_not_big_deal: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "It's not a big deal. I can leave anytime I'm ready.",
    next: "et_15_satyr_looking"
  },

  et_15_satyr_looking: {
    background: "backgrounds/1.png",
    speaker: "SATYR",
    text: "There you are, Dion! Where've you been? I've been looking everywhere! Someone fixed the DJ booth with spare cables and a backup generator. Speakers are blasting even better now!",
    next: "et_16_dion_fixed"
  },

  et_16_dion_fixed: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "normal",
    text: "...Fixed it? Already?",
    next: "et_17_satyr_yeah"
  },

  et_17_satyr_yeah: {
    background: "backgrounds/1.png",
    speaker: "SATYR",
    text: "Yeah!",
    next: "et_18_satyr_round"
  },

  et_18_satyr_round: {
    background: "backgrounds/1.png",
    speaker: "SATYR",
    text: "Or maybe we just found another setup. Who cares! The party's back on! Come on, they're pouring the good stuff—don't tell me you're bailing already.",
    next: "et_19_dion_head_out"
  },

  et_19_dion_head_out: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "smile",
    text: "I... I thought maybe I'd head out soon.",
    next: "et_20_satyr_forever"
  },

  et_20_satyr_forever: {
    background: "backgrounds/1.png",
    speaker: "SATYR",
    text: "Head out? But you just got here! One more round, one more song. You always say that, then you stay till dawn. Let's keep this going! Forever if we have to!",
    next: "et_21_dion_forever"
  },

  et_21_dion_forever: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "normal",
    text: "...Forever.",
    next: "et_22_satyr_life"
  },

  et_22_satyr_life: {
    background: "backgrounds/1.png",
    speaker: "SATYR",
    text: "Exactly! You're the life of it, Dion. Without you, it's just noise. Stay! Dance with me!",
    next: "et_23_dion_not_yet"
  },

  et_23_dion_not_yet: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "laugh",
    text: "Yeah, not yet.",
    next: "et_24_dion_ready"
  },

  et_24_dion_ready: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "normal",
    text: "When I'm ready...",
    next: "et_25_trapped_end"
  },

  et_25_trapped_end: {
    background: "backgrounds/1.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "The music swells. The night closes again around him.",
    end: true
  }
};