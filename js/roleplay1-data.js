/**
 * Roleplay 1 Data: Apollo vs Dionysus Dialogue
 * Quest 2 - Apollo interrupts Dionysus's dream
 * Contains dialogue choices and character interactions
 */

const roleplay1Data = {
  rp1_01_party_intro: {
    background: "backgrounds/1.png",
    speaker: "DION",
    expression: "normal",
    text: "Satyr... I'm good, maybe later.",
    next: "rp1_02_satyr_push"
  },

  rp1_02_satyr_push: {
    background: "backgrounds/1.png",
    speaker: "SATYR",
    text: "Relax! Life's a party! Don't just stand there, join us!",
    next: "rp1_03_apollo_enters"
  },

  rp1_03_apollo_enters: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "Enough.",
    next: "rp1_04_apollo_smashes"
  },

  rp1_04_apollo_smashes: {
    background: "backgrounds/1.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Apollo steps behind the DJ booth, pours drinks over the console and kicks the speaker stand. Sparks fly. The music shrieks. The room drops into chaos.",
    next: "rp1_05_satyr_reacts"
  },

  rp1_05_satyr_reacts: {
    background: "backgrounds/1.png",
    speaker: "SATYR",
    text: "Who is that?! Apollo? He's smashing the whole damn thing! Why does he always ruin fun like this!",
    next: "rp1_06_flashback_start"
  },

  rp1_06_flashback_start: {
    background: "backgrounds/4.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Memory tears open beneath the noise.",
    next: "rp1_07_flashback_1"
  },

  rp1_07_flashback_1: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "This chaos ends here, Dionysus. Your gift drowns reason. Men forget their responsibilities when they drown in your wine.",
    next: "rp1_08_flashback_2"
  },

  rp1_08_flashback_2: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "They remember the gods in ecstasy. Me. Something your marble temples never taught them.",
    next: "rp1_09_flashback_3"
  },

  rp1_09_flashback_3: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "Worship without measure is sacrilege. I have seen cities fall to the madness you unleash.",
    next: "rp1_10_flashback_4"
  },

  rp1_10_flashback_4: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "And I have seen souls wither in the silence you call virtue. Step back, brother. This ground is holy to me.",
    next: "rp1_11_flashback_5"
  },

  rp1_11_flashback_5: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "Holiness without limit becomes ruin. I will not watch it spread.",
    next: "rp1_12_flashback_6"
  },

  rp1_12_flashback_6: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "You broke my instrument. My voice. Why?",
    next: "rp1_13_flashback_7"
  },

  rp1_13_flashback_7: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "Music without measure is noise. You drown the world's harmony in your clamour.",
    next: "rp1_14_flashback_8"
  },

  rp1_14_flashback_8: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "Harmony that silences joy is death wearing gold.",
    next: "rp1_15_flashback_9"
  },

  rp1_15_flashback_9: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "That lyre sang of life. You crushed it because you fear what you cannot control.",
    next: "rp1_16_flashback_10"
  },

  rp1_16_flashback_10: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "I fear nothing. I correct what threatens the order of all things.",
    next: "rp1_17_flashback_11"
  },

  rp1_17_flashback_11: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "Then correct carefully, Far-Shooter. Some songs do not die when the strings break.",
    next: "rp1_18_flashback_12"
  },

  rp1_18_flashback_12: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "Come away. This possession is not freedom. It is oblivion.",
    next: "rp1_19_flashback_13"
  },

  rp1_19_flashback_13: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "Release her. She chose the god within her. You drag her back to chains you call safety.",
    next: "rp1_20_flashback_14"
  },

  rp1_20_flashback_14: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "She is lost to reason. I protect what you would let consume itself.",
    next: "rp1_21_flashback_15"
  },

  rp1_21_flashback_15: {
    background: "backgrounds/4.png",
    speaker: "DION",
    expression: "angry",
    text: "Protect? Or cage? Touch one of mine again without invitation, and you will learn what frenzy looks like when it turns outward.",
    next: "rp1_22_flashback_16"
  },

  rp1_22_flashback_16: {
    background: "backgrounds/4.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "Then learn what happens when order answers chaos. The balance will hold.",
    next: "rp1_23_back_to_party"
  },

  rp1_23_back_to_party: {
    background: "backgrounds/1.png",
    speaker: "NPC",
    hidePortraits: true,
    text: "What the hell?! He's ruining everything!",
    next: "rp1_24_dion_calls_out"
  },

  rp1_24_dion_calls_out: {
    background: "backgrounds/1.png",
    speaker: "DION",
    expression: "angry",
    text: "Apollo! You can't do that! Look at everyone!",
    next: "rp1_25_apollo_they_dont_matter"
  },

  rp1_25_apollo_they_dont_matter: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    expression: "normal",
    text: "They don't matter.",
    choices: [
      {
        text: "What do you mean, I don't matter?! I'm enjoying this! You can't just destroy it!",
        next: "rp1_26_apollo_smirk"
      },
      {
        text: "Seriously? You're just jealous because I'm actually having fun and you're not invited?",
        next: "rp1_26_apollo_smirk"
      },
      {
        text: "Who the hell do you think you are? You don't get to decide what matters to me!",
        next: "rp1_26_apollo_smirk"
      }
    ]
  },

  rp1_26_apollo_smirk: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    expression: "smirk",
    text: "When did you become so blind, following fools you just met? You're so naive, Dion. Pathetic, really.",
    next: "rp1_27_dion_pushback"
  },

  rp1_27_dion_pushback: {
    background: "backgrounds/1.png",
    speaker: "DION",
    expression: "angry",
    text: "Blind? Lost? Who are you to tell me that?! You just can't stand seeing me happy, can you?!",
    next: "rp1_28_apollo_delusion"
  },

  rp1_28_apollo_delusion: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    expression: "smirk",
    text: "Happy? Don't flatter yourself. You're too blind to see what's real. You think this is joy? It's a delusion.",
    choices: [
      {
        text: "Delusion? This is the first time in forever I've felt alive! You don't get to take that away!",
        next: "rp1_29_apollo_patterns"
      },
      {
        text: "Oh wow, Mr. Perfect has spoken. Must be nice being so above it all.",
        next: "rp1_29_apollo_patterns"
      },
      {
        text: "Why are you even here? You don't trust me at all, do you? Just admit it.",
        next: "rp1_29_apollo_patterns"
      }
    ]
  },

  rp1_29_apollo_patterns: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "You're trapped, Dion. You fool. Patterns don't lie. You're repeating the same mistakes, over and over. How utterly predictable.",
    next: "rp1_30_dion_control"
  },

  rp1_30_dion_control: {
    background: "backgrounds/1.png",
    speaker: "DION",
    expression: "angry",
    text: "Trapped?! You're not even trying to understand! You just want control! You think your way is the only way, don't you?!",
    next: "rp1_31_apollo_wrong_path"
  },

  rp1_31_apollo_wrong_path: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    expression: "normal",
    text: "It is the only way. And trust? You haven't earned it. You're on the wrong path, stumbling like a child. Stop before it's too late.",
    next: "rp1_32_dion_machine"
  },

  rp1_32_dion_machine: {
    background: "backgrounds/1.png",
    speaker: "DION",
    expression: "angry",
    text: "You're a cold-faced machine! You don't even feel what it's like to be happy! I know what I'm doing, you don't get to decide this for me!",
    next: "rp1_33_apollo_move"
  },

  rp1_33_apollo_move: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    expression: "smirk",
    text: "Happy? That's rich coming from you. Move.",
    next: "rp1_34_transition_space"
  },

  rp1_34_transition_space: {
    background: "backgrounds/2.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Apollo grabs Dion by the wrist and drags him away from the noise and flashing lights.",
    next: "rp1_35_corridor_open"
  },

  rp1_35_corridor_open: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    expression: "angry",
    text: "You destroyed everything. What the hell is your problem?!",
    next: "rp1_36_apollo_warned_you"
  },

  rp1_36_apollo_warned_you: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "normal",
    text: "I warned you. You didn't listen.",
    choices: [
      {
        text: "Warned me? Smashing the speakers is your idea of a warning?",
        next: "rp1_37_apollo_saving_you"
      },
      {
        text: "I'm still standing here. How am I not fine?",
        next: "rp1_37_apollo_saving_you"
      },
      {
        text: "This is my life, not yours. You don't get to rewrite it.",
        next: "rp1_37_apollo_saving_you"
      }
    ]
  },

  rp1_37_apollo_saving_you: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "I'm saving you. Pathetic how you cling to illusions. You'll regret it.",
    next: "rp1_38_dion_fine"
  },

  rp1_38_dion_fine: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    expression: "angry",
    text: "I'm fine. You can't stand others enjoying themselves.",
    next: "rp1_39_apollo_predictable"
  },

  rp1_39_apollo_predictable: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "smirk",
    text: "You can't handle reality. So predictable. So weak.",
    choices: [
      {
        text: "Weak?! I'm choosing joy for once and you call it weak?",
        next: "rp1_40_apollo_removes_glasses"
      },
      {
        text: "Predictable? Look who's talking, Mr. I-have-to-control-everything.",
        next: "rp1_40_apollo_removes_glasses"
      },
      {
        text: "You're the odd one out here.",
        next: "rp1_40_apollo_removes_glasses"
      },
      {
        text: "Enough! You twist everything I say. Just leave me alone.",
        next: "rp1_40_apollo_removes_glasses"
      }
    ]
  },

  rp1_40_apollo_removes_glasses: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "You never listen, do you?",
    next: "rp1_41_apollo_done"
  },

  rp1_41_apollo_done: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "eyes-closed",
    text: "I have warned you. I have explained. I have pulled you out of your own mess, and every single time, you choose deflection. Denial. Sarcasm. I'm done with this.",
    next: "rp1_42_satyr_enters"
  },

  rp1_42_satyr_enters: {
    background: "backgrounds/2.5.png",
    speaker: "SATYR",
    text: "Hey guys... calm down a little...",
    next: "rp1_43_apollo_pushes_satyr"
  },

  rp1_43_apollo_pushes_satyr: {
    background: "backgrounds/2.5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Apollo shoves Satyr aside. He stumbles and slams hard into the wall.",
    next: "rp1_44_dion_shocked"
  },

  rp1_44_dion_shocked: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    expression: "shocked",
    text: "You've gone insane! How could you do that?!",
    next: "rp1_45_apollo_i"
  },

  rp1_45_apollo_i: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "shocked",
    text: "I...",
    next: "rp1_46_apollo_not_about_me"
  },

  rp1_46_apollo_not_about_me: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "normal",
    text: "It's not about me. It's about you. But you're too blind to care.",
    next: "rp1_47_apollo_fool"
  },

  rp1_47_apollo_fool: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "You fool. Always choosing the easy path, always failing.",
    next: "rp1_48_dion_back_off"
  },

  rp1_48_dion_back_off: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    expression: "angry",
    text: "Enough! I didn't ask you to step in! This is my life, not yours. Back off!",
    next: "rp1_49_leave_corridor"
  },

  rp1_49_leave_corridor: {
    background: "backgrounds/2.5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Dion helps Satyr up and walks away with him.",
    next: "rp1_50_next_day"
  },

  rp1_50_next_day: {
    background: "backgrounds/3.png",
    speaker: "DION",
    expression: "upset",
    text: "That guy is seriously unhinged... ruining everything and then acting like he's a hero or some sort.",
    next: "rp1_51_apollo_blocks_path"
  },

  rp1_51_apollo_blocks_path: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "normal",
    text: "Dion. Stop. We need to talk about last night.",
    next: "rp1_52_dion_no"
  },

  rp1_52_dion_no: {
    background: "backgrounds/3.png",
    speaker: "DION",
    expression: "upset",
    text: "No, we don't.",
    next: "rp1_53_apollo_satyr"
  },

  rp1_53_apollo_satyr: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "normal",
    text: "About Satyr... I didn't know he'd fall that hard. He was drunk. I only pushed him aside. I wasn't trying to—",
    choices: [
      {
        text: "Save the excuses. I saw exactly what you did.",
        next: "rp1_54_apollo_fine"
      },
      {
        text: "Oh wow, I didn't mean to~ That changes everything.",
        next: "rp1_54_apollo_fine"
      },
      {
        text: "Why are you even here?",
        next: "rp1_54_apollo_fine"
      }
    ]
  },

  rp1_54_apollo_fine: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "eyes-closed",
    text: "Fine. If you won't hear me out, then answer this instead. Where are the grapes? And your cheetah, where is it?",
    next: "rp1_55_dion_what"
  },

  rp1_55_dion_what: {
    background: "backgrounds/3.png",
    speaker: "DION",
    expression: "shocked",
    text: "...What?",
    choices: [
      {
        text: "Grapes? Cheetah? Have you completely lost your mind? I have no idea what you're talking about!",
        next: "rp1_56_apollo_dont_play_dumb"
      },
      {
        text: "Are you actually serious right now?",
        next: "rp1_56_apollo_dont_play_dumb"
      },
      {
        text: "First, you wreck the party, now you're ranting about fruit and wild animals?",
        next: "rp1_56_apollo_dont_play_dumb"
      },
      {
        text: "Yeah, you've gone mad.",
        next: "rp1_56_apollo_dont_play_dumb"
      },
      {
        text: "This is insane. Have you lost it? What is this nonsense you're yapping about?",
        next: "rp1_56_apollo_dont_play_dumb"
      }
    ]
  },

  rp1_56_apollo_dont_play_dumb: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "angry",
    text: "Don't play dumb with me, Dion. You know exactly what I'm talking about. You messed up, and now you're pretending you forgot?",
    next: "rp1_57_dion_doesnt_remember"
  },

  rp1_57_dion_doesnt_remember: {
    background: "backgrounds/3.png",
    speaker: "DION",
    expression: "angry",
    text: "I seriously don't remember any grapes or cheetah! You're the one talking crazy right now!",
    next: "rp1_58_apollo_pathetic"
  },

  rp1_58_apollo_pathetic: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "smirk",
    text: "Pathetic. You always do this, cause chaos, then act as if none of it happened. You're still the same fool, stumbling through everything.",
    choices: [
      {
        text: "I'm telling the truth! Why would I hide something I don't even have?!",
        next: "rp1_59_apollo_responsibility"
      },
      {
        text: "Yeah, because clearly I'm the problem. Not the guy hallucinating animals and demanding answers.",
        next: "rp1_59_apollo_responsibility"
      },
      {
        text: "Enough!",
        next: "rp1_59_apollo_responsibility"
      },
      {
        text: "I'm done with this. You don't get to corner me and talk nonsense.",
        next: "rp1_59_apollo_responsibility"
      }
    ]
  },

  rp1_59_apollo_responsibility: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "upset",
    text: "You never take responsibility. You never listen.",
    next: "rp1_60_apollo_game"
  },

  rp1_60_apollo_game: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "smirk",
    text: "You think this is all just some game you can laugh off.",
    next: "rp1_61_apollo_run"
  },

  rp1_61_apollo_run: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "angry",
    text: "Run, Dion.",
    next: "rp1_62_apollo_catch_you"
  },

  rp1_62_apollo_catch_you: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    expression: "angry",
    text: "Because when I catch you this time, you will never get another chance to forget.",
    next: "rp1_63_dion_runs"
  },

  rp1_63_dion_runs: {
    background: "backgrounds/3.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Dion's eyes widen. He turns and bolts down the path as Apollo gives chase.",
    end: true
  }
};