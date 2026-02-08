const configAbility = {
  "fileName": "8002070_Monster_XP_Minion04_02_AbilityP01",
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
      "modifier": "<a class=\"gModGreen\" id=\"2118515591\">Enemy_XP_Minion04_02_Introduce</a>[<span class=\"descriptionNumberColor\">T—Taking Revenge</span>]"
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
      "modifier": "<a class=\"gModGreen\" id=\"1786008658\">Enemy_XP_Minion04_02_P01_EnterBattle</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2118515591\">Enemy_XP_Minion04_02_Introduce</a>[<span class=\"descriptionNumberColor\">T—Taking Revenge</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "When a friendly unit is attacked, Trotter of Destruction will attack all targets. The attack count is equal to the number of the targets attacked.",
      "type": "Other",
      "effectName": "T—Taking Revenge",
      "statusName": "T—Taking Revenge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1786008658\">Enemy_XP_Minion04_02_P01_EnterBattle</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-60334252\">Enemy_XP_Minion04_02_Bonus_Huimie_Caster</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-662988294\">Enemy_XP_Minion04_02_Bonus_Huimie_Minion</a>"
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
              "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Huimie",
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