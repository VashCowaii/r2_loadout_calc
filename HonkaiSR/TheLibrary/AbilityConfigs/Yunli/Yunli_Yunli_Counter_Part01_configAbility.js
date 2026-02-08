const configAbility = {
  "fileName": "Yunli_Yunli_Counter_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Flashforge"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Yunli_Counter_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "onAbort": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "includeNonTargets": true
          },
          {
            "name": "Compare: Variable",
            "value1": "OnInsertAbort_Flg2",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          }
        ]
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-501144556\">Yunli_InsertAbility2</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "OnInsertAbort_Flg2",
          "value": 0
        }
      ]
    }
  ],
  "references": []
}