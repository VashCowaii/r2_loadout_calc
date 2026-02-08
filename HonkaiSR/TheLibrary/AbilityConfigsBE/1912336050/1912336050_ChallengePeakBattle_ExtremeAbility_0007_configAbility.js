const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_ExtremeAbility_0007",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1208752490\">Modifier_ChallengePeakBattle_ExtremeAbility_0007</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "sourceTarget": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (ChallengePeakBattle_0007_ADF_1) || MUL || RETURN",
                "displayLines": "(MDF_Layer * ChallengePeakBattle_0007_ADF_1)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  "ChallengePeakBattle_0007_ADF_1"
                ]
              },
              "eatShield": true,
              "attackType": "Level",
              "DamageType": {
                "name": "Damage Type Source",
                "sourceType": "Physical"
              }
            }
          ]
        }
      ],
      "description": "Each stack causes this unit to additionally lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0007_ADF_1</span> of their own Max HP after being attacked. After gaining a Shield or healing from an ally target (except this unit), both units will dispel all \"Sunder++\" effect.",
      "type": "Other",
      "effectName": "Vulnerability",
      "statusName": "Sunder++",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-559801939\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_02</a>",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Source Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target's Source Owner}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target's Source Owner}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]",
                  "stackLimit": 999,
                  "valuePerStack": {
                    "ChallengePeakBattle_0007_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_0007_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_0007_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_0007_ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Has Flag",
                    "flagName": "Shield"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target 2}}.[[getSourceCreator]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-576579558\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_03</a>[<span class=\"descriptionNumberColor\">Sunder++</span>]"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1208752490\">Modifier_ChallengePeakBattle_ExtremeAbility_0007</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-559801939\">Modifier_ChallengePeakBattle_ExtremeAbility_0007_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0007_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}