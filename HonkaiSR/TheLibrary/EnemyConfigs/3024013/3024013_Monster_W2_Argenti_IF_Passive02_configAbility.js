const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_IF_Passive02",
  "skillTrigger": "SkillP03",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Monster_W2_Argenti_IF_Initiate"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Argenti_IF_Initiate",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_KillAllMonsters"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Die_Flag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Die_Flag",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Monster_Standard_Endurance"
                },
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MaxPhase",
                  "value": "MaxMonsterPhase"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Argenti_PartChange_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SAIFlag",
                      "value": 3
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "Enemy_W2_Yanqing_01_ChangePhaseDestroy"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W2_Yanqing_01_ChangePhaseDestroy"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Argenti_KillAllMonsters"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}