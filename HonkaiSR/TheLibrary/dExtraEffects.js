let modifiersExtraEffects = [
  {
    "name": "Extra Turn",
    "desc": "Gain 1 extra turn that won't expend your remaining turns when taking action. During this extra turn, no Ultimate can be used."
  },
  {
    "name": "Action Advanced",
    "desc": "Reduces the target's waiting interval before the next action."
  },
  {
    "name": "Action Delayed",
    "desc": "Increases the target's waiting interval before the next action."
  },
  {
    "name": "Counter",
    "desc": "An effect that automatically triggers when the target is attacked, which unleashes an extra attack on the attacker.\\nCounter is also considered a Follow-Up ATK."
  },
  {
    "name": "Follow-Up ATK",
    "desc": "Unleashes an extra attack on the target. This effect is triggered automatically when requirements are met."
  },
  {
    "name": "Additional DMG",
    "desc": "Causes the target being hit to take extra DMG, which is not considered an attack."
  },
  {
    "name": "Weakness Break State",
    "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
  },
  {
    "name": "Downed State",
    "desc": "An ally will be incapacitated once their HP is reduced to 0."
  },
  {
    "name": "Weakness Break Efficiency",
    "desc": "The higher the Weakness Break Efficiency is, the more the DMG will be dealt to Toughness."
  },
  {
    "name": "Buff",
    "desc": "Can buff combat ability for a period of time, which can be dispelled unless otherwise specified."
  },
  {
    "name": "Debuff",
    "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
  },
  {
    "name": "DoT Debuff",
    "desc": "Bleed, Burn, Shock, Wind Shear."
  },
  {
    "name": "Distribute",
    "desc": "Before DMG is calculated, distribute a part of the attacking unit's DMG to another target (or multiple other targets), with the target hit by the attack taking the rest of the DMG. DMG distributed to other targets cannot be distributed again."
  },
  {
    "name": "Arcana",
    "desc": "Arcana is a debuff that deals DMG over time. This debuff cannot be dispelled.\\nWhile in the Arcana state, the unit is also considered to be in the Wind Shear state and takes Wind DoT at the start of each turn.\\nThe infliction of Arcana ignores the target's Wind Shear RES, Bleed RES, Burn RES, and Shock RES."
  },
  {
    "name": "Base Chance",
    "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
  },
  {
    "name": "Fixed Chance",
    "desc": "Fixed chance will not be affected by any factor."
  },
  {
    "name": "Effect RES",
    "desc": "Effect RES increases resistance against incoming debuffs from attackers. \\nA higher Effect RES will result in higher chances of successfully resisting a debuff."
  },
  {
    "name": "Effect Hit Rate",
    "desc": "Effect Hit Rate increases the chance of applying debuffs to enemy targets. \\nA higher Effect Hit Rate will result in higher chances of successfully applying a debuff."
  },
  {
    "name": "RES PEN",
    "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
  },
  {
    "name": "Break Effect",
    "desc": "Break Effect enhances the various Weakness Break effects. \\nSuch as the amount of DMG dealt upon Weakness Break, Super Break DMG, the amount of DMG dealt by DoTs per turn, and how far enemy actions are delayed."
  },
  {
    "name": "Energy Regeneration Rate",
    "desc": "Energy Regeneration Rate can boost the amount of Energy a character gains when performing actions such as using abilities, defeating enemies, or taking DMG.\\nA higher rate means faster Energy regeneration.\\nHowever, certain Energy-Regenerating effects won't be impacted by this rate."
  },
  {
    "name": "SPD",
    "desc": "SPD affects the interval between the target's actions. The faster the SPD, the shorter the interval.\\nAt the same time, SPD will also affect the Action Order when entering combat."
  },
  {
    "name": "Max Energy",
    "desc": "The max amount of Energy that characters can usually accumulate."
  },
  {
    "name": "Quake",
    "desc": "Additional DMG dealt by specific Blessings of Preservation."
  },
  {
    "name": "Dissociation",
    "desc": "Debuff caused by specific Blessings of Remembrance.\\nThe enemy is considered Frozen and will be unable to act for a designated number of turns. After Freeze is removed, deals Ice Additional DMG equal to #1[i]% of the enemy's Max HP.",
    "params": [
      0.3
    ]
  },
  {
    "name": "Aftertaste",
    "desc": "Follow-Up ATK DMG of a random Type caused by specific \"Elation\" Blessings."
  },
  {
    "name": "Critical Boost",
    "desc": "Buff brought by certain Hunt Blessings.\\nFor each stack, increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%. Stacks up to #3[i] times. This buff can be transferred to allies when the next turn starts. Stacks reset when any ally is attacked.",
    "params": [
      0.06,
      0.12,
      8
    ]
  },
  {
    "name": "Grit",
    "desc": "Buff brought by certain Destruction Blessings.\\nFor each stack, increases ATK by #1[i]% and DEF by #2[i]%. Stacks up to #3[i] times.",
    "params": [
      0.03,
      0.03,
      35
    ]
  },
  {
    "name": "Amber",
    "desc": "When a character with a Shield receives DMG that exceeds the max DMG that can be absorbed by the Shield, the excess DMG becomes invalid. This effect is removed after 1 activation."
  },
  {
    "name": "Confusion",
    "desc": "When enemies are Weakness Broken, every stack of Confusion will cause all DoTs currently on the enemy to immediately deal DMG equal to #1[i]% of their original DoT. Consumes 1 stack of Confusion. Confusion can stack up to 5 times.",
    "params": [
      0.3
    ]
  },
  {
    "name": "Devoid",
    "desc": "Each stack reduces Toughness regeneration by #1[i]%, stacking up to 5 times.",
    "params": [
      0.1
    ]
  },
  {
    "name": "Subduing Evils",
    "desc": "Can consume 1 stack of this state to resist a debuff once, and then restore HP equal to #1[i]% of the character's Max HP. This state can stack up to #2[i] time(s).",
    "params": [
      0.1,
      5
    ]
  },
  {
    "name": "Light-Hunting Celestial Arrow",
    "desc": "CRIT DMG increases by an amount equal to #1[i]% of CRIT Rate. Gains one extra turn after defeating the enemy. This effect cannot trigger repeatedly.",
    "params": [
      0.8
    ]
  },
  {
    "name": "Entropic Retribution",
    "desc": "DEF decreases by #1[i]%. At the beginning of each turn, the unit receives Fire Additional DMG equal to #2[i]% of the HP difference between all allied characters' Max HP and their current HP.",
    "params": [
      0.2,
      1.25
    ]
  },
  {
    "name": "Suspicion",
    "desc": "Debuff brought by certain Nihility Blessings.\\nIncreases DoT taken by #1[i]%. Stacks up to #2[i] times, but loses #3[i] stacks at the end of the turn.",
    "params": [
      0.01,
      99,
      2
    ]
  },
  {
    "name": "Dewdrop",
    "desc": "An effect that can be charged up, formed by specific Blessings of Abundance.\\nThe Charge cannot exceed #1[i]% of the character's Max HP. Dewdrop ruptures after the character attacks, dealing Additional DMG to the attacked enemy based on Charge value.",
    "params": [
      5
    ]
  },
  {
    "name": "Sensory Pursuit",
    "desc": "Each stack increases the received Follow-Up ATK DMG by #1[i]%.",
    "params": [
      0.08
    ]
  },
  {
    "name": "Eonian River",
    "desc": "When debuffed, the duration of this debuff doubles."
  },
  {
    "name": "Metamorphosis",
    "desc": "During an attack, for every skill point consumed or recovered, the attack can ignore #1[i]% of the target enemy's all-Type RES. This effect can stack up to #2[i] times.",
    "params": [
      0.1,
      2
    ]
  },
  {
    "name": "Spores",
    "desc": "When the spore count is equal to or greater than #1[i], it will burst upon being attacked by a character, causing Wind Additional DMG (unaffected by bonuses) to the target with the Spores. After the explosion, it will spread to a random adjacent target and cannot spread again. Each enemy target can hold a maximum of #2[i] spores.",
    "params": [
      3,
      6
    ]
  },
  {
    "name": "Hounding Pursuit",
    "desc": "Domains with this effect will not swap positions with adjacent domains (Aside from Emergencies)"
  },
  {
    "name": "Cornerstone",
    "desc": "Domains with this effect will not collapse"
  },
  {
    "name": "Mercy",
    "desc": "When entering domains with this effect applied, the countdown is not consumed and increases by 1 point.\\n(This effect will expire after triggering Planar Disarray.)"
  },
  {
    "name": "Recollection",
    "desc": "Increases the Effect Hit Rate of all allies when entering any domains with this effect."
  },
  {
    "name": "Enhance",
    "desc": "Enhance beacon. Enemies in domains with this beacon are enhanced. When selecting a Blessing after winning a battle, enhance all Blessings."
  },
  {
    "name": "Mutation",
    "desc": "Mutation beacon. Enemies in the domains with this beacon will become \"Bugs.\" After winning a battle, receive additional Cosmic Fragments."
  },
  {
    "name": "Blessing Trotter",
    "desc": "Blessing Trotter beacon. There will be a Trotter in domains with this beacon. Defeat it to obtain additional Blessings."
  },
  {
    "name": "Curio Trotter",
    "desc": "Curio Trotter beacon. There will be a Trotter in domains with this beacon. Defeat it to obtain additional Curios."
  },
  {
    "name": "Blank",
    "desc": "Blank Domain. Nothing will happen in this domain."
  },
  {
    "name": "Respite",
    "desc": "Respite Domain. You can enhance Blessings, download characters, and reset characters in this domain."
  },
  {
    "name": "Combat",
    "desc": "Combat Domain. Defeat enemies in this domain to receive Blessings."
  },
  {
    "name": "Combat: Swarm",
    "desc": "Special Combat Domain. Defeat Swarm enemies in this domain to receive Blessings of Propagation."
  },
  {
    "name": "Elite",
    "desc": "Elite Domain. Defeat Elite Enemies in this domain for a chance to receive 1 Blessing of 1- to 3-star rarity."
  },
  {
    "name": "Adventure",
    "desc": "Adventure Domain. Complete the various challenges in this domain to obtain rewards."
  },
  {
    "name": "Reward",
    "desc": "Reward Domain. Select from different rewards in this domain."
  },
  {
    "name": "Occurrence",
    "desc": "Occurrence Domain. Different outcomes can be achieved in this domain based on your choices."
  },
  {
    "name": "Occurrence: Swarm",
    "desc": "Special Occurrence Domain. The Swarm's alertness can be affected by the choices you make in this domain. The higher the Swarm's alertness, the more dangerous the Special Occurrence in the domain becomes."
  },
  {
    "name": "Boss",
    "desc": "Boss Domain. Defeat the Boss in this domain to pass this plane and receive Blessings and Curios."
  },
  {
    "name": "Boss: Swarm",
    "desc": "Special Boss Domain. Defeating Swarm: True Sting (Complete) in this domain can clear this run of Simulated Universe."
  },
  {
    "name": "Transaction",
    "desc": "Transaction Domain. Consume Cosmic Fragments in this domain to purchase Blessings and Curios."
  },
  {
    "name": "Knowledge",
    "desc": "Domains marked by the dice's power will manifest different effects based on the different Passive Abilities chosen."
  },
  {
    "name": "Path Boost",
    "desc": "After fulfilling the dice's passive effect requirements, different effect bonuses will be provided based on the chosen Path."
  },
  {
    "name": "Intra-Cognition",
    "desc": "Special Occurrence Domain. You can adjust your Intra-Cognition value in this domain and go to varied branches."
  },
  {
    "name": "Occurrence: Abnormal",
    "desc": "Special Occurrence Domain. You are more likely to encounter Occurrences with higher risks in this domain."
  },
  {
    "name": "Double",
    "desc": "Double Beacon. In Elite Domains with this beacon, the number of Elite Enemies are doubled. Occurrence, Reward, and Abnormal Domains with this beacon will also have the number of events in the domains doubled."
  },
  {
    "name": "Select",
    "desc": "Select Beacon. Domains with this beacon will have 3 Occurrences within them. After starting any of the Occurrences, the other 2 will disappear."
  },
  {
    "name": "Resonance Extrapolation: \"The Hunt\"",
    "desc": "When Resonance Extrapolation: \"The Hunt\" takes action, it deals Wind DMG to all allies based on the boss' Type . All units' actions Advance Forward the Resonance's action."
  },
  {
    "name": "Formation Extrapolation: Bow and Arrow",
    "desc": "When Resonance Extrapolation deals DMG to allies with HP below #1[i]% of their Max HP, its CRIT Rate increases by 100% and CRIT DMG increases to #2[i]%.",
    "params": [
      0.5,
      0.4
    ]
  },
  {
    "name": "Formation Extrapolation: Star Hunter",
    "desc": "The boss immediately acts after the Resonance Extrapolation's attack."
  },
  {
    "name": "Resonance Extrapolation: \"Destruction\"",
    "desc": "When Resonance Extrapolation: \"Destruction\" takes action, it deals Fire DMG to all allies. All units' actions Advance Forward the Resonance's action."
  },
  {
    "name": "Formation Extrapolation: Extreme Helium Flash",
    "desc": "The Resonance Extrapolation's attacks reduce the target's DEF by #1[i]% for #2[i] turn(s).",
    "params": [
      0.3,
      2
    ]
  },
  {
    "name": "Formation Extrapolation: Zero Age Main Sequence",
    "desc": "After a target is defeated, Resonance Extrapolation's action will Advanced Forward by #1[i]%.",
    "params": [
      0.5
    ]
  },
  {
    "name": "Resonance Extrapolation: \"Nihility\"",
    "desc": "When Resonance Extrapolation: \"Nihility\" takes action, it has a chance to inflict DoT effects on the characters. All units' actions Advance Forward the Resonance's action."
  },
  {
    "name": "Formation Extrapolation: The Doubtful Fourfold Root",
    "desc": "The Resonance Extrapolation has a higher chance of inflicting DoT effects for the next #1[i] turn(s).",
    "params": [
      1
    ]
  },
  {
    "name": "Formation Extrapolation: Outsider",
    "desc": "When allies receive DMG from a DoT effect, the Resonance Extrapolation's action is Advanced Forward."
  },
  {
    "name": "Resonance Extrapolation: \"Abundance\"",
    "desc": "When Resonance Extrapolation: \"Abundance\" takes action, it restores HP for all enemies. All units' actions Advance Forward the Resonance's action."
  },
  {
    "name": "Formation Extrapolation: Anicca",
    "desc": "When the Resonance Extrapolation acts, it removes #1[i] debuff(s) from each enemy.",
    "params": [
      4
    ]
  },
  {
    "name": "Formation Extrapolation: Mountain High",
    "desc": "When the Resonance Extrapolation acts, it increases all enemies' ATK by #1[i]% for #2[i] turn(s).",
    "params": [
      0.3,
      1
    ]
  },
  {
    "name": "Synapse Resonance",
    "desc": "After receiving an attack from a character, this unit and the enemy target with the highest Max HP take 1 instance of Ultimate DMG equal to #1[i]% of the attacker's ATK. Then, 1 trigger count is consumed. This effect expires after being triggered #2[i] time(s) across all enemies.",
    "params": [
      0.7,
      15
    ]
  },
  {
    "name": "Brain in a Vat",
    "desc": "If the Enlightenment Charge of \"Brain in a Vat\" reaches 100%, when a character uses their Ultimate through a method other than \"Brain in a Vat,\" the Ultimate will be activated again, consuming 100% of the Enlightenment Charge."
  },
  {
    "name": "AoE ATK",
    "desc": "A kind of ability tag. Ability effects that are primarily AoE attacks will have this tag."
  },
  {
    "name": "Continuous Hook Kick",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns. This status can be stacked."
  },
  {
    "name": "Thunderous Slap",
    "desc": "Receive Lightning Additional DMG after being attacked by Lightning-Type Ultimates."
  },
  {
    "name": "Spinning Back Fist",
    "desc": "Units that are both Weakness Broken and Burned will receive Fire Additional DMG when they are attacked."
  },
  {
    "name": "Jawbreaker",
    "desc": "When Frozen enemies are attacked by allies, receive Ice Additional DMG based on the enemy's ATK."
  },
  {
    "name": "Gloomfire",
    "desc": "For a certain number of turns, takes Fire DMG that is based on character ATK at the start of each turn."
  },
  {
    "name": "Quake",
    "desc": "Additional DMG caused by Stage Buff. If triggered during an attack, cannot defeat the enemy target."
  },
  {
    "name": "Reverberation",
    "desc": "After receiving an attack, become afflicted with Strong Reverberation, then dispels Reverberation."
  },
  {
    "name": "Overflow DMG",
    "desc": "The DMG that this attack deals will exceed the target's current HP when they are defeated."
  },
  {
    "name": "Detonate",
    "desc": "Every unit afflicted by this effect will additionally take a fixed amount of DMG on account of the Detonate stacks. The DMG will increase with the number of Detonate stacks. The effect is dispelled when the affected unit takes action."
  },
  {
    "name": "Galefury",
    "desc": "Characters with Galefury will consume one of its stacks at the end of their turn and have their Action Advanced forward by 100%."
  },
  {
    "name": "Shudder",
    "desc": "The Trotter additionally takes DMG.",
    "params": [
      0.1
    ]
  },
  {
    "name": "Wind Shear",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns. This status can be stacked."
  },
  {
    "name": "Fatigued",
    "desc": "Each stack of Fatigue causes enemies to receive more DMG."
  },
  {
    "name": "Bellow",
    "desc": "Each stack of Bellow causes the unit with the effect to deal more DMG."
  },
  {
    "name": "Blood Rage",
    "desc": "Each stack of Blood Rage increases the CRIT Rate and CRIT DMG of the affected unit."
  },
  {
    "name": "Summon",
    "desc": "Weapons of this type will be added to the action bar, and the corresponding effects will be triggered when they take action."
  },
  {
    "name": "AoE",
    "desc": "Weapons of this type will conduct AoE DMG to multiple adjacent targets."
  },
  {
    "name": "Focus",
    "desc": "Weapons of this type will deal extra DMG against Elite and Boss targets."
  },
  {
    "name": "Launch",
    "desc": "Weapons of this type will launch multiple attacks and apply corresponding effects on enemy targets"
  },
  {
    "name": "Break DMG",
    "desc": "Break DMG increases with higher Break Effect, higher target max Toughness, and higher character levels.\\nBreak DMG cannot CRIT Hit and is not affected by DMG Boost effects."
  },
  {
    "name": "Alien Dream",
    "desc": "Cannot take action within a certain number of turns and regenerates minor amounts of HP at the start of every turn. When this unit is attacked, greatly increase the DMG it takes. Getting attacked dispels the Alien Dream state."
  },
  {
    "name": "Quake — Trait",
    "desc": "After a character is attacked, deals Quake DMG to the attacker, equal to #1[i]% of the character's Shield Effect after being attacked. This DMG cannot defeat the enemy. Every Blessing of Preservation in possession additionally increases this DMG by #2[i]% of the character's Shield Effect after being attacked. A max of #3[i] Blessings of Preservation can be taken into account.",
    "params": [
      1.8,
      0.35,
      8
    ]
  },
  {
    "name": "Dissociation — Trait",
    "desc": "After characters Freeze enemy targets that are not currently Frozen, there is a #1[i]% base chance to inflict the \"Dissociation\" state on it, lasting for #4[i] turn(s). Every Blessing of Remembrance in possession additionally increases the base chance by #2[i]%. A max of #3[i] Blessings of Remembrance can be taken into account.",
    "params": [
      0.3,
      0.06,
      8,
      1
    ]
  },
  {
    "name": "Suspicion — Trait",
    "desc": "Every time an enemy gets inflicted with a DoT, they are inflicted with #1[i] stack(s) of the Suspicion state. Every Blessing of Nihility in possession increases the DoT dealt by characters by #2[i]%. A max of #3[i] Blessings of Nihility can be taken into account.",
    "params": [
      3,
      0.08,
      8
    ]
  },
  {
    "name": "Dewdrop — Trait",
    "desc": "When a character receives healing, Charges Dewdrop. The Charge value is equal to #1[i]% of the amount of excess HP restoration. Every Blessing of Abundance in possession additionally increases the Charge amount by #2[i]% of the excess HP restoration. A max of #3[i] Blessings of Abundance can be taken into account.",
    "params": [
      0.6,
      0.12,
      8
    ]
  },
  {
    "name": "Critical Boost — Trait",
    "desc": "After characters use their abilities, there is a #1[i]% fixed chance to gain 1 stack of Critical Boost. Every Blessing of The Hunt in possession increases this fixed chance by #2[i]%. A max of #3[i] Blessings of The Hunt can be taken into account.",
    "params": [
      0.2,
      0.1,
      8
    ]
  },
  {
    "name": "Grit — Trait",
    "desc": "Every time a character loses #1[i]% HP in total, they gain 1 stack of Grit. Every Blessing of Destruction in possession reduces the required total HP loss by #2[f1]%. A max of #3[i] Blessings of Destruction can be taken into account.",
    "params": [
      0.3,
      0.025,
      8
    ]
  },
  {
    "name": "Aftertaste — Trait",
    "desc": "After a character launches a Follow-Up ATK, deals 1 stack of \"Aftertaste\" DMG equal to #1[i]% of the character's ATK to the attacked enemy target. Every Blessing of Elation in possession additionally increases this \"Aftertaste\" DMG by #2[i]% of the character's ATK. A max of #3[i] Blessings of Elation can be taken into account.",
    "params": [
      0.5,
      0.1,
      8
    ]
  },
  {
    "name": "Spores — Trait",
    "desc": "For each Skill Point consumed by characters, inflict 1 Spore to #1[i] random enemy target(s). Every Blessing of Propagation in possession provides a #2[i]% chance to apply 1 Spore to #4[i] additional random enemy target(s). A max of #3[i] Blessings of Propagation can be taken into account.",
    "params": [
      1,
      0.1,
      8,
      2
    ]
  },
  {
    "name": "Brain in a Vat — Trait",
    "desc": "Every time characters unleash an Ultimate in a method other than via Brain in a Vat, charge Brain in a Vat by #1[i]%. Every Blessing of Erudition in possession increases Ultimate DMG dealt by #2[i]%. A max of #3[i] Blessings of Erudition can be taken into account.",
    "params": [
      0.2,
      0.1,
      8
    ]
  },
  {
    "name": "Amber",
    "desc": "When a Shielded character receives DMG that exceeds the Shield value, the excess DMG becomes invalid and 1 stack of Amber is removed."
  },
  {
    "name": "Purgatorial Eradication",
    "desc": "Increases Max HP by #1[i]% and the DMG dealt by #2[i]%. Becomes immune to debuffs.",
    "params": [
      0.75,
      1.5
    ]
  },
  {
    "name": "Levitation",
    "desc": "When using Basic ATK or Skill to attack, ignore #1[i]% of the target's All-Type RES, and deal Additional DMG equal to #2[i]% of the character's ATK to the attacked target. This effect only works on the latest target.",
    "params": [
      0.3,
      4
    ]
  },
  {
    "name": "Central Link",
    "desc": "After being attacked by an ally, the attacked enemy and the enemy with the highest Max HP take 1 instance of Ultimate DMG equal to #1[i]% of the attacker's ATK. This effect will be removed after it has been triggered #2[i] times across all enemies.",
    "params": [
      1.2,
      40
    ]
  },
  {
    "name": "Carousal of Wantonness",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns. This effect can be stacked."
  },
  {
    "name": "Carousal of Revelry",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns. This effect can be stacked."
  },
  {
    "name": "Embrittlement",
    "desc": "SPD decreases by #1[i]%. When #2[i] stack(s) of Embrittlement is present, remove Embrittlement after any character uses an ability with a high chance of becoming Frozen, lasting for #3[i] turn(s).",
    "params": [
      0.1,
      8,
      1
    ]
  },
  {
    "name": "Chord",
    "desc": "Removed after using a Basic Attack and deal DMG to the attacked target based on the number of stacks."
  },
  {
    "name": "undefined",
    "desc": "undefined"
  },
  {
    "name": "Freeze",
    "desc": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn."
  },
  {
    "name": "Follow-Up Usage",
    "desc": "After using a single-target ability, the unit will re-select the target and use the ability again."
  },
  {
    "name": "Combat Stance",
    "desc": "The Silver Knight of Virtuous Gallantry will change their status throughout the fight:\\nChivalric Wrath: Summons Speartip statues and takes less DMG from all sources. When 4 statues are on the field, the knight enters the Toughness Protection state.\\nGolden Harvest: Summons Shield statues and increases the knight's DMG dealt from all sources.\\nMedal of Elegance: Summons The Honored statues. When statues exist on the field, the knight cannot be selected as a target."
  },
  {
    "name": "Transfer",
    "desc": "Transfers the Weakness Type to the target. The Weakness Type returns to this unit after the target is defeated, and additionally reduces Toughness."
  },
  {
    "name": "Toughness Protection",
    "desc": "Toughness cannot be reduced."
  },
  {
    "name": "Walk in the Light",
    "desc": "A Shield that absorbs DMG taken by all allies. Before the Shield is depleted or its effect expires, enemy targets' attacks won't reduce the Shielded allies' HP."
  },
  {
    "name": "Super Break DMG",
    "desc": "Super Break DMG increases with higher Break Effect, higher Toughness Reduction of the attack, and higher character levels.\\nSuper Break DMG cannot CRIT Hit and is not affected by DMG Boost effects.\\nSuper Break DMG is also considered Break DMG."
  },
  {
    "name": "Influx of Fortuity",
    "desc": "When this unit is attacked by a target that has entered the Gamble, this unit always generates a roll of 6, and uses Punishment of Defeat when the Gamble ends."
  },
  {
    "name": "Fenge's Gift",
    "desc": "Each stack increases the DMG dealt."
  },
  {
    "name": "Fenge's Curse",
    "desc": "Each stack increases DMG received."
  },
  {
    "name": "Immolation",
    "desc": "Reduces the Maximum Restorable HP. HP changes caused by using Combusted Skill Point or Burn will convert into Immolation, reducing Maximum Restorable HP."
  },
  {
    "name": "Body Part",
    "desc": "Attacks to the parts will also reduce HP on the main body"
  },
  {
    "name": "Transmit",
    "desc": "Transmits the Weakness Type to the target. After the target is defeated, additionally reduces Toughness. The Weakness Type will return once all targets that gained the Weakness Type are defeated."
  },
  {
    "name": "Threads of the Puppet",
    "desc": "Consumes Threads of the Puppet to apply Madden to summons."
  },
  {
    "name": "Madden",
    "desc": "Enhanced by Boss Mirage, enters Special Attack mode, and is dispelled upon being Weakness Broken."
  },
  {
    "name": "Enemy units that can enter Moon Rage",
    "desc": "Enemy units that can enter \"Moon Rage\": Sableclaw Wolftrooper, Eclipse Wolftrooper, Howling Casket, Howling Casket (Bug), Borisin Warhead: Hoolay, Borisin Warhead: Hoolay (Complete)."
  },
  {
    "name": "Moon Rage",
    "desc": "In this state, Sableclaw Wolftrooper's SPD increases, and their attacks have a high chance of inflicting Bleed on the target. This state will be dispelled when Sableclaw Wolftrooper is Weakness Broken."
  },
  {
    "name": "Moon Rage",
    "desc": "In this state, Eclipse Wolftrooper's SPD increases, and after attacking the targets, the Eclipse Wolftrooper restores their own HP. This state will be dispelled when Eclipse Wolftrooper is Weakness Broken."
  },
  {
    "name": "Moon Rage",
    "desc": "In this state, Howling Casket has its SPD increased and can use Lupitoxin Synthesis and Slaughter Algorithm. This state is dispelled once Howling Casket is Weakness Broken."
  },
  {
    "name": "Terror Grip",
    "desc": "Enters the \"Terrified\" state at the start of the second turn. Attacking the caster 1 time before then can dispel \"Terror Grip.\""
  },
  {
    "name": "Terrified",
    "desc": "Unable to move until the start of this unit's next turn."
  },
  {
    "name": "Moon Rage",
    "desc": "In this state, Hoolay's SPD increases, and he can use additional abilities. While Hoolay is on the battlefield, Sableclaw Wolftroopers' and Eclipse Wolftroopers' Moon Rage state is enhanced. Hoolay will leave this state upon being Weakness Broken."
  },
  {
    "name": "Rigidity",
    "desc": "Reduces DMG dealt and Effect Hit Rate."
  },
  {
    "name": "Sanguine Gaze",
    "desc": "Increases DMG received and SPD."
  },
  {
    "name": "Body Part Regeneration",
    "desc": "After this part is defeated, it enters the Feigned Death state, and will regenerate after a certain period of time"
  },
  {
    "name": "Type Infusion",
    "desc": "Allied units under the Type Infusion effect can deal Toughness Reduction to specific targets"
  },
  {
    "name": "Snarelock",
    "desc": "Action delayed and SPD reduced. Takes Quantum Additional DMG at the start of the next turn.\\nThis Additional DMG is increased whenever the target under the Snarelock status is attacked, up to 5 stacks. This status is considered to be both Quantum Entanglement and Imprisonment."
  },
  {
    "name": "undefined",
    "desc": "undefined"
  },
  {
    "name": "undefined",
    "desc": "undefined"
  },
  {
    "name": "Prana-Siphon",
    "desc": "Allies in the Prana-Siphon state have their Max HP reduced."
  },
  {
    "name": "Bloodlust",
    "desc": "All enemies that can enter Moon Rage will share Bloodlust stacks. When enemy units that can enter Moon Rage join the battle, they will apply the same number of Bloodlust stacks. At the end of the turn, if all enemies that can enter Moon Rage have been defeated, clears all Bloodlust stacks."
  },
  {
    "name": "Departed",
    "desc": "Targets in the Departed state cannot be designated as ability targets and will not appear in the Action Order."
  },
  {
    "name": "Points",
    "desc": "When the enemy target's points are higher than your team's, the enemies receive greatly reduced DMG and gain Toughness Protection. When allies attack enemies with fewer points than themselves, the higher the allies' points, the higher the DMG taken by enemy targets. The maximum number of points is 100."
  },
  {
    "name": "Doubled Summons",
    "desc": "After appearing for a time, they will leave the battlefield. Defeating this summon will cause allies' points to double."
  },
  {
    "name": "Base DMG",
    "desc": "The higher the enemy's level and the higher the Threshold Protocol, the higher the base DMG dealt."
  },
  {
    "name": "Outrage",
    "desc": "Cannot be controlled. Automatically attacks a random enemy target. If the target is about to have any debuff removed by an ability, then the Outrage state will be prioritized for removal."
  },
  {
    "name": "Weaken",
    "desc": "Decreases DMG dealt."
  },
  {
    "name": "Boundary",
    "desc": "An effect that remains active against specific targets for a set number of Cycles. An activated Boundary can be overwritten by a higher-rated Boundary of the same name."
  },
  {
    "name": "Delay Effects",
    "desc": "An effect that activates after specific conditions are fulfilled. Includes \"Delay: Possession,\" \"Delay: Cataclysm,\" \"Delay: Self-Immolation,\" \"Delay: Obliteration,\" \"Delay: Lunacy,\" and \"Delay: Cleanse.\""
  },
  {
    "name": "Amplification",
    "desc": "Amplification will proportionally affect the highlighted stats in Scepters and Components."
  },
  {
    "name": "Tutoring",
    "desc": "In Tutoring mode. This unit will not change its channel when attacked."
  },
  {
    "name": "Something to Share",
    "desc": "Shares the Weakness Type with the target. The Weakness Type will be applied to all enemy targets after the target is Weakness Broken, and additionally reduces Toughness."
  },
  {
    "name": "Switch Tally",
    "desc": "Unit in the \"Classroom Channel\" state will gain 1 point in the Switch Tally when attacked. When the Switch Tally hits the max, it will switch the unit to the \"Off-Class Channel\" state and also reduce the Boss Mirage's Toughness and immediately obtain that unit's \"Off-Class Channel\" reward 1 time."
  },
  {
    "name": "True DMG",
    "desc": "Non-Type DMG that is not affected by any effects. This DMG is not considered as using 1 attack."
  },
  {
    "name": "Obsession",
    "desc": "Each stack increases all ally targets' ATK by #1[f1]% and Max HP by #2[f1]%. Each target can have up to #3[i] stacks, and they lose #4[i] stack(s) at the end of each turn.",
    "params": [
      0.01,
      0.005,
      20,
      2
    ]
  },
  {
    "name": "Murmur",
    "desc": "When enemy targets enter the battle, they are inflicted with this state. This is considered as the Wind Shear state. At the start of a turn, deals Wind DoT equal to Charge value, and clear any Charge values that exceed the threshold. The threshold is equal to #1[i]% of the sum of all allies' ATK.",
    "params": [
      50
    ]
  },
  {
    "name": "Blazar",
    "desc": "#1[i]% of HP changes or Shield reductions will be converted into \"Blazar\" Charge. Charge value is cleared by #2[i]% at the start of the turn, and \"Blazar\" can use this Charge to deal DMG or trigger other effects.",
    "params": [
      0.3,
      0.6
    ]
  },
  {
    "name": "Soul Chrysalis/Butterfly Soul",
    "desc": "\"Soul Chrysalis\" is a Charge ratio shared by all allies. When reaching 100%, it transforms into \"Butterfly Soul.\" After entering the \"Butterfly Soul\" state, the next #1[i] time(s) any ally target uses Basic ATK/Skill to attack, deals 1 instance of True DMG equal to #2[i]% of the original DMG (not including the Additional DMG) to the attack target.",
    "params": [
      8,
      0.5
    ]
  },
  {
    "name": "Harmonize",
    "desc": "Increases the holder's Break DMG taken by #1[i]%. At the start of the turn, if the holder is Weakness Broken, take Quantum Break DMG equal to #2[i]% base DMG for each stack of \"Harmonize,\" up to #3[i] stack(s). Cleared when recovering from Weakness Break.",
    "params": [
      0.25,
      0.6,
      40
    ]
  },
  {
    "name": "Obsession — Trait",
    "desc": "When ally targets enter combat or when a memosprite is summoned, gain #1[i] stack(s) of \"Obsession.\" After taking action, there is a #2[i]% fixed chance to gain 1 stack of \"Obsession.\" For each Blessing of Remembrance in possession, the fixed chance additionally increases by #3[i]%. A max of #4[i] Blessings of Remembrance can be taken into account.",
    "params": [
      8,
      0.26,
      0.03,
      8
    ]
  },
  {
    "name": "Murmur — Trait",
    "desc": "When enemy target receives DoT, \"Murmur\" gains Charges equal to #1[i]% of DMG dealt, up to #4[i]% of the sum of all ally characters' ATK. Every Blessing of Nihility in possession increases ally target's DoT dealt by #2[i]%. A max of #3[i] Blessings of Nihility can be taken into account.",
    "params": [
      0.08,
      0.1,
      8,
      0.4
    ]
  },
  {
    "name": "Blazar — Trait",
    "desc": "The Base Value of \"Blazar\" will not become lower than #1[i]% of Max HP. After receiving an attack, deals Additional DMG equal to #2[i]% of \"Blazar\" to the attacker. This DMG cannot defeat enemy targets. Every Blessing of Destruction in possession increases this DMG by #3[i]% of \"Blazar.\" A max of #4[i] Blessings of Destruction can be taken into account.",
    "params": [
      0.6,
      0.4,
      0.1,
      8
    ]
  },
  {
    "name": "Soul Chrysalis/Butterfly Soul — Trait",
    "desc": "When entering battle, \"Soul Chrysalis\" gains #1[i]% Charge. For every Skill Point consumed, #2[i]% Charge is gained. Every Blessing of Propagation in possession increases ally targets' Basic ATK/Skill DMG by #3[i]%. A max of #4[i] Blessings of Propagation can be taken into account.",
    "params": [
      0.6,
      0.08,
      0.1,
      8
    ]
  },
  {
    "name": "Harmonize — Trait",
    "desc": "Increases ally target's Weakness Break Efficiency by #1[i]%. Every Blessing of Harmony in possession additionally increases Weakness Break Efficiency by #2[i]%. A max of #3[i] Blessings of Harmony can be taken into account. When Breaking enemy target's Weakness, inflicts #4[i] stack(s) of \"Harmonize\" to them.",
    "params": [
      0.24,
      0.02,
      8,
      5
    ]
  },
  {
    "name": "Glory",
    "desc": "Each stack of \"Glory\" increases DMG dealt and Energy Regeneration Rate. When using Skill or Ultimate, adds 1 stack of \"Glory.\" When attacking, dispel the number of \"Titanic Corpus\" stacks equal to the current \"Glory\" stacks."
  },
  {
    "name": "Summon Memosprite",
    "desc": "Summon the memosprite to the field. If the memosprite is already on the field, dispels all Crowd Control debuffs the memosprite is afflicted with."
  },
  {
    "name": "Insect Egg",
    "desc": "At the end of Boss Mirage's turn, Boss Mirage will gain a certain number of Insect Eggs. Boss Mirage can consume Insect Egg to enhance its Swarm summons and grant them 1 stack of \"Growth Hormone.\""
  },
  {
    "name": "Growth Hormones",
    "desc": "Every stack of \"Growth Hormones\" increases ATK by a certain amount, stacking up to 3 times. When 3 stacks are reached, Swarm summons will unlock Bonus Abilities."
  },
  {
    "name": "Joint Attack",
    "desc": "Multiple targets respectively use attacks on enemy targets in one action."
  },
  {
    "name": "Aquila's Mark",
    "desc": "After any ally target defeats an enemy target, this mark can be dispelled, prioritizing the target that dealt the fatal damage.\\nWhen the target possesses 2 stacks of \"Aquila's Mark,\" dispel all marks and the target takes Fire DMG and loses Energy.\\nWhen the target possesses both \"Aquila's Mark\" and \"Oronyx's Mark\" simultaneously, dispel all marks and the target takes True DMG based on their Max HP, loses Energy, and has a high chance to be afflicted with Entanglement."
  },
  {
    "name": "Oronyx's Mark",
    "desc": "Using Ultimate can dispel this mark.\\nWhen the target possesses 2 stacks of \"Oronyx's Mark,\" dispel all marks and the target receives Quantum DMG with a high chance to be afflicted with Entanglement.\\nWhen the target possesses both \"Aquila's Mark\" and \"Oronyx's Mark\" simultaneously, dispel all marks and the target takes True DMG based on their Max HP, loses Energy, and has a high chance to be afflicted with Entanglement."
  },
  {
    "name": "Aftertaste",
    "desc": "Random-Type Additional DMG. The DMG is considered as Follow-Up ATK DMG."
  },
  {
    "name": "Critical Boost",
    "desc": "Each stack increases CRIT Rate by #1[i]% and CRIT DMG by #2[i]%, stacking up to #3[i] time(s). This can be inherited by an ally at the beginning of the next turn. All stacks will be removed if any ally is attacked.",
    "params": [
      0.06,
      0.12,
      8
    ]
  },
  {
    "name": "Aftertaste — Trait",
    "desc": "After ally targets launch Follow-Up ATKs, deals 1 instance of \"Aftertaste\" DMG equal to #1[i]% of ATK to the attacked enemy target. Every Blessing of Elation in possession additionally increases the \"Aftertaste\" DMG by #2[i]% of ATK. A max of #3[i] Blessings of Elation can be taken into account.",
    "params": [
      0.5,
      0.1,
      8
    ]
  },
  {
    "name": "Critical Boost — Trait",
    "desc": "After an ally target uses their abilities, there is a #1[i]% fixed chance to gain 1 stack of \"Critical Boost.\" Every Blessing of The Hunt in possession increases the fixed chance by #2[i]%. A max of #3[i] Blessings of The Hunt can be taken into account.",
    "params": [
      0.2,
      0.1,
      8
    ]
  },
  {
    "name": "Even Distribution",
    "desc": "The DMG and debuff before this attack's finalization is received evenly by all targets that are hit."
  },
  {
    "name": "Switch Tally",
    "desc": "Unit in the \"Classroom Channel\" state will gain 1 Switch Tally after being attacked. When the Switch Tally hits the max, it will switch the unit to the \"Off-Class Channel\" state."
  },
  {
    "name": "Calamity Power",
    "desc": "When using certain abilities, consume all \"Calamity Power\" stacks to increase Hits Per Action."
  },
  {
    "name": "Entangled By Agony",
    "desc": "After absorbing \"Long-Shattered Vessel,\" restores the HP consumed to summon the current \"Long-Shattered Vessel.\" After \"Long-Shattered Vessel\" is defeated, this unit cannot restore the HP consumed used to summon the current \"Long-Shattered Vessel\" again."
  },
  {
    "name": "Temperature",
    "desc": "The current temperature on the battlefield. Allies will take continuous Burn DMG based on the temperature. DMG dealt by ally targets increases based on Temperature."
  },
  {
    "name": "Helium Flash",
    "desc": "After \"Sublime, Radiant, Avatar of the Sky\" uses \"Fury, Incineration of Dawn and Dusk,\" \"Temperature\" increases based on the current \"Helium Flash.\" Under this state, after allies use an attack, \"Helium Flash\" is reduced based on the number of enemy targets hit by this attack."
  },
  {
    "name": "Non-fatal",
    "desc": "When the target receives DMG, if their HP is insufficient, reduces their HP to 1."
  },
  {
    "name": "Atrophy DMG",
    "desc": "Deals a fixed amount of DMG that cannot be offset by Shields or distributed."
  },
  {
    "name": "Thundercloud",
    "desc": "The accumulated stack of Thunderclouds in the current battlefield. After \"Sublime, Radiant, Avatar of the Sky\" uses \"Wrath, Rend of Eternal Sky,\" inflicts minor Lightning DMG on ally targets based on the number of \"Thundercloud\" stacks. Afterward, minor Lightning DMG will be dealt to this unit based on the number of \"Thunderclouds\" seized by allies."
  },
  {
    "name": "Tide-Corrosion",
    "desc": "Targets with the \"Tide-Corrosion\" state cannot be selected and cannot take action."
  },
  {
    "name": "Fragrance of Death",
    "desc": "This unit's SPD increases at the end of every turn. When \"Pollux\" or \"The Long Arms of Sorrow\" is attacked, reduce \"Desperate Bubble\" and heal targets. When \"Desperate Bubble\" is completely consumed, dispel this state."
  },
  {
    "name": "Indulging Slumber",
    "desc": "When this target deals DMG to enemy targets, decreases DMG received by enemy targets. Restore HP to an ally target until it reaches a certain amount to dispel this effect."
  },
  {
    "name": "Territory",
    "desc": "Territory effects are unique in the battle. While it exists, other abilities with Territory effects cannot be used."
  },
  {
    "name": "Lunar Devourer",
    "desc": "While in this state, the Boss Mirage will use \"Going Solo,\" and an ally character must be selected to engage in \"Going Solo\" against Boss Mirage. During \"Going Solo,\" apart from the selected character and their summoned unit, all other ally targets will become Departed. This state is dispelled when the Boss Mirage becomes Weakness Broken."
  },
  {
    "name": "Blood Surge",
    "desc": "When a target character with \"Blood Surge\" and their summon enters \"Going Solo,\" they will additionally reduce enemy Toughness and restore HP after attacking. This effect is stackable and is removed when \"Going Solo\" ends."
  },
  {
    "name": "Combo",
    "desc": "This type of weapon has a chance of triggering their effect consecutively."
  },
  {
    "name": "Ominous Degeneration",
    "desc": "Uses \"Torrential Surge\" in the next action."
  },
  {
    "name": "Enemy units that can enter \"Lunar Devourer\"",
    "desc": "Enemy units that can enter \"Lunar Devourer\": Sableclaw Wolftrooper, Eclipse Wolftrooper, Fulminating Wolflord."
  },
  {
    "name": "Bloodlust",
    "desc": "All enemies that can enter \"Lunar Devourer\" will share \"Bloodlust\" stacks. When enemy units that can enter \"Lunar Devourer\" join the battle, they will apply the same number of \"Bloodlust\" stacks. At the end of the turn, if all enemies that can enter \"Lunar Devourer\" have been defeated, clears all \"Bloodlust\" stacks."
  },
  {
    "name": "Rising War Spirits",
    "desc": "Increases DMG dealt and Break Effect. This effect is stackable."
  },
  {
    "name": "Backup",
    "desc": "Enemies cannot actively target backup units. Allies' Blast-type abilities cannot Blast to backup units."
  },
  {
    "name": "Lurking",
    "desc": "Cannot become the primary target for abilities that require active selection. When Weakness is Broken or when all enemy units on the field aside from this unit are in \"Lurking\" state, dispels \"Lurking\" state for this unit. When there are no other enemy units on the battlefield, this unit dispels the \"Lurking\" state."
  },
  {
    "name": "Revel in Destruction",
    "desc": "Number of hits to advance action decreases. When taking DMG or using certain abilities to deal DMG, some DMG will be taken in the form of \"Black Tide Fever\" over a specific number of turns. When the \"Revel in Destruction\" countdown's turn begins, all enemy units will have their \"Revel in Destruction\" state dispelled."
  },
  {
    "name": "Black Tide Fever",
    "desc": "\"Black Tide Fever\" is a type of DoT debuff. The DoT originates from a part of the DMG that the target takes. When stacked, it resets the duration of \"Black Tide Fever.\" In \"Black Tide Fever,\" targets receive Wind Shear, Burn, Shock, and Bleed DoT at the start of their turns. The enemies' \"Black Tide Fever\" is immediately dispelled when the \"Revel in Destruction\" state ends. Allies' \"Black Tide Fever\" is immediately dispelled when their HP is fully restored. The targets will not take the DoT damage after this state is dispelled. Units will not take the DoT damage after this state is dispelled."
  },
  {
    "name": "Corrosion",
    "desc": "After attacking, restore a portion of Corroded HP. The more targets are hit, the more HP is restored. When taking DMG, a portion of the HP reduced is converted to Corrosion. When HP is consumed, the reduced HP will all be converted to Corrosion. When Corrosion is dispelled via restorative means, this unit obtains \"Renewal.\" Renewal increases the DMG dealt by the next attack."
  },
  {
    "name": "Duel",
    "desc": "Increases SPD. When receiving DMG from targets outside the Duel state, reduces DMG taken. Obtains 1 stack of \"Morale\" after each attack. When enemy Duel target receives DMG from the ally Duel target, the Duel's progress bar will be reduced based on the DMG. When the Duel's progress bar is at 0, the enemy will lose the Duel and the Duel state is dispelled. Each stack of Morale increases DMG dealt."
  },
  {
    "name": "Ionization",
    "desc": "In this state, after targets attack, they seize \"Thundercloud\" stacks based on number of friendly units hit in this attack. When \"Daythunder Raven,\" \"Shoot of Hundred Eyes,\" or \"Twig of Hundred Eyes\" receives a killing blow, target seizes a set number of \"Thundercloud\" stacks. If all \"Thundercloud\" stacks have been seized, this unit will enter the Weakness Break state."
  },
  {
    "name": "Rot",
    "desc": "Decreases Maximum Restorable HP."
  },
  {
    "name": "Mend",
    "desc": "Dispels the Crowd Control debuffs and Weakness Broken state from designated friendly units. If the designated friendly units are not currently selectable, causes them to become selectable."
  },
  {
    "name": "Shackle Shatter",
    "desc": "Alternates between using \"Dying Sobs\" and \"But Suffering is Essential.\" \"Dying Sobs\" summons \"Long-Shattered Vessel\" and enters Charging state, and \"But Suffering is Essential\" deals Powerful Attacks. \"Calamity Power\" stacks increases the Hits Per Action of Powerful Attacks. After destroying \"Long-Shattered Vessel,\" Toughness and \"Calamity Power\" stacks can be reduced. In the second phase, \"Silent Sorrow\" and \"Cry Not for the Discarded\" will be used, and \"Calamity Power\" stacks increases."
  },
  {
    "name": "Overworked",
    "desc": "While in Overworked mode, this unit will not change its state when attacked."
  },
  {
    "name": "Continuous Effect",
    "desc": "Includes buffs, debuffs, and other effects."
  },
  {
    "name": "Entangled By Agony",
    "desc": "After absorbing \"Demon King's Minions,\" restores the HP consumed to summon the current \"Demon King's Minions.\" After \"Demon King's Minions\" is defeated, this unit cannot restore the HP consumed used to summon the current \"Demon King's Minions\" again."
  },
  {
    "name": "Scourge",
    "desc": "Khaslana's exclusive charge with an upper limit of 7. Will be retained even before transforming."
  },
  {
    "name": "Khaslana's Extra Turn",
    "desc": "When Phainon transforms into Khaslana, a countdown will appear on the Action Order. When the countdown begins, Khaslana will gain 1 extra turn. When the last turn of the countdown begins, transforms into Khaslana and delivers a final hit before ending the transformation.\\nThe countdown initial action value will be set between 0–100%. The action value will not be reset at the start of each wave.\\nWhen Khaslana is under the effect of action advance, the first countdown's action is advanced instead."
  },
  {
    "name": "Fragrance of Death",
    "desc": "This unit's SPD increases at the end of every turn. When Castorice, Hand of Shadow or \"The Long Arms of Sorrow\" is attacked, reduce \"Desperate Bubble\" and heal targets. When \"Desperate Bubble\" is completely consumed, dispel this state."
  },
  {
    "name": "Shackle Shatter",
    "desc": "Alternates between using \"Silent Sorrow\" and \"Cry Not for the Discarded.\" Defeat \"Long-Shattered Vessel\" to reduce Toughness and \"Calamity Power\" stacks."
  },
  {
    "name": "Enemy units that can enter \"Revel in Destruction\" state",
    "desc": "Enemy units that can enter \"Revel in Destruction\" state: Servant of Tides, Lady of Crashing Waves, Mirage Fizzle Kid, Cyclonic Swarm Mother."
  },
  {
    "name": "Coup de Main",
    "desc": "Copy and immediately use the ability about to be used, then use the original ability.\\nCoup de Main won't trigger Coup de Main again."
  },
  {
    "name": "Antinomy",
    "desc": "Unit's Ultimate is activated. Using the Ultimate prioritizes reducing Shield and causes Non-fatal HP loss. If the Ultimate is not used during the effect duration, the Energy will be restored when the effect ends."
  },
  {
    "name": "Potential Realization",
    "desc": "DMG dealt increases, and HP is restored at the start of turn."
  },
  {
    "name": "Retribution of \"Law\"",
    "desc": "Lose HP after each action."
  },
  {
    "name": "On-Field Strength",
    "desc": "On-Field Strength affects the DMG dealt when the target is On-Field. The higher the On-Field strength, the higher the DMG.\\nDMG dealt while On-Field = Original DMG × On-Field Strength/100"
  },
  {
    "name": "Off-Field Strength",
    "desc": "Off-Field Strength affects the DMG dealt while the target is off-field. The higher the Off-Field Strength, the higher the DMG.\\nDMG dealt while off-field = Original DMG × Off-Field Strength/100"
  },
  {
    "name": "DMG Amplification",
    "desc": "DMG Amplification increases the DMG dealt by the target.\\nDMG Amplification is calculated independently of other DMG Boost effects."
  },
  {
    "name": "DMG Mitigation",
    "desc": "DMG Mitigation reduces DMG taken by the target.\\nDMG Mitigation is calculated independently of other DMG Mitigation and DMG reduction effects."
  },
  {
    "name": "Lucky Strike Rate",
    "desc": "The chance to trigger Lucky Strike when attacking.\\nAfter Lucky Strike is triggered on attack, the DMG will be boosted by Lucky Strike DMG bonus.\\nLucky Strike and CRIT Hit can trigger simultaneously, with probabilities calculated independently based on Lucky Strike Rate and CRIT Rate.\\nDMG types that can trigger Lucky Strike are the same as those that can trigger CRIT Hit."
  },
  {
    "name": "Lucky Strike DMG",
    "desc": "The DMG bonus received when a Lucky Strike is triggered.\\nLucky Strike DMG Boost is calculated independently of other DMG Boost effects."
  },
  {
    "name": "SPD Amplification",
    "desc": "SPD Amplification increases the target's action SPD.\\nSPD Amplification is calculated independently of other SPD Boost effects."
  },
  {
    "name": "Healing Strength",
    "desc": "Healing Strength affects the amount of Outgoing Healing provided to the target. The higher the Healing Strength, the higher the Outgoing Healing.\\nOutgoing Healing = Original Healing × Healing Strength/100"
  },
  {
    "name": "Shield Strength",
    "desc": "Shield Strength affects the Shield Effect provided by the target. The higher the Shield Strength, the higher the Shield Effect.\\nShield Effect = Original Shield Effect × Shield Strength/100"
  },
  {
    "name": "Stormride",
    "desc": "Targets affected by \"Stormride\" will immediately take action after the turn ends. Turns triggered by \"Stormride\" cannot be triggered again. This effect is dispelled after being inflicted with Weakness Break."
  },
  {
    "name": "Hemotort Resonance",
    "desc": "After other \"Ichor Memosprite: Pheasant\" in the \"Hemotort Resonance\" state attacks, this unit will also launch an attack."
  },
  {
    "name": "Hemotort Stain",
    "desc": "After attacking, applies \"Hemotort Corruption\" on the targets hit based on the amount of taken DMG that is not offset by a Shield."
  },
  {
    "name": "Hemotort Corruption",
    "desc": "Take a set amount of Imaginary DMG at the beginning of the turn."
  },
  {
    "name": "Fragrance of Death",
    "desc": "This unit's SPD increases at the end of every turn. When \"Guide of Withering and Decay\" or \"The Long Arms of Sorrow\" is attacked, reduce \"Desperate Bubble\" and heal allies' HP. When \"Desperate Bubble\" is completely consumed, dispel this state and inflict Weakness Break state on \"Guide of Withering and Decay.\""
  },
  {
    "name": "HP Overload",
    "desc": "\"HP Overload\" is the amount of DMG that exceeds your current HP, and it will continue to accumulate. When receiving healing, prioritizes restoring their \"HP Overload.\""
  },
  {
    "name": "Death Rattle",
    "desc": "The target has accumulated a certain amount of \"HP Overload\", reducing their DMG dealt and Weakness Break Efficiency. They will receive fatal damage after a certain number of turns."
  },
  {
    "name": "Corrosive Retaliation",
    "desc": "After attacking this target, the attacker will receive minor Quantum \"Atrophy DMG.\""
  },
  {
    "name": "Elation",
    "desc": "A base stat that affects Elation DMG and can boost the multiplier for Elation DMG dealt."
  },
  {
    "name": "Breeding Frenzy",
    "desc": "In this state, \"Cyclonic Swarm Mother\" takes less DMG when attacked. When this unit takes action early due to \"Respite By The Waters,\" it will consume HP, summon \"Mirage Fizzle Kid,\" and slightly delay the action of \"Incubation.\""
  },
  {
    "name": "Overloadable",
    "desc": "Target's HP cannot be reduced below 1, and DMG taken exceeding their current HP will be converted to \"HP Overload.\" When receiving healing, prioritizes restoring their \"HP Overload.\""
  },
  {
    "name": "Action Lock",
    "desc": "The target's action value will not change because of the end of any target's turn."
  },
  {
    "name": "Glory",
    "desc": "Each stack of \"Glory\" increases CRIT DMG, each Skill Point consumed adds 1 stack of \"Glory.\" When attacking, can dispel corresponding stacks of \"War Armor\" or \"Centirefined War Armor\" corresponding to the \"Glory\" stacks."
  },
  {
    "name": "Centirefined Attack Ability",
    "desc": "\"Lightning Spear of the Firmament\" enhanced to \"Worldsplitting Spine,\" \"Hewing of the River of Souls\" enhanced to \"Survivors Unto Dead Waters,\" \"Unceasing Flames of War\" enhanced to \"Pyre of High Graves,\" \"Sky-Piercing Lance\" enhanced to \"Ruination of Night and Light.\""
  },
  {
    "name": "War Armor",
    "desc": "Decreases DMG taken. Loses stacks of \"War Armor\" based on the attacker's \"Glory\" stacks when attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit, reducing their Toughness, delaying their action, and restoring Skill Point(s) to targets. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn."
  },
  {
    "name": "Centirefined War Armor",
    "desc": "Decreases DMG taken. After being attacked, reduces stacks of \"Centirefined War Armor\" based on the attacker's \"Glory\" stacks. When reduced to 0 stacks, \"Centirefined War Armor\" is destroyed, dealing massive Imaginary DMG to this unit, reducing a large amount of Toughness, delaying their action, restoring Skill Points to targets, and granting the attacker certain stacks of \"Glory.\" After \"Centirefined War Armor\" is destroyed, this unit will additionally take minor Imaginary DMG when attacked. If \"Centirefined War Armor\" is at 0 stacks at the end of this unit's turn, it will be restored to maximum stacks."
  },
  {
    "name": "Out-of-Bounds",
    "desc": "Neither allies nor enemies can actively select Out-of-Bounds units."
  },
  {
    "name": "Crowd Control debuff",
    "desc": "Freeze, Entanglement, Imprisonment, Dominated, Outrage, Strong Reverberation, Alien Dream, Snarelock, Terrified, Action Lock."
  },
  {
    "name": "HP Count",
    "desc": "Targets with \"HP Count\" won't lose HP when attacked, but their \"HP Count\" will decrease instead. When the \"HP Count\" reaches zero, they will be knocked down."
  },
  {
    "name": "Back Row",
    "desc": "\"Back Row Target\" is located in the back of the formation on the field and cannot be selected by \"Single Target ATK\" and \"Blast\"-type abilities."
  },
  {
    "name": "Glacial Erosion",
    "desc": "\"Glacial Erosion\" is a DoT-type debuff. When affected by \"Glacial Erosion,\" the target takes Ice DoT equal to a certain percentage of their Max HP at the start of each turn."
  },
  {
    "name": "Chrysos Heir",
    "desc": "Cyrene, Tribbie, Cerydra, Evernight, Dan Heng • Permansor Terrae, Hysilens, Hyacine, Phainon, Anaxa, Aglaea, Mydei, Castorice, Cipher, Trailblazer (Remembrance)."
  },
  {
    "name": "Aha",
    "desc": "When taking action, triggers an Aha Instant and causes units capable of using Elation Skills to each use their Elation Skill 1 time. If there are no units capable of using Elation Skills when Aha takes action, Aha will use \"Let There Be Laughter.\"\\nThe Aha Instant lasts until the final Elation Skill finishes this time.\\nWhen the Aha Instant ends, participating characters gain the \"Certified Banger\" state for the Punchline points taken into account this time, lasting for 2 turns. After Aha takes action, all Punchlines will be consumed."
  },
  {
    "name": "Punchline",
    "desc": "Punchline is shared by the whole team. When dealing Elation DMG, the more Punchline taken into account, the higher the Elation DMG."
  },
  {
    "name": "Elation DMG",
    "desc": "The more Punchline taken into account, and the higher the Elation and Character Level, the greater the Elation DMG dealt.\\nElation DMG is not affected by DMG Boost effects."
  },
  {
    "name": "Colorless",
    "desc": "When attacked by ally targets, gains 1 point of \"Paint\" based on the attacker's Type. If Elation DMG is received during the attack, then additionally gains a certain amount of \"Paint.\" When reaching 6 points of \"Paint,\" enters the \"Color\" state. During this state, based on the Types of Paint already gained, gains corresponding Types of Weakness and decreases the Type RES of corresponding Type. When in the \"Colorless\" state, Toughness will not drop below 1."
  },
  {
    "name": "Color",
    "desc": "When using abilities, \"Paint\" will be consumed to deal Additional DMG of the corresponding Type. At the end of the turn, if all \"Paint\" has been consumed, enters the \"Colorless\" state and removes Weakness and Type RES reduction caused by \"Paint.\" When Weakness is Broken, consumes all \"Paint\" to deal Additional DMG equal to a percentage of this unit's max HP to this unit."
  },
  {
    "name": "Paint",
    "desc": "\"Canvas Peacock\": When using abilities while in the \"Color\" state, \"Paint\" will be consumed to deal Additional DMG of the corresponding Type. Each Type corresponds to a different \"Paint.\""
  },
  {
    "name": "Color Imbalance",
    "desc": "Unable to use Ultimate."
  },
  {
    "name": "Revelry",
    "desc": "Cannot take action. At the start of the turn, if the inflictor is not in a Charging state, they will initiate a Sweep attack."
  },
  {
    "name": "Live Showdown",
    "desc": "All ally targets will engage in combat in prime-field and sub-field respectively. Aside the Aha Instant, targets from different battlefields cannot attack targets on the other battlefield. During the Aha Instant, Elation Skills can only be used to attack enemy targets that are on the sub-field.\\nLive Showdown will be dispelled when any of these conditions are met: Live Showdown countdown ends, an sub-field ally character is knocked down, all sub-field enemy targets are defeated, or there are no sub-field ally characters remaining who can battle."
  },
  {
    "name": "Ally Gratuity",
    "desc": "All-Type RES PEN Boost."
  },
  {
    "name": "Enemy Gratuity",
    "desc": "Increases DMG dealt."
  },
  {
    "name": "Random Bullet Comments Penalty",
    "desc": "Randomly inflicts one of the following states: \"ATK Reduction\", \"DEF Reduction\", \"SPD Reduction\", \"Weaken\", or \"Entanglement.\""
  },
  {
    "name": "Certified Banger",
    "desc": "Characters participating in the Aha Instant gain the \"Certified Banger\" state. And the Punchline points from the current Aha Instant are taken into account for this state, lasting for 2 turns. Ability effects and Elation DMG produced by the \"Certified Banger\" state are calculated based on the Punchline points taken into account.\\nPunchline points taken into account for multiple \"Certified Banger\" states are combined for the calculation.\\nThe duration of each \"Certified Banger\" state is tracked independently."
  },
  {
    "name": "Participant ID",
    "desc": "The Participant ID determines the order in which Elation Skills are used during the Aha Instant. The lower the Participant ID, the earlier the Elation Skill will be used."
  },
  {
    "name": "Merrymake",
    "desc": "A special effect that affects Elation DMG and can additionally boost Elation DMG dealt."
  }
]