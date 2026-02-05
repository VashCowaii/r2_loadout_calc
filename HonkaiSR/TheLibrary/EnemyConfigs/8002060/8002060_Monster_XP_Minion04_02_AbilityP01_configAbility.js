const configAbility = {
  "fileName": "8002060_Monster_XP_Minion04_02_AbilityP01",
  "childAbilityList": [
    "8002060_Monster_XP_Minion04_02_AbilityP01",
    "8002060_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Huimie",
    "8002060_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Huimie"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Introduce[<span class=\"descriptionNumberColor\">T—Taking Revenge</span>]"
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
      "for": "Enemy_XP_Minion04_02_Introduce[<span class=\"descriptionNumberColor\">T—Taking Revenge</span>]",
      "stackData": [],
      "latentQueue": [],
      "description": "When a friendly unit is attacked, Trotter of Destruction will attack all targets. The attack count is equal to the number of the targets attacked.",
      "type": "Other",
      "effectName": "T—Taking Revenge",
      "statusName": "T—Taking Revenge"
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
                    "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Caster"
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
                  "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion"
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