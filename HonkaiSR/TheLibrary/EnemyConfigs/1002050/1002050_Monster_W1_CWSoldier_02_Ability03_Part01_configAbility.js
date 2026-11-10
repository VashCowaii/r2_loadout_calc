const configAbility = {
  "fileName": "1002050_Monster_W1_CWSoldier_02_Ability03_Part01",
  "childAbilityList": [
    "1002050_Monster_W1_CWSoldier_02_Ability03_Part01",
    "1002050_Monster_W1_CWSoldier_02_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "TriggerOnce",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "TriggerOnce"
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
          "ability": "Monster_W1_CWSoldier_02_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "TriggerOnce"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  },
  "references": []
}