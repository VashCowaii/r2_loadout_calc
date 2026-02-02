const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0003",
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
      "modifier": "Modifier_ChallengePeakBattle_EnhancedAbility_0003"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_EnhancedAbility_0003_02[<span class=\"descriptionNumberColor\">Inversion+</span>]",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "sourceTarget": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (ChallengePeakBattle_0003_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_0003_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0003_ADF_1"
                ]
              },
              "consumeFloor": 1,
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
      "description": "Each time after being attacked, the attacker will lose HP equal to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0003_ADF_1</span> of their own Max HP. This effect is Non-fatal.",
      "type": "Other",
      "statusName": "Inversion+"
    },
    {
      "name": "Modifier Construction",
      "for": "Modifier_ChallengePeakBattle_EnhancedAbility_0003",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
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
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Modifier_ChallengePeakBattle_EnhancedAbility_0003_02[<span class=\"descriptionNumberColor\">Inversion+</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_0003_ADF_1": {
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}