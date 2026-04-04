/**
 * Roleplay 1 Data: Apollo vs Dionysus Dialogue
 * Updated version with:
 * - human / god form switching
 * - revised background flow
 * - revised choices based on latest script
 */

const roleplay1Data = {
  // ------------------------------
  // PARTY
  // ------------------------------
  rp1_01_party_intro: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
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
    form: "human",
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

  // ------------------------------
  // FLASHBACK START
  // ------------------------------
  rp1_06_flashback_start: {
    background: "backgrounds/5.png",
    speaker: "NARRATION",
    hidePortraits: true,
      apolloForm: "god",
  apolloExpression: "normal",
  dionForm: "god",
  dionExpression: "normal",
    text: "Memory tears open beneath the noise.",
    next: "rp1_07_flashback_1"
  },

  // ------------------------------
  // FLASHBACK 1 — Background 5
  // ------------------------------
  rp1_07_flashback_1: {
    background: "backgrounds/5.png",
    speaker: "APOLLO",
    form: "god",
    expression: "upset",
    text: "This chaos ends here, Dionysus. Your gift drowns reason, Dionysus. Men forget their responsibilities when they're drowned in your wine.",
    next: "rp1_08_flashback_2"
  },

  rp1_08_flashback_2: {
    background: "backgrounds/5.png",
    speaker: "DION",
    form: "god",
    expression: "smile",
    text: "They remember the gods in ecstasy. Me. Something your marble temples never taught them. You spill what we poured in worship. Why? Because it does not fit your measured song?",
    next: "rp1_09_flashback_3"
  },

  rp1_09_flashback_3: {
    background: "backgrounds/5.png",
    speaker: "APOLLO",
    form: "god",
    expression: "upset",
    text: "Worship without measure is sacrilege. I have seen cities fall to the madness you unleash.",
    next: "rp1_10_flashback_4"
  },

  rp1_10_flashback_4: {
    background: "backgrounds/5.png",
    speaker: "DION",
    form: "god",
    expression: "upset",
    text: "And I have seen souls wither in the silence you call virtue. Step back, brother. This ground is holy to me.",
    next: "rp1_11_flashback_5"
  },

  rp1_11_flashback_5: {
    background: "backgrounds/5.png",
    speaker: "APOLLO",
    form: "god",
    expression: "angry",
    text: "Holiness without limit becomes ruin. I will not watch it spread.",
    next: "rp1_12_flashback_transition_1"
  },

  // ------------------------------
  // FLASHBACK TRANSITION — Background 5
  // ------------------------------
  rp1_12_flashback_transition_1: {
    background: "backgrounds/5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "The vision twists. Another memory rises.",
    next: "rp1_13_flashback_6"
  },

  // ------------------------------
  // FLASHBACK 2 — Background 6
  // ------------------------------
  rp1_13_flashback_6: {
    background: "backgrounds/6.png",
    speaker: "DION",
    form: "god",
    expression: "upset",
    text: "You broke my instrument. My voice. Why?",
    next: "rp1_14_flashback_7"
  },

  rp1_14_flashback_7: {
    background: "backgrounds/6.png",
    speaker: "APOLLO",
    form: "god",
    expression: "normal",
    text: "Music without measure is noise. You drown the world's harmony in your clamour.",
    next: "rp1_15_flashback_8"
  },

  rp1_15_flashback_8: {
    background: "backgrounds/6.png",
    speaker: "DION",
    form: "god",
    expression: "smile",
    text: "Harmony that silences joy is death wearing gold.",
    next: "rp1_16_flashback_9"
  },

  rp1_16_flashback_9: {
    background: "backgrounds/6.png",
    speaker: "DION",
    form: "god",
    expression: "laugh",
    text: "That lyre sang of life. You crushed it because you fear what you cannot control.",
    next: "rp1_17_flashback_10"
  },

  rp1_17_flashback_10: {
    background: "backgrounds/6.png",
    speaker: "APOLLO",
    form: "god",
    expression: "upset",
    text: "I fear nothing. I correct what threatens the order of all things.",
    next: "rp1_18_flashback_11"
  },

  rp1_18_flashback_11: {
    background: "backgrounds/6.png",
    speaker: "DION",
    form: "god",
    expression: "laugh",
    text: "Then correct carefully, Far-Shooter. Some songs do not die when the strings break.",
    next: "rp1_19_flashback_transition_2"
  },

  // ------------------------------
  // FLASHBACK TRANSITION — Background 5
  // ------------------------------
  rp1_19_flashback_transition_2: {
    background: "backgrounds/5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "The memory fractures again.",
    next: "rp1_20_flashback_12"
  },

  // ------------------------------
  // FLASHBACK 3 — Background 5
  // ------------------------------
  rp1_20_flashback_12: {
    background: "backgrounds/5.png",
    speaker: "APOLLO",
    form: "god",
    expression: "upset",
    text: "Come away. This possession is not freedom. It is oblivion.",
    next: "rp1_21_flashback_13"
  },

  rp1_21_flashback_13: {
    background: "backgrounds/5.png",
    speaker: "DION",
    form: "god",
    expression: "angry",
    text: "Release her. She chose the god within her. You drag her back to chains you call safety.",
    next: "rp1_22_flashback_14"
  },

  rp1_22_flashback_14: {
    background: "backgrounds/5.png",
    speaker: "APOLLO",
    form: "god",
    expression: "upset",
    text: "She is lost to reason. I protect what you would let consume itself.",
    next: "rp1_23_flashback_15"
  },

  rp1_23_flashback_15: {
    background: "backgrounds/5.png",
    speaker: "DION",
    form: "god",
    expression: "upset",
    text: "Protect? Or cage? Touch one of mine again without invitation, and you will learn what frenzy looks like when it turns outward.",
    next: "rp1_24_flashback_16"
  },

  rp1_24_flashback_16: {
    background: "backgrounds/5.png",
    speaker: "APOLLO",
    form: "god",
    expression: "angry",
    text: "Then learn what happens when order answers chaos.",
    next: "rp1_25_flashback_17"
  },

  rp1_25_flashback_17: {
    background: "backgrounds/5.png",
    speaker: "APOLLO",
    form: "god",
    expression: "eyes-closed",
    text: "The balance will hold.",
    next: "rp1_26_back_to_party_transition"
  },

  // ------------------------------
  // BACK TO PARTY
  // ------------------------------
  rp1_26_back_to_party_transition: {
    background: "backgrounds/1.png",
    speaker: "NARRATION",
      hidePortraits: true,
  apolloForm: "human",
  apolloExpression: "normal",
  dionForm: "human",
  dionExpression: "normal",
    text: "The dream snaps back into the ballroom.",
    next: "rp1_27_back_to_party"
  },

  rp1_27_back_to_party: {
    background: "backgrounds/1.png",
    speaker: "NPC",
    text: "What the hell?! He's ruining everything!",
    next: "rp1_28_dion_calls_out"
  },

  rp1_28_dion_calls_out: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "Apollo! You can't do that! Look at everyone!",
    next: "rp1_29_apollo_they_dont_matter"
  },

  rp1_29_apollo_they_dont_matter: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "They don't matter.",
    choices: [
      {
        text: "What do you mean, I don't matter?! I'm enjoying this! You can't just destroy it!",
        next: "rp1_30_apollo_smirk"
      },
      {
        text: "Seriously? You're just jealous because you're not invited.",
        next: "rp1_30_apollo_smirk"
      }
    ]
  },

  rp1_30_apollo_smirk: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "When did you become so blind, following fools you just met? You're so naive, Dion. Pathetic, really.",
    next: "rp1_31_dion_pushback"
  },

  rp1_31_dion_pushback: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "Blind? Lost? Who are you to tell me that?! You just can't stand seeing me happy, can you?!",
    next: "rp1_32_apollo_delusion"
  },

  rp1_32_apollo_delusion: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "Happy? Don't flatter yourself. You're too blind to see what's real. You think this is joy? It's a delusion.",
    choices: [
      {
        text: "Delusion? This is the first time in forever I've felt alive! You don't get to take that away!",
        next: "rp1_33_apollo_patterns"
      },
      {
        text: "Oh wow, Mr. Perfect has spoken. Must be nice being so above it all.",
        next: "rp1_33_apollo_patterns"
      },
      {
        text: "Why are you talking to me like that? You don't trust me at all, do you?",
        next: "rp1_33_apollo_patterns"
      }
    ]
  },

  rp1_33_apollo_patterns: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    form: "human",
    expression: "upset",
    text: "You're trapped, Dion. You fool. Patterns don't lie, you're repeating the same mistakes, over and over. How utterly predictable.",
    next: "rp1_34_dion_control"
  },

  rp1_34_dion_control: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "Trapped?! You're not even trying to understand! You just want control! You think your way is the only way, don't you?! Why are you talking to me like that? You don't trust me at all, do you?",
    next: "rp1_35_apollo_wrong_path"
  },

  rp1_35_apollo_wrong_path: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "It is the only way. And trust? You haven't earned it. You're on the wrong path, stumbling like a child. Stop before it's too late.",
    next: "rp1_36_dion_machine"
  },

  rp1_36_dion_machine: {
    background: "backgrounds/1.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "You're a cold-faced machine! You don't even feel what it's like to be happy! I know what I'm doing, you don't get to decide this for me!",
    next: "rp1_37_apollo_move"
  },

  rp1_37_apollo_move: {
    background: "backgrounds/1.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "Happy? That's rich coming from you.",
    next: "rp1_38_transition_space"
  },

  // ------------------------------
  // CORRIDOR
  // ------------------------------
  rp1_38_transition_space: {
    background: "backgrounds/2.5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Apollo grabs Dion's arm and drags him away from the crowd into a quiet corridor.",
    next: "rp1_39_corridor_open"
  },

  rp1_39_corridor_open: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "You destroyed everything! The music, the lights, everyone was having fun! What the hell is your problem?! I didn't ask for your help on this!",
    next: "rp1_40_apollo_warned_you"
  },

  rp1_40_apollo_warned_you: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "I warned you. You didn't listen. You think you know, but you don't.",
    choices: [
      {
        text: "Pouring drinks on the DJ console and smashing speakers is your idea of a warning? You just want to ruin everything!",
        next: "rp1_41_apollo_saving_you"
      },
      {
        text: "This is my life, not yours. You don't get to rewrite it because it doesn't fit your perfect little plan.",
        next: "rp1_41_apollo_saving_you"
      }
    ]
  },

  rp1_41_apollo_saving_you: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "I'm saving you. But you're too stubborn to see it.",
    next: "rp1_42_apollo_illusions"
  },

  rp1_42_apollo_illusions: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "Pathetic how you cling to these illusions. This will end badly if you continue.",
    next: "rp1_43_apollo_regret"
  },

  rp1_43_apollo_regret: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "upset",
    text: "You'll regret it.",
    next: "rp1_44_dion_fine"
  },

  rp1_44_dion_fine: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "Saving?! I'm standing right here! I'm fine!",
    next: "rp1_45_dion_permission"
  },

  rp1_45_dion_permission: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "upset",
    text: "And you... You just can't stand anyone enjoying themselves without your permission. I'm done with this, you don't understand.",
    next: "rp1_46_apollo_predictable"
  },

  rp1_46_apollo_predictable: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "You can't handle reality. You run when things aren't perfect. Look at you deflecting again. So predictable, so weak.",
    choices: [
      {
        text: "Weak?! I'm choosing joy for once, and you call it weak? I've earned this!",
        next: "rp1_47_apollo_remove_glasses"
      },
      {
        text: "Enough! You twist everything I say. That's not what I meant, and you know it! Just... leave me alone.",
        next: "rp1_47_apollo_remove_glasses"
      }
    ]
  },

  rp1_47_apollo_remove_glasses: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "upset",
    text: "You never listen, do you?",
    next: "rp1_48_apollo_done"
  },

  rp1_48_apollo_done: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "angry",
    text: "I have warned you. I have explained. I have pulled you out of your own mess, and every single time, you choose deflection. Denial. Sarcasm.",
    next: "rp1_49_apollo_done_2"
  },

  rp1_49_apollo_done_2: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "eyes-closed",
    text: "I'm done with this.",
    next: "rp1_50_satyr_enters"
  },

  rp1_50_satyr_enters: {
    background: "backgrounds/2.5.png",
    speaker: "SATYR",
    text: "Hey guys... calm down a little...",
    next: "rp1_51_apollo_pushes_satyr"
  },

  rp1_51_apollo_pushes_satyr: {
    background: "backgrounds/2.5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Apollo pushes Satyr away. Drunk and off balance, he crashes hard into the wall.",
    next: "rp1_52_dion_shocked"
  },

  rp1_52_dion_shocked: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "shocked",
    text: "You've gone insane! How could you do that?!",
    next: "rp1_53_apollo_i"
  },

  rp1_53_apollo_i: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "shocked",
    text: "I...",
    next: "rp1_54_apollo_not_about_me"
  },

  rp1_54_apollo_not_about_me: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "It's not about me. It's about you. But you're too blind to care.",
    next: "rp1_55_apollo_fool"
  },

  rp1_55_apollo_fool: {
    background: "backgrounds/2.5.png",
    speaker: "APOLLO",
    form: "human",
    expression: "upset",
    text: "You fool. Always choosing the easy path, always failing.",
    next: "rp1_56_dion_back_off"
  },

  rp1_56_dion_back_off: {
    background: "backgrounds/2.5.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "Enough! I didn't ask you to step in! This is my life, not yours. Back off!",
    next: "rp1_57_leave_corridor"
  },

  rp1_57_leave_corridor: {
    background: "backgrounds/2.5.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Dion helps Satyr up and walks away with him.",
    next: "rp1_58_next_day"
  },

  // ------------------------------
  // NEXT DAY
  // ------------------------------
  rp1_58_next_day: {
    background: "backgrounds/3.png",
    speaker: "DION",
    form: "human",
    expression: "upset",
    text: "That guy is seriously unhinged... ruining everything and then acting like he's a hero or some sort.",
    next: "rp1_59_apollo_blocks_path"
  },

  rp1_59_apollo_blocks_path: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "Dion. Stop. We need to talk about last night.",
    next: "rp1_60_dion_no"
  },

  rp1_60_dion_no: {
    background: "backgrounds/3.png",
    speaker: "DION",
    form: "human",
    expression: "upset",
    text: "No, we don't.",
    next: "rp1_61_apollo_satyr"
  },

  rp1_61_apollo_satyr: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "About Satyr... I didn't know he'd fall that hard. He was drunk, I only pushed him aside. I wasn't trying to—",
    choices: [
      {
        text: "Save the excuses. I saw exactly what you did.",
        next: "rp1_62_apollo_fine"
      },
      {
        text: "Oh wow, I didn't mean to~ That changes everything.",
        next: "rp1_62_apollo_fine"
      },
      {
        text: "Why are you even here?",
        next: "rp1_62_apollo_fine"
      }
    ]
  },

  rp1_62_apollo_fine: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "eyes-closed",
    text: "Fine.",
    next: "rp1_63_apollo_grapes"
  },

  rp1_63_apollo_grapes: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "normal",
    text: "If you won't hear me out, then answer this instead. Where are the grapes? And your cheetah, where is it?",
    next: "rp1_64_dion_what"
  },

  rp1_64_dion_what: {
    background: "backgrounds/3.png",
    speaker: "DION",
    form: "human",
    expression: "shocked",
    text: "...What?",
    choices: [
      {
        text: "Grapes? Cheetah? Have you completely lost your mind? I have no idea what you're talking about!",
        next: "rp1_65_apollo_dont_play_dumb"
      },
      {
        text: "First, you wreck the party, now you're ranting about fruit and wild animals? You've gone mad.",
        next: "rp1_65_apollo_dont_play_dumb"
      }
    ]
  },

  rp1_65_apollo_dont_play_dumb: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "angry",
    text: "Don't play dumb with me, Dion. You know exactly what I'm talking about. You messed up, and now you're pretending you forgot?",
    next: "rp1_66_dion_doesnt_remember"
  },

  rp1_66_dion_doesnt_remember: {
    background: "backgrounds/3.png",
    speaker: "DION",
    form: "human",
    expression: "angry",
    text: "I seriously don't remember any grapes or cheetah! You're the one talking crazy right now!",
    next: "rp1_67_apollo_pathetic"
  },

  rp1_67_apollo_pathetic: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "Pathetic.",
    next: "rp1_68_apollo_pathetic_2"
  },

  rp1_68_apollo_pathetic_2: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "angry",
    text: "You always do this to cause chaos, then act as if none of it happened.",
    next: "rp1_69_apollo_pathetic_3"
  },

  rp1_69_apollo_pathetic_3: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "You're still the same fool, stumbling through everything.",
    choices: [
      {
        text: "I'm telling the truth! Why would I hide something I don't even have?!",
        next: "rp1_70_apollo_responsibility"
      },
      {
        text: "Yeah, because clearly I'm the problem. Not the guy hallucinating animals and demanding answers.",
        next: "rp1_70_apollo_responsibility"
      }
    ]
  },

  rp1_70_apollo_responsibility: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "upset",
    text: "You never take responsibility. You never listen.",
    next: "rp1_71_apollo_game"
  },

  rp1_71_apollo_game: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "smirk",
    text: "You think this is all just some game you can laugh off.",
    next: "rp1_72_apollo_run"
  },

  rp1_72_apollo_run: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "human",
    expression: "eyes-closed",
    text: "Run, Dion.",
    next: "rp1_73_apollo_catch_you"
  },

  rp1_73_apollo_catch_you: {
    background: "backgrounds/3.png",
    speaker: "APOLLO",
    form: "god",
    expression: "angry",
    text: "Because when I catch you this time, you will never get another chance to forget.",
    next: "rp1_74_dion_runs"
  },

  rp1_74_dion_runs: {
    background: "backgrounds/3.png",
    speaker: "NARRATION",
    hidePortraits: true,
    text: "Dion's eyes widen in shock. He turns and bolts down the path as Apollo gives chase.",
    end: true
  }
};