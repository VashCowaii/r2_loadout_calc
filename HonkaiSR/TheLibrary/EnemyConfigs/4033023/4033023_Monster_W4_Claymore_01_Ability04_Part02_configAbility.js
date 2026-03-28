const configAbility = {
  "fileName": "4033023_Monster_W4_Claymore_01_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1028185089\">Enemy_AML_Minion02_01_RallyHP_Controller_V2</a>",
      "valuePerStack": {
        "MDF_RallyTransferRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_391) || RETURN",
          "displayLines": "UnusedUnderThisBase_391",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_391"
          ]
        },
        "MDF_Rally_HealPercentage": {
          "operator": "Variables[0] (UnusedUnderThisBase_392) || RETURN",
          "displayLines": "UnusedUnderThisBase_392",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_392"
          ]
        },
        "MDF_Rally_HealUpRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_393) || RETURN",
          "displayLines": "UnusedUnderThisBase_393",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_393"
          ]
        },
        "MDF_Rally_Strongth_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_394) || RETURN",
          "displayLines": "UnusedUnderThisBase_394",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_394"
          ]
        }
      }
    },
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
          "displayLines": "UnusedUnderThisBase_154",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_154"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
          "displayLines": "UnusedUnderThisBase_154",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_154"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (UnusedUnderThisBase_154) || RETURN",
          "displayLines": "UnusedUnderThisBase_154",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_154"
          ]
        },
        "HitSplit": 0.5,
        "Toughness": null,
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
      "modifier": "<a class=\"gModGreen\" id=\"-1906405018\">Enemy_W4_Claymore_01_Ability02_DeadLock_Self</a>[<span class=\"descriptionNumberColor\">Duel</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-34378787\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1632906191\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant</a>[<span class=\"descriptionNumberColor\">Duel</span>]",
      "onlyRemoveOwnersInstance": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Snapshot Target List}}.[[getPlayerTeam]]"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-304685094\">Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Snapshot</a>",
      "onlyRemoveOwnersInstance": true
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}