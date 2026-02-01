const configAbility = {
  "fileName": "3021022_Monster_W2_ArgentiTotem_02_Ability01_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_MaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_W2_Argenti_IF_Power[<span class=\"descriptionNumberColor\">Soulfreed</span>]"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": -1,
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_9) || Variables[1] (_MaxHP) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_9 * _MaxHP)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_9",
                "_MaxHP"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Monster_W2_ArgentiTotem_02_IF_Shield_Modifier[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": -1,
          "valuePerStack": {
            "MDF_ShowValue": {
              "operator": "Variables[0] (UnusedUnderThisBase_10) || Variables[1] (_MaxHP) || MUL || RETURN",
              "displayLines": "(UnusedUnderThisBase_10 * _MaxHP)",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_10",
                "_MaxHP"
              ]
            }
          },
          "casterAssign": "TargetSelf"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}