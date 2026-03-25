const configAbility = {
  "fileName": "5013071_Monster_W5_RangerGroup_PassiveAbility01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Create Enemies",
      "enemyList": [
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_2) || RETURN",
            "displayLines": "SummonList_ADF_2",
            "constants": [],
            "variables": [
              "SummonList_ADF_2"
            ]
          },
          "locationType": "BeforeCaster"
        },
        {
          "name": "Enemy Entry",
          "enemyID": {
            "operator": "Variables[0] (SummonList_ADF_4) || RETURN",
            "displayLines": "SummonList_ADF_4",
            "constants": [],
            "variables": [
              "SummonList_ADF_4"
            ]
          },
          "locationType": "AfterCaster"
        }
      ]
    },
    {
      "name": "Set Enemy Phase",
      "mode": "Inc"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
    },
    {
      "name": "Create Shared HP Group",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "subTarget": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "resolveToSubGroups": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Recently Summoned Enemies}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2082758660\">Enemy_W5_RangerGroup_MainEnd</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "InsertCheck",
      "value": 1
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1422594911\">Enemy_W5_RangerGroup_PartController</a>"
    }
  ],
  "references": []
}