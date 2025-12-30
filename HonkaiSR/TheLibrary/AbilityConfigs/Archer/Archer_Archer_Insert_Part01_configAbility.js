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
  "references": []
}