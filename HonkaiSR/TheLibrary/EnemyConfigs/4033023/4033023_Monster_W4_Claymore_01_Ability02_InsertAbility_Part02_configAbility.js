const configAbility = {
  "fileName": "4033023_Monster_W4_Claymore_01_Ability02_InsertAbility_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, with Unselectables)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2009401658\">Enemy_W4_Claymore_01_Ability02_DeadLock_Win</a>[<span class=\"descriptionNumberColor\">Honor</span>]",
      "duration": 2,
      "valuePerStack": {
        "MDF_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] (UnusedUnderThisBase_487) || RETURN",
          "displayLines": "UnusedUnderThisBase_487",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_487"
          ]
        }
      }
    }
  ],
  "references": []
}