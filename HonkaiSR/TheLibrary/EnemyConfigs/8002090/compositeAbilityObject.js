const compositeAbilityObject = {
  "fullCharacterName": 8002090,
  "trimCharacterName": 8002090,
  "abilityList": [
    "8002090_Monster_XP_Minion04_Ability03_Part02",
    "8002090_Monster_XP_Minion04_Ability03_Part01",
    "8002090_Monster_XP_Minion04_Ability02_Part02",
    "8002090_Monster_XP_Minion04_Ability02_Part01",
    "8002090_Monster_XP_Minion04_Ability01_Part02",
    "8002090_Monster_XP_Minion04_Ability01_Part01",
    "8002090_Monster_XP_Minion04_08_PassiveAbility_Tutorial",
    "8002090_Monster_XP_Minion04_PassiveAbility_Tutorial",
    "8002090_Monster_XP_Minion04_PassiveAbilityInitiate",
    "8002090_Monster_XP_Minion04_01_Ability03_Part02",
    "8002090_Monster_XP_Minion04_01_Ability03_Part01",
    "8002090_Monster_XP_Minion04_01_Ability02_Part02",
    "8002090_Monster_XP_Minion04_01_Ability02_Part01",
    "8002090_Monster_XP_Minion04_01_Ability01_Part02",
    "8002090_Monster_XP_Minion04_01_Ability01_Part01",
    "8002090_Monster_XP_Minion04_01_Passive01",
    "8002090_Modifiers"
  ],
  "abilityObject": {
    "8002090_Monster_XP_Minion04_Ability03_Part02": {
      "fileName": "8002090_Monster_XP_Minion04_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"222306094\">Enemy_XP_Minion04_EscapingCharge02</a>"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        "Trigger: Ability End",
        {
          "name": "Entity Escape Battle",
          "triggerEnemyEscape": true
        }
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_Ability03_Part01": {
      "fileName": "8002090_Monster_XP_Minion04_Ability03_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_Ability02_Part02": {
      "fileName": "8002090_Monster_XP_Minion04_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"205528475\">Enemy_XP_Minion04_EscapingCharge01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"222306094\">Enemy_XP_Minion04_EscapingCharge02</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_Ability02_Part01": {
      "fileName": "8002090_Monster_XP_Minion04_Ability02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_Ability01_Part02": {
      "fileName": "8002090_Monster_XP_Minion04_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"205528475\">Enemy_XP_Minion04_EscapingCharge01</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_Ability01_Part01": {
      "fileName": "8002090_Monster_XP_Minion04_Ability01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_08_PassiveAbility_Tutorial": {
      "fileName": "8002090_Monster_XP_Minion04_08_PassiveAbility_Tutorial",
      "skillTrigger": "PassiveSkill_Tutorial",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8002090_Monster_XP_Minion04_PassiveAbility_Tutorial": {
      "fileName": "8002090_Monster_XP_Minion04_PassiveAbility_Tutorial",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8002090_Monster_XP_Minion04_PassiveAbilityInitiate": {
      "fileName": "8002090_Monster_XP_Minion04_PassiveAbilityInitiate",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1012060513\">Enemy_XP_Minion04_BeHitSoundController</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1012060513\">Enemy_XP_Minion04_BeHitSoundController</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002090_Monster_XP_Minion04_01_Ability03_Part02": {
      "fileName": "8002090_Monster_XP_Minion04_01_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"588877955\">Enemy_XP_Minion04_01_EscapingCharge02</a>"
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        "Trigger: Ability End",
        {
          "name": "Entity Escape Battle"
        }
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_01_Ability03_Part01": {
      "fileName": "8002090_Monster_XP_Minion04_01_Ability03_Part01",
      "childAbilityList": [
        "8002090_Monster_XP_Minion04_01_Ability03_Part01",
        "8002090_Monster_XP_Minion04_01_Ability03_Part02",
        "8002090_Monster_XP_Minion04_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_01_Ability02_Part02": {
      "fileName": "8002090_Monster_XP_Minion04_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"605655574\">Enemy_XP_Minion04_01_EscapingCharge01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"588877955\">Enemy_XP_Minion04_01_EscapingCharge02</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_01_Ability02_Part01": {
      "fileName": "8002090_Monster_XP_Minion04_01_Ability02_Part01",
      "childAbilityList": [
        "8002090_Monster_XP_Minion04_01_Ability02_Part01",
        "8002090_Monster_XP_Minion04_01_Ability02_Part02",
        "8002090_Monster_XP_Minion04_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_01_Ability01_Part02": {
      "fileName": "8002090_Monster_XP_Minion04_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"605655574\">Enemy_XP_Minion04_01_EscapingCharge01</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_01_Ability01_Part01": {
      "fileName": "8002090_Monster_XP_Minion04_01_Ability01_Part01",
      "childAbilityList": [
        "8002090_Monster_XP_Minion04_01_Ability01_Part01",
        "8002090_Monster_XP_Minion04_01_Ability01_Part02",
        "8002090_Monster_XP_Minion04_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002090_Monster_XP_Minion04_01_Passive01": {
      "fileName": "8002090_Monster_XP_Minion04_01_Passive01",
      "skillTrigger": "PassiveSkill",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [],
      "references": []
    },
    "8002090_Modifiers": {
      "fileName": "8002090_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__222306094\">Enemy_XP_Minion04_EscapingCharge02</a>",
          "modifierFlags": [
            "MuteHitFly",
            "Endurance",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Charge02"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__205528475\">Enemy_XP_Minion04_EscapingCharge01</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Charge01"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Normal"
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__588877955\">Enemy_XP_Minion04_01_EscapingCharge02</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "MuteHitFly",
            "Endurance",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Charge02"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__605655574\">Enemy_XP_Minion04_01_EscapingCharge01</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Charge01"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Normal"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}