const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0029",
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
      "modifier": "<a class=\"gModGreen\" id=\"298586290\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0029</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-743162635\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0029_02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "ChargeShieldRatioExtraRatio",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0029_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0029_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0029_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__298586290\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0029</a>",
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Character ID",
                    "ID": 503401000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
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
                  "modifier": "<a class=\"gModGreen\" id=\"-743162635\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0029_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0029_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}