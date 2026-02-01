const configAbility = {
  "fileName": "3021022_Monster_W2_ArgentiTotem_IF_AbilityP01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "variableName": "Monster_IF_InsertCount",
      "context": "TargetEntity",
      "value": -1,
      "max": 100
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W2_ArgentiTotem_IF_AbilityP01_Part01",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Monster_IF_InsertCameraFlag",
        "compareType": "=",
        "value2": 0
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_IF_InsertCameraFlag",
          "value": 1
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_IF_InsertCameraFlag02",
          "value": 0
        },
        "Deleted bullshit"
      ]
    }
  ],
  "references": []
}