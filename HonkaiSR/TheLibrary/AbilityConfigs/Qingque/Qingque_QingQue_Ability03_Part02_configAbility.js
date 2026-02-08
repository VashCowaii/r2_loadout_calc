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
      "modifier": "<a class=\"gModGreen\" id=\"520474077\">Qingque_Ability03_Eidolon1</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"520474077\">Qingque_Ability03_Eidolon1</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
      "removeAllInstances": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
      "removeAllInstances": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
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
      "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1715908114\">QingQue_Passive_Hu_01</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__520474077\">Qingque_Ability03_Eidolon1</a>",
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