let characters = {
  "Firefly": {
    "internalID": 1310,
    "name": "Firefly",
    "path": "Destruction",
    "element": "Fire",
    "rarity": 5,
    "energyMax": 240,
    "baseStats": {
      "ATKBase": 523.908,
      "DEFBase": 776.1600000000001,
      "HPBase": 814.968,
      "SPDBase": 104,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "131001",
        "name": "In Reddened Chrysalis, I Once Rest",
        "rank": 1,
        "desc": "When using the Enhanced Skill, ignores 15% of the target's DEF. The Enhanced Skill does not consume Skill Points.",
        "icon": "icon/skill/1310_rank1.png",
        "paramsEido": [
          0.15
        ]
      },
      {
        "id": "131002",
        "name": "From Shattered Sky, I Free Fall",
        "rank": 2,
        "desc": "While in Complete Combustion, using the Enhanced Basic ATK or the Enhanced Skill to defeat an enemy target or to Break their Weakness allows SAM to immediately gain 1 extra turn. This effect can trigger again after 1 turn(s).",
        "icon": "icon/skill/1310_rank2.png",
        "paramsEido": [
          1,
          1
        ],
        "extraEffects": {
          "Weakness Break State": {
            "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
          },
          "Extra Turn": {
            "desc": "Gain 1 extra turn that won't expend your remaining turns when taking action. During this extra turn, no Ultimate can be used."
          }
        }
      },
      {
        "id": "131003",
        "name": "Amidst Silenced Stars, I Deep Sleep",
        "rank": 3,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1310_skill.png"
      },
      {
        "id": "131004",
        "name": "Upon Lighted Fyrefly, I Soon Gaze",
        "rank": 4,
        "desc": "While in Complete Combustion, increases SAM's Effect RES by 50%.",
        "icon": "icon/skill/1310_rank4.png",
        "paramsEido": [
          0.5
        ]
      },
      {
        "id": "131005",
        "name": "From Undreamt Night, I Thence Shine",
        "rank": 5,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1310_ultimate.png"
      },
      {
        "id": "131006",
        "name": "In Finalized Morrow, I Full Bloom",
        "rank": 6,
        "desc": "While in Complete Combustion, increases SAM's Fire RES PEN by 20%. When using the Enhanced Basic ATK or Enhanced Skill, increases Weakness Break Efficiency by 50%.",
        "icon": "icon/skill/1310_rank6.png",
        "paramsEido": [
          0.2,
          0.5
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Skill": 2
      },
      "5": {
        "Ultimate": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Order: Flare Propulsion": {
          "variant1": {
            "skillID": 131001,
            "trigger": "Skill01",
            "name": "Order: Flare Propulsion",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Fire DMG equal to #1[i]% of SAM's ATK to one designated enemy target.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ]
            },
            "element": "Fire",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Sam_00_Skill01_Camera",
              "Avatar_Sam_00_Skill01_Phase01",
              "Avatar_Sam_00_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        },
        "Fyrefly Type-IV: Pyrogenic Decimation": {
          "variant1": {
            "skillID": 131008,
            "trigger": "Skill11",
            "name": "Fyrefly Type-IV: Pyrogenic Decimation",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Restores HP by an amount equal to #2[i]% of this unit's Max HP. Deals Fire DMG equal to #1[i]% of SAM's ATK to one designated enemy target.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 15,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                2,
                0.2
              ],
              "7": [
                2.2,
                0.2
              ],
              "8": [
                2.4,
                0.2
              ]
            },
            "element": "Fire",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Sam_00_Skill11_Camera",
              "Avatar_Sam_00_Skill11_Phase01",
              "Avatar_Sam_00_Skill11_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 45
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 15
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 15
                }
              },
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 15
                }
              },
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 15
                }
              },
              {
                "primary": {
                  "hitRatio": 0.4,
                  "energyRatio": 1,
                  "toughness": 15
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        }
      },
      "Skill": {
        "Order: Aerial Bombardment": {
          "variant1": {
            "skillID": 131002,
            "trigger": "Skill02",
            "name": "Order: Aerial Bombardment",
            "type": "Single Target",
            "slot": "Skill",
            "desc": "Consumes HP equal to #2[i]% of this unit's Max HP and regenerates a fixed amount of Energy equal to #3[i]% of this unit's Max Energy. Deals Fire DMG equal to #1[i]% of SAM's ATK to one designated enemy target. If the current HP is not sufficient, reduces SAM's HP to 1 when using this Skill. Advances this unit's next Action by #4[i]%.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.625,
                0.4,
                0.5625,
                0.25
              ],
              "8": [
                1.75,
                0.4,
                0.575,
                0.25
              ],
              "9": [
                1.875,
                0.4,
                0.5875,
                0.25
              ],
              "10": [
                2,
                0.4,
                0.6,
                0.25
              ],
              "11": [
                2.1,
                0.4,
                0.61,
                0.25
              ],
              "12": [
                2.2,
                0.4,
                0.62,
                0.25
              ]
            },
            "element": "Fire",
            "attackType": "BPSkill",
            "skillEffect": "SingleAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sam_00_Skill02_Camera",
              "Avatar_Sam_00_Skill02_Phase01",
              "Avatar_Sam_00_Skill02_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.4,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.6,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ],
            "extraEffects": {
              "Action Advanced": {
                "desc": "Reduces the target's waiting interval before the next action."
              }
            }
          }
        },
        "Fyrefly Type-IV: Deathstar Overload": {
          "variant1": {
            "skillID": 131009,
            "trigger": "Skill21",
            "name": "Fyrefly Type-IV: Deathstar Overload",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Restores HP by an amount equal to #3[i]% of this unit's Max HP. Applies Fire Weakness to one designated enemy target, lasting for #4[i] turn(s). Deals Fire DMG equal to (#5[f1] × Break Effect + #1[f1]%) of SAM's ATK to this target. At the same time, deals Fire DMG equal to (#6[f1] × Break Effect + #2[f1]%) of SAM's ATK to adjacent targets. The Break Effect taken into the calculation is capped at #7[i]%.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 30,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.625,
                0.8125,
                0.25,
                2,
                0.2,
                0.1,
                3.6
              ],
              "8": [
                1.75,
                0.875,
                0.25,
                2,
                0.2,
                0.1,
                3.6
              ],
              "9": [
                1.875,
                0.9375,
                0.25,
                2,
                0.2,
                0.1,
                3.6
              ],
              "10": [
                2,
                1,
                0.25,
                2,
                0.2,
                0.1,
                3.6
              ],
              "11": [
                2.1,
                1.05,
                0.25,
                2,
                0.2,
                0.1,
                3.6
              ],
              "12": [
                2.2,
                1.1,
                0.25,
                2,
                0.2,
                0.1,
                3.6
              ]
            },
            "element": "Fire",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sam_00_Skill21_Camera",
              "Avatar_Sam_00_Skill21_Phase01",
              "Avatar_Sam_00_Skill21_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 90
              },
              {
                "Value": 0
              },
              {
                "Value": 45
              }
            ],
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 30
                },
                "blast": {
                  "hitRatio": 0.15,
                  "toughness": 15
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 30
                },
                "blast": {
                  "hitRatio": 0.15,
                  "toughness": 15
                }
              },
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 30
                },
                "blast": {
                  "hitRatio": 0.15,
                  "toughness": 15
                }
              },
              {
                "primary": {
                  "hitRatio": 0.15,
                  "energyRatio": 1,
                  "toughness": 30
                },
                "blast": {
                  "hitRatio": 0.15,
                  "toughness": 15
                }
              },
              {
                "primary": {
                  "hitRatio": 0.4,
                  "energyRatio": 1,
                  "toughness": 30
                },
                "blast": {
                  "hitRatio": 0.4,
                  "toughness": 15
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        }
      },
      "Ultimate": {
        "Fyrefly Type-IV: Complete Combustion": {
          "variant1": {
            "skillID": 131003,
            "trigger": "Skill03",
            "name": "Fyrefly Type-IV: Complete Combustion",
            "type": "Enhance",
            "slot": "Ultimate",
            "desc": "Enters the Complete Combustion state, advances this unit's Action by 100%, and gains Enhanced Basic ATK and Enhanced Skill. While in Complete Combustion, increases SPD by #3[i], and when using the Enhanced Basic ATK or Enhanced Skill, increases this unit's Weakness Break Efficiency by #2[i]% and the Break DMG dealt by SAM to the enemy targets by #1[f1]%, lasting until this current attack ends.\\nA countdown timer for the Complete Combustion state appears in the Action Order. When the countdown timer's turn starts, SAM exits the Complete Combustion state. The countdown timer has a fixed SPD of #4[i].\\nSAM cannot use Ultimate while in Complete Combustion.",
            "energyCost": 240,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.1625,
                0.5,
                48.75,
                70
              ],
              "8": [
                0.175,
                0.5,
                52.5,
                70
              ],
              "9": [
                0.1875,
                0.5,
                56.25,
                70
              ],
              "10": [
                0.2,
                0.5,
                60,
                70
              ],
              "11": [
                0.21,
                0.5,
                63,
                70
              ],
              "12": [
                0.22,
                0.5,
                66,
                70
              ]
            },
            "attackType": "Ultra",
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sam_00_Skill03_Camera",
              "Avatar_Sam_00_Skill03_EnterReady",
              "Avatar_Sam_00_Skill03_Phase01",
              "Avatar_Sam_00_Skill03_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Talent": {
        "Chrysalid Pyronexus": {
          "variant1": {
            "skillID": 131004,
            "trigger": "SkillP01",
            "name": "Chrysalid Pyronexus",
            "type": "Defense",
            "slot": "Talent",
            "desc": "The lower the HP, the less DMG received. When HP is #3[i]% or lower, the DMG Reduction reaches its maximum effect, reducing up to #1[i]%. During the Complete Combustion, the DMG Reduction remains at its maximum effect, and the Effect RES increases by #4[i]%.\\nIf Energy is lower than #2[i]% when the battle starts, regenerates Energy to #2[i]%. Once Energy is regenerated to its maximum, dispels all debuffs on this unit.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                0.325,
                0.5,
                0.2,
                0.225
              ],
              "8": [
                0.35,
                0.5,
                0.2,
                0.25
              ],
              "9": [
                0.375,
                0.5,
                0.2,
                0.275
              ],
              "10": [
                0.4,
                0.5,
                0.2,
                0.3
              ],
              "11": [
                0.42,
                0.5,
                0.2,
                0.32
              ],
              "12": [
                0.44,
                0.5,
                0.2,
                0.34
              ]
            },
            "element": "Fire",
            "skillEffect": "Defence",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Sam_00_PassiveSkill01",
              "Avatar_Sam_00_Rank02_Bonus",
              "Avatar_Sam_00_PassiveSkill01_BattleEvent_Insert"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [],
            "extraEffects": {
              "Debuff": {
                "desc": "Debuffs are negative status effects that render units weaker. Unless otherwise specified, debuffs can be dispelled."
              }
            }
          }
        }
      },
      "Technique": {
        "Δ Order: Meteoric Incineration": {
          "variant1": {
            "skillID": 131007,
            "trigger": "SkillMaze",
            "name": "Δ Order: Meteoric Incineration",
            "slot": "Technique",
            "desc": "Leaps into the air and moves about freely for #1[i] seconds, which can be ended early by launching a plunging attack. When the duration ends, plunges and immediately attacks all enemies within a set area. At the start of each wave, applies a Fire Weakness to all enemies, lasting for #3[i] turn(s). Then, deals Fire DMG equal to #2[i]% of SAM's ATK to all enemies.",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                5,
                2,
                2
              ]
            },
            "element": "Fire",
            "attackType": "Maze",
            "skillEffect": "MazeAttack",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Sam_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1310_basic_atk.png",
        "skillRef": {
          "skillName": "Order: Flare Propulsion",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1310_skill.png",
        "skillRef": {
          "skillName": "Order: Aerial Bombardment",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1310_ultimate.png",
        "skillRef": {
          "skillName": "Fyrefly Type-IV: Complete Combustion",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1310_talent.png",
        "skillRef": {
          "skillName": "Chrysalid Pyronexus",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1310_technique.png",
        "skillRef": {
          "skillName": "Δ Order: Meteoric Incineration",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Module α: Antilag Outburst",
        "icon": "icon/skill/1310_skilltree1.png",
        "desc": "During the Complete Combustion, attacking enemies that have no Fire Weakness can also reduce their Toughness, with the effect being equivalent to #1[i]% of the original Toughness Reduction from abilities.",
        "params": [
          0.55
        ]
      },
      "Point07": {
        "name": "Module β: Autoreactive Armor",
        "icon": "icon/skill/1310_skilltree2.png",
        "desc": "When SAM is in Complete Combustion with a Break Effect that is equal to or greater than #1[i]%/#2[i]%, attacking a Weakness-Broken enemy target will convert the Toughness Reduction of this attack into 1 instance of #3[i]%/#4[i]% Super Break DMG.",
        "params": [
          2,
          3.6,
          0.35,
          0.5
        ],
        "extraEffects": {
          "Weakness Break State": {
            "desc": "When enemy targets' Toughness is reduced to 0, they will enter the Weakness Break State, which delays their actions."
          },
          "Super Break DMG": {
            "desc": "Super Break DMG increases with higher Break Effect, higher Toughness Reduction of the attack, and higher character levels.\\nSuper Break DMG cannot CRIT Hit and is not affected by DMG Boost effects.\\nSuper Break DMG is also considered Break DMG."
          }
        }
      },
      "Point08": {
        "name": "Module γ: Core Overload",
        "icon": "icon/skill/1310_skilltree3.png",
        "desc": "For every #2[i] point(s) of SAM's ATK that exceeds #1[i], increases this unit's Break Effect by #3[f1]%.",
        "params": [
          1800,
          10,
          0.007999999
        ]
      },
      "Point09": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.053
        }
      },
      "Point10": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.04
        }
      },
      "Point11": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.053
        }
      },
      "Point12": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 2
        }
      },
      "Point13": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.08
        }
      },
      "Point14": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.06
        }
      },
      "Point15": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.08
        }
      },
      "Point16": {
        "name": "SPD Boost",
        "icon": "icon/property/IconSpeed.png",
        "stats": {
          "SPDFlat": 3
        }
      },
      "Point17": {
        "name": "Effect RES Boost",
        "icon": "icon/property/IconStatusResistance.png",
        "stats": {
          "EffectRES": 0.08
        }
      },
      "Point18": {
        "name": "Break Boost",
        "icon": "icon/property/IconBreakUp.png",
        "stats": {
          "DamageBreak": 0.107
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1310.png",
    "preview": "image/character_preview/1310.png",
    "portrait": "image/character_portrait/1310.png",
    "bannerOffsets": [
      54,
      45,
      0.63,
      54,
      45,
      0.63,
      54,
      45,
      0.63
    ]
  },
  "Saber": {
    "internalID": 1014,
    "name": "Saber",
    "path": "Destruction",
    "element": "Wind",
    "rarity": 5,
    "energyMax": 360,
    "baseStats": {
      "ATKBase": 601.5239999999999,
      "DEFBase": 654.885,
      "HPBase": 1241.8560000000002,
      "SPDBase": 101,
      "CritRateBase": 0.05,
      "CritDamageBase": 0.5,
      "AggroBase": 125
    },
    "eidolons": [
      {
        "id": "101401",
        "name": "The Lost White Walls",
        "rank": 1,
        "desc": "Increases the Ultimate DMG dealt by Saber by 60%. After Saber uses Basic ATK or Skill, gains 1 \"Core Resonance.\"",
        "icon": "icon/skill/1014_rank1.png",
        "paramsEido": [
          0.6,
          1
        ]
      },
      {
        "id": "101402",
        "name": "The Lost Oath of the Round Table",
        "rank": 2,
        "desc": "For every 1 point of \"Core Resonance\" gained in this battle, Saber's DMG dealt ignores 1.0% of the target's DEF. This effect stacks up to 15 time(s). When triggering the \"Core Resonance\" effect to boost Skill's multiplier, each point of \"Core Resonance\" additionally increases the DMG multiplier for the current instance of Skill by 7%.",
        "icon": "icon/skill/1014_rank2.png",
        "paramsEido": [
          0.07,
          0.01,
          15
        ]
      },
      {
        "id": "101403",
        "name": "A Wish Across Fifteen Centuries",
        "rank": 3,
        "desc": "Ultimate Lv. +2, up to a maximum of Lv. 15.\nBasic ATK Lv. +1, up to a maximum of Lv. 10.",
        "icon": "icon/skill/1014_ultimate.png"
      },
      {
        "id": "101404",
        "name": "The Saga of Sixteen Winter Days",
        "rank": 4,
        "desc": "Increases Saber's Wind RES PEN by 8%. After using Ultimate, increases Saber's Wind RES PEN by 4%. This effect stacks up to 3 time(s).",
        "icon": "icon/skill/1014_rank4.png",
        "paramsEido": [
          0.08,
          0.04,
          3
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      },
      {
        "id": "101405",
        "name": "The Dreamed Utopian Dawn",
        "rank": 5,
        "desc": "Skill Lv. +2, up to a maximum of Lv. 15.\nTalent Lv. +2, up to a maximum of Lv. 15.",
        "icon": "icon/skill/1014_skill.png"
      },
      {
        "id": "101406",
        "name": "The Long Fated Night",
        "rank": 6,
        "desc": "The Wind RES PEN of the Ultimate DMG dealt by Saber increases by 20%. The amount of overflow Energy that can be accumulated with the Trace \"Blessing of the Lake\" increases to 200. After using Ultimate for the first time upon entering combat, regenerates a fixed amount of 300 Energy for Saber. This effect can trigger 1 time after every 3 Ultimate use(s).",
        "icon": "icon/skill/1014_rank6.png",
        "paramsEido": [
          0.2,
          3,
          300,
          200
        ],
        "extraEffects": {
          "RES PEN": {
            "desc": "When dealing DMG, ignore a part of the enemy target's resistance to the corresponding damage type."
          }
        }
      }
    ],
    "eidlonLevelBonuses": {
      "3": {
        "Basic ATK": 1,
        "Ultimate": 2
      },
      "5": {
        "Skill": 2,
        "Talent": 2
      }
    },
    "skills": {
      "Basic ATK": {
        "Invisible Air: Barrier of the Wind King": {
          "variant1": {
            "skillID": 101401,
            "trigger": "Skill01",
            "name": "Invisible Air: Barrier of the Wind King",
            "type": "Single Target",
            "slot": "Basic ATK",
            "desc": "Deals Wind DMG equal to #1[i]% of Saber's ATK to one designated enemy.",
            "energyCost": null,
            "energyRegen": 20,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 10,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                1
              ],
              "7": [
                1.1
              ],
              "8": [
                1.2
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "SingleAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Saber_Skill01_Camera",
              "Avatar_Saber_00_Skill01_Phase01",
              "Avatar_Saber_00_Skill01_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 30
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true,
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        },
        "Release, the Golden Scepter": {
          "variant1": {
            "skillID": 101408,
            "trigger": "Skill11",
            "name": "Release, the Golden Scepter",
            "type": "AoE",
            "slot": "Basic ATK",
            "desc": "Gains #2[i] point(s) of \"Core Resonance\" and deals Wind DMG to all enemies equal to #1[i]% of Saber's ATK. When this ability is used, if the number of enemy targets is 2 or 1, additionally deals Wind DMG to all enemies equal to #3[i]% or #4[i]% of Saber's ATK respectively.",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 0,
            "skillPointGain": 1,
            "params": {
              "6": [
                1.5,
                2,
                1.5,
                2.2
              ],
              "7": [
                1.65,
                2,
                1.65,
                2.42
              ],
              "8": [
                1.8,
                2,
                1.8,
                2.64
              ]
            },
            "element": "Wind",
            "attackType": "Normal",
            "skillEffect": "AoEAttack",
            "maxLevel": 10,
            "configAbilityList": [
              "Avatar_Saber_00_Skill11_Camera",
              "Avatar_Saber_00_Skill11_Phase01",
              "Avatar_Saber_00_Skill11_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 60
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 0.5,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "all": {
                  "hitRatio": 0.5,
                  "energyRatio": 1,
                  "toughness": 20
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        }
      },
      "Skill": {
        "Strike Air: Hammer of the Wind King": {
          "variant1": {
            "skillID": 101402,
            "trigger": "Skill02",
            "name": "Strike Air: Hammer of the Wind King",
            "type": "Blast",
            "slot": "Skill",
            "desc": "Deals Wind DMG equal to #1[i]% of Saber's ATK to one designated enemy, and deals Wind DMG equal to #2[i]% of Saber's ATK to adjacent targets. If Saber currently holds \"Core Resonance\" and her Energy can be fully regenerated by consuming \"Core Resonance\" after this instance of Skill attack, then increases the multiplier for this instance of Skill. For every 1 point of \"Core Resonance,\" increases the DMG multiplier for this instance of Skill by #4[f1]%. And after the attack, consumes all \"Core Resonance\" to regenerate Energy for Saber. Otherwise, immediately gains #3[i] point(s) of \"Core Resonance.\"",
            "energyCost": null,
            "energyRegen": 30,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 20,
            "skillPointCost": 1,
            "skillPointGain": 0,
            "params": {
              "7": [
                1.21875,
                0.609375,
                3,
                0.11375
              ],
              "8": [
                1.3125,
                0.65625,
                3,
                0.1225
              ],
              "9": [
                1.40625,
                0.703125,
                3,
                0.13125
              ],
              "10": [
                1.5,
                0.75,
                3,
                0.14
              ],
              "11": [
                1.575,
                0.7875,
                3,
                0.147
              ],
              "12": [
                1.65,
                0.825,
                3,
                0.154
              ]
            },
            "element": "Wind",
            "attackType": "BPSkill",
            "skillEffect": "Blast",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Saber_Skill02_Camera",
              "Avatar_Saber_00_Skill02_Phase01",
              "Avatar_Saber_00_Skill02_Phase02"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 0
              },
              {
                "Value": 30
              }
            ],
            "hitSplits": [
              {
                "primary": {
                  "hitRatio": 0.1,
                  "energyRatio": 0.1,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.1,
                  "toughness": 10
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "primary": {
                  "hitRatio": 0.1,
                  "energyRatio": 0.1,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.1,
                  "energyRatio": 0.1,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.1,
                  "toughness": 10
                }
              },
              {
                "primary": {
                  "hitRatio": 0.7,
                  "energyRatio": 0.7,
                  "toughness": 20
                },
                "blast": {
                  "hitRatio": 0.7,
                  "toughness": 10
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        }
      },
      "Ultimate": {
        "Excalibur": {
          "variant1": {
            "skillID": 101403,
            "trigger": "Skill03",
            "name": "Excalibur",
            "type": "AoE",
            "slot": "Ultimate",
            "desc": "Deals Wind DMG equal to #1[i]% of Saber's ATK to all enemies, and additionally deals #3[i] instance(s) of DMG, with each instance being Wind DMG equal to #2[i]% of Saber's ATK dealt to one random enemy. After using Ultimate, the next Basic ATK switches to \"Release, the Golden Scepter,\" and only \"Release, the Golden Scepter\" can be used.",
            "energyCost": 360,
            "energyRegen": 5,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": 40,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                2.275,
                0.89375,
                10
              ],
              "8": [
                2.45,
                0.9625,
                10
              ],
              "9": [
                2.625,
                1.03125,
                10
              ],
              "10": [
                2.8,
                1.1,
                10
              ],
              "11": [
                2.94,
                1.155,
                10
              ],
              "12": [
                3.08,
                1.21,
                10
              ]
            },
            "element": "Wind",
            "attackType": "Ultra",
            "skillEffect": "AoEAttack",
            "maxLevel": 15,
            "configAbilityList": [
              "Avatar_Saber_00_Skill03_Camera",
              "Avatar_Saber_00_Skill03_Phase01",
              "Avatar_Saber_00_Skill03_Phase02",
              "Avatar_Saber_00_Skill03_EnterReady"
            ],
            "toughnessList": [
              {
                "Value": 60
              },
              {
                "Value": 120
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": [
              {
                "all": {
                  "hitRatio": 1,
                  "energyRatio": 1,
                  "toughness": 40
                },
                "isSourceFirstHit": true,
                "isAttackFirstHit": true
              },
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": null
                }
              },
              {
                "all": {
                  "hitRatio": 1,
                  "toughness": null
                },
                "isSourceLastHit": true,
                "isAttackLastHit": true
              }
            ]
          }
        }
      },
      "Talent": {
        "Dragon Reactor Core": {
          "variant1": {
            "skillID": 101404,
            "trigger": "SkillP01",
            "name": "Dragon Reactor Core",
            "type": "Enhance",
            "slot": "Talent",
            "desc": "When entering combat, gains #8[i] \"Core Resonance\" point(s). When any ally target uses Ultimate, increases the DMG dealt by Saber by #3[i]% for #4[i] turn(s) and gains #1[i] \"Core Resonance\" point(s). For every 1 \"Core Resonance\" point consumed, regenerates a fixed amount of #5[f1] Energy for Saber.",
            "energyCost": null,
            "energyRegen": 10,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "7": [
                3,
                25,
                0.4875,
                2,
                8,
                0.08125,
                99,
                1
              ],
              "8": [
                3,
                25,
                0.525,
                2,
                8,
                0.0875,
                99,
                1
              ],
              "9": [
                3,
                25,
                0.5625,
                2,
                8,
                0.09375,
                99,
                1
              ],
              "10": [
                3,
                25,
                0.6,
                2,
                8,
                0.1,
                99,
                1
              ],
              "11": [
                3,
                25,
                0.63,
                2,
                8,
                0.105,
                99,
                1
              ],
              "12": [
                3,
                25,
                0.66,
                2,
                8,
                0.11,
                99,
                1
              ]
            },
            "skillEffect": "Enhance",
            "maxLevel": 15,
            "configAbilityList": [
              "Activity_FateStory_Saber_Insert_Camera",
              "Activity_FateStory_Saber_Insert_Phase01",
              "Activity_FateStory_Saber_Insert_Phase02",
              "Avatar_Saber_00_PassiveSkill01"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      },
      "Technique": {
        "Behold, the King of Knights": {
          "variant1": {
            "skillID": 101407,
            "trigger": "SkillMaze",
            "name": "Behold, the King of Knights",
            "type": "Enhance",
            "slot": "Technique",
            "desc": "After using Technique, at the start of the next battle, increases Saber's ATK by #1[i]% for #2[i] turn(s) and gains #3[i] \"Core Resonance.\"",
            "energyCost": null,
            "energyRegen": null,
            "energyRate": 0.5,
            "toughnessReductionDisplayed": null,
            "skillPointCost": 0,
            "skillPointGain": 0,
            "params": {
              "1": [
                0.35,
                2,
                2
              ]
            },
            "attackType": "Maze",
            "skillEffect": "Enhance",
            "maxLevel": 1,
            "configAbilityList": [
              "Avatar_Saber_00_SkillMazeInLevel"
            ],
            "toughnessList": [
              {
                "Value": 0
              },
              {
                "Value": 0
              },
              {
                "Value": 0
              }
            ],
            "hitSplits": []
          }
        }
      }
    },
    "traces": {
      "Point01": {
        "icon": "icon/skill/1014_basic_atk.png",
        "skillRef": {
          "skillName": "Invisible Air: Barrier of the Wind King",
          "skillSlot": "Basic ATK"
        }
      },
      "Point02": {
        "icon": "icon/skill/1014_skill.png",
        "skillRef": {
          "skillName": "Strike Air: Hammer of the Wind King",
          "skillSlot": "Skill"
        }
      },
      "Point03": {
        "icon": "icon/skill/1014_ultimate.png",
        "skillRef": {
          "skillName": "Excalibur",
          "skillSlot": "Ultimate"
        }
      },
      "Point04": {
        "icon": "icon/skill/1014_talent.png",
        "skillRef": {
          "skillName": "Dragon Reactor Core",
          "skillSlot": "Talent"
        }
      },
      "Point05": {
        "icon": "icon/skill/1014_technique.png",
        "skillRef": {
          "skillName": "Behold, the King of Knights",
          "skillSlot": "Technique"
        }
      },
      "Point06": {
        "name": "Knight of the Dragon",
        "icon": "icon/skill/1014_skilltree1.png",
        "desc": "Increases Saber's CRIT Rate by #1[i]%. When entering combat or when using her Enhanced Basic ATK, gains the \"Mana Burst\" effect. Under this effect, if Saber has \"Core Resonance\" and her Energy can be fully regenerated by using her Skill and consuming \"Core Resonance,\" then consumes \"Mana Burst\" to recover 1 Skill Point for allies, and causes Saber to immediately take action.",
        "params": [
          0.2,
          0.4,
          0.2
        ]
      },
      "Point07": {
        "name": "Blessing of the Lake",
        "icon": "icon/skill/1014_skilltree2.png",
        "desc": "Saber can accumulate up to #1[i] overflow Energy. After using Ultimate, the overflow Energy is cleared and a corresponding amount of Energy is regenerated. When the battle starts, if Energy is below #3[i]%, it is regenerated to #2[i]%.",
        "params": [
          120,
          0.6,
          0.6
        ]
      },
      "Point08": {
        "name": "Crown of the Star",
        "icon": "icon/skill/1014_skilltree3.png",
        "desc": "When using Skill, increases Saber's CRIT DMG by #1[i]% for #2[i] turns. During this battle, for every 1 point of \"Core Resonance\" gained, increases Saber's CRIT DMG by #3[i]%, stacking up to #4[i] time(s).",
        "params": [
          0.5,
          2,
          0.04,
          8
        ]
      },
      "Point09": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.032
        }
      },
      "Point10": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.026999999
        }
      },
      "Point11": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.032
        }
      },
      "Point12": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.04
        }
      },
      "Point13": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.048
        }
      },
      "Point14": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.04
        }
      },
      "Point15": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.048
        }
      },
      "Point16": {
        "name": "HP Boost",
        "icon": "icon/property/IconMaxHP.png",
        "stats": {
          "HP%": 0.06
        }
      },
      "Point17": {
        "name": "CRIT Rate Boost",
        "icon": "icon/property/IconCriticalChance.png",
        "stats": {
          "CritRateBase": 0.053
        }
      },
      "Point18": {
        "name": "DMG Boost: Wind",
        "icon": "icon/property/IconWindAddedRatio.png",
        "stats": {
          "DamageWind": 0.064
        }
      }
    },
    "hasSummon": false,
    "icon": "icon/character/1014.png",
    "preview": "image/character_preview/1014.png",
    "portrait": "image/character_portrait/1014.png",
    "bannerOffsets": [
      134,
      2,
      0.64,
      134,
      2,
      0.64,
      134,
      2,
      0.64
    ]
  }
}