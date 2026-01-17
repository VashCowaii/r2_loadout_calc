const configAbility = {
  "fileName": "Qingque_QingQue_Ability03_Part02",
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
      "modifier": "Qingque_Ability03_Eidolon1"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Qingque_Ability03_Eidolon1"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "QingQue_Passive_Tiao",
      "removeAllInstances": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "QingQue_Passive_Tong",
      "removeAllInstances": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "QingQue_Passive_Wan",
      "removeAllInstances": true
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_Tong",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_Tiao",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_Wan",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "QingQue_CardCount",
      "value": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "QingQue_Passive_Hu[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
          "displayLines": "MDF_PropertyValue01",
          "constants": [],
          "variables": [
            "MDF_PropertyValue01"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "QingQue_Passive_Hu_Flag_Yu"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Current Turn Is",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "Turn Owner is in Action"
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "QingQue_Passive_Hu_01"
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Qingque_Bonus",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "priorityTag": "AvatarBuffSelf",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "abortFlags": [
            "STAT_CTRL",
            "DisableAction"
          ],
          "allowAbilityTriggers": false
        }
      ]
    },
    "Refresh QingQue Bar-State",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Qingque_Ability03_Eidolon1",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.1"
                    }
                  ]
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