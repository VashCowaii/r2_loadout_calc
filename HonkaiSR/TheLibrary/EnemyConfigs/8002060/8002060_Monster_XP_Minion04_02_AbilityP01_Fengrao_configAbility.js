const configAbility = {
  "fileName": "8002060_Monster_XP_Minion04_02_AbilityP01_Fengrao",
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
      "modifier": "Enemy_XP_Minion04_03_Introduce[<span class=\"descriptionNumberColor\">C—Cure You</span>]"
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 1,
      "entityClass": "Enemy",
      "maximum": 1,
      "assignState": "True"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_03_Introduce[<span class=\"descriptionNumberColor\">C—Cure You</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "When a friendly unit is attacked by a target, Trotter of Abundance consumes its own HP to heal the attacked friendly unit.",
      "type": "Other",
      "effectName": "C—Cure You",
      "statusName": "C—Cure You"
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Minion04_02_P01_EnterBattle",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_XP_Minion04_02_Fengrao_Caster"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
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
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_Minion",
                  "valuePerStack": {
                    "_HealRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_137) || RETURN",
                      "displayLines": "UnusedUnderThisBase_137",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_137"
                      ]
                    },
                    "_LoseRatio": {
                      "operator": "Variables[0] (UnusedUnderThisBase_136) || RETURN",
                      "displayLines": "UnusedUnderThisBase_136",
                      "constants": [],
                      "variables": [
                        "UnusedUnderThisBase_136"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "MonsterBattleCry",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ],
          "priorityLevel": -55
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}