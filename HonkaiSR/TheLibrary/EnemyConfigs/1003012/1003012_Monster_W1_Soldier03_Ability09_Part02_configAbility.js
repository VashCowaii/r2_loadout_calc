const configAbility = {
  "fileName": "1003012_Monster_W1_Soldier03_Ability09_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "value": 0
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "popUpText": "Action Advanced"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "Monster_W1_Soldier01_03_Bonus[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "duration": {
        "operator": "Variables[0] (UnusedUnderThisBase_1) || RETURN",
        "displayLines": "UnusedUnderThisBase_1",
        "constants": [],
        "variables": [
          "UnusedUnderThisBase_1"
        ]
      },
      "valuePerStack": {
        "Modifier_AttackAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_2) || RETURN",
          "displayLines": "UnusedUnderThisBase_2",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_2"
          ]
        },
        "Modifier_SpeedDelta": 0
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Monster_W1_Soldier03_HoldShield"
      },
      "passed": [
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W1_Soldier03_PassiveAbilityInsert2",
          "priorityTag": "MonsterChangeState",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}