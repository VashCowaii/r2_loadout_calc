const configAbility = {
  "fileName": "4033023_Monster_W4_Claymore_01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
      "valuePerStack": {
        "MDF_DeadLock_HPRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_483) || RETURN",
          "displayLines": "UnusedUnderThisBase_483",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_483"
          ]
        },
        "MDF_DamageReduce": {
          "operator": "Variables[0] (UnusedUnderThisBase_484) || RETURN",
          "displayLines": "UnusedUnderThisBase_484",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_484"
          ]
        },
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_485) || RETURN",
          "displayLines": "UnusedUnderThisBase_485",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_485"
          ]
        },
        "MDF_PowerUp_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_486) || RETURN",
          "displayLines": "UnusedUnderThisBase_486",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_486"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
      "valuePerStack": {
        "MDF_DamageReduce": {
          "operator": "Variables[0] (UnusedUnderThisBase_484) || RETURN",
          "displayLines": "UnusedUnderThisBase_484",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_484"
          ]
        },
        "MDF_SpeedAddedRatio": {
          "operator": "Variables[0] ([object Object]) || RETURN",
          "displayLines": "[object Object]",
          "constants": [],
          "variables": [
            {}
          ]
        },
        "MDF_PowerUp_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_486) || RETURN",
          "displayLines": "UnusedUnderThisBase_486",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_486"
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
      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}