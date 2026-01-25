const configAbility = {
  "fileName": "1002040_Monster_W1_CWSoldier_01_Ability02_Part03",
  "childAbilityList": [
    "1002040_Monster_W1_CWSoldier_01_Ability02_Part01",
    "1002040_Monster_W1_CWSoldier_01_Ability02_Part02",
    "1002040_Monster_W1_CWSoldier_01_Ability02_Part03"
  ],
  "skillTrigger": "Skill02",
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
          "variableName": "TriggerOnce",
          "value": 0
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
          "ability": "Monster_W1_CWSoldier_01_Ability02_Part01",
          "isTrigger": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TriggerOnce",
          "value": 1
        }
      ]
    }
  ],
  "references": []
}