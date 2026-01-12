const configAbility = {
  "fileName": "Archer_Archer_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_HasTarget",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": "All Enemies (AOE)",
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "Archer_Insert_Target"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_HasTarget",
          "value": 1
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_HasTarget",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": "All Enemies (AOE)",
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Archer_Insert_Target"
            }
          ]
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": "All Enemies (AOE)",
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": "Use Prior Target(s) Defined",
        "modifier": "Archer_Insert_Target"
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": "All Enemies(All)",
          "modifier": "Archer_InsertTag"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Mind's Eye (True)"
        },
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "inherentTarget": "Use Prior Target(s) Defined",
          "ability": "Archer_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "All Enemies(All)",
      "modifier": "Archer_Insert_Target"
    }
  ],
  "onAbort": [
    {
      "name": "Remove Events/Bonuses",
      "to": "All Enemies(All)",
      "modifier": "Archer_InsertTag"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": "Caster",
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": "Caster",
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": "Caster"
          },
          {
            "name": "Compare: Variable",
            "value1": "OnInsertAbort_Flg",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": "Caster",
            "includeNonTargets": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "MDF_InsertUsed",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "OnInsertAbort_Flg",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": "All Enemies (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertUsed",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Archer_Insert_Target"
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Archer_Insert_Part01",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "OnInsertAbort_Flg",
              "value": 0
            }
          ]
        }
      ]
    }
  ],
  "references": []
}