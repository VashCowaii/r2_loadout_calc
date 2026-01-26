const configAbility = {
  "fileName": "Phainon_Phainon_Ability22_Entry",
  "childAbilityList": [
    "Phainon_Phainon_Ability22_Entry",
    "Phainon_Phainon_Ability22_Part01",
    "Phainon_Phainon_Ability22_v2_Part01",
    "Phainon_Phainon_Ability22_Part02",
    "Phainon_Phainon_Ability22_v2_Part02",
    "Phainon_Phainon_Ability22_Camera",
    "Phainon_Phainon_Ability22_v2_Camera"
  ],
  "skillTrigger": "Skill22",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": [
    3.3333333333333335,
    20,
    0
  ],
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Skill22_Energy",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (4) || RETURN",
          "displayLines": "4",
          "constants": [],
          "variables": [
            4
          ]
        }
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability22_v2_Part01",
          "isTrigger": true
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Phainon_Ability22_Part01",
          "isTrigger": true
        }
      ]
    }
  ],
  "references": []
}